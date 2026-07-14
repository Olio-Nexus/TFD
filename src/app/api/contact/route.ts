import { NextResponse } from "next/server";

// Route Handlers are not cached by default; POST is always dynamic.
export const runtime = "nodejs";

type ContactPayload = {
  source?: string; // "contact" | "popup" — where the enquiry came from
  fullName?: string;
  email?: string;
  phone?: string;
  siteLocation?: string;
  scope?: string;
};

const REQUIRED_FIELDS: (keyof ContactPayload)[] = ["fullName", "email", "phone"];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  let data: ContactPayload;

  try {
    data = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const missing = REQUIRED_FIELDS.filter((field) => !String(data[field] ?? "").trim());
  if (missing.length > 0) {
    return NextResponse.json(
      { error: `Missing required field(s): ${missing.join(", ")}.` },
      { status: 400 },
    );
  }

  if (!EMAIL_RE.test(String(data.email).trim())) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
  }

  const source = data.source === "popup" ? "Quote Popup" : "Contact Page";

  const rows: [string, string | undefined][] = [
    ["Full Name", data.fullName],
    ["Email", data.email],
    ["Phone", data.phone],
    ["Site Location", data.siteLocation],
    ["Scope of Work", data.scope],
  ];

  const textBody = [
    `New enquiry from the ${source}.`,
    "",
    ...rows
      .filter(([, value]) => String(value ?? "").trim())
      .map(([label, value]) => `${label}: ${value}`),
  ].join("\n");

  const htmlBody = `
    <div style="font-family:Arial,Helvetica,sans-serif;color:#1A1917;font-size:15px;line-height:1.5;">
      <h2 style="margin:0 0 16px;font-size:18px;">New enquiry — ${escapeHtml(source)}</h2>
      <table style="border-collapse:collapse;">
        ${rows
          .filter(([, value]) => String(value ?? "").trim())
          .map(
            ([label, value]) => `
          <tr>
            <td style="padding:6px 16px 6px 0;font-weight:600;vertical-align:top;">${escapeHtml(label)}</td>
            <td style="padding:6px 0;">${escapeHtml(String(value)).replace(/\n/g, "<br/>")}</td>
          </tr>`,
          )
          .join("")}
      </table>
    </div>
  `;

  // Only RESEND_API_KEY is required from the env (set as a Cloudflare secret).
  // from/to fall back to production values; MAIL_FROM must be a Resend-verified domain.
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.MAIL_FROM ?? "website@tfdrilling.com.au";
  const to = process.env.LEAD_EMAIL ?? "sales@tfdrilling.com.au";

  if (!apiKey) {
    console.error("Resend is not configured. Set RESEND_API_KEY.");
    return NextResponse.json(
      { error: "Email service is not configured. Please try again later." },
      { status: 500 },
    );
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `TF Drilling <${from}>`,
        to: [to],
        reply_to: String(data.email).trim(),
        subject: `New Enquiry (${source}) — ${String(data.fullName).trim()}`,
        text: textBody,
        html: htmlBody,
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error(`Resend API error ${res.status}: ${detail}`);
      return NextResponse.json(
        { error: "Something went wrong sending your enquiry. Please try again." },
        { status: 500 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to send enquiry email:", error);
    return NextResponse.json(
      { error: "Something went wrong sending your enquiry. Please try again." },
      { status: 500 },
    );
  }
}
