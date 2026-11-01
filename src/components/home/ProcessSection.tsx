"use client";

import React, { useState } from "react";
import { processSteps } from "@/config/site";
import {
  Compass,
  Cpu,
  Palette,
  Terminal,
  Network,
  Rocket,
  Activity,
  FileCheck2,
  ArrowRight,
} from "lucide-react";

const stepIcons = [Compass, Cpu, Palette, Terminal, Network, Rocket, Activity];

export const ProcessSection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const activeStep = processSteps[activeStepIndex];
  const StepIcon = stepIcons[activeStepIndex] || Compass;

  const openConsultation = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-consultation-modal"));
    }
  };

  return (
    <section id="process" className="py-24 lg:py-32 bg-[#FAFAFC] text-slate-900 border-b border-slate-200/80 relative overflow-hidden">
      {/* Subtle Luminous Ambient Sheen */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[700px] h-[400px] bg-slate-200/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-xs font-semibold text-slate-900 uppercase tracking-wider mb-4 border border-slate-200/90 shadow-sm">
            <Compass className="w-3.5 h-3.5 text-slate-950" />
            <span>Engineering Methodology</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-[900] tracking-tight text-slate-950 mb-4">
            From Idea to{" "}
            <span className="bg-gradient-to-r from-slate-950 via-slate-800 to-slate-700 bg-clip-text text-transparent">
              Production Execution
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-normal">
            A disciplined, transparent 7-stage engineering lifecycle designed to eliminate guesswork, mitigate architectural risk, and accelerate delivery velocity.
          </p>
        </div>

        {/* Stepper Navigation Buttons (Urbanites Black & White Style) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 mb-10">
          {processSteps.map((step, index) => {
            const Icon = stepIcons[index];
            const isActive = index === activeStepIndex;

            return (
              <button
                key={step.step}
                type="button"
                onClick={() => setActiveStepIndex(index)}
                className={`p-4 rounded-2xl flex flex-col items-center text-center transition-all duration-300 border ${
                  isActive
                    ? "bg-black text-white border-black shadow-lg -translate-y-1"
                    : "bg-white border-slate-200/80 text-slate-700 hover:border-slate-400 hover:text-black shadow-xs"
                }`}
              >
                <div className={`text-[10px] font-bold mb-1.5 font-mono ${isActive ? "text-slate-300" : "text-slate-500"}`}>
                  {step.step}
                </div>
                <div className={`p-2.5 rounded-xl mb-2.5 ${isActive ? "bg-neutral-800 text-white" : "bg-slate-100 text-slate-800"}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <span className={`text-xs font-bold ${isActive ? "text-white" : "text-slate-800"}`}>
                  {step.phase}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Display (Glossy Glass Box) */}
        <div className="rounded-3xl glass-box-glossy p-8 sm:p-10 border border-slate-200/90 shadow-xl bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-slate-900 mb-2">
                <span>STAGE {activeStep.step}</span>
                <span className="text-slate-300">•</span>
                <span className="uppercase">{activeStep.phase} PHASE</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-[900] text-slate-950 tracking-tight mb-4">
                {activeStep.title}
              </h3>

              <p className="text-base text-slate-600 leading-relaxed mb-6 font-normal">
                {activeStep.description}
              </p>

              {/* Verified Deliverable Badge */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-3">
                <FileCheck2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <div>
                  <div className="text-[10px] text-slate-500 uppercase font-mono tracking-wider font-semibold">Formal Stage Deliverable</div>
                  <div className="text-sm font-bold text-slate-900 mt-0.5">{activeStep.deliverable}</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center">
              <div className="w-24 h-24 rounded-3xl bg-slate-100 border border-slate-200 text-slate-900 flex items-center justify-center mb-6 shadow-sm">
                <StepIcon className="w-12 h-12" />
              </div>

              <button
                type="button"
                onClick={openConsultation}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-black hover:bg-neutral-800 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md"
              >
                <span>Initiate Stage {activeStep.step}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
