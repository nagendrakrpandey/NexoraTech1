"use client";

import React from "react";
import { Linkedin, Twitter, Mail, ArrowUpRight, ShieldCheck, Users } from "lucide-react";

interface Leader {
  name: string;
  badge: string;
  role: string;
  bio: string;
  linkedin: string;
  initials: string;
}

const leaders: Leader[] = [
  {
    name: "Pushkar Tyagi",
    badge: "Co-Founder",
    role: "Chief Operating Officer",
    bio: "Directing global engineering operations, technological architecture, and client solution strategy to ensure seamless enterprise delivery and rock-solid uptime SLAs.",
    linkedin: "https://www.linkedin.com/in/pushkar-tyagi-799b9aa",
    initials: "PT",
  },
  {
    name: "Vinay Rai",
    badge: "Co-Founder",
    role: "Chief Sales & Marketing Head",
    bio: "Driving enterprise business development, strategic corporate accounts, and commercial partnerships across key growth sectors including BFSI, Logistics, and EdTech.",
    linkedin: "https://www.linkedin.com/in/vinay-rai-9506bb314/",
    initials: "VR",
  },
];

export const LeadershipSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#0B1528] text-white border-b border-slate-800" id="team">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-xs font-bold text-cyan-300 uppercase tracking-wider mb-3">
            <Users className="w-3.5 h-3.5 text-cyan-400" />
            <span>Executive Leadership</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Meet the{" "}
            <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-300 bg-clip-text text-transparent">
              Founding Team
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-400 mt-2">
            Experienced technologists and domain leaders guiding our technical innovation and corporate delivery strategy.
          </p>
        </div>

        {/* Leadership Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {leaders.map((leader, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl hover:border-blue-500/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white font-black text-xl flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
                    {leader.initials}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-blue-500/15 border border-blue-400/30 text-xs font-bold text-cyan-300">
                    {leader.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-1">
                  {leader.name}
                </h3>
                <div className="text-xs font-semibold text-blue-400 mb-4">{leader.role}</div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {leader.bio}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-500">Executive Leadership</span>
                <a
                  href={leader.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-blue-600/20 text-xs font-semibold text-cyan-300 border border-slate-700 hover:border-blue-400/40 transition-all"
                  aria-label={`${leader.name} on LinkedIn`}
                >
                  <Linkedin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Connect on LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
