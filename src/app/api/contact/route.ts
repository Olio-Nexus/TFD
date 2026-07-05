import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

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

let transporter: nodemailer.Transporter | null = null;

function getTransporter() {
  if (transporter) return transporter;

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    throw new Error(
      "SMTP is not configured. Set SMTP_HOST, SMTP_USER and SMTP_PASS in your environment.",
    );
  }

  transporter = nodemailer.createTransport({
    host,
    port,
    // Port 465 uses implicit TLS; everything else (587/25) upgrades via STARTTLS.
    secure: port === 465,
    auth: { user, pass },
  });

  return transporter;
}

export async function POST(request: Request) {
  let data: ContactPayload;

  try {
    data = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Validate required fields.
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

  try {
    const to = process.env.CONTACT_TO ?? "sales@tfdrilling.com.au";
    const from = process.env.SMTP_FROM ?? process.env.SMTP_USER!;

    await getTransporter().sendMail({
      from,
      to,
      replyTo: String(data.email).trim(),
      subject: `New Enquiry (${source}) — ${String(data.fullName).trim()}`,
      text: textBody,
      html: htmlBody,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to send enquiry email:", error);
    return NextResponse.json(
      { error: "Something went wrong sending your enquiry. Please try again." },
      { status: 500 },
    );
  }
}
