"use client";

import React from "react";
import {
  CreditCard,
  HeartPulse,
  Truck,
  ShoppingCart,
  Settings2,
  GraduationCap,
  Hotel,
  Building,
  ArrowRight,
} from "lucide-react";

interface IndustryCard {
  id: string;
  name: string;
  desc: string;
  badge: string;
  icon: React.ElementType;
  accentBorder: string;
  tagColor: string;
}

const industries: IndustryCard[] = [
  {
    id: "bfsi",
    name: "Banking, FinTech & Insurance",
    desc: "Secure core banking interfaces, digital micro-lending portals, biometric e-KYC compliance, and high-frequency transaction gateways engineered with bank-grade encryption.",
    badge: "Core BFSI & Lending",
    icon: CreditCard,
    accentBorder: "hover:border-cyan-400",
    tagColor: "bg-cyan-50 text-cyan-700 border-cyan-200",
  },
  {
    id: "healthcare",
    name: "Healthcare & Life Sciences",
    desc: "Telemedicine platforms, electronic health records (EHR), automated pharmacy logistics, and HIPAA-compliant patient care portals designed for hospital networks.",
    badge: "Telehealth & EHR",
    icon: HeartPulse,
    accentBorder: "hover:border-emerald-400",
    tagColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  {
    id: "supply-chain",
    name: "Supply Chain & Logistics",
    desc: "Live fleet GPS telematics, automated warehouse dispatch, dynamic route optimization, and digital e-POD paperless consignment tracking systems.",
    badge: "Fleet Telematics & e-POD",
    icon: Truck,
    accentBorder: "hover:border-blue-400",
    tagColor: "bg-blue-50 text-blue-700 border-blue-200",
  },
  {
    id: "retail",
    name: "Retail & E-Commerce",
    desc: "High-conversion digital storefronts, unified POS inventory synchronization, AI recommendation engines, and lightning-fast multi-gateway checkout pipelines.",
    badge: "Omnichannel & POS",
    icon: ShoppingCart,
    accentBorder: "hover:border-teal-400",
    tagColor: "bg-teal-50 text-teal-700 border-teal-200",
  },
  {
    id: "manufacturing",
    name: "Manufacturing & Industry 4.0",
    desc: "Smart factory floor telemetry, industrial machine predictive maintenance, raw material supply automation, and real-time plant operational dashboards.",
    badge: "IoT & Plant Automation",
    icon: Settings2,
    accentBorder: "hover:border-purple-400",
    tagColor: "bg-purple-50 text-purple-700 border-purple-200",
  },
  {
    id: "education",
    name: "Education & EdTech",
    desc: "Next-gen Learning Management Systems (LMS), interactive virtual classrooms, automated examination proctoring, and student lifecycle performance tracking.",
    badge: "Campus LMS & Exam OS",
    icon: GraduationCap,
    accentBorder: "hover:border-sky-400",
    tagColor: "bg-sky-50 text-sky-700 border-sky-200",
  },
  {
    id: "hospitality",
    name: "Hospitality & Travel",
    desc: "Contactless QR room ordering, automated hotel front-desk reservations, guest CRM analytics, and centralized multi-property facility operations.",
    badge: "QR Check-in & Guest OS",
    icon: Hotel,
    accentBorder: "hover:border-amber-400",
    tagColor: "bg-amber-50 text-amber-700 border-amber-200",
  },
  {
    id: "workforce",
    name: "Enterprise & Field Workforce",
    desc: "Enterprise field force tracking, automated employee lifecycle management, distributed attendance geofencing, and cross-department collaboration hubs.",
    badge: "Field Force & HRMS",
    icon: Building,
    accentBorder: "hover:border-indigo-400",
    tagColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
  },
];

export const IndustriesSection: React.FC = () => {
  const openConsultation = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-consultation-modal"));
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-slate-200" id="industries">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-extrabold text-blue-600 uppercase tracking-widest mb-2">
            DOMAINS WE EMPOWER
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Smart Solutions.<br />
            <span className="bg-gradient-to-r from-blue-700 via-sky-600 to-cyan-500 bg-clip-text text-transparent">
              Real Impact Across Industries.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            At NexoraTech, we combine deep domain knowledge with cutting-edge technology to help businesses <strong>innovate, scale, and lead</strong>.
          </p>
        </div>

        {/* 8-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind) => {
            const Icon = ind.icon;
            return (
              <div
                key={ind.id}
                onClick={openConsultation}
                className={`p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm ${ind.accentBorder} hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer group`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold border ${ind.tagColor}`}>
                      {ind.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2.5">
                    {ind.name}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {ind.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600 group-hover:text-blue-700">
                  <span>Explore Domain Solutions</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
