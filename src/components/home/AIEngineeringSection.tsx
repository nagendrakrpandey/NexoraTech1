"use client";

import React from "react";
import { Sparkles, ArrowRight, Lock, CheckCircle2 } from "lucide-react";

export const AIEngineeringSection: React.FC = () => {
  const openConsultation = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-consultation-modal"));
    }
  };

  return (
    <section id="ai" className="py-20 lg:py-28 bg-white/45 backdrop-blur-2xl text-slate-950 border-b border-black/10 relative overflow-hidden">
      {/* Subtle Luminous Ambient Light Sheen */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-white/50 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-white/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Visual AI Orchestration Pipeline Display */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="rounded-3xl bg-black/75 backdrop-blur-2xl p-6 sm:p-7 border border-white/15 shadow-2xl">
              
              {/* Header Bar */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-white font-bold">VPC-ISOLATED AI PIPELINE</span>
                </div>
                <span className="text-emerald-400 font-bold">ZERO DATA EGRESS</span>
              </div>

              {/* RAG & Agent Flow Simulation */}
              <div className="space-y-3 mb-6">
                <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-white/10 text-white flex items-center justify-center font-mono text-xs font-bold border border-white/15">
                      01
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white font-mono">Client-Side PII Scrubbing</div>
                      <div className="text-[11px] text-slate-400">Strict regex &amp; NER redaction before inference</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 font-bold">100% FILTERED</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-white/10 text-white flex items-center justify-center font-mono text-xs font-bold border border-white/15">
                      02
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white font-mono">Hybrid Dense-Sparse Retrieval</div>
                      <div className="text-[11px] text-slate-400">Qdrant vector embeddings + BM25 keyword scoring</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-cyan-300 font-bold">98.4% ACCURACY</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-white/10 text-white flex items-center justify-center font-mono text-xs font-bold border border-white/15">
                      03
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white font-mono">Autonomous Multi-Agent Routing</div>
                      <div className="text-[11px] text-slate-400">LangGraph decision loops with human-in-the-loop fallback</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-slate-300 font-bold">&lt; 280ms STREAM</span>
                </div>
              </div>

              {/* Security Banner */}
              <div className="p-4 rounded-2xl bg-white/[0.06] border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-slate-200 font-bold font-mono">Enterprise Privacy Guarantee</div>
                  <div className="text-xs text-slate-400 mt-0.5">Your proprietary data never trains external models</div>
                </div>
                <Lock className="w-5 h-5 text-slate-300" />
              </div>

            </div>
          </div>

          {/* Right Column: Explanatory Content */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/70 border border-black/10 backdrop-blur-md text-[11px] sm:text-xs font-semibold text-slate-900 uppercase tracking-widest mb-4 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-slate-950" />
              <span>Private Enterprise GenAI</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-[900] text-slate-950 tracking-tight mb-5 leading-tight">
              Production AI Engineered for{" "}
              <span className="bg-gradient-to-r from-slate-950 via-slate-800 to-slate-700 bg-clip-text text-transparent">
                Mission-Critical Workflows
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 mb-8 leading-relaxed font-normal">
              We move beyond generic API wrappers. Our team builds customized private AI pipelines: Retrieval-Augmented Generation (RAG) with sub-second hybrid retrieval, autonomous multi-agent systems, and strict deterministic validation gates.
            </p>

            {/* Feature Checklist (Glass Cards) */}
            <div className="space-y-3 mb-8">
              <div className="p-4 rounded-2xl bg-white/65 hover:bg-white/85 backdrop-blur-xl border border-white/80 hover:border-black/20 shadow-sm transition-all flex items-start gap-3">
                <div className="p-1 rounded-full bg-white text-slate-950 mt-0.5 border border-slate-300 shadow-xs">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-950">Hybrid Retrieval &amp; Semantic Caching</h4>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed font-normal">Combining vector similarity with exact keyword indexing while caching frequent prompts to slash token expenses by 60%+.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/65 hover:bg-white/85 backdrop-blur-xl border border-white/80 hover:border-black/20 shadow-sm transition-all flex items-start gap-3">
                <div className="p-1 rounded-full bg-white text-slate-950 mt-0.5 border border-slate-300 shadow-xs">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-950">Autonomous Agent Decision Graphs</h4>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed font-normal">Specialized autonomous worker agents capable of multi-step database query generation, report synthesis, and ERP execution.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/65 hover:bg-white/85 backdrop-blur-xl border border-white/80 hover:border-black/20 shadow-sm transition-all flex items-start gap-3">
                <div className="p-1 rounded-full bg-white text-slate-950 mt-0.5 border border-slate-300 shadow-xs">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-950">Strict Hallucination &amp; PII Guardrails</h4>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed font-normal">Automated validation checks ensure answers quote verified source references with deterministic ground truth verification.</p>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={openConsultation}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-black hover:bg-neutral-800 shadow-md transition-all active:scale-95"
            >
              <span>Explore AI Architecture Options</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
