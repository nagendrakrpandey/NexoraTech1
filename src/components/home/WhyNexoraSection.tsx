"use client";

import React from "react";
import { Shield, GitCommit, FileCode, Cpu } from "lucide-react";

export const WhyNexoraSection: React.FC = () => {
  const pillars = [
    {
      title: "Clean Code & Full IP Ownership",
      desc: "All source code, infrastructure declarations, and test suites are committed directly to your enterprise repositories under your sole ownership. Zero vendor lock-in.",
      icon: FileCode,
    },
    {
      title: "Strict Architectural Governance",
      desc: "We enforce peer-reviewed design documents, automated CI/CD linting, static type safety, and unit test coverage thresholds before any branch reaches production.",
      icon: Shield,
    },
    {
      title: "Transparent Sprint Cadence",
      desc: "Direct engineer-to-engineer communication via shared Slack/Discord channels and bi-weekly sprint demos. No intermediaries or opaque project management silos.",
      icon: GitCommit,
    },
    {
      title: "Built for Day-2 Operability",
      desc: "We architect systems that are straightforward to monitor, debug, and scale for your in-house engineers after handoff, backed by comprehensive documentation runbooks.",
      icon: Cpu,
    },
  ];

  return (
    <section id="why-nexora" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700 uppercase tracking-wider mb-4 shadow-sm">
            <Shield className="w-3.5 h-3.5" />
            <span>Engineering Principles</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Why Engineering Leaders Choose NexoraTech
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            A commitment to sound software craftsmanship, architectural clarity, and transparent technical collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="bg-white p-8 rounded-3xl border border-slate-200 shadow-card hover:border-blue-400 hover:shadow-card-hover transition-all flex items-start gap-5"
              >
                <div className="p-3.5 rounded-2xl bg-blue-50 text-blue-600 shrink-0 border border-blue-100">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{pillar.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{pillar.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
