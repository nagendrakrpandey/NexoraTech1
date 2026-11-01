"use client";

import React, { useState } from "react";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  Award,
  CheckCircle2,
  Building,
  TrendingUp,
} from "lucide-react";

interface Testimonial {
  id: string;
  clientName: string;
  clientRole: string;
  company: string;
  categoryTag: string;
  metricBadge: string;
  quote: string;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    id: "lit",
    clientName: "Dr. Susanta K. Dash",
    clientRole: "Director of Academics & IT",
    company: "Lakshya Institute of Technology (LIT)",
    categoryTag: "EdTech & Campus ERP",
    metricBadge: "99.2% Digital Adoption",
    quote:
      "NexoraTech engineered a comprehensive campus management system and student lifecycle portal for Lakshya Institute of Technology (LIT). From real-time biometric and geofenced attendance to online fee collection and automated grade card generation, their software streamlined our administrative workload by 70%. Outstanding support and rock-solid engineering.",
    initials: "SD",
  },
  {
    id: "stepkaro",
    clientName: "Shikshit Goel",
    clientRole: "Chief Executive Officer",
    company: "Stepkaro",
    categoryTag: "E-Commerce & High-Concurrency",
    metricBadge: "4.6x Surge in Orders",
    quote:
      "Scaling our mobile shopping platform was seamless with NexoraTech. They engineered high-concurrency checkout microservices, optimized product search response times to under 120ms, and integrated automated shipping tracking. Our active transaction volumes grew 4.6x without a single minute of server downtime.",
    initials: "SG",
  },
  {
    id: "nutclick",
    clientName: "Sandeep Kumar",
    clientRole: "Co-Founder & Brand Operations",
    company: "Nutclick",
    categoryTag: "D2C E-Commerce & Retail",
    metricBadge: "52% Increase in Repeat Sales",
    quote:
      "For our premium D2C brand, customer experience and lightning-fast checkout were critical. NexoraTech engineered our modern storefront with personalized gift hampers, real-time batch inventory tracking, and automated WhatsApp delivery notifications. Our repeat customer conversion rate jumped by 52% in just four months.",
    initials: "SK",
  },
  {
    id: "vin-world",
    clientName: "Vinay Rai",
    clientRole: "Founder & Managing Director",
    company: "Vin World Express",
    categoryTag: "Logistics & Express Freight",
    metricBadge: "38% Drop in Transit Delays",
    quote:
      "Managing and scaling our express parcel distribution network across nationwide transit hubs required an enterprise-grade digital backbone. NexoraTech engineered an end-to-end logistics platform featuring real-time GPS fleet telemetry, automated manifest dispatch, and instant electronic proof-of-delivery (e-POD). Transit delays dropped by 38% and SLA performance reached 99.2%.",
    initials: "VR",
  },
  {
    id: "satya",
    clientName: "Darren M.",
    clientRole: "Head of Field Operations",
    company: "Satya MicroCapital Ltd.",
    categoryTag: "Microfinance & NBFC Suite",
    metricBadge: "65% Faster Origination",
    quote:
      "NexoraTech engineered an offline-first mobile sync architecture and biometric verification suite that transformed our rural field operations. Over 5,000+ loan officers across 500+ branches now execute instant e-KYC, underwriting checks, and loan disbursements with zero lag. An enterprise-grade technology partner in every sense.",
    initials: "DM",
  },
];

export const ClientTestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200" id="case-studies">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Column: Testimonial Carousel */}
          <div className="lg:col-span-8">
            <div className="mb-8">
              <p className="text-xs font-extrabold text-blue-600 uppercase tracking-widest mb-2">
                CLIENT TESTIMONIALS
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                See how we've helped our{" "}
                <span className="bg-gradient-to-r from-blue-700 via-sky-600 to-cyan-500 bg-clip-text text-transparent">
                  clients succeed
                </span>
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2">
                Client success stories and verified feedback from 500+ delivered enterprise digital platforms.
              </p>
            </div>

            {/* Testimonial Box */}
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm relative overflow-hidden transition-all">
              {/* Giant background quote symbol */}
              <Quote className="absolute right-6 bottom-6 w-32 h-32 text-slate-200/50 pointer-events-none select-none" />

              {/* Header inside box */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6 relative z-10">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold">
                    {current.categoryTag}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5" />
                    {current.metricBadge}
                  </span>
                </div>
              </div>

              {/* Quote Text */}
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed italic mb-8 relative z-10 font-normal">
                "{current.quote}"
              </p>

              {/* Author Info */}
              <div className="flex items-center justify-between flex-wrap gap-4 pt-6 border-t border-slate-200/80 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white font-black text-sm flex items-center justify-center shadow-md">
                    {current.initials}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 leading-snug">
                      {current.clientName}
                    </h4>
                    <p className="text-xs text-slate-500">
                      {current.clientRole}, <strong className="text-slate-700">{current.company}</strong>
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-50 border border-green-200 text-green-700 text-xs font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-600" />
                  <span>Verified Client</span>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-200/80 relative z-10">
                <div className="flex items-center gap-1.5">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-2 rounded-full transition-all ${
                        currentIndex === idx ? "w-8 bg-blue-600" : "w-2 bg-slate-300 hover:bg-slate-400"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={prevSlide}
                    className="p-2.5 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-blue-600 shadow-sm transition-all"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="p-2.5 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-blue-600 shadow-sm transition-all"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Side Feature Column: Client Satisfaction & Stats Ribbon */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-8 rounded-3xl bg-gradient-to-br from-[#0B1528] via-[#1E3A8A] to-[#0284C7] text-white shadow-xl relative overflow-hidden">
              <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md text-amber-300 flex items-center justify-center mb-6">
                <Award className="w-8 h-8" />
              </div>

              <div className="text-4xl sm:text-5xl font-black text-white mb-2">99.4%</div>
              <h3 className="text-lg font-bold text-cyan-200 mb-2">
                Verified Client Satisfaction
              </h3>
              <p className="text-xs text-blue-100 leading-relaxed">
                Backed by rigorous code quality gates, dedicated SLA uptime, and transparent agile sprint reviews for every client engagement.
              </p>
            </div>

            {/* Quick Stats Column */}
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200/80">
                <span className="text-xs text-slate-600 font-medium">Projects Delivered</span>
                <span className="text-base font-extrabold text-slate-900">500+</span>
              </div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-200/80">
                <span className="text-xs text-slate-600 font-medium">Uptime Reliability</span>
                <span className="text-base font-extrabold text-green-600">99.8%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-600 font-medium">Industry Proven</span>
                <span className="text-base font-extrabold text-blue-600">10+ Years</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
