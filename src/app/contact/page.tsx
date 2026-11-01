"use client";

import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { ConsultationModal } from "@/components/modals/ConsultationModal";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Building2,
  Clock,
  ShieldCheck,
  ArrowRight,
  ExternalLink,
  Sparkles,
} from "lucide-react";

export default function ContactPage() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        setErrorMessage(
          data.message || "Failed to submit your message. Please try again."
        );
      }
    } catch (err) {
      console.error("Submission error:", err);
      setErrorMessage("Network error occurred. Please try again or reach us via direct email.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-white text-slate-900 selection:bg-black selection:text-white">
      {/* Background Video Engine - Fixed & Non-Scrollable */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
        tabIndex={-1}
        className="fixed inset-0 z-0 w-full h-full object-cover object-center pointer-events-none"
      >
        <source src="/assets/background-60.mp4" type="video/mp4" />
        <source src="/background-60.mp4" type="video/mp4" />
      </video>

      {/* Floating Capsule Header */}
      <Header />

      <main id="main-content" className="relative z-10">
        {/* ======================================================== */}
        {/* HERO SECTION (Matches Reference Image Exactly)           */}
        {/* ======================================================== */}
        <section
          className="relative min-h-[70vh] lg:min-h-[76vh] flex flex-col justify-center overflow-hidden -mt-20 sm:-mt-24 pt-36 sm:pt-44 lg:pt-48 pb-16 lg:pb-24 text-white"
          id="contact-hero"
        >
          {/* Cinematic Dark Vignette & Grid Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/80 z-10 pointer-events-none" />
          <div className="absolute inset-0 bg-black/25 z-10 pointer-events-none" />
          <div
            className="absolute inset-0 opacity-[0.14] z-10 pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255, 255, 255, 0.12) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255, 255, 255, 0.12) 1px, transparent 1px)
              `,
              backgroundSize: "64px 64px",
            }}
          />

          {/* Hero Content Container */}
          <div className="relative z-20 w-full max-w-[1240px] mx-auto px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20">
            <div className="flex flex-col md:flex-row items-start gap-4 md:gap-10 lg:gap-14">
              
              {/* Left Breadcrumb / Kicker */}
              <span className="w-auto md:w-48 lg:w-56 shrink-0 pt-1 font-sans text-xs md:text-sm font-semibold tracking-[0.25em] text-white/75 uppercase">
                NexoraTech / CONTACT
              </span>

              {/* Main Headline & Lead Paragraph */}
              <div className="flex-1 max-w-4xl">
                <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.08] tracking-tight text-white">
                  LET&apos;S BUILD WHAT&apos;S{" "}
                  <span className="text-white/60 font-normal">NEXT</span>.
                </h1>

                <p className="mt-6 max-w-2xl text-base md:text-lg font-light leading-relaxed text-white/75">
                  Share your ambition, scope, and timeline. We&apos;ll turn the conversation into a practical technical path forward.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* SECTION 1: Let's start a real conversation                */}
        {/* (Matches bottom half of uploaded reference image)        */}
        {/* ======================================================== */}
        <section className="relative z-20 w-full overflow-hidden bg-white/95 backdrop-blur-xl py-16 md:py-24 border-b border-slate-200/80">
          <div className="w-full max-w-[1240px] mx-auto px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20">
            
            {/* Section Header */}
            <div className="mb-12 md:mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pb-8 border-b border-slate-200/80 items-end">
                <div className="lg:col-span-5">
                  <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.02] tracking-tight text-black">
                    Let&apos;s start a
                    <span className="block font-normal text-slate-500">real conversation.</span>
                  </h2>
                </div>
                <div className="lg:col-span-7">
                  <p className="max-w-xl text-base md:text-lg font-light leading-relaxed text-slate-600">
                    Tell us what you&apos;re building, where you want to go, and what is standing in the way. We&apos;ll come back with a practical next step.
                  </p>
                </div>
              </div>
            </div>

            {/* Grid: 2 Large Cards (Direct Line & Form) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Left Column (5 Cols): Direct Line to the Right Team */}
              <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl bg-slate-50/90 border border-slate-200/90 p-8 sm:p-10 shadow-sm">
                <div>
                  <h3 className="max-w-sm font-sans text-2xl sm:text-3xl font-medium leading-[1.1] tracking-tight text-black mb-8">
                    A direct line to the{" "}
                    <span className="block font-normal text-slate-500">right team.</span>
                  </h3>

                  {/* Contact Action Tiles */}
                  <div className="space-y-4">
                    
                    {/* Email Tile */}
                    <a
                      href="mailto:pandeynagendra804@gmail.com"
                      className="group flex items-center gap-4 rounded-2xl bg-white border border-slate-200/80 p-5 shadow-xs hover:border-black hover:shadow-md transition-all duration-200"
                    >
                      <div className="w-11 h-11 rounded-xl bg-black text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <strong className="block text-xs font-semibold uppercase tracking-wider text-slate-500">
                          Email us
                        </strong>
                        <span className="block truncate text-sm sm:text-base font-bold text-slate-900 group-hover:text-black">
                          pandeynagendra804@gmail.com
                        </span>
                        <span className="text-xs text-slate-500">Direct response within 24 hours</span>
                      </div>
                    </a>

                    {/* Phone Tile */}
                    <div className="group flex items-center gap-4 rounded-2xl bg-white border border-slate-200/80 p-5 shadow-xs hover:border-black hover:shadow-md transition-all duration-200">
                      <div className="w-11 h-11 rounded-xl bg-black text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <strong className="block text-xs font-semibold uppercase tracking-wider text-slate-500">
                          Call us
                        </strong>
                        <div className="flex flex-wrap items-center gap-x-2 text-sm sm:text-base font-bold text-slate-900">
                          <a href="tel:+916306719562" className="hover:text-black transition-colors">+91-6306719562</a>
                          <span className="text-slate-400 font-normal">/</span>
                          <a href="tel:+918303483701" className="hover:text-black transition-colors">+91-8303483701</a>
                        </div>
                        <span className="text-xs text-slate-500">Direct engineering consultation desk</span>
                      </div>
                    </div>

                    {/* Headquarters Tile */}
                    <div className="flex items-center gap-4 rounded-2xl bg-white border border-slate-200/80 p-5 shadow-xs">
                      <div className="w-11 h-11 rounded-xl bg-black text-white flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <strong className="block text-xs font-semibold uppercase tracking-wider text-slate-500">
                          Headquarters
                        </strong>
                        <span className="block text-sm font-bold text-slate-900">
                          Noida / Global Engineering Hub
                        </span>
                        <span className="text-xs text-slate-500">Urbtech, Sector 132</span>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Bottom Footnote */}
                <div className="mt-8 pt-6 border-t border-slate-200/80">
                  <p className="text-sm font-light leading-relaxed text-slate-600">
                    &ldquo;Whether you&apos;re beginning with an idea or scaling an established platform, we&apos;re ready to help you move forward.&rdquo;
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-xs font-medium text-slate-800">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Strict NDA &amp; confidential IP agreements guaranteed</span>
                  </div>
                </div>
              </div>

              {/* Right Column (7 Cols): Tell Us What You're Building Form */}
              <div className="lg:col-span-7 rounded-3xl bg-slate-50/90 border border-slate-200/90 p-8 sm:p-10 lg:p-12 shadow-sm">
                
                {isSubmitted ? (
                  <div className="grid min-h-[380px] place-items-center text-center">
                    <div className="max-w-sm space-y-4">
                      <div className="mx-auto grid size-16 place-items-center rounded-full bg-black text-white shadow-md">
                        <CheckCircle2 className="size-8 text-emerald-400" />
                      </div>
                      <h4 className="text-2xl font-bold text-slate-900">
                        Message received
                      </h4>
                      <p className="text-sm font-light leading-relaxed text-slate-600">
                        Thank you for reaching out. Our engineering team has received your project details and will be in touch shortly.
                      </p>
                      <div className="pt-2">
                        <button
                          type="button"
                          onClick={() => setIsSubmitted(false)}
                          className="text-xs font-bold uppercase tracking-wider text-black underline underline-offset-4 hover:text-slate-700 transition"
                        >
                          Send another message
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-200/80">
                      <h3 className="text-2xl sm:text-3xl font-medium leading-tight tracking-tight text-black">
                        Tell us what you&apos;re building.
                      </h3>
                      <span className="hidden text-xs font-light text-slate-500 sm:block">
                        Fields marked * are required
                      </span>
                    </div>

                    {errorMessage && (
                      <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-xs sm:text-sm text-red-700">
                        {errorMessage}
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid gap-4 sm:grid-cols-2">
                        
                        {/* Name */}
                        <div className="space-y-2">
                          <label
                            htmlFor="name"
                            className="block text-xs font-medium tracking-wide text-black/80"
                          >
                            Your name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            className="w-full rounded-xl bg-white px-4 py-3.5 text-sm font-normal text-black border border-slate-200/90 outline-none placeholder:text-slate-400 transition focus:border-black focus:ring-1 focus:ring-black"
                          />
                        </div>

                        {/* Email */}
                        <div className="space-y-2">
                          <label
                            htmlFor="email"
                            className="block text-xs font-medium tracking-wide text-black/80"
                          >
                            Your email *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            className="w-full rounded-xl bg-white px-4 py-3.5 text-sm font-normal text-black border border-slate-200/90 outline-none placeholder:text-slate-400 transition focus:border-black focus:ring-1 focus:ring-black"
                          />
                        </div>

                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        
                        {/* Phone */}
                        <div className="space-y-2">
                          <label
                            htmlFor="phone"
                            className="block text-xs font-medium tracking-wide text-black/80"
                          >
                            Your number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Your Number"
                            className="w-full rounded-xl bg-white px-4 py-3.5 text-sm font-normal text-black border border-slate-200/90 outline-none placeholder:text-slate-400 transition focus:border-black focus:ring-1 focus:ring-black"
                          />
                        </div>

                        {/* Subject */}
                        <div className="space-y-2">
                          <label
                            htmlFor="subject"
                            className="block text-xs font-medium tracking-wide text-black/80"
                          >
                            Subject
                          </label>
                          <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Subject"
                            className="w-full rounded-xl bg-white px-4 py-3.5 text-sm font-normal text-black border border-slate-200/90 outline-none placeholder:text-slate-400 transition focus:border-black focus:ring-1 focus:ring-black"
                          />
                        </div>

                      </div>

                      {/* Message */}
                      <div className="space-y-2">
                        <label
                          htmlFor="message"
                          className="block text-xs font-medium tracking-wide text-black/80"
                        >
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your project"
                          className="w-full resize-y rounded-xl bg-white px-4 py-3.5 text-sm font-normal text-black border border-slate-200/90 outline-none placeholder:text-slate-400 transition focus:border-black focus:ring-1 focus:ring-black"
                        />
                      </div>

                      {/* Submit Button & Response SLA */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="inline-flex items-center justify-center gap-2 rounded-xl bg-black px-7 py-3.5 text-sm font-semibold text-white shadow-md hover:bg-neutral-800 transition active:scale-[0.98] disabled:opacity-60"
                        >
                          {isSubmitting ? (
                            <>
                              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                              <span>Sending message...</span>
                            </>
                          ) : (
                            <>
                              <Send className="w-4 h-4 text-white" />
                              <span>Send message</span>
                            </>
                          )}
                        </button>

                        <span className="text-xs font-light text-slate-500">
                          We&apos;ll respond within one business day.
                        </span>
                      </div>

                    </form>
                  </div>
                )}

              </div>

            </div>

          </div>
        </section>

        {/* ======================================================== */}
        {/* SECTION 2: Our locations / Visit our offices             */}
        {/* ======================================================== */}
        <section className="relative z-20 w-full bg-[#0B0D11] text-white py-16 md:py-24 border-b border-white/10">
          <div className="w-full max-w-[1240px] mx-auto px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20">
            
            {/* Section Header */}
            <div className="mb-12">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60 block">
                Our locations
              </span>
              <div className="mt-3 flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight">
                  Visit our <span className="font-normal text-white/55">offices</span>
                </h2>
                <p className="max-w-md text-sm md:text-base font-light leading-relaxed text-white/65">
                  From New Delhi and Bengaluru, we partner with enterprises and institutions across India and around the world.
                </p>
              </div>
            </div>

            {/* Location Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Office 1: Noida (Head Office) */}
              <article className="rounded-3xl bg-white/[0.04] border border-white/10 p-8 sm:p-10 hover:border-white/20 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider bg-white/10 text-white font-semibold">
                      <Building2 className="w-3.5 h-3.5 text-cyan-400" />
                      HEAD OFFICE
                    </span>
                    <span className="text-xs text-white/50 font-mono">EST. 2019</span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">
                    Noida, India
                  </h3>
                  <p className="text-sm font-light text-white/70 leading-relaxed mb-6">
                    urbatech noida Sector 132, Noida, Uttar Pradesh 201304
                  </p>

                  <div className="space-y-2 text-xs text-white/60 pt-4 border-t border-white/10">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-white/40" />
                      <span>Mon - Fri: 9:30 AM - 6:30 PM IST</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-white/40" />
                      <span>Executive Briefing Center &amp; AI Engineering Pod</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4">
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white hover:text-cyan-400 transition-colors"
                  >
                    <span>View on map</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </article>

              {/* Office 2: Bengaluru (Tech Innovation Center) */}
              <article className="rounded-3xl bg-white/[0.04] border border-white/10 p-8 sm:p-10 hover:border-white/20 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider bg-white/10 text-white font-semibold">
                      <Building2 className="w-3.5 h-3.5 text-purple-400" />
                      TECH HUB &amp; SRE
                    </span>
                    <span className="text-xs text-white/50 font-mono">24/7 OPS</span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">
                    Bengaluru, India
                  </h3>
                  <p className="text-sm font-light text-white/70 leading-relaxed mb-6">
                    Outer Ring Road Technology Corridor, Bellandur, Bengaluru, Karnataka 560103
                  </p>

                  <div className="space-y-2 text-xs text-white/60 pt-4 border-t border-white/10">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-white/40" />
                      <span>24/7 SRE &amp; Distributed Infrastructure Operations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-white/40" />
                      <span>Kubernetes Cloud Clusters &amp; Microservices Lab</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4">
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white hover:text-purple-400 transition-colors"
                  >
                    <span>View on map</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </article>

            </div>

          </div>
        </section>

      </main>

      {/* Global Footer */}
      <Footer />

      {/* Interactive Consultation Modal */}
      <ConsultationModal />
    </div>
  );
}

