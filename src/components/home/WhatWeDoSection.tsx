"use client";

import React from "react";
import { ArrowUpRight, Cloud, Code2, Layers3, Network, ShieldCheck, Sparkles } from "lucide-react";

const services = [
  {
    title: "Software Development",
    description: "Robust web, mobile, and enterprise systems shaped around the way your organisation works.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=85",
    alt: "Code editor on a developer's laptop",
    icon: Code2,
  },
  {
    title: "Product Design & Strategy",
    description: "Clear product direction, thoughtful experiences, and design systems built to scale.",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=1000&q=85",
    alt: "Product design sketches and interface planning",
    icon: Layers3,
  },
  {
    title: "Cloud & DevOps",
    description: "Resilient cloud architecture, automated delivery, and dependable day-to-day operations.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=85",
    alt: "Illuminated server racks in a data centre",
    icon: Cloud,
  },
  {
    title: "Platform Engineering",
    description: "Secure, high-performance platforms that give your teams room to move faster.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1000&q=85",
    alt: "Network infrastructure and connected systems",
    icon: Network,
  },
  {
    title: "AI & Intelligent Automation",
    description: "Practical AI solutions that simplify complex work and turn data into useful action.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1000&q=85",
    alt: "Abstract artificial intelligence visualization",
    icon: Sparkles,
  },
  {
    title: "Cybersecurity",
    description: "Proactive security, privacy-first engineering, and continuous protection for your digital estate.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1000&q=85",
    alt: "Cybersecurity operations with glowing digital network graphics",
    icon: ShieldCheck,
  },
];

export const WhatWeDoSection: React.FC = () => {
  const openConsultation = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-consultation-modal"));
    }
  };

  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#08090b] py-20 text-white sm:py-24 lg:py-28" id="services">
      <div aria-hidden="true" className="pointer-events-none absolute -left-48 top-20 h-[34rem] w-[34rem] rounded-full bg-cyan-500/[0.07] blur-[140px]" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-blue-600/[0.06] blur-[130px]" />
<div className="relative ml-0 mr-auto grid w-full max-w-[1600px] grid-cols-1 gap-x-8 gap-y-8 px-2 sm:px-4 lg:grid-cols-[minmax(250px,0.9fr)_minmax(0,2.7fr)] lg:gap-x-8 lg:px-6 xl:px-8">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.17em] text-slate-300 sm:text-[11px]">
            <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
            <span>Capabilities &amp; Services Catalog</span>
          </div>
          <h2 className="max-w-[560px] text-[2.6rem] font-semibold leading-[1.04] tracking-[-0.045em] text-white sm:text-5xl xl:text-[3.65rem]">
            Modern & High-Tech<span className="text-slate-400">Sleek-Enterprises.</span>
          </h2>
          <p className="mt-6 max-w-md text-sm leading-7 text-slate-400 sm:text-[15px]">
            From the first product decision to dependable day-to-day operations, our teams bring strategy, design, software, and infrastructure together.
          </p>
          <button
            type="button"
            onClick={openConsultation}
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-5 py-3 text-sm font-medium text-white transition hover:border-cyan-300/50 hover:bg-white/[0.1] focus-visible:outline-cyan-300"
          >
            Talk to our team <ArrowUpRight className="h-4 w-4 text-cyan-300" />
          </button>
          <div className="mt-12 hidden items-center gap-3 text-xs text-slate-500 lg:flex">
            <span className="h-px w-9 bg-cyan-400/70" />
            <span>One partner, from strategy to scale</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-3 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-3 xl:gap-x-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <button
                key={service.title}
                type="button"
                onClick={openConsultation}
                className="group min-w-0 text-left focus-visible:outline-cyan-300"
                aria-label={`Discuss ${service.title}`}
              >
                <div className="relative aspect-[1.48] overflow-hidden rounded-[3px] bg-slate-900 ring-1 ring-white/[0.08]">
                  <img
                    src={service.image}
                    alt={service.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.045]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/10 transition group-hover:from-black/40" />
                  <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-sm transition group-hover:bg-cyan-300 group-hover:text-slate-950">
                    <ArrowUpRight className="h-[18px] w-[18px]" />
                  </div>
                  <div className="absolute bottom-3 left-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black/35 text-cyan-100 backdrop-blur-sm sm:hidden">
                    <Icon className="h-4 w-4" />
                  </div>
                </div>
                <div className="mt-4 flex items-start justify-between gap-3">
                  <h3 className="text-[15px] font-semibold tracking-[-0.02em] text-white transition-colors group-hover:text-cyan-100 sm:text-base">
                    {service.title}
                  </h3>
                  <Icon className="mt-0.5 hidden h-4 w-4 shrink-0 text-slate-500 transition-colors group-hover:text-cyan-300 sm:block" />
                </div>
                <p className="mt-1.5 max-w-[42rem] text-[12px] leading-[1.65] text-slate-400 sm:text-[13px]">
                  {service.description}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
