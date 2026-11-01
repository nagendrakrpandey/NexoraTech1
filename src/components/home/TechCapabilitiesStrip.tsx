"use client";

import React, { useState } from "react";
import { Terminal } from "lucide-react";

interface TechItem {
  name: string;
  category: "Languages & Frameworks" | "Cloud & DevOps" | "AI & Data" | "Databases & Messaging";
  versionOrNote: string;
}

const technologies: TechItem[] = [
  { name: "Next.js & React", category: "Languages & Frameworks", versionOrNote: "App Router / SSR" },
  { name: "TypeScript", category: "Languages & Frameworks", versionOrNote: "Strict Type Safety" },
  { name: "Python", category: "AI & Data", versionOrNote: "FastAPI / PyTorch" },
  { name: "Go (Golang)", category: "Languages & Frameworks", versionOrNote: "High-Concurrency Services" },
  { name: "Kubernetes & Docker", category: "Cloud & DevOps", versionOrNote: "Container Orchestration" },
  { name: "Terraform & IaC", category: "Cloud & DevOps", versionOrNote: "Automated Provisioning" },
  { name: "Amazon Web Services", category: "Cloud & DevOps", versionOrNote: "EKS, Lambda, RDS" },
  { name: "Google Cloud Platform", category: "Cloud & DevOps", versionOrNote: "GKE, Vertex AI, BigQuery" },
  { name: "Microsoft Azure", category: "Cloud & DevOps", versionOrNote: "AKS, Azure OpenAI, Cosmos" },
  { name: "PostgreSQL & pgvector", category: "Databases & Messaging", versionOrNote: "Relational + Vector Search" },
  { name: "Redis", category: "Databases & Messaging", versionOrNote: "Sub-ms Caching & PubSub" },
  { name: "Apache Kafka", category: "Databases & Messaging", versionOrNote: "Event Streaming" },
  { name: "LangChain & LlamaIndex", category: "AI & Data", versionOrNote: "Agentic & RAG Frameworks" },
  { name: "GraphQL & REST", category: "Languages & Frameworks", versionOrNote: "Type-safe APIs" },
  { name: "Flutter & React Native", category: "Languages & Frameworks", versionOrNote: "Cross-platform Mobile" },
  { name: "Prometheus & Grafana", category: "Cloud & DevOps", versionOrNote: "Observability Telemetry" },
];

export const TechCapabilitiesStrip: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Languages & Frameworks", "Cloud & DevOps", "AI & Data", "Databases & Messaging"];

  const filteredTechs =
    activeCategory === "All"
      ? technologies
      : technologies.filter((t) => t.category === activeCategory);

  return (
    <section id="capabilities" className="py-16 bg-[#F8FAFC] border-y border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">
              <Terminal className="w-3.5 h-3.5" />
              <span>Technical Capabilities & Stack</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Production-Grade Engineering Toolchains
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-2xl">
              We engineer with vetted, scalable languages, platforms, and cloud primitives—configured for maintainability, security, and velocity.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-white border border-slate-200 rounded-xl shadow-sm">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {filteredTechs.map((tech) => (
            <div
              key={tech.name}
              className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-blue-400 hover:shadow-md transition-all group"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {tech.name}
                </span>
                <span className="w-2 h-2 rounded-full bg-cyan-400 group-hover:bg-blue-600 group-hover:scale-125 transition-all" />
              </div>
              <div className="text-xs text-slate-500">{tech.versionOrNote}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
