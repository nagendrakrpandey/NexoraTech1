"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { ConsultationModal } from "@/components/modals/ConsultationModal";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck,
  Cpu,
  Clock,
  Sparkles,
  MapPin,
  Building2,
  Globe,
  Quote,
} from "lucide-react";

export default function AboutPage() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  const openConsultation = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-consultation-modal"));
    }
  };

  const principles = [
    {
      title: "Zero technical debt",
      desc: "We engineer clean, strictly typed TypeScript and modular enterprise backend architectures built from day one for long-term maintainability, high performance, and seamless developer handovers.",
    },
    {
      title: "Security by design",
      desc: "Security is embedded into every development sprint. Built-in AES-256 GCM encryption, mTLS microservices, and continuous automated CVE vulnerability scanning.",
    },
    {
      title: "Transparent sprints",
      desc: "Two-week agile cycles with live staging previews, transparent code commits, and milestone demos. You always know what is being shipped and when.",
    },
    {
      title: "Resilient infrastructure",
      desc: "Automated multi-AZ failover, self-healing Kubernetes clusters, and sub-15ms edge response latencies engineered to survive massive traffic surges.",
    },
  ];

  const milestones = [
    { year: "2019", title: "Studio Established in New Delhi", desc: "Formed with a core mission to engineer dependable digital systems for high-growth enterprises." },
    { year: "2020", title: "SaaS Architecture Expansion", desc: "Designed multi-tenant frameworks and cloud-native backends powering national institutions." },
    { year: "2021", title: "Education & Enterprise Acceleration", desc: "Rolled out high-throughput LMS and exam portals serving 100,000+ simultaneous users." },
    { year: "2022", title: "Global Client Expansion", desc: "Expanded engineering contracts across North America, Europe, and the Middle East." },
    { year: "2023", title: "ISO 27001 Alignment & SLAs", desc: "Hardened security protocols with zero-trust governance and guaranteed 99.99% uptime." },
    { year: "2024", title: "Multi-Cloud Infrastructure", desc: "Automated Kubernetes GitOps pipelines delivering blue-green deployments across AWS and GCP." },
    { year: "2025", title: "Private AI Engineering", desc: "Engineered deterministic RAG pipelines, semantic search, and VPC-isolated LLM workflows." },
    { year: "2026", title: "Autonomous Agent Workflows", desc: "Architecting self-orchestrating multi-agent systems and real-time enterprise intelligence." },
  ];

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
          className="relative min-h-[72vh] lg:min-h-[78vh] flex flex-col justify-center overflow-hidden -mt-20 sm:-mt-24 pt-36 sm:pt-44 lg:pt-48 pb-16 lg:pb-24 text-white"
          id="about-hero"
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
                NexoraTech / ABOUT NEXORATECH
              </span>

              {/* Main Headline & Lead Paragraph */}
              <div className="flex-1 max-w-4xl">
                <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.08] tracking-tight text-white">
                  ENGINEERING DIGITAL EXCELLENCE <span className="text-white/65 font-normal">FOR GLOBAL BRANDS</span>.
                </h1>

                <p className="mt-6 max-w-2xl text-base md:text-lg font-light leading-relaxed text-white/75">
                  NexoraTech is a leading SaaS and digital engineering company headquartered in New Delhi, India, delivering mission-critical digital infrastructure for institutions, enterprises, and high-growth ventures worldwide.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* SECTION 1: Engineering Enterprise Software Platforms      */}
        {/* (Matches bottom half of uploaded reference image)        */}
        {/* ======================================================== */}
        <section className="relative z-20 w-full overflow-hidden bg-white py-16 md:py-24 border-b border-slate-200/80">
          <div className="w-full max-w-[1240px] mx-auto px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20">
            
            {/* Section Header */}
            <div className="mb-12 md:mb-16">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200/80">
                <h2 className="max-w-2xl font-sans text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-medium leading-[1.05] tracking-tight text-slate-950">
                  Engineering enterprise
                  <span className="block font-normal text-slate-500">software platforms</span>
                </h2>
                <p className="text-sm md:text-base text-slate-600 font-normal max-w-md leading-relaxed">
                  A focused studio of senior software engineers, cloud architects, and product specialists.
                </p>
              </div>
            </div>

            {/* 12-Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Left Column (6 Cols): Story & Quote */}
              <div className="lg:col-span-6 flex flex-col justify-between space-y-8 rounded-3xl bg-slate-50/80 border border-slate-200/90 p-8 sm:p-10 lg:p-12 shadow-sm">
                <div className="space-y-5 text-slate-700 leading-relaxed text-sm md:text-base font-normal">
                  <p>
                    NexoraTech is a premier enterprise software development and digital transformation company headquartered in New Delhi, India. Our primary focus is on engineering scalable cloud architectures, high-concurrency systems, and resilient platforms that power ambitious global enterprises.
                  </p>
                  <p>
                    In addition to our core engineering offerings, we architect custom SaaS platforms, modern web and mobile applications, microservice backends, and private AI agent workflows. Our expertise spans distributed software engineering, web portals, technical product management, and digital growth strategies.
                  </p>
                  <p>
                    We strive to make optimum use of cutting-edge technology, ensuring our clients achieve rapid time-to-market, 99.99% system availability, and seamless scalability across their operations.
                  </p>
                </div>

                {/* Leadership Quote Block */}
                <blockquote className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs relative">
                  <Quote className="w-8 h-8 text-slate-300 absolute -top-4 right-6 bg-white px-1" />
                  <p className="text-base font-medium leading-relaxed text-slate-900 sm:text-lg italic">
                    &ldquo;We have the best of the best technical experts who are not only well experienced in their respective domains but also have the passion to develop perfect skills required on the professional front — this lethal combination of attitude &amp; skills has helped our clients to win.&rdquo;
                  </p>
                  <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-950">NexoraTech Engineering Leadership</span>
                    <span className="text-slate-500 font-mono">Founding Pod</span>
                  </div>
                </blockquote>
              </div>

              {/* Right Column (6 Cols): 4 Bento Cards */}
              <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Card 1 */}
                <div className="flex flex-col justify-between rounded-3xl bg-slate-50/80 border border-slate-200/90 p-8 sm:p-9 hover:border-slate-400 hover:shadow-md transition-all group">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center mb-4 shadow-sm group-hover:scale-105 transition-transform">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="mb-2 font-sans text-base font-bold text-slate-950 md:text-lg">
                      Headquartered in New Delhi
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      As a premier software firm headquartered in New Delhi, India, we architect scalable cloud solutions, enterprise tools, and custom platforms designed to empower institutions across domestic and international markets.
                    </p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="flex flex-col justify-between rounded-3xl bg-slate-50/80 border border-slate-200/90 p-8 sm:p-9 hover:border-slate-400 hover:shadow-md transition-all group">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center mb-4 shadow-sm group-hover:scale-105 transition-transform">
                      <Building2 className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="mb-2 font-sans text-base font-bold text-slate-950 md:text-lg">
                      Education &amp; MSME focus
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      We specialize in building resilient digital platforms for the education and enterprise sectors — driving operational efficiency, automated workflows, and sustainable growth.
                    </p>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="flex flex-col justify-between rounded-3xl bg-slate-50/80 border border-slate-200/90 p-8 sm:p-9 hover:border-slate-400 hover:shadow-md transition-all group">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center mb-4 shadow-sm group-hover:scale-105 transition-transform">
                      <Cpu className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="mb-2 font-sans text-base font-bold text-slate-950 md:text-lg">
                      Full-stack capabilities
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      From high-concurrency web applications and mobile apps to technical product management, zero-trust cloud security, and digital marketing strategies, we provide end-to-end engineering excellence.
                    </p>
                  </div>
                </div>

                {/* Card 4 */}
                <div className="flex flex-col justify-between rounded-3xl bg-slate-50/80 border border-slate-200/90 p-8 sm:p-9 hover:border-slate-400 hover:shadow-md transition-all group">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center mb-4 shadow-sm group-hover:scale-105 transition-transform">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="mb-2 font-sans text-base font-bold text-slate-950 md:text-lg">
                      Lethal attitude &amp; skills
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      Our multidisciplinary engineering pods operate with speed and precision, combining agile delivery with architectural discipline to ensure zero technical debt.
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* SECTION 2: Principles for Dependable Digital Work         */}
        {/* ======================================================== */}
        <section className="relative z-20 w-full overflow-hidden bg-[#FAFAFC] py-20 lg:py-28 border-b border-slate-200/80">
          <div className="w-full max-w-[1240px] mx-auto px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              
              {/* Left Column (4 cols) */}
              <div className="lg:col-span-4">
                <span className="text-xs font-bold font-mono uppercase tracking-widest text-slate-500 mb-2 block">
                  Core Engineering Culture
                </span>
                <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-medium leading-[1.05] tracking-tight text-slate-950">
                  Principles for dependable digital work, <span className="font-normal text-slate-500">built to last and scale.</span>
                </h2>
                <p className="mt-6 text-sm md:text-base font-normal leading-relaxed text-slate-600">
                  How we approach code quality, system longevity, and long-term client partnerships.
                </p>
              </div>

              {/* Right Column (8 cols - 4 Cards Grid) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:col-span-8">
                {principles.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col justify-between space-y-4 rounded-3xl bg-white border border-slate-200/90 p-8 hover:border-slate-400 hover:shadow-md transition-all"
                  >
                    <div>
                      <span className="text-xs font-mono font-bold text-slate-400 mb-2 block">
                        0{idx + 1}
                      </span>
                      <h3 className="mb-2.5 font-sans text-lg font-bold text-slate-950">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-normal leading-relaxed text-slate-600">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </section>

        {/* ======================================================== */}
        {/* SECTION 3: Evolution Roadmap (2019 to 2026)              */}
        {/* ======================================================== */}
        <section className="relative z-20 w-full overflow-hidden bg-white py-20 lg:py-28 border-b border-slate-200/80">
          <div className="w-full max-w-[1240px] mx-auto px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold font-mono uppercase tracking-widest text-slate-500 mb-2 block">
                Company Trajectory
              </span>
              <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-slate-950 leading-tight">
                Evolution roadmap <span className="font-normal text-slate-500">(2019 to 2026)</span>
              </h2>
              <p className="mt-4 text-base text-slate-600 font-normal">
                From an ambitious engineering studio in New Delhi to architecting mission-critical platforms for leading global enterprises.
              </p>
            </div>

            {/* Milestones Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {milestones.map((m, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-7 rounded-3xl bg-slate-50/80 border border-slate-200/90 hover:border-slate-400 hover:bg-white hover:shadow-md transition-all group"
                >
                  <div className="text-2xl font-black font-mono text-slate-950 mb-2 group-hover:text-black">
                    {m.year}
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-2 leading-snug">
                    {m.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {m.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ======================================================== */}
        {/* SECTION 4: High-Impact Call to Action Banner             */}
        {/* ======================================================== */}
        <section className="relative z-20 w-full overflow-hidden bg-black text-white py-20 lg:py-28">
          <div className="w-full max-w-[1240px] mx-auto px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 text-center">
            
            <div className="max-w-3xl mx-auto space-y-6">
              <span className="px-4 py-1.5 rounded-full bg-white/10 text-xs font-mono font-bold tracking-widest uppercase border border-white/20 inline-block text-slate-300">
                Start Building Today
              </span>

              <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-tight">
                Ready to transform your digital infrastructure?
              </h2>

              <p className="text-base sm:text-lg text-slate-400 font-normal max-w-2xl mx-auto leading-relaxed">
                Connect directly with our Principal Architects to scope requirements, review technical feasibility, and plan your sprint delivery.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <button
                  type="button"
                  onClick={openConsultation}
                  className="inline-flex items-center gap-2.5 rounded-[6px] bg-white px-7 py-4 text-sm font-semibold text-black transition hover:bg-slate-100 shadow-xl"
                >
                  <span>Start a conversation</span>
                  <ArrowRight className="w-4 h-4 text-black" />
                </button>

                <Link
                  href="/#services"
                  className="inline-flex items-center gap-2.5 rounded-[6px] border border-white/40 bg-white/10 backdrop-blur-sm px-7 py-4 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
                >
                  <span>Explore capabilities</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Project Consultation Modal */}
      <ConsultationModal />
    </div>
  );
}

