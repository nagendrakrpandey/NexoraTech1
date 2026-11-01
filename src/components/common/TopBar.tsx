"use client";

import React from "react";
import { Mail, Phone, MapPin, Linkedin, Instagram, Twitter, ArrowRight } from "lucide-react";

export const TopBar: React.FC = () => {
  const triggerConsultation = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-consultation-modal"));
    }
  };

  return (
    <div className="bg-black text-slate-300 text-xs py-2 px-4 sm:px-6 border-b border-neutral-800 relative z-40 hidden md:block">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Left: Contact Info */}
        <div className="flex items-center gap-5 overflow-hidden text-[11px] lg:text-xs">
          <a
            href="mailto:pandeynagendra804@gmail.com"
            className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-slate-400" />
            <span>pandeynagendra804@gmail.com</span>
          </a>

          <div className="inline-flex items-center gap-1.5 text-slate-300">
            <Phone className="w-3.5 h-3.5 text-slate-400" />
            <a href="tel:+916306719562" className="hover:text-white transition-colors">+91-6306719562</a>
            <span className="text-neutral-600">/</span>
            <a href="tel:+918303483701" className="hover:text-white transition-colors">+91-8303483701</a>
          </div>

          <div className="hidden xl:inline-flex items-center gap-1.5 text-slate-400">
            <MapPin className="w-3.5 h-3.5 text-slate-500" />
            <span>Urbtech, Sector 132, Noida / Global Hub</span>
          </div>
        </div>

        {/* Right: Socials & Quick CTA */}
        <div className="flex items-center gap-4 shrink-0">
          <button
            onClick={triggerConsultation}
            className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-white bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full border border-white/20 transition-all shadow-sm"
          >
            <span>Request Free Tech Audit</span>
            <ArrowRight className="w-3 h-3 text-white" />
          </button>

          <div className="h-3.5 w-px bg-neutral-800" />

          <div className="flex items-center gap-3 text-slate-400">
            <a
              href="https://linkedin.com/company/nexoratech"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-white transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://twitter.com/nexoratech"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter / X"
              className="hover:text-white transition-colors"
            >
              <Twitter className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://instagram.com/nexoratech"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-white transition-colors"
            >
              <Instagram className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
