"use client";

import React, { useState } from "react";
import { faqs } from "@/config/site";
import { HelpCircle, ChevronDown } from "lucide-react";

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-24 lg:py-32 bg-[#FAFAFC] text-slate-900 border-b border-slate-200/80 relative overflow-hidden" id="faq">
      {/* Subtle Luminous Sheen */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-slate-200/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-xs font-semibold text-slate-900 uppercase tracking-wider mb-4 border border-slate-200/90 shadow-sm">
            <HelpCircle className="w-3.5 h-3.5 text-slate-950" />
            <span>Frequently Asked Questions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-[900] text-slate-950 tracking-tight mb-4">
            Technical &amp; Project{" "}
            <span className="bg-gradient-to-r from-slate-950 via-slate-800 to-slate-700 bg-clip-text text-transparent">
              Inquiries
            </span>
          </h2>

          <p className="text-base text-slate-600 font-normal">
            Clear, authoritative answers regarding timelines, IP ownership, cloud infrastructure governance, and private AI boundaries.
          </p>
        </div>

        {/* Glossy Glass Accordion Cards */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="rounded-2xl glass-box-glossy border border-slate-200/90 overflow-hidden transition-all duration-300 hover:border-slate-400 bg-white shadow-xs hover:shadow-md"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-slate-950 hover:text-black transition-colors">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all ${isOpen ? "bg-black text-white" : "bg-slate-100 text-slate-700 border border-slate-200"}`}>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-200 font-normal">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
