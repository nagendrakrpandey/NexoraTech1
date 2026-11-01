"use client";

import React from "react";
import { Users, Linkedin, Mail, ShieldCheck } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  badge: string;
  image: string;
  description: string;
  linkedin?: string;
  email?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Mr. Arun Kumar Pandey",
    role: "Managing Director",
    badge: "Managing Director",
    image: "/assets/Arun.jpeg",
    description:
      "Spearheads executive client handling, enterprise project management, strategic partner meetings, and corporate delivery operations.",
    linkedin: "https://linkedin.com",
    email: "pandeynagendra804@gmail.com",
  },
  {
    name: "Mr. Nagendra Kumar Pandey",
    role: "Co-Founder & Director (Technical Head)",
    badge: "Co-Founder & Tech Head",
    image: "/assets/Nagendra.png",
    description:
      "Architects core technology infrastructure, enterprise software development, system design, and leads end-to-end technical execution.",
    linkedin: "https://linkedin.com",
    email: "pandeynagendra804@gmail.com",
  },
  {
    name: "Mr. Raju Singh",
    role: "Co-Director",
    badge: "Co-Director",
    image: "/assets/raju.png",
    description:
      "Manages technical engineering teams, sprint cadences, code quality assurance, and resolves complex infrastructure & technical bottlenecks.",
    linkedin: "https://linkedin.com",
    email: "pandeynagendra804@gmail.com",
  },
  {
    name: "Neha Mishra",
    role: "Head of Human Resources",
    badge: "HR Head",
    image: "/assets/Neha.png",
    description:
      "Oversees strategic talent acquisition, organizational culture, employee relations, and human resources governance across the company.",
    linkedin: "https://linkedin.com",
    email: "pandeynagendra804@gmail.com",
  },
];

export const TeamSection: React.FC = () => {
  return (
    <section
      className="py-20 lg:py-28 bg-white/45 backdrop-blur-2xl text-slate-950 border-b border-black/10 relative overflow-hidden"
      id="team"
    >
      {/* Subtle Luminous Ambient Sheen */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-white/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/70 border border-black/10 backdrop-blur-md text-[11px] sm:text-xs font-semibold text-slate-900 uppercase tracking-widest mb-4 shadow-xs">
            <Users className="w-3.5 h-3.5 text-slate-950" />
            <span>Executive Leadership &amp; Core Team</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-[900] text-slate-950 tracking-tight mb-4 leading-tight">
            Meet the Leaders Driving{" "}
            <span className="bg-gradient-to-r from-slate-950 via-slate-800 to-slate-700 bg-clip-text text-transparent">
              Enterprise Excellence
            </span>
          </h2>

          <p className="text-base text-slate-600 font-normal">
            Seasoned technologists and visionary executives committed to architectural integrity, dependable client delivery, and long-term innovation.
          </p>
        </div>

        {/* 4-Column Glossy Glass Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="relative flex flex-col justify-between rounded-3xl bg-white/75 hover:bg-white/95 backdrop-blur-2xl border border-white/85 hover:border-black/20 shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden p-5"
            >
              {/* Specular Top Shimmer Highlight */}
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent pointer-events-none" />

              <div>
                {/* Member Portrait Image Container */}
                <div className="relative aspect-[4/4.5] w-full rounded-2xl overflow-hidden bg-slate-100 border border-black/10 shadow-xs mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition duration-500 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Badge */}
                <div className="mb-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-black text-white text-[10px] font-mono font-bold uppercase tracking-wider inline-block shadow-xs">
                    {member.badge}
                  </span>
                </div>

                {/* Name */}
                <h3 className="text-lg font-black text-slate-950 tracking-tight leading-snug group-hover:text-black transition-colors mb-1">
                  {member.name}
                </h3>

                {/* Role */}
                <div className="text-xs font-bold text-slate-700 font-mono mb-3">
                  {member.role}
                </div>

                {/* Description */}
                <p className="text-xs text-slate-600 leading-relaxed font-normal mb-4">
                  {member.description}
                </p>
              </div>

              {/* Bottom Social / Contact Bar */}
              <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between mt-auto">
                <span className="text-[11px] text-slate-500 font-mono font-semibold flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-slate-900" />
                  Verified Leader
                </span>

                <div className="flex items-center gap-2">
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="w-7 h-7 rounded-lg bg-black/5 hover:bg-black text-slate-700 hover:text-white border border-black/10 transition-colors flex items-center justify-center shadow-xs"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-7 h-7 rounded-lg bg-black/5 hover:bg-black text-slate-700 hover:text-white border border-black/10 transition-colors flex items-center justify-center shadow-xs"
                      aria-label={`LinkedIn ${member.name}`}
                    >
                      <Linkedin className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

