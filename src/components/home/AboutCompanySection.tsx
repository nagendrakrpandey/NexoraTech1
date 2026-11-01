"use client";

import React from "react";
import { ShieldCheck, Cpu, RefreshCw, Clock, CheckCircle2, Award } from "lucide-react";

export const AboutCompanySection: React.FC = () => {
  const openConsultation = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-consultation-modal"));
    }
  };

  return (
    <section className="py-24 lg:py-32 bg-white text-slate-900 border-b border-slate-200/80 relative overflow-hidden" id="about">
      {/* Subtle Luminous Sheen */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[500px] bg-slate-100/60 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Visual Highlight Card (Glossy Glass Box) */}
          <div className="lg:col-span-5 relative">
            <div className="p-8 sm:p-10 rounded-3xl glass-box-glossy border border-slate-200/90 text-slate-900 shadow-xl relative overflow-hidden bg-white">
              <div className="absolute right-0 bottom-0 w-64 h-64 bg-slate-100/60 rounded-full blur-2xl pointer-events-none" />

              <div className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center mb-6 shadow-md">
                <Award className="w-6 h-6 text-white" />
              </div>

              <span className="px-3.5 py-1 rounded-full bg-slate-100 text-slate-900 text-xs font-bold border border-slate-200 mb-4 inline-block font-mono">
                ISO 27001 &bull; SOC2 READY
              </span>

              <h3 className="text-2xl sm:text-3xl font-[900] text-slate-950 mb-4 leading-snug tracking-tight">
                Architecting Enterprise Digital Velocity
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                From high-concurrency transaction gateways to AI-driven workflow automation, our engineering pods deploy resilient, maintainable software engineered to scale with your enterprise.
              </p>

              <div className="space-y-3 pt-5 border-t border-slate-100 text-xs text-slate-700">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-slate-950 shrink-0" />
                  <span>100% IP &amp; Codebase Ownership Retained By Client</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-slate-950 shrink-0" />
                  <span>Strict Mutual Non-Disclosure &amp; Enterprise Confidentiality</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-slate-950 shrink-0" />
                  <span>Dedicated Solution Architect &amp; Senior QA Lead per Sprint</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Company Story & Features Grid */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-xs font-semibold text-slate-900 uppercase tracking-wider mb-4 border border-slate-200/90 shadow-sm">
              <Award className="w-3.5 h-3.5 text-slate-950" />
              <span>Company Overview &amp; Principles</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-[900] text-slate-950 tracking-tight mb-6 leading-tight">
              Pioneering Enterprise Transformation with{" "}
              <span className="bg-gradient-to-r from-slate-950 via-slate-800 to-slate-700 bg-clip-text text-transparent">
                Absolute Architectural Integrity
              </span>
            </h2>

            <p className="text-base text-slate-600 leading-relaxed mb-4 font-normal">
              NexoraTech Engineering Solutions specializes in partnering with high-growth scaleups, education leaders, fintech innovators, and large corporate enterprises to design resilient software systems, automate manual operations, and boost operational velocity.
            </p>

            <p className="text-sm text-slate-500 leading-relaxed mb-8 font-normal">
              Our multidisciplinary engineering pods combine strategic architectural rigor with agile execution, ensuring every deployment delivers measurable ROI, 99.99% SLA uptime, and seamless adoption across mobile, web, and cloud endpoints.
            </p>

            {/* 4 Glossy Glass Feature Boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl glass-box-glossy border border-slate-200/90 hover:border-slate-400 transition-all bg-white">
                <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-900 border border-slate-200 flex items-center justify-center mb-3">
                  <Cpu className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-950 mb-1">
                  100% Tailored Engineering
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Bespoke software architectures aligned precisely to your unique operational logic and data boundaries.
                </p>
              </div>

              <div className="p-5 rounded-2xl glass-box-glossy border border-slate-200/90 hover:border-slate-400 transition-all bg-white">
                <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-900 border border-slate-200 flex items-center justify-center mb-3">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-950 mb-1">
                  Agile Two-Week Sprints
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Rapid iterative cycles with automated staging previews, transparent code commits, and milestone demos.
                </p>
              </div>

              <div className="p-5 rounded-2xl glass-box-glossy border border-slate-200/90 hover:border-slate-400 transition-all bg-white">
                <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-900 border border-slate-200 flex items-center justify-center mb-3">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-950 mb-1">
                  Zero-Trust Cryptography
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Built-in AES-256 GCM encryption, mTLS microservices, and continuous automated CVE vulnerability scanning.
                </p>
              </div>

              <div className="p-5 rounded-2xl glass-box-glossy border border-slate-200/90 hover:border-slate-400 transition-all bg-white">
                <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-900 border border-slate-200 flex items-center justify-center mb-3">
                  <Clock className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-950 mb-1">
                  Guaranteed Response SLA
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Round-the-clock infrastructure observability, automated self-healing clusters, and direct Slack/Jira sync.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
