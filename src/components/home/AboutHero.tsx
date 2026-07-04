"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function AboutHero() {
  const [hasAnimated, setHasAnimated] = useState(false);

  return (
    <section 
          onMouseEnter={() => {
        if (!hasAnimated) {
          setHasAnimated(true);
        }
      }}
      className="relative isolate overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/about-banner.png"
          alt="Geotechnical drilling"
          fill sizes="100vw"
          priority
          className="object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[rgba(26,25,23,0.65)]" />
      </div>

      {/* Content */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          items-center
          w-full
          min-h-[260px]
          sm:min-h-[500px]
          lg:min-h-[590px]

          px-[40px]
          sm:px-8
          md:px-12
          lg:px-[80px]
          xl:px-[120px]

          py-[70px]
          sm:py-20
          lg:py-[150px]
        "
      >
        {/* Desktop Animated Frame */}
        <motion.div
          className="
            pointer-events-none
            absolute
            top-1/2
            -translate-y-1/2
            z-0

            hidden
            md:block

            w-[300px]
            h-[299px]

            lg:w-[359px]
            lg:h-[358px]
          "
          initial={false}
          animate={{
            left: hasAnimated ? "calc(100% - 440px)" : "80px",
            scaleX: hasAnimated ? -1 : 1,
          }}
          transition={{
            duration: 1.1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <FrameSvg />
        </motion.div>

        {/* Mobile Static Frame (No Animation) */}
        <div
          className="
            absolute
            left-[20px]
            top-1/2
            -translate-y-1/2

            w-[207px]
            h-[207px]

            md:hidden

            opacity-80
            pointer-events-none
            z-0
          "
        >
          <FrameSvg />
        </div>

        {/* Heading */}
        <div className="relative z-20 w-full">
          <h2
            className="
              font-heading
              font-semibold
              text-white

              max-w-[322px]

              text-[22px]
              leading-[30px]
              tracking-[-1px]

              sm:max-w-[1228px]

              sm:text-[38px]
              sm:leading-[50px]
              sm:tracking-[0.002em]

              md:text-[42px]
              md:leading-[56px]

              lg:text-[48px]
              lg:leading-[62px]
            "
          >
            Trusted By Geotechnical Engineers, Environmental Consultants,
            Developers, and Project Managers Across NSW
          </h2>
        </div>
      </div>
    </section>
  );
}

function FrameSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 361 360"
      fill="none"
      className="h-full w-full"
    >
      <path
        opacity="0.8"
        d="M360 67.8895V1H1V359H360V291.482"
        stroke="#E53935"
        strokeWidth="2"
      />
    </svg>
  );
}