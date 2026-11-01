"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

export const Hero: React.FC = () => {
  const openConsultation = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-consultation-modal"));
    }
  };

  return (
    <section
      className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-center overflow-hidden -mt-20 sm:-mt-24 pt-32 sm:pt-40 lg:pt-44 pb-16 lg:pb-20 text-white bg-transparent"
      id="top"
    >
      {/* Cinematic Dark Vignette & Architectural Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/75 z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-black/25 z-0 pointer-events-none" />

      {/* Blueprint Coordinate Architectural Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.15] z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.12) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Main Content Container with Generous Side Padding (Aligns with Image 2) */}
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-16">

        {/* Sharp, Balanced Headline with Lighter Weight (Font Semibold - Exactly like Image 2) */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] xl:text-[76px] font-semibold leading-[1.02] tracking-[-0.04em] text-white max-w-6xl">
          Turning Complexity <span className="text-white/40 font-normal">Into</span> Clarity.
        </h1>

        {/* 2-Column Description Block with Left Border Line (Matching Urbanites Image 2) */}
        <div className="mt-8 grid max-w-4xl gap-6 border-l border-white/60 pl-5 md:grid-cols-[1.35fr_1fr] md:gap-10 md:pl-7">
          <p className="text-base sm:text-lg leading-relaxed text-white/90 font-normal">
            NexoraTech designs, builds, and operates dependable digital systems for institutions, growing businesses, and enterprise teams.
          </p>
          <p className="text-sm sm:text-base leading-relaxed text-white/65 font-normal">
            From product strategy to secure deployment, one accountable engineering partner keeps your most important work moving.
          </p>
        </div>

        {/* Action CTA Buttons (Rounded-[6px] Matching Image 2) */}
        <div className="mt-9 flex flex-wrap items-center gap-3 md:mt-11">
          <button
            type="button"
            onClick={openConsultation}
            id="hero-start-conversation-btn"
            className="inline-flex items-center gap-2.5 rounded-[6px] bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-white/85 shadow-md active:translate-y-0.5"
          >
            <span>Start a conversation</span>
            <ArrowRight className="w-4 h-4 text-black" />
          </button>

          <Link
            href="#services"
            id="hero-explore-capabilities-btn"
            className="inline-flex items-center gap-2.5 rounded-[6px] border border-white/70 bg-black/20 backdrop-blur-sm px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white hover:text-black active:translate-y-0.5"
          >
            <span>Explore capabilities</span>
            <ArrowUpRight className="w-4 h-4 text-white hover:text-black" />
          </Link>
        </div>

        {/* Stat Cards Grid with Top & Bottom Border (Matching Image 2) */}
        <div className="mt-12 grid w-full max-w-[1200px] grid-cols-1 divide-y divide-white/35 border-t border-b border-white/35 sm:grid-cols-3 sm:divide-y-0 sm:divide-x divide-white/35 md:mt-16">

          {/* Metric 1 */}
          <div className="py-5 sm:pr-6">
            <p className="text-2xl sm:text-3xl font-semibold tracking-tight text-white font-sans">
              50+
            </p>
            <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.16em] text-white/65">
              Production deployments
            </p>
          </div>

          {/* Metric 2 */}
          <div className="py-5 sm:px-6">
            <p className="text-2xl sm:text-3xl font-semibold tracking-tight text-white font-sans">
              24/7
            </p>
            <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.16em] text-white/65">
              Infrastructure support
            </p>
          </div>

          {/* Metric 3 */}
          <div className="py-5 sm:pl-6">
            <p className="text-2xl sm:text-3xl font-semibold tracking-tight text-white font-sans">
              ISO
            </p>
            <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.16em] text-white/65">
              Aligned delivery practice
            </p>
          </div>

        </div>

        {/* Bottom Checklist Features (Matching Image 2) */}
        <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-xs text-white/80 font-medium">
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-white" />
            <span>Product engineering</span>
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-white" />
            <span>Cloud infrastructure</span>
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-white" />
            <span>Ongoing support</span>
          </span>
        </div>

      </div>
    </section>
  );
};
