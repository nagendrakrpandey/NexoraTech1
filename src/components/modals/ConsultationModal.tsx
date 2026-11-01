"use client";

import React, { useState, useEffect } from "react";
import {
  X,
  Calendar,
  CheckCircle2,
  Clock,
  Sparkles,
  Building,
  Mail,
  Phone,
  User,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import confetti from "canvas-confetti";

interface ConsultationModalProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen: controlledIsOpen,
  onClose: controlledOnClose,
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form State (Without budget)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "Custom Enterprise Software & ERP",
    preferredDate: "",
    preferredTime: "11:00 AM (IST)",
    description: "",
  });

  const isModalOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;

  const handleClose = () => {
    if (controlledOnClose) {
      controlledOnClose();
    } else {
      setInternalIsOpen(false);
    }
    if (isSubmitted) {
      setTimeout(() => setIsSubmitted(false), 300);
    }
  };

  useEffect(() => {
    const handleOpenEvent = () => setInternalIsOpen(true);
    window.addEventListener("open-consultation-modal", handleOpenEvent);
    return () => window.removeEventListener("open-consultation-modal", handleOpenEvent);
  }, []);

  // Escape key closes modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isModalOpen) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);

  // Lock body scroll when open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate instant enterprise booking submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch (err) {
        // Confetti fallback
      }
    }, 900);
  };

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Cinematic Frosted Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-md transition-opacity animate-in fade-in duration-300"
        onClick={handleClose}
      />

      {/* White Glossy Glass Dialog Card (Ubhar ke aane wala pop-out effect) */}
      <div className="relative w-full max-w-2xl rounded-3xl bg-white/95 backdrop-blur-3xl border border-white/80 shadow-[0_25px_70px_rgba(0,0,0,0.35),0_0_1px_1px_rgba(255,255,255,0.9),inset_0_1px_0_rgba(255,255,255,1)] overflow-hidden z-10 animate-in zoom-in-95 duration-200 max-h-[92vh] flex flex-col text-slate-900">
        
        {/* Specular Top Ambient Highlight */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-slate-300 to-transparent pointer-events-none z-20" />
        
        {/* Top Header Glass Banner */}
        <div className="relative bg-white/80 px-6 sm:px-8 py-6 text-slate-900 shrink-0 border-b border-slate-200/80">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/90 text-xs font-semibold text-slate-800 mb-2.5 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-slate-900" />
                <span>Zero-Commitment Technical Discovery</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-[900] tracking-tight text-slate-950">
                Book Architectural Consultation
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-md font-normal leading-relaxed">
                Connect directly with our Principal Solution Architects to audit requirements, review tech stacks, and plan project delivery.
              </p>
            </div>

            <button
              onClick={handleClose}
              className="p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-black border border-slate-200 transition-colors shrink-0 shadow-xs"
              aria-label="Close dialog"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Body: White Glass Form */}
        <div className="p-6 sm:px-8 sm:py-7 overflow-y-auto space-y-6 relative z-10 custom-scrollbar">
          {isSubmitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-black text-slate-950">
                Consultation Booked Successfully!
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed font-normal">
                Thank you, <strong className="text-slate-950 font-bold">{formData.name || "partner"}</strong>. A calendar invite and Google Meet link have been dispatched to <strong className="text-slate-950 font-bold">{formData.email}</strong>. Our Lead Architect will join your session.
              </p>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 max-w-md mx-auto text-left text-xs text-slate-800 space-y-2.5 shadow-xs">
                <div className="flex justify-between">
                  <span className="text-slate-500 font-medium">Service:</span>
                  <span className="font-bold text-slate-950">{formData.service}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 font-medium">Scheduled Slot:</span>
                  <span className="font-bold text-slate-950">
                    {formData.preferredDate || "Earliest Availability"} at {formData.preferredTime}
                  </span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-7 py-3 rounded-xl font-bold text-sm text-white bg-black hover:bg-neutral-800 shadow-md transition-all"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              {/* Row 1: Name & Work Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-mono">
                    Your Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikram Singhania"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50/90 border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all focus:bg-white focus:border-black focus:ring-1 focus:ring-black shadow-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-mono">
                    Work Email *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                    <input
                      type="email"
                      required
                      placeholder="vikram@enterprise.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50/90 border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all focus:bg-white focus:border-black focus:ring-1 focus:ring-black shadow-xs"
                    />
                  </div>
                </div>
              </div>

              {/* Row 2: Phone & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-mono">
                    Phone / WhatsApp *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 63067 19562"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50/90 border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all focus:bg-white focus:border-black focus:ring-1 focus:ring-black shadow-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-mono">
                    Company / Startup Name
                  </label>
                  <div className="relative">
                    <Building className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      placeholder="e.g. NextGen Logistics Pvt Ltd"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50/90 border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all focus:bg-white focus:border-black focus:ring-1 focus:ring-black shadow-xs"
                    />
                  </div>
                </div>
              </div>

              {/* Row 3: Service of Interest (Full Width - Estimate Budget Removed) */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-mono">
                  Service of Interest *
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50/90 border border-slate-200 text-sm text-slate-900 outline-none transition-all focus:bg-white focus:border-black focus:ring-1 focus:ring-black shadow-xs"
                >
                  <option value="Custom Enterprise Software & ERP">Custom Enterprise Software & ERP</option>
                  <option value="High-Performance Web Applications">High-Performance Web Applications</option>
                  <option value="Native iOS & Android Mobile Apps">Native iOS & Android Mobile Apps</option>
                  <option value="Cloud Infrastructure & Enterprise DevOps">Cloud Infrastructure & Enterprise DevOps</option>
                  <option value="Mobile Device Management (MDM) & Fleet Security">Mobile Device Management (MDM) & Fleet Security</option>
                  <option value="Nexora HRMS & Automated Payroll">Nexora HRMS & Automated Payroll</option>
                  <option value="IT Asset Management (ITAM)">IT Asset Management (ITAM)</option>
                  <option value="AI & Autonomous Business Automation">AI & Autonomous Business Automation</option>
                  <option value="Proprietary SaaS Suite Demonstration">Proprietary SaaS Suite Demonstration</option>
                </select>
              </div>

              {/* Row 4: Preferred Date & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-mono">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400 pointer-events-none" />
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50/90 border border-slate-200 text-sm text-slate-900 outline-none transition-all focus:bg-white focus:border-black focus:ring-1 focus:ring-black shadow-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-mono">
                    Preferred Time Slot
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400 pointer-events-none" />
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50/90 border border-slate-200 text-sm text-slate-900 outline-none transition-all focus:bg-white focus:border-black focus:ring-1 focus:ring-black shadow-xs"
                    >
                      <option value="11:00 AM (IST)">11:00 AM (IST) / Morning Slot</option>
                      <option value="02:30 PM (IST)">02:30 PM (IST) / Afternoon Slot</option>
                      <option value="05:00 PM (IST)">05:00 PM (IST) / Evening Slot</option>
                      <option value="08:00 PM (IST)">08:00 PM (IST) / Global US/EU Overlap</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Project Brief */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-mono">
                  Brief Overview of Your Project &amp; Goals
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us what you want to build, existing bottlenecks, or target systems..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50/90 border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all focus:bg-white focus:border-black focus:ring-1 focus:ring-black shadow-xs resize-y"
                />
              </div>

              {/* Security & NDA Assurance */}
              <div className="flex items-center gap-2 text-xs text-slate-600 pt-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>All discussions are protected under strict Mutual Non-Disclosure Agreement (NDA).</span>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-sm text-white bg-black hover:bg-neutral-800 shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Securing Your Session...</span>
                    </>
                  ) : (
                    <>
                      <span>Confirm &amp; Book Consultation</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
