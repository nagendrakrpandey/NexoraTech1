"use client";

import React from "react";
import { ShieldCheck, Network, RefreshCw, Lock } from "lucide-react";

export const EnterpriseEngineeringSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#F8FAFC] border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-blue-200 text-xs font-bold text-blue-700 uppercase tracking-wider mb-4 shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Enterprise Systems & Reliability</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Mission-Critical Enterprise Engineering
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Engineered for high availability, compliance, and long-term architectural maintainability without technical debt accumulation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-card hover:border-blue-400 hover:shadow-card-hover transition-all">
            <div className="p-3.5 rounded-2xl bg-blue-50 text-blue-600 w-fit mb-6">
              <RefreshCw className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Legacy Modernization</h3>
            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              Incremental refactoring using Strangler Fig patterns. We deconstruct monolithic architectures into modular, containerized services with zero unplanned operational downtime.
            </p>
            <ul className="space-y-2 text-xs text-slate-600">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                <span>Microservice extraction & isolation</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                <span>Zero-downtime database replication cutovers</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-card hover:border-blue-400 hover:shadow-card-hover transition-all">
            <div className="p-3.5 rounded-2xl bg-cyan-50 text-cyan-600 w-fit mb-6">
              <Network className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Enterprise API Integration</h3>
            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              Connecting disparate ERPs, CRMs, and financial gateways with robust idempotency, token throttling, automatic retry backoffs, and centralized webhook observability.
            </p>
            <ul className="space-y-2 text-xs text-slate-600">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-600" />
                <span>Salesforce, SAP, NetSuite & custom ERPs</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-600" />
                <span>Strict contract-driven OpenAPI specs</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-card hover:border-blue-400 hover:shadow-card-hover transition-all">
            <div className="p-3.5 rounded-2xl bg-emerald-50 text-emerald-600 w-fit mb-6">
              <Lock className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Zero-Trust Architecture</h3>
            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              Security-conscious by design. Every service verifies identity, encrypts payloads in transit and at rest, and adheres to automated static/dynamic vulnerability checks.
            </p>
            <ul className="space-y-2 text-xs text-slate-600">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                <span>Mutual TLS (mTLS) inter-service comms</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                <span>Continuous SAST/DAST pipeline enforcement</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
