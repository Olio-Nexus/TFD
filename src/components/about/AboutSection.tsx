import Image from "next/image";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { breadcrumbs } from "@/lib/breadcrumbs";

export default function AboutSection() {
  return (
    <section className="relative bg-[#1A1917] pt-14 lg:pt-[72px]">
      <div className="relative flex flex-col lg:block">
        {/* Mobile Layout */}
        <div className="lg:hidden">
          {/* Breadcrumb */}
          <div className="px-5 py-4 border-t border-white/10">
            <Breadcrumb items={breadcrumbs.company.about} />
          </div>

          {/* Image */}
          <div className="relative aspect-[402/444] w-full overflow-hidden">
            <Image
              src="/about/drilling.png"
              alt="Geotechnical drilling"
              fill sizes="(max-width: 1024px) 100vw, 511px"
              priority
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="px-5 py-5 space-y-6">
            <h2
              className="
                font-heading
                text-[36px]
                leading-[40px]
                tracking-[-1px]
                font-semibold
                text-white
              "
            >
              Geotech Drilling:{" "}
              <span className="text-[#F53D37]">
                By Engineers, For Engineers.
              </span>
            </h2>

            <p
              className="
                text-[18px]
                leading-[26px]
                text-white
              "
            >
              TerraForma Drilling is a geotechnical drilling contractor
              located in Sydney. We offer site investigation drilling,
              environmental drilling, testing, and monitoring bore
              installation across New South Wales (NSW).
            </p>

            <p
              className="
                text-[18px]
                leading-[26px]
                text-white
              "
            >
              Our ute-mounted solid flight auger rig is built for sites
              with limited access where larger rigs cannot operate. We
              work throughout NSW, have ISO-certified management systems,
              and can be on-site within 24 hours in Greater Sydney.
              Thus, we help consultants, developers, and project teams
              avoid delays and keep their projects moving.
            </p>
          </div>
        </div>

        {/* Desktop Layout */}
        <div
          className="
            hidden
            lg:grid
            lg:grid-cols-[minmax(0,1fr)_40%]
            lg:items-start
            lg:gap-x-10
            xl:gap-x-20
            lg:mx-auto
            lg:w-full
            lg:max-w-[1440px]
            lg:px-[80px]
            lg:pt-[80px]
          "
        >
          {/* Desktop Content */}
          <div className="min-w-0">
            <Breadcrumb items={breadcrumbs.company.about} />

            <div className="mt-8">
              <h2
                className="
                  font-heading
                  text-[42px]
                  leading-[50px]
                  tracking-[-1.5px]
                  xl:text-[56px]
                  xl:leading-[64px]
                  xl:tracking-[-2px]
                  font-semibold
                  text-white
                "
              >
                Geotech Drilling:{" "}
                <span className="text-[#F53D37]">
                  By Engineers, For Engineers.
                </span>
              </h2>

              <div className="mt-8 space-y-8">
                <p
                  className="
                    text-[18px]
                    leading-[30px]
                    text-[#B8B8B8]
                  "
                >
                  TerraForma Drilling is a geotechnical drilling contractor
                  located in Sydney. We offer site investigation drilling,
                  environmental drilling, testing, and monitoring bore
                  installation across New South Wales (NSW).
                </p>

                <p
                  className="
                    text-[18px]
                    leading-[30px]
                    text-[#B8B8B8]
                  "
                >
                  Our ute-mounted solid flight auger rig is built for sites
                  with limited access where larger rigs cannot operate. We
                  work throughout NSW, have ISO-certified management systems,
                  and can be on-site within 24 hours in Greater Sydney.
                  Thus, we help consultants, developers, and project teams
                  avoid delays and keep their projects moving.
                </p>
              </div>
            </div>
          </div>

          {/* Desktop Image — bottom-anchored so it always bleeds over the
              stats section below, regardless of the text column height */}
          <div
            className="
              relative
              z-10
              w-full
              max-w-[511px]
              aspect-[511/564]
              self-end
              justify-self-end
              -mb-[60px]
              overflow-hidden
              rounded-sm
            "
          >
            <Image
              src="/about/drilling.png"
              alt="Geotechnical drilling"
              fill sizes="(min-width: 1440px) 511px, 40vw"
              priority
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}