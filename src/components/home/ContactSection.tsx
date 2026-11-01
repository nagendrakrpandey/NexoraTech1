"use client";

import React, { useState } from "react";
import { siteConfig, businessServices } from "@/config/site";
import confetti from "canvas-confetti";
import {
  Send,
  CheckCircle2,
  AlertTriangle,
  Mail,
  Phone,
  MapPin,
  Clock,
  Loader2,
  Terminal,
  ShieldCheck,
} from "lucide-react";

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    serviceInterest: businessServices[0].title,
    projectDescription: "",
  });

  const [loading, setLoading] = useState(false);
  const [successResponse, setSuccessResponse] = useState<{
    leadId: string;
    backendStatus: string;
    message: string;
  } | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);
    setFieldErrors({});

    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = "Full name is required";
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = "Valid business email is required";
    }
    if (!formData.company.trim()) errors.company = "Company name is required";
    if (!formData.projectDescription.trim() || formData.projectDescription.length < 15) {
      errors.projectDescription = "Please provide at least 15 characters of project context";
    }

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit inquiry. Please try again.");
      }

      setSuccessResponse({
        leadId: data.leadId || `LEAD-${Date.now().toString(36).toUpperCase()}`,
        backendStatus: "Verified & Dispatched to Solution Architects",
        message: "Thank you! Your project specification has been logged. Our lead architect will review and reply within one business day.",
      });

      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 },
        colors: ["#000000", "#334155", "#64748B", "#0284C7"],
      });
    } catch (err: any) {
      setErrorMessage(err.message || "An unexpected error occurred. Please reach out via email directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 lg:py-32 bg-white text-slate-900 border-b border-slate-200/80 relative overflow-hidden" id="contact">
      {/* Subtle Luminous Sheen */}
      <div className="absolute top-1/4 left-1/4 w-[700px] h-[500px] bg-slate-100/60 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[600px] h-[450px] bg-slate-100/60 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-xs font-semibold text-slate-900 uppercase tracking-wider mb-4 border border-slate-200/90 shadow-sm">
            <Terminal className="w-3.5 h-3.5 text-slate-950" />
            <span>Initiate Technical Engagement</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-[900] text-slate-950 tracking-tight mb-4 leading-tight">
           Ready to Build Something Extraordinary? <br />
            <span className="bg-gradient-to-r from-slate-950 via-slate-800 to-slate-700 bg-clip-text text-transparent">
              Let&apos;s Turn your Ideas into Reality.
            </span>
          </h2>


          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Outline your architectural goals, timeline, and scale. An enterprise solution architect will review your technical requirements and respond with a structured feasibility breakdown within one business day.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact & Location Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl glass-box-glossy p-8 border border-slate-200/90 shadow-xl space-y-6 bg-white">
              <div>
                <h3 className="text-xl font-bold text-slate-950 mb-2 tracking-tight">Technical Sales &amp; Advisory</h3>
                <p className="text-xs sm:text-sm text-slate-600 font-normal">
                  Direct access to our senior architects for RFPs, technical audits, and dedicated engineering pods.
                </p>
              </div>

              <div className="space-y-4 pt-5 border-t border-slate-100 text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-slate-100 text-slate-900 border border-slate-200 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider font-mono">Direct Inquiries</div>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="font-bold text-slate-950 hover:text-black transition-colors"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-slate-100 text-slate-900 border border-slate-200 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider font-mono">Global Support Desk</div>
                    <div className="flex flex-wrap items-center gap-x-2 font-bold text-slate-950">
                      <a href="tel:+916306719562" className="hover:text-black transition-colors">
                        +91-6306719562
                      </a>
                      <span className="text-slate-400 font-normal">/</span>
                      <a href="tel:+918303483701" className="hover:text-black transition-colors">
                        +91-8303483701
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-slate-100 text-slate-900 border border-slate-200 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider font-mono">Engineering Headquarters</div>
                    <div className="text-slate-800 font-medium text-xs sm:text-sm">
                      {siteConfig.contact.address.street}, {siteConfig.contact.address.city},{" "}
                      {siteConfig.contact.address.state} {siteConfig.contact.address.postalCode}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-slate-100 text-slate-900 border border-slate-200 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider font-mono">Operating Hours</div>
                    <div className="text-slate-800 font-medium text-xs sm:text-sm">{siteConfig.contact.officeHours}</div>
                  </div>
                </div>
              </div>

              {/* Embedded Interactive Map */}
              <div className="pt-4 border-t border-slate-100">
                <div className="text-xs font-bold text-slate-700 mb-2 font-mono uppercase tracking-wider">Corporate Hub Coordinates</div>
                <iframe
                  src="https://maps.google.com/maps?q=Urbtech+Sector+132+Noida&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-44 rounded-2xl border border-slate-200 shadow-inner"
                  loading="lazy"
                  allowFullScreen
                  title="Corporate Headquarters Map"
                />
              </div>
            </div>

            {/* Security Guarantee Note */}
            <div className="p-5 rounded-2xl glass-box-glossy border border-slate-200/90 flex items-center gap-3.5 bg-white shadow-sm">
              <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0" />
              <div className="text-xs text-slate-700">
                <span className="font-bold text-slate-950">Mutual NDA Enforced:</span> Zero-trust security and strict confidentiality protocols are active prior to evaluating code repositories or technical specifications.
              </div>
            </div>
          </div>

          {/* Right Column: Project Inquiry Form in Glossy Glass Terminal */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl glass-box-glossy p-8 sm:p-10 border border-slate-200/90 shadow-xl relative bg-white">
              {successResponse ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-300 shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-950">Inquiry Successfully Logged!</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">{successResponse.message}</p>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-left max-w-md mx-auto space-y-1">
                    <div className="text-slate-900 font-bold">Tracking Lead ID: {successResponse.leadId}</div>
                    <div className="text-slate-600">{successResponse.backendStatus}</div>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setSuccessResponse(null);
                      setFormData({
                        name: "",
                        email: "",
                        company: "",
                        serviceInterest: businessServices[0].title,
                        projectDescription: "",
                      });
                    }}
                    className="mt-6 inline-flex items-center justify-center px-6 py-2.5 rounded-xl text-sm font-bold text-white bg-black hover:bg-neutral-800 transition-colors shadow-sm"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {errorMessage && (
                    <div className="p-4 rounded-xl bg-red-50 border border-red-300 text-red-700 text-xs flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-red-600 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="inquiry-name" className="block text-xs font-bold text-slate-700 mb-1.5 font-mono">
                        YOUR FULL NAME *
                      </label>
                      <input
                        id="inquiry-name"
                        type="text"
                        required
                        placeholder="e.g. Alex Morgan"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl bg-slate-50 border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-all ${
                          fieldErrors.name ? "border-red-400" : "border-slate-200"
                        }`}
                      />
                      {fieldErrors.name && (
                        <p className="text-[11px] text-red-600 mt-1">{fieldErrors.name}</p>
                      )}
                    </div>

                    {/* Business Email */}
                    <div>
                      <label htmlFor="inquiry-email" className="block text-xs font-bold text-slate-700 mb-1.5 font-mono">
                        BUSINESS EMAIL *
                      </label>
                      <input
                        id="inquiry-email"
                        type="email"
                        required
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl bg-slate-50 border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-all ${
                          fieldErrors.email ? "border-red-400" : "border-slate-200"
                        }`}
                      />
                      {fieldErrors.email && (
                        <p className="text-[11px] text-red-600 mt-1">{fieldErrors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="inquiry-company" className="block text-xs font-bold text-slate-700 mb-1.5 font-mono">
                      COMPANY OR ENTERPRISE *
                    </label>
                    <input
                      id="inquiry-company"
                      type="text"
                      required
                      placeholder="Acme Technologies"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl bg-slate-50 border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-all ${
                        fieldErrors.company ? "border-red-400" : "border-slate-200"
                      }`}
                    />
                    {fieldErrors.company && (
                      <p className="text-[11px] text-red-600 mt-1">{fieldErrors.company}</p>
                    )}
                  </div>

                  {/* Primary Service of Interest */}
                  <div>
                    <label htmlFor="inquiry-service" className="block text-xs font-bold text-slate-700 mb-1.5 font-mono">
                      PRIMARY ENGINEERING CAPABILITY *
                    </label>
                    <select
                      id="inquiry-service"
                      value={formData.serviceInterest}
                      onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-black focus:border-black"
                    >
                      {businessServices.map((service) => (
                        <option key={service.id} value={service.title} className="bg-white text-slate-900">
                          {service.category} — {service.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Project Overview */}
                  <div>
                    <label htmlFor="inquiry-desc" className="block text-xs font-bold text-slate-700 mb-1.5 font-mono">
                      PROJECT OVERVIEW &amp; TECHNICAL GOALS *
                    </label>
                    <textarea
                      id="inquiry-desc"
                      rows={4}
                      required
                      placeholder="Describe your architectural requirements, existing tech stack, target timeline, or scale bottlenecks..."
                      value={formData.projectDescription}
                      onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl bg-slate-50 border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-all ${
                        fieldErrors.projectDescription ? "border-red-400" : "border-slate-200"
                      }`}
                    />
                    {fieldErrors.projectDescription && (
                      <p className="text-[11px] text-red-600 mt-1">{fieldErrors.projectDescription}</p>
                    )}
                  </div>

                  {/* Submit Button (Urbanites Black Style) */}
                  <button
                    type="submit"
                    disabled={loading}
                    id="submit-inquiry-btn"
                    className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider text-white bg-black hover:bg-neutral-800 shadow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed border border-black relative overflow-hidden group"
                  >
                    <span className="absolute inset-0 w-1/2 h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out" />
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin relative z-10" />
                        <span className="relative z-10">Validating &amp; Dispatching...</span>
                      </>
                    ) : (
                      <>
                        <span className="relative z-10">Submit Project Specification</span>
                        <Send className="w-4 h-4 relative z-10" />
                      </>
                    )}
                  </button>

                  <div className="text-center text-[11px] text-slate-500 font-mono">
                    Submissions are protected by TLS 1.3 encryption and dispatched directly to lead technical architects.
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
