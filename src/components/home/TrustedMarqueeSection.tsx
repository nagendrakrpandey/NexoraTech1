"use client";

import React from "react";
import { Building2, ShieldCheck, Gauge, Award, ArrowUpRight } from "lucide-react";

interface ClientBrand {
  name: string;
  category: string;
  badge: string;
}

const clientBrands: ClientBrand[] = [
  { name: "Satya MicroCapital Ltd.", category: "Microfinance & NBFC Suite", badge: "Core Banking API" },
  { name: "Lakshya Institute of Tech (LIT)", category: "Higher EdTech & Campus ERP", badge: "Student OS" },
  { name: "Stepkaro", category: "E-Commerce & High-Concurrency", badge: "Mobile Platform" },
  { name: "Vimpix Exclusive Footwear", category: "Retail POS & Inventory ERP", badge: "Cloud POS" },
  { name: "Nutclick", category: "D2C Commerce & Warehousing", badge: "D2C Storefront" },
  { name: "MMSalary (M&M Logistics)", category: "Logistics Payroll & Fleet HR", badge: "Automated Payroll" },
  { name: "PushpRatan", category: "B2B Distribution & FMCG ERP", badge: "Dealer Portal" },
  { name: "Adarsh Cargo Movers", category: "Supply Chain & Fleet Telematics", badge: "Freight IoT" },
  { name: "Vin World Express", category: "Express Transit & e-POD", badge: "Logistics Engine" },
  { name: "Niveshan Technologies", category: "Enterprise Telecom & Infrastructure", badge: "Enterprise Cloud" },
];

export const TrustedMarqueeSection: React.FC = () => {
  return (
    <section className="py-16 bg-white border-b border-slate-200 overflow-hidden" id="trusted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700 uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
            <span>Enterprise Social Proof</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Trusted by the{" "}
            <span className="bg-gradient-to-r from-blue-700 via-sky-600 to-cyan-500 bg-clip-text text-transparent">
              Growing Companies
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Over 25+ emerging market leaders, fintech disruptors, and established corporate enterprises rely on NexoraTech to engineer and run their mission-critical digital systems.
          </p>
        </div>

        {/* Trust Metrics Ribbon */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-12 max-w-5xl mx-auto">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-3.5 shadow-sm hover:border-blue-300 transition-all">
            <div className="p-2.5 rounded-xl bg-blue-100 text-blue-700 shrink-0">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black text-slate-900">25+</div>
              <div className="text-xs text-slate-500 font-medium">Corporate Clients</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-3.5 shadow-sm hover:border-green-300 transition-all">
            <div className="p-2.5 rounded-xl bg-green-100 text-green-700 shrink-0">
              <Gauge className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black text-slate-900">99.8%</div>
              <div className="text-xs text-slate-500 font-medium">Delivery SLA</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-3.5 shadow-sm hover:border-cyan-300 transition-all">
            <div className="p-2.5 rounded-xl bg-cyan-100 text-cyan-700 shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black text-slate-900">10M+</div>
              <div className="text-xs text-slate-500 font-medium">Monthly API Calls</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-3.5 shadow-sm hover:border-indigo-300 transition-all">
            <div className="p-2.5 rounded-xl bg-indigo-100 text-indigo-700 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black text-slate-900">100%</div>
              <div className="text-xs text-slate-500 font-medium">Client Retention</div>
            </div>
          </div>
        </div>
      </div>

      {/* Infinite Seamless Continuous Logo / Partner Brand Marquee */}
      <div className="relative w-full overflow-hidden py-3 bg-slate-50/60 border-y border-slate-200/80">
        {/* Soft edge blur gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee-ltr flex items-center gap-4">
          {/* Group 1 */}
          {clientBrands.map((brand, index) => (
            <div
              key={`b1-${index}`}
              className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-blue-400 hover:shadow-md transition-all shrink-0 cursor-default group"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white font-extrabold text-sm flex items-center justify-center shrink-0 shadow-sm">
                {brand.name.substring(0, 2).toUpperCase()}
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors flex items-center gap-1.5">
                  <span>{brand.name}</span>
                </div>
                <div className="text-[10px] text-slate-500">{brand.category}</div>
              </div>
              <span className="ml-2 px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[10px] font-semibold border border-slate-200/80">
                {brand.badge}
              </span>
            </div>
          ))}

          {/* Group 2 (Clone for infinite seamless loop) */}
          {clientBrands.map((brand, index) => (
            <div
              key={`b2-${index}`}
              className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-blue-400 hover:shadow-md transition-all shrink-0 cursor-default group"
              aria-hidden="true"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white font-extrabold text-sm flex items-center justify-center shrink-0 shadow-sm">
                {brand.name.substring(0, 2).toUpperCase()}
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors flex items-center gap-1.5">
                  <span>{brand.name}</span>
                </div>
                <div className="text-[10px] text-slate-500">{brand.category}</div>
              </div>
              <span className="ml-2 px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[10px] font-semibold border border-slate-200/80">
                {brand.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
