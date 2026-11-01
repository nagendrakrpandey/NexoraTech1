"use client";

import React, { useState } from "react";
import Link from "next/link";
import { businessServices } from "@/config/site";
import {
  Code2,
  Building2,
  Globe2,
  ShoppingBag,
  Smartphone,
  Monitor,
  Cloud,
  Cpu,
  Layers,
  Server,
  Sparkles,
  Network,
  Database,
  RefreshCw,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Code2,
  Building2,
  Globe2,
  ShoppingBag,
  Smartphone,
  Monitor,
  Cloud,
  Cpu,
  Layers,
  Server,
  Sparkles,
  Network,
  Database,
  RefreshCw,
  ShieldCheck,
};

export const ServicesSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeServiceId, setActiveServiceId] = useState<string>(businessServices[0].id);

  const categories = [
    "All",
    "Software Engineering",
    "Web & Mobile",
    "Cloud & DevOps",
    "SaaS & Platforms",
    "AI Integration",
    "Enterprise Solutions",
  ];

  const filteredServices =
    selectedCategory === "All"
      ? businessServices
      : businessServices.filter((s) => s.category === selectedCategory);

  const activeService =
    businessServices.find((s) => s.id === activeServiceId) || businessServices[0];
  const ActiveIcon = iconMap[activeService.iconName] || Code2;

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700 uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Core Business Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            End-to-End Digital Engineering & Systems Architecture
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            From architecture and core development to cloud deployment and autonomous AI workflows—we deliver resilient, high-performance systems for modern enterprise demands.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-500 text-white shadow-md"
                  : "bg-slate-50 text-slate-700 hover:text-slate-900 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* 2-Column Interactive Services Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Left Column: Service Card Selector Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredServices.map((service) => {
              const IconComponent = iconMap[service.iconName] || Code2;
              const isSelected = service.id === activeServiceId;

              return (
                <div
                  key={service.id}
                  onClick={() => setActiveServiceId(service.id)}
                  className={`p-5 rounded-2xl cursor-pointer transition-all duration-300 border ${
                    isSelected
                      ? "bg-blue-50/70 border-blue-500 shadow-md -translate-y-1"
                      : "bg-white border-slate-200 hover:border-slate-300 hover:shadow-sm hover:bg-slate-50/60"
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div
                      className={`p-2.5 rounded-xl ${
                        isSelected
                          ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-sm"
                          : "bg-blue-50 text-blue-600 border border-blue-100"
                      }`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  <div className="mt-4 flex items-center gap-1.5 text-xs font-bold text-blue-600">
                    <span>Inspect Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Deep-Dive Inspector Panel */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xl relative overflow-hidden">
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-100">
                <div className="p-3.5 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-500 text-white shadow-md">
                  <ActiveIcon className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-bold text-blue-600 tracking-wider uppercase">
                    {activeService.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    {activeService.title}
                  </h3>
                </div>
              </div>

              {/* Problem Solved */}
              <div className="mb-6">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-700 uppercase tracking-wide mb-2">
                  <AlertCircle className="w-4 h-4 text-amber-500" />
                  <span>Problem Solved</span>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed bg-amber-50/60 p-3.5 rounded-xl border border-amber-200/60">
                  {activeService.problemsSolved}
                </p>
              </div>

              {/* Exact Deliverables */}
              <div className="mb-6">
                <div className="flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-wide mb-3">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span>Key Deliverables</span>
                </div>
                <ul className="space-y-2">
                  {activeService.deliverables.map((del, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Business Outcomes */}
              <div className="mb-8">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 uppercase tracking-wide mb-2">
                  <TrendingUp className="w-4 h-4 text-emerald-500" />
                  <span>Engineered Outcomes</span>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed bg-emerald-50/60 p-3.5 rounded-xl border border-emerald-200/60">
                  {activeService.outcomes}
                </p>
              </div>

              {/* Action Button */}
              <Link
                href={`#contact?service=${encodeURIComponent(activeService.title)}`}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-500 shadow-md hover:shadow-lg transition-all"
              >
                <span>Request Scope for {activeService.title}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
