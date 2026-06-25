import Image from "next/image";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { breadcrumbs } from "@/lib/breadcrumbs";

export default function AboutSection() {
  return (
    <section className="relative bg-[#1A1917] pt-14 lg:pt-[72px]">
      <div className="relative flex flex-col lg:block lg:h-[616px]">
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
              fill
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

        {/* Desktop Content - EXACTLY AS FIRST VERSION */}
        <div
          className="
            hidden
            lg:block
            lg:px-0
            lg:py-0
            lg:pl-[80px]
            lg:pt-[80px]
          "
        >
          <Breadcrumb items={breadcrumbs.company.about} />

          <div
            className="
              mt-8
              max-w-[689px]
            "
          >
            <h2
              className="
                font-heading
                text-[56px]
                leading-[64px]
                tracking-[-2px]
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

        {/* Desktop Image - EXACTLY AS FIRST VERSION */}
        <div
          className="
            absolute
            right-[80px]
            top-[86px]
            hidden
            lg:block
          "
        >
          <div
            className="
              relative
              h-[564px]
              w-[511px]
              overflow-hidden
              rounded-sm
            "
          >
            <Image
              src="/about/drilling.png"
              alt="Geotechnical drilling"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}