"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { siteConfig, businessServices } from "@/config/site";
import { LegalModal } from "@/components/modals/LegalModal";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowUp,
  Linkedin,
  Github,
  Twitter,
} from "lucide-react";

export const Footer: React.FC = () => {
  const [legalModalType, setLegalModalType] = useState<"privacy" | "terms" | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="bg-black border-t border-neutral-800 text-slate-300 pt-16 pb-12 relative z-20 overflow-hidden">
        {/* Ambient subtle glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[300px] bg-neutral-800/20 rounded-full blur-[140px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-neutral-800">
            {/* Column 1: Brand & Identity */}
            <div className="lg:col-span-4 space-y-4">
              <Logo variant="dark" width={260} height={60} />
              <p className="text-sm text-slate-400 leading-relaxed pr-4 font-normal">
                Enterprise Digital Engineering, Cloud Infrastructure, SaaS Platforms, and AI Integration. Turning ambitious ideas into secure, scalable digital reality.
              </p>

              {/* Social URLs */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-slate-300 hover:text-white hover:border-neutral-700 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-slate-300 hover:text-white hover:border-neutral-700 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-slate-300 hover:text-white hover:border-neutral-700 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Column 2: Core Engineering Services */}
            <div className="lg:col-span-3 space-y-3">
              <div className="text-xs font-bold text-white uppercase tracking-wider mb-2 font-mono">
                Engineering Services
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
                {businessServices.slice(0, 6).map((service) => (
                  <li key={service.id}>
                    <Link
                      href={`#services?id=${service.id}`}
                      className="hover:text-white transition-colors"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Cloud & Emerging Tech */}
            <div className="lg:col-span-2 space-y-3">
              <div className="text-xs font-bold text-white uppercase tracking-wider mb-2 font-mono">
                Solutions &amp; Cloud
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
                <li>
                  <Link href="#cloud" className="hover:text-white transition-colors">
                    Cloud Infrastructure
                  </Link>
                </li>
                <li>
                  <Link href="#ai" className="hover:text-white transition-colors">
                    AI &amp; Agentic Pipelines
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-white transition-colors">
                    Solution Blueprints
                  </Link>
                </li>
                <li>
                  <Link href="#process" className="hover:text-white transition-colors">
                    7-Stage Process
                  </Link>
                </li>
                <li>
                  <Link href="#case-studies" className="hover:text-white transition-colors">
                    Industry Capabilities
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About NexoraTech
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact &amp; Inquiries
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Configurable Contact Information */}
            <div className="lg:col-span-3 space-y-3">
              <div className="text-xs font-bold text-white uppercase tracking-wider mb-2 font-mono">
                Corporate Office
              </div>
              <div className="space-y-2.5 text-xs text-slate-400">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <span>
                    {siteConfig.contact.address.street}, {siteConfig.contact.address.city},{" "}
                    {siteConfig.contact.address.state} {siteConfig.contact.address.postalCode}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                  <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white transition-colors">
                    {siteConfig.contact.email}
                  </a>
                </div>
                <div className="flex items-start gap-2">
                  <Phone className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <div className="flex flex-col sm:flex-row sm:gap-2">
                    <a href="tel:+916306719562" className="hover:text-white transition-colors">
                      +91-6306719562
                    </a>
                    <span className="hidden sm:inline text-slate-600">/</span>
                    <a href="tel:+918303483701" className="hover:text-white transition-colors">
                      +91-8303483701
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <span>{siteConfig.contact.officeHours}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar: Copyright & Legal Modals */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div>
              &copy; {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved. &bull; Tagline: &ldquo;{siteConfig.tagline}&rdquo;
            </div>

            <div className="flex items-center gap-6">
              <button
                type="button"
                onClick={() => setLegalModalType("privacy")}
                className="hover:text-slate-300 transition-colors underline"
              >
                Privacy Policy
              </button>
              <button
                type="button"
                onClick={() => setLegalModalType("terms")}
                className="hover:text-slate-300 transition-colors underline"
              >
                Terms of Service
              </button>
              <button
                type="button"
                onClick={scrollToTop}
                className="p-2 rounded-lg bg-neutral-900 text-slate-400 hover:text-white border border-neutral-800 transition-colors shadow-xs"
                aria-label="Back to top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Legal Policy Modal */}
      <LegalModal type={legalModalType} onClose={() => setLegalModalType(null)} />
    </>
  );
};
