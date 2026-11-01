"use client";

import React from "react";
import { X, ShieldCheck, FileText } from "lucide-react";
import { siteConfig } from "@/config/site";

interface LegalModalProps {
  type: "privacy" | "terms" | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const isPrivacy = type === "privacy";
  const title = isPrivacy ? "Privacy Policy (Legal Template)" : "Terms of Service (Legal Template)";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Cinematic Frosted Backdrop */}
      <div className="fixed inset-0 bg-black/75 backdrop-blur-xl" onClick={onClose} />

      {/* Glossy Glass Dialog Card */}
      <div className="relative bg-[#090C12]/85 backdrop-blur-2xl border border-white/20 rounded-3xl p-6 sm:p-8 max-w-2xl w-full shadow-[0_30px_90px_rgba(0,0,0,0.9),inset_0_1px_1px_rgba(255,255,255,0.3)] z-10 max-h-[85vh] flex flex-col text-white overflow-hidden">
        
        {/* Specular Top Ambient Highlight */}
        <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none" />

        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-white/10 text-cyan-400 border border-white/10">
              {isPrivacy ? <ShieldCheck className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
            </div>
            <div>
              <h3 className="text-lg font-bold text-white tracking-tight">{title}</h3>
              <div className="text-xs text-white/50">NexoraTech Legal Governance Documentation</div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 text-white/70 hover:text-white hover:bg-white/20 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="py-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-white/75 leading-relaxed font-light custom-scrollbar">
          <div className="p-4 bg-white/[0.05] rounded-2xl border border-white/10 text-xs font-medium text-white/85 backdrop-blur-md">
            Notice: This document provides a regulatory framework placeholder for {siteConfig.legalName}. Consult qualified legal counsel prior to formal commercial execution.
          </div>

          {isPrivacy ? (
            <>
              <h4 className="text-base font-bold text-white pt-2">1. Information Collection &amp; Usage</h4>
              <p>
                NexoraTech collects business contact data provided through our project inquiry portal (such as full name, corporate email address, organization identity, and scope specifications) strictly for consulting engagement evaluation. We never monetize, rent, or distribute client data.
              </p>

              <h4 className="text-base font-bold text-white pt-2">2. Enterprise Security Architecture</h4>
              <p>
                All transmitted inquiry payloads are encrypted using TLS 1.3 in transit and AES-256 at rest. Access to technical specifications is restricted exclusively to vetted solution architects bound by non-disclosure covenants.
              </p>

              <h4 className="text-base font-bold text-white pt-2">3. Data Retention &amp; Right to Erasure</h4>
              <p>
                Prospective client records are maintained solely for ongoing engineering communications. You may request immediate cryptographic erasure of your company data at any time by emailing {siteConfig.contact.email}.
              </p>
            </>
          ) : (
            <>
              <h4 className="text-base font-bold text-white pt-2">1. Master Services Agreement (MSA)</h4>
              <p>
                All development, cloud orchestration, and AI consulting engagements performed by NexoraTech are governed by individualized Statements of Work (SOW) executed under a mutually agreed Master Services Agreement.
              </p>

              <h4 className="text-base font-bold text-white pt-2">2. Intellectual Property (IP) Transfer</h4>
              <p>
                Upon completion of agreed contractual milestones and financial settlement, 100% of custom developed source code, container configurations, and architectural schematics are unconditionally assigned to the client.
              </p>

              <h4 className="text-base font-bold text-white pt-2">3. Warranty &amp; SLA Guarantees</h4>
              <p>
                Production deployments include explicit warranty defect-remediation windows and customizable 24/7 reliability service level agreements as detailed in individual project schedules.
              </p>
            </>
          )}
        </div>

        <div className="pt-4 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-white text-black hover:bg-neutral-200 transition-colors shadow-md"
          >
            Acknowledge &amp; Close
          </button>
        </div>
      </div>
    </div>
  );
};
