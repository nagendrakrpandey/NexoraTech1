"use client";

import React from "react";
import {
  Users,
  TrendingUp,
  ConciergeBell,
  Laptop,
  Network,
  CheckCircle,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export const ProductsBentoSection: React.FC = () => {
  const openConsultation = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-consultation-modal"));
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700 uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Software Products</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Our Proprietary{" "}
            <span className="bg-gradient-to-r from-blue-700 via-sky-600 to-cyan-500 bg-clip-text text-transparent">
              SaaS Suite
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
            Pre-built, battle-tested enterprise applications designed to automate daily operations, improve productivity, and reduce overhead costs.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Nexora HRMS (Featured Wide Card) */}
          <div className="lg:col-span-2 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 text-white shadow-xl border border-slate-800 flex flex-col justify-between relative overflow-hidden group">
            {/* Ambient glow */}
            <div className="absolute right-0 top-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-blue-600/30 border border-blue-400/30 text-cyan-300 flex items-center justify-center">
                  <Users className="w-7 h-7" />
                </div>
                <span className="px-3 py-1 rounded-full bg-blue-500/20 text-cyan-300 text-xs font-bold border border-blue-400/30">
                  Flagship HRMS
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                Nexora HRMS — Complete HR &amp; Payroll Automation
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed max-w-2xl mb-6">
                An intelligent Human Resource Management System that simplifies biometric attendance, geofenced mobile check-ins, multi-tier salary calculations, statutory PF/ESI/TDS compliance, and employee self-service mobile portals.
              </p>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700 text-xs font-medium text-slate-200">
                  Biometric Facial Attendance
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700 text-xs font-medium text-slate-200">
                  Automated Multi-Tier Payroll
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700 text-xs font-medium text-slate-200">
                  Statutory Compliance Engine
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700 text-xs font-medium text-slate-200">
                  Employee Mobile App
                </span>
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-slate-800 flex items-center justify-between">
              <button
                type="button"
                onClick={openConsultation}
                className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <span>Request Live Demonstration</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <span className="text-xs text-slate-500">Cloud &amp; On-Premise Ready</span>
            </div>
          </div>

          {/* Card 2: Sales Force / CRM */}
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm hover:border-cyan-400 hover:shadow-xl transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-cyan-100 text-cyan-700 flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 group-hover:text-cyan-600 transition-colors mb-2.5">
                Nexora FieldForce CRM
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed mb-6">
                Field sales force automation platform featuring live GPS beat tracking, real-time dealer order punching, payment collection tracking, and automated rep performance analytics.
              </p>

              <div className="flex flex-wrap gap-1.5">
                <span className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-[11px] font-semibold text-slate-700">
                  Field Force Beat
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-[11px] font-semibold text-slate-700">
                  GPS Live Tracking
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-[11px] font-semibold text-slate-700">
                  Dealer Order CRM
                </span>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-200/80">
              <button
                type="button"
                onClick={openConsultation}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-700 hover:text-cyan-800"
              >
                <span>Explore FieldForce</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 3: Guest OS / Hospitality */}
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm hover:border-amber-400 hover:shadow-xl transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mb-6">
                <ConciergeBell className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors mb-2.5">
                Nexora Guest OS
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed mb-6">
                Contactless hospitality management solution for hotels and guest residences. Features instant QR check-in, digital room service ordering, guest feedback, and billing integration.
              </p>

              <div className="flex flex-wrap gap-1.5">
                <span className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-[11px] font-semibold text-slate-700">
                  QR Check-in
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-[11px] font-semibold text-slate-700">
                  Hospitality POS
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-[11px] font-semibold text-slate-700">
                  Guest CRM
                </span>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-200/80">
              <button
                type="button"
                onClick={openConsultation}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800"
              >
                <span>Explore Guest OS</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 4: ITAM Asset Manager */}
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm hover:border-emerald-400 hover:shadow-xl transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-6">
                <Laptop className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors mb-2.5">
                Nexora ITAM — Asset Manager
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed mb-6">
                Comprehensive corporate hardware and software license tracker. Monitors lifecycle, depreciation schedules, warranty renewals, AMC schedules, and remote configuration audits.
              </p>

              <div className="flex flex-wrap gap-1.5">
                <span className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-[11px] font-semibold text-slate-700">
                  Hardware Lifecycle
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-[11px] font-semibold text-slate-700">
                  AMC Alerts
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-[11px] font-semibold text-slate-700">
                  Audit Ready
                </span>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-200/80">
              <button
                type="button"
                onClick={openConsultation}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800"
              >
                <span>Explore ITAM</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 5: Synapse / I-Connect */}
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm hover:border-purple-400 hover:shadow-xl transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center mb-6">
                <Network className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors mb-2.5">
                Nexora Synapse — I-Connect
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed mb-6">
                Enterprise workflow orchestration bridge connecting dispersed department data into a unified, secure messaging, webhook assignment, and real-time document synchronization pipeline.
              </p>

              <div className="flex flex-wrap gap-1.5">
                <span className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-[11px] font-semibold text-slate-700">
                  Workflow Bridge
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-[11px] font-semibold text-slate-700">
                  Unified Portal
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-[11px] font-semibold text-slate-700">
                  Secure Sync
                </span>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-200/80">
              <button
                type="button"
                onClick={openConsultation}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-700 hover:text-purple-800"
              >
                <span>Explore Synapse</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
