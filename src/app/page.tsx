import React from "react";
import { Header } from "@/components/common/Header";
import { BackgroundVideo } from "@/components/common/BackgroundVideo";
import { Hero } from "@/components/home/Hero";
import { EngineeringNextGenSection } from "@/components/home/EngineeringNextGenSection";
import { WhatWeDoSection } from "@/components/home/WhatWeDoSection";
import { RealCaseStudiesSection } from "@/components/home/RealCaseStudiesSection";
import { EnterpriseTechStackSection } from "@/components/home/EnterpriseTechStackSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { CloudInfraSection } from "@/components/home/CloudInfraSection";
import { AIEngineeringSection } from "@/components/home/AIEngineeringSection";
import { AboutCompanySection } from "@/components/home/AboutCompanySection";
import { TeamSection } from "@/components/home/TeamSection";
import { FAQSection } from "@/components/home/FAQSection";
import { ContactSection } from "@/components/home/ContactSection";
import { Footer } from "@/components/common/Footer";
import { ConsultationModal } from "@/components/modals/ConsultationModal";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-transparent text-slate-900 selection:bg-black selection:text-white">
      {/* Background Video Engine - Fixed & Non-Scrollable across Hero and Next-Gen Glass Section */}
      <BackgroundVideo />

      {/* Refined Compact Header with Original Logo & Primary CTA */}
      <Header />

      <main id="main-content" className="relative z-10">
        {/* 1. Premium Hero Section with Non-Scrollable Video Playing Behind */}
        <Hero />

        {/* 2. Glass Box: Engineering Next-Gen Digital Infrastructure (Translucent over Video) */}
        <EngineeringNextGenSection />

        {/* 3. Sophisticated Service Cards with Consistent Icons, Hover Lift, Arrow Movement & Ample Spacing */}
        <WhatWeDoSection />

        {/* 5. Trust & Credibility: 3 Dark Architectural Case Studies & Measurable Technical Metrics */}
        <RealCaseStudiesSection />

        {/* Proven Production Engineering Stack */}
        <EnterpriseTechStackSection />

        {/* 7-Stage "From Idea to Production" Engineering Lifecycle */}
        <ProcessSection />

        {/* Cloud Infrastructure, Kubernetes & FinOps */}
        <CloudInfraSection />

        {/* Private AI Engineering & Autonomous Agent Pipelines */}
        <AIEngineeringSection />

        {/* Company Overview & Architectural Standards */}
        <AboutCompanySection />

        {/* Executive Leadership & Core Team (Above FAQ) */}
        <TeamSection />

        {/* FAQ Accordion */}
        <FAQSection />

        {/* Direct Engagement, Google Map & Project Inquiry */}
        <ContactSection />
      </main>

      {/* Corporate Footer */}
      <Footer />

      {/* Interactive Project Consultation Modal */}
      <ConsultationModal />
    </div>
  );
}
