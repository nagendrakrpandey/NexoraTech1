"use client";

import React from "react";
import Link from "next/link";
import { engagementModels } from "@/config/site";
import { CheckCircle2, ArrowRight, Users } from "lucide-react";

export const EngagementModelsSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#F8FAFC] border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-blue-200 text-xs font-bold text-blue-700 uppercase tracking-wider mb-4 shadow-sm">
            <Users className="w-3.5 h-3.5" />
            <span>Partnership Models</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Transparent Engagement Structures
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Tailored delivery frameworks aligned with your internal roadmap, budget boundaries, and engineering cadence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {engagementModels.map((model) => (
            <div
              key={model.name}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                model.highlight
                  ? "bg-white border-2 border-blue-500 shadow-xl lg:-translate-y-2"
                  : "bg-white border border-slate-200 shadow-card hover:border-slate-300"
              }`}
            >
              {model.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-500 text-[11px] font-bold text-white uppercase tracking-wider shadow-md">
                  Most Popular For Scaleups
                </div>
              )}

              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{model.name}</h3>
                <p className="text-xs text-slate-600 mb-6 leading-relaxed min-h-[36px]">
                  {model.idealFor}
                </p>

                <div className="space-y-3 pt-6 border-t border-slate-100 mb-8">
                  {model.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href={`#contact?model=${encodeURIComponent(model.name)}`}
                className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-sm font-bold transition-all ${
                  model.highlight
                    ? "bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-500 text-white shadow-md hover:shadow-lg"
                    : "bg-slate-50 hover:bg-slate-100 text-slate-800 border border-slate-200"
                }`}
              >
                <span>Select Engagement Model</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
