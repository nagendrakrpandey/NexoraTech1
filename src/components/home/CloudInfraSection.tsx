"use client";

import React from "react";
import { Cloud, GitFork, Gauge, DollarSign, ArrowRight, Server } from "lucide-react";

export const CloudInfraSection: React.FC = () => {
  const openConsultation = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-consultation-modal"));
    }
  };

  return (
    <section id="cloud" className="py-24 lg:py-32 bg-white text-slate-900 border-b border-slate-200/80 relative overflow-hidden">
      {/* Subtle Luminous Sheen */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-slate-100/60 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Explanatory Content & Glass Cards */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-xs font-semibold text-slate-900 uppercase tracking-wider mb-4 border border-slate-200/90 shadow-sm">
              <Cloud className="w-3.5 h-3.5 text-slate-950" />
              <span>Multi-Cloud &amp; DevOps Engineering</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-[900] text-slate-950 tracking-tight mb-6 leading-tight">
              Resilient Cloud Foundations Built for{" "}
              <span className="bg-gradient-to-r from-slate-950 via-slate-800 to-slate-700 bg-clip-text text-transparent">
                Zero Downtime
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed font-normal">
              We orchestrate, scale, and secure enterprise cloud environments engineered for high concurrency, automatic failover, and aggressive FinOps cost containment.
            </p>

            {/* Feature Matrix in 4 Glossy Glass Boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="p-5 rounded-2xl glass-box-glossy border border-slate-200/90 bg-white">
                <div className="flex items-center gap-2.5 text-slate-950 font-bold text-sm mb-2">
                  <Server className="w-4 h-4 text-slate-900" />
                  <span>Kubernetes &amp; Containers</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Microservice orchestration across AWS EKS, GCP GKE, and Azure AKS with auto-scaling node pools.
                </p>
              </div>

              <div className="p-5 rounded-2xl glass-box-glossy border border-slate-200/90 bg-white">
                <div className="flex items-center gap-2.5 text-slate-950 font-bold text-sm mb-2">
                  <GitFork className="w-4 h-4 text-slate-900" />
                  <span>GitOps CI/CD Automation</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Declarative Terraform and ArgoCD pipelines delivering canary deployments and sub-3s automated rollback.
                </p>
              </div>

              <div className="p-5 rounded-2xl glass-box-glossy border border-slate-200/90 bg-white">
                <div className="flex items-center gap-2.5 text-slate-950 font-bold text-sm mb-2">
                  <DollarSign className="w-4 h-4 text-emerald-600" />
                  <span>FinOps Cost Governance</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Spot-instance arbitrage, rightsizing, and storage tiering slashing cloud infrastructure bills by up to 42%.
                </p>
              </div>

              <div className="p-5 rounded-2xl glass-box-glossy border border-slate-200/90 bg-white">
                <div className="flex items-center gap-2.5 text-slate-950 font-bold text-sm mb-2">
                  <Gauge className="w-4 h-4 text-slate-900" />
                  <span>24/7 SRE Observability</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Distributed tracing via Prometheus, Grafana &amp; OpenTelemetry with 15-minute response time SLAs.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={openConsultation}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-black hover:bg-neutral-800 shadow-md transition-all"
            >
              <span>Schedule Cloud Infrastructure Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right Column: High-Contrast Cloud Dashboard Terminal */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl glass-box-dark p-6 sm:p-7 border border-neutral-800 shadow-2xl">
              
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-slate-200 ml-2 font-semibold">INFRASTRUCTURE ORCHESTRATOR</span>
                </div>
                <span className="text-emerald-400 font-bold">ALL PODS HEALTHY</span>
              </div>

              {/* Status Nodes Grid */}
              <div className="space-y-3.5 mb-6">
                <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                    <div>
                      <div className="text-xs font-bold text-white font-mono">us-east-1a • Production EKS</div>
                      <div className="text-[11px] text-slate-400 font-mono">48 Nodes Active • Auto-Scales on 75% CPU</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-emerald-400">99.998% UPTIME</span>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                    <div>
                      <div className="text-xs font-bold text-white font-mono">eu-central-1 • Failover Secondary</div>
                      <div className="text-[11px] text-slate-400 font-mono">Active Standby • Sub-3.0s RTO Synchronization</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-cyan-300">STANDBY SYNC</span>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    <div>
                      <div className="text-xs font-bold text-white font-mono">Kafka Ingestion Cluster</div>
                      <div className="text-[11px] text-slate-400 font-mono">6 Brokers • 1.2M Messages Processed/Minute</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-300">P99 &lt; 8.2ms</span>
                </div>
              </div>

              {/* Live FinOps Telemetry Bar */}
              <div className="p-4 rounded-2xl bg-white/[0.06] border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-slate-200 font-bold font-mono">FinOps Cost Optimization</div>
                  <div className="text-xs text-slate-400 mt-0.5">Automated spot instance management</div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-black text-emerald-400 font-mono">-38.6%</div>
                  <div className="text-[10px] text-slate-400 font-mono">MONTHLY BILL REDUCTION</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
