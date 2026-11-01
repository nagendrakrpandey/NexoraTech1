"use client";

import React, { useState } from "react";
import {
  Server,
  Layers,
  Cpu,
  ShieldCheck,
  TrendingUp,
  ArrowRight,
  Database,
  CheckCircle2,
  Lock,
  Sparkles,
  GraduationCap,
  ShoppingBag,
  Truck,
} from "lucide-react";

interface CaseStudyCard {
  id: string;
  sector: "fintech" | "logistics" | "ai" | "edtech" | "ecommerce";
  badge: string;
  domain: string;
  title: string;
  overview: string;
  architecture: string;
  metrics: {
    value: string;
    label: string;
  }[];
  techStack: string[];
}

const enterpriseProjects: CaseStudyCard[] = [
  {
    id: "fintech-ledger",
    sector: "fintech",
    badge: "Financial Infrastructure",
    domain: "Distributed Ledger & Payments",
    title: "High-Concurrency Real-Time Ledger & Payment Gateway",
    overview:
      "Engineered an event-driven transaction ledger eliminating database write locks during peak 25,000 req/sec payment spikes with multi-AZ failover.",
    architecture:
      "Optimistic concurrency control with Redis distributed idempotency locks, Apache Kafka event streams, and Go microservices.",
    metrics: [
      { value: "11.4 ms", label: "P99 API Latency" },
      { value: "99.99%", label: "Target Uptime" },
      { value: "25k / sec", label: "Peak Ingestion" },
      { value: "0.00%", label: "Duplicate Rate" },
    ],
    techStack: ["Go (Golang)", "PostgreSQL", "Kafka", "Redis", "Docker", "AWS EKS"],
  },
  {
    id: "fleet-telematics",
    sector: "logistics",
    badge: "Logistics & Telematics",
    domain: "Supply Chain & IoT Dispatch",
    title: "Real-Time Fleet Telemetry & Dynamic Dispatch Engine",
    overview:
      "Replaced manual paper manifests with sub-50ms live vehicle telemetry, automated geofenced routing optimization, and digital e-POD paperless delivery.",
    architecture:
      "Clustered MQTT brokers streaming to TimescaleDB with automated geofencing calculation and offline-first mobile synchronization.",
    metrics: [
      { value: "65k / sec", label: "IoT Telemetry Rate" },
      { value: "3.4x", label: "Dispatch Velocity" },
      { value: "100%", label: "Digital e-POD" },
      { value: "< 50 ms", label: "Live Broadcast" },
    ],
    techStack: ["Node.js", "Python", "MQTT / EMQX", "TimescaleDB", "React Native", "Google Cloud"],
  },
  {
    id: "ai-rag-pipeline",
    sector: "ai",
    badge: "Enterprise GenAI",
    domain: "Private AI & Semantic Search",
    title: "Private VPC-Isolated Knowledge Copilot & RAG Pipeline",
    overview:
      "Constructed a private enterprise RAG pipeline providing sub-300ms technical retrieval with deterministic validation guardrails and zero data egress.",
    architecture:
      "Hybrid dense-sparse vector scoring using Qdrant and BM25, client-side PII scrubbing, and semantic prompt caching.",
    metrics: [
      { value: "98.4%", label: "Retrieval Accuracy" },
      { value: "280 ms", label: "Response Streaming" },
      { value: "Zero Egress", label: "VPC Data Isolation" },
      { value: "64%", label: "Token Cost Saved" },
    ],
    techStack: ["Python", "FastAPI", "Qdrant", "LangChain", "vLLM", "AWS Bedrock VPC"],
  },
  {
    id: "edtech-campus",
    sector: "edtech",
    badge: "Education & MSME",
    domain: "Digital Campus & Video LMS",
    title: "Real-Time Interactive Classroom & High-Throughput LMS",
    overview:
      "Engineered an ultra-low-latency interactive digital campus platform serving 50,000+ simultaneous students with automated attendance, exam proctoring, and fee reconciliation.",
    architecture:
      "WebRTC SFU mesh clustering with Redis pub/sub state synchronization, automated Razorpay UPI webhooks, and Next.js microfrontends.",
    metrics: [
      { value: "50k+", label: "Concurrent Students" },
      { value: "78 ms", label: "WebRTC Latency" },
      { value: "99.98%", label: "Exam Integrity" },
      { value: "100%", label: "Fee Reconciliation" },
    ],
    techStack: ["Next.js 15", "Node.js", "WebRTC / Mediasoup", "Redis", "PostgreSQL", "Razorpay"],
  },
  {
    id: "headless-commerce",
    sector: "ecommerce",
    badge: "E-Commerce & Retail",
    domain: "Headless Commerce & Inventory",
    title: "High-Volume Headless Storefront & Inventory Synchronizer",
    overview:
      "Constructed a distributed headless e-commerce engine handling intense seasonal flash sales without degrading checkout responsiveness.",
    architecture:
      "Edge-rendered Next.js storefront with distributed Redis inventory reservation locks and asynchronous Stripe webhook reconciliation.",
    metrics: [
      { value: "35k / sec", label: "Flash Sale Spikes" },
      { value: "140 ms", label: "Checkout Completion" },
      { value: "0 Over-Orders", label: "Inventory Lock" },
      { value: "99.99%", label: "Gateway Reliability" },
    ],
    techStack: ["Next.js", "TypeScript", "Redis Streams", "Stripe", "Cloudflare Workers", "AWS Aurora"],
  },
  {
    id: "core-banking-ledger",
    sector: "fintech",
    badge: "Banking & Finance",
    domain: "Core Banking & Wealth Management",
    title: "Next-Gen Core Banking Engine & Automated Compliance Ledger",
    overview:
      "Engineered a fault-tolerant core banking system with real-time audit trails, multi-currency ledger reconciliation, and automated KYC/AML fraud detection.",
    architecture:
      "Double-entry accounting engine with ACID PostgreSQL transactions, distributed Apache Flink stream analytics, and ISO 20022 messaging compliance.",
    metrics: [
      { value: "99.999%", label: "System Availability" },
      { value: "< 25 ms", label: "Clearing Latency" },
      { value: "100%", label: "ACID Guaranteed" },
      { value: "Zero Loss", label: "Ledger Reconciliation" },
    ],
    techStack: ["Java / Spring", "PostgreSQL", "Apache Flink", "Kafka", "Docker", "Kubernetes"],
  },
];

export const RealCaseStudiesSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const openConsultation = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-consultation-modal"));
    }
  };

  const filteredProjects = activeFilter === "all"
    ? enterpriseProjects
    : enterpriseProjects.filter((p) => p.sector === activeFilter);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white/45 backdrop-blur-2xl text-slate-950 border-y border-black/10 relative scroll-mt-20 overflow-hidden" id="case-studies">
      {/* Target anchor for navbar 'industries' link */}
      <div id="industries" className="absolute -top-24 left-0 pointer-events-none" />

      {/* Subtle Luminous Ambient Light Sheen */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-white/50 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-white/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/70 border border-black/10 backdrop-blur-md text-[11px] sm:text-xs font-semibold text-slate-900 uppercase tracking-widest mb-3.5 shadow-xs">
            <CheckCircle2 className="w-3.5 h-3.5 text-black" />
            <span>Proven Engineering Deployments</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-950 mb-3 leading-tight">
            Delivered Architectures &amp;{" "}
            <span className="bg-gradient-to-r from-slate-950 via-slate-800 to-slate-700 bg-clip-text text-transparent">
              Measurable Results
            </span>
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
            Real enterprise software systems engineered for high concurrency and scale. Verified by concrete latency metrics, SLA uptime, and zero technical debt.
          </p>
        </div>

        {/* Interactive Domain Filter Tabs (Steel Gray & Black Aesthetic) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: "all", label: "All Deployments" },
            { id: "fintech", label: "Fintech & Payments" },
            { id: "logistics", label: "Logistics & Telematics" },
            { id: "ai", label: "Enterprise GenAI" },
            { id: "edtech", label: "Education & MSME" },
            { id: "ecommerce", label: "High-Volume E-Commerce" },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveFilter(tab.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                activeFilter === tab.id
                  ? "bg-black text-white border-black shadow-md font-bold scale-[1.02]"
                  : "bg-[#C2C9D2]/90 text-slate-900 border-slate-400/80 hover:border-slate-500 hover:text-black hover:bg-[#B3BBC5] backdrop-blur-md shadow-xs"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Darker Steel Gray Glass Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 items-stretch">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="relative flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-[#C2C9D2]/95 hover:bg-[#B5BDC7] backdrop-blur-2xl border border-slate-400/90 hover:border-slate-500 shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden"
            >
              {/* Specular top border shimmer line */}
              <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/90 to-transparent pointer-events-none" />

              <div>
                {/* Header Badge & Domain */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#B3BBC6]/95 border border-slate-400/90 text-[10px] font-mono font-bold text-slate-900 tracking-wide shadow-xs">
                    {project.badge}
                  </span>
                  <span className="text-[10px] text-slate-950 font-mono font-bold flex items-center gap-1.5 shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-950 animate-pulse" />
                    Verified Deployment
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-slate-950 group-hover:text-black transition-colors leading-snug mb-2 line-clamp-2">
                  {project.title}
                </h3>

                {/* Overview */}
                <p className="text-xs text-slate-800 leading-relaxed mb-4 line-clamp-2 font-medium">
                  {project.overview}
                </p>

                {/* Metrics 2x2 Grid (Darker Steel Gray Boxes) */}
                <div className="grid grid-cols-2 gap-2 p-2 rounded-xl bg-[#BAC2CC]/85 border border-slate-400/80 backdrop-blur-md mb-4">
                  {project.metrics.map((m, idx) => (
                    <div key={idx} className="p-2 rounded-lg bg-[#DDE3EB]/95 border border-slate-300/90 shadow-xs">
                      <div className="text-sm sm:text-base font-extrabold text-slate-950 font-mono tracking-tight">{m.value}</div>
                      <div className="text-[9px] text-slate-600 uppercase tracking-wider font-bold">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Technology Stack Tags */}
                <div className="space-y-1.5 mb-4">
                  <div className="text-[9px] font-mono uppercase tracking-wider text-slate-600 font-bold">
                    Stack &amp; Primitives
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-md bg-[#DDE3EB]/95 border border-slate-300/90 text-[10px] text-slate-900 font-mono font-semibold shadow-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="pt-3 border-t border-slate-400/60 mt-auto">
                <button
                  type="button"
                  onClick={openConsultation}
                  className="w-full inline-flex items-center justify-between text-xs font-bold text-slate-950 group-hover:text-white py-2 px-3 rounded-xl bg-[#DDE3EB]/95 hover:bg-black border border-slate-400/80 group-hover:border-black transition-all duration-200 shadow-xs"
                >
                  <span>Request Architectural Blueprint</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Security & IP Transfer Assurance Banner */}
        <div className="mt-10 p-5 sm:p-6 rounded-2xl bg-[#C2C9D2]/95 backdrop-blur-xl border border-slate-400/90 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-800 max-w-4xl mx-auto text-center sm:text-left">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-slate-950 shrink-0" />
            <span className="leading-relaxed">
              <strong className="text-slate-950 font-bold">Strict IP Transfer &amp; Mutual NDA:</strong> All proprietary architecture diagrams, schemas, and source code repositories belong 100% to your enterprise upon deployment.
            </span>
          </div>
          <button
            type="button"
            onClick={openConsultation}
            className="px-5 py-2.5 rounded-xl bg-black hover:bg-neutral-800 text-white font-bold text-xs uppercase tracking-wider shrink-0 transition-all shadow-md active:scale-95"
          >
            Review Architecture
          </button>
        </div>

      </div>
    </section>
  );
};