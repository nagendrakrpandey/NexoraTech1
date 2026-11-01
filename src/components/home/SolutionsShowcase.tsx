"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { illustrativeShowcases } from "@/config/site";
import { Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

export const SolutionsShowcase: React.FC = () => {
  return (
    <section id="solutions" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700 uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Architectural Blueprints</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Illustrative Solution Concepts
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Representative reference implementations demonstrating our architectural patterns, resilience standards, and system design philosophies.
          </p>
          <div className="mt-2 text-xs text-slate-400 italic">
            * Clearly labeled illustrative project concepts. Not presented as past client endorsements.
          </div>
        </div>

        {/* 3 Featured Architectural Concept Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {illustrativeShowcases.map((showcase) => (
            <div
              key={showcase.id}
              className="bg-white rounded-3xl border border-slate-200 hover:border-blue-300 overflow-hidden flex flex-col transition-all duration-300 group hover:-translate-y-1.5 shadow-card hover:shadow-card-hover"
            >
              {/* Concept Image with Overlay */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                <Image
                  src={showcase.image}
                  alt={showcase.title}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 text-[11px] font-bold text-blue-800 shadow-sm">
                    {showcase.badge}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">
                    {showcase.domain}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {showcase.title}
                  </h3>
                  <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                    {showcase.summary}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 mb-6">
                    {showcase.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100 mb-6">
                    {showcase.stack.map((item) => (
                      <span
                        key={item}
                        className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-[11px] font-semibold text-slate-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`#contact?blueprint=${encodeURIComponent(showcase.title)}`}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-blue-700 bg-blue-50 hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-500 hover:text-white border border-blue-200 transition-all"
                  >
                    <span>Discuss Similar Architecture</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
