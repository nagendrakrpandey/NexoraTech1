"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const EngineeringNextGenSection: React.FC = () => {
  return (
    <section
      className="about-section relative z-10 w-full overflow-hidden bg-white/45 py-14 backdrop-blur-xl md:py-20 border-b border-black/10 transition-colors"
      id="about-us"
    >
      {/* Top Header Block */}
      <div className="w-full px-6 md:px-12 lg:px-16 text-left mb-12 md:mb-16">
        <div className="flex flex-col md:flex-row items-start gap-3 md:gap-10 lg:gap-14">
          
          {/* Left Kicker */}
          <span className="w-auto shrink-0 pt-1 font-sans text-xs font-semibold uppercase tracking-[0.25em] text-black md:w-40 md:text-sm lg:w-48 xl:w-56">
            ABOUT US
          </span>

          {/* Headline & Description */}
          <div className="flex-1 flex flex-col xl:flex-row items-start xl:items-end justify-between gap-6 lg:gap-10">
            <h2 className="font-sans text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl font-medium tracking-wide leading-tight text-black flex-1">
              Engineering next-gen <br className="hidden 2xl:inline" />
              <span className="font-normal text-black/65">digital infrastructure</span>
            </h2>

            <p className="max-w-md shrink-0 text-sm font-light leading-relaxed text-black/70 md:text-base xl:text-[15px] 2xl:text-base lg:pb-1">
              NexoraTech is a premier software engineering firm headquartered in Noida (Delhi NCR), India, bridging systems design with elite execution models.
            </p>
          </div>

        </div>
      </div>

      {/* 3-Column Glass Grid (01, 02, 03) */}
      <div className="grid grid-cols-1 md:grid-cols-3 w-full border-t border-black/10">
        
        {/* Column 01: Architecture */}
        <div className="relative flex flex-col justify-between overflow-hidden p-8 sm:p-10 lg:p-12 xl:p-10 2xl:p-12 border-b md:border-b-0 md:border-r border-black/10 group">
          {/* Giant Translucent Number in Background */}
          <span className="pointer-events-none absolute -top-4 -right-2 z-0 select-none font-mono text-9xl font-semibold text-black/10 sm:text-[10rem]">
            01
          </span>

          <div className="relative z-10">
            <span className="mb-4 block font-mono text-xs font-semibold uppercase tracking-widest text-black">
              ARCHITECTURE
            </span>
            <h3 className="text-xl md:text-2xl xl:text-xl 2xl:text-2xl font-sans font-medium tracking-wide text-black mb-4">
              Enterprise scalability
            </h3>
            <p className="mb-6 text-sm font-light leading-relaxed text-black/70 md:text-base xl:text-[15px] 2xl:text-base">
              We craft high-concurrency software-as-a-service platforms and automated digital infrastructure tailored for the Education, Enterprise, and MSME sectors worldwide.
            </p>
          </div>

          <Link
            href="/about"
            className="relative z-10 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-black hover:text-black/70 transition-colors group-hover:translate-x-1 duration-200"
          >
            <span>Explore Architecture</span>
            <ArrowUpRight className="size-4" />
          </Link>
        </div>

        {/* Column 02: Execution */}
        <div className="relative flex flex-col justify-between overflow-hidden p-8 sm:p-10 lg:p-12 xl:p-10 2xl:p-12 border-b md:border-b-0 md:border-r border-black/10 group">
          {/* Giant Translucent Number in Background */}
          <span className="pointer-events-none absolute -top-4 -right-2 z-0 select-none font-mono text-9xl font-semibold text-black/10 sm:text-[10rem]">
            02
          </span>

          <div className="relative z-10">
            <span className="mb-4 block font-mono text-xs font-semibold uppercase tracking-widest text-black">
              EXECUTION
            </span>
            <h3 className="text-xl md:text-2xl xl:text-xl 2xl:text-2xl font-sans font-medium tracking-wide text-black mb-4">
              ISO-aligned rigor
            </h3>
            <p className="mb-6 text-sm font-light leading-relaxed text-black/70 md:text-base xl:text-[15px] 2xl:text-base">
              By combining strict CI/CD procedures, GPU-accelerated client engines, and ISO-aligned quality standards, we deliver product-level technical strategies that accelerate efficiency.
            </p>
          </div>

          <Link
            href="/about"
            className="relative z-10 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-black hover:text-black/70 transition-colors group-hover:translate-x-1 duration-200"
          >
            <span>Learn Quality Standards</span>
            <ArrowUpRight className="size-4" />
          </Link>
        </div>

        {/* Column 03: Partnership */}
        <div className="relative flex flex-col justify-between overflow-hidden p-8 sm:p-10 lg:p-12 xl:p-10 2xl:p-12 group">
          {/* Giant Translucent Number in Background */}
          <span className="pointer-events-none absolute -top-4 -right-2 z-0 select-none font-mono text-9xl font-semibold text-black/10 sm:text-[10rem]">
            03
          </span>

          <div className="relative z-10">
            <span className="mb-4 block font-mono text-xs font-semibold uppercase tracking-widest text-black">
              PARTNERSHIP
            </span>
            <h3 className="text-xl md:text-2xl xl:text-xl 2xl:text-2xl font-sans font-medium tracking-wide text-black mb-4">
              Dedicated core teams
            </h3>
            <p className="mb-6 text-sm font-light leading-relaxed text-black/70 md:text-base xl:text-[15px] 2xl:text-base">
              We integrate directly with client leadership as true partners, providing round-the-clock infrastructure monitoring, dedicated engineering leads, and zero-latency SLAs.
            </p>
          </div>

          <Link
            href="/about"
            className="relative z-10 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-black hover:text-black/70 transition-colors group-hover:translate-x-1 duration-200"
          >
            <span>Discover Partnership</span>
            <ArrowUpRight className="size-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};

