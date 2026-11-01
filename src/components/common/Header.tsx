"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  TrendingUp,
  Truck,
  HeartPulse,
  Building2,
  ShoppingBag,
} from "lucide-react";

interface ServiceSubItem {
  name: string;
  desc: string;
  href: string;
}

interface ServiceCategory {
  title: string;
  items: ServiceSubItem[];
}

const serviceCategories: ServiceCategory[] = [
  {
    title: "Custom Software Development",
    items: [
      {
        name: "Web Application Development",
        desc: "Fast, scalable Next.js & React applications",
        href: "#services",
      },
      {
        name: "Mobile App Development",
        desc: "Native iOS & Android applications",
        href: "#services",
      },
      {
        name: "Enterprise Software Development",
        desc: "Secure systems tailored to business operations",
        href: "#services",
      },
      {
        name: "SaaS Product Development",
        desc: "Multi-tenant platforms built for growth",
        href: "#services",
      },
      {
        name: "Desktop Application Development",
        desc: "Powerful Windows & cross-platform software",
        href: "#services",
      },
      {
        name: "API & System Integration",
        desc: "Connected APIs, CRMs, ERPs & third-party tools",
        href: "#services",
      },
      {
        name: "Legacy Software Modernization",
        desc: "Secure migration from outdated systems",
        href: "#services",
      },
    ],
  },
  {
    title: "Design & Marketing",
    items: [
      {
        name: "UI/UX Design",
        desc: "Human-centered digital product interfaces",
        href: "#services",
      },
      {
        name: "Branding",
        desc: "Visual identity, logos & brand systems",
        href: "#services",
      },
      {
        name: "Digital Marketing",
        desc: "SEO campaigns, PPC & lead conversion",
        href: "#services",
      },
    ],
  },
  {
    title: "Cloud Services",
    items: [
      {
        name: "Cloud Management Services",
        desc: "DevOps, AWS & Azure infrastructure",
        href: "#cloud",
      },
      {
        name: "Storage Buckets",
        desc: "High-speed secure cloud object storage",
        href: "#cloud",
      },
    ],
  },
  {
    title: "VPS & Hosting",
    items: [
      {
        name: "Managed VPS",
        desc: "High-performance isolated server nodes",
        href: "#cloud",
      },
      {
        name: "Cloud Hosting",
        desc: "99.99% uptime scalable web hosting",
        href: "#cloud",
      },
    ],
  },
  {
    title: "Cyber Security",
    items: [
      {
        name: "Data Encryption",
        desc: "End-to-end zero-trust threat protection",
        href: "#services",
      },
    ],
  },
  {
    title: "Maintenance",
    items: [
      {
        name: "QA",
        desc: "Automated & manual quality assurance testing",
        href: "#services",
      },
      {
        name: "Project Management",
        desc: "Agile sprints & dedicated engineering leads",
        href: "#services",
      },
    ],
  },
];

interface IndustrySubItem {
  name: string;
  desc: string;
  href: string;
}

interface IndustryCategory {
  title: string;
  items: IndustrySubItem[];
}

const industryCategories: IndustryCategory[] = [
  {
    title: "Financial Services & Fintech",
    items: [
      {
        name: "Payment Gateways & Ledger Systems",
        desc: "Sub-12ms transaction engines & optimistic concurrency",
        href: "#case-studies",
      },
      {
        name: "Fraud Detection & AML Compliance",
        desc: "Real-time KYC verification & ISO 20022 messaging rails",
        href: "#case-studies",
      },
    ],
  },
  {
    title: "Supply Chain & Logistics",
    items: [
      {
        name: "Fleet Telemetry & Dispatch Engines",
        desc: "Sub-50ms live vehicle telemetry & MQTT broker streaming",
        href: "#case-studies",
      },
      {
        name: "Warehouse & Inventory Automation",
        desc: "Barcode/RFID tracking & automated e-POD manifests",
        href: "#case-studies",
      },
    ],
  },
  {
    title: "Healthcare & Life Sciences",
    items: [
      {
        name: "HIPAA-Compliant Platforms",
        desc: "Zero-egress clinical records & encrypted health exchange",
        href: "#case-studies",
      },
      {
        name: "Telemedicine & Diagnostic Portals",
        desc: "High-throughput video consultations & patient portals",
        href: "#case-studies",
      },
    ],
  },
  {
    title: "Enterprise SaaS & Cloud Platforms",
    items: [
      {
        name: "Multi-Tenant SaaS Architecture",
        desc: "Database tenant isolation, metered billing & RBAC",
        href: "#case-studies",
      },
      {
        name: "Cloud Microservices & Kubernetes",
        desc: "Auto-scaling clusters, Istio mesh & DevOps CI/CD",
        href: "#case-studies",
      },
    ],
  },
  {
    title: "Retail & High-Volume E-Commerce",
    items: [
      {
        name: "Headless Commerce Engines",
        desc: "Next.js microfrontends & distributed Redis caching",
        href: "#case-studies",
      },
      {
        name: "Real-Time Inventory Synchronization",
        desc: "Omnichannel stock sync & peak spike absorption",
        href: "#case-studies",
      },
    ],
  },
  {
    title: "Energy, Manufacturing & Smart IoT",
    items: [
      {
        name: "Industrial IoT & Telemetry",
        desc: "Real-time sensor streams & predictive anomaly detection",
        href: "#case-studies",
      },
      {
        name: "ERP & Shop Floor Automation",
        desc: "SCADA data bridges & production scheduling workflows",
        href: "#case-studies",
      },
    ],
  },
];

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState<string>(
    pathname === "/about" ? "about" : pathname === "/contact" ? "contact" : "home"
  );
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);

  const navWrapperRef = useRef<HTMLDivElement | null>(null);
  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const industriesTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Sync activeTab with pathname
  useEffect(() => {
    if (pathname === "/about") {
      setActiveTab("about");
    } else if (pathname === "/contact") {
      setActiveTab("contact");
    } else if (pathname === "/") {
      setActiveTab("home");
    }
  }, [pathname]);

  // Active section spy on scroll (only on homepage)
  useEffect(() => {
    if (pathname !== "/") return;

    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;
      const sections = [
        { id: "top", name: "home" },
        { id: "services", name: "services" },
        { id: "case-studies", name: "industries" },
        { id: "contact", name: "contact" },
      ];

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveTab(sections[i].name);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // Click outside to close menus
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navWrapperRef.current &&
        !navWrapperRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false);
        setIndustriesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const openConsultation = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-consultation-modal"));
    }
  };

  const handleServicesMouseEnter = () => {
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    setServicesOpen(true);
    setIndustriesOpen(false);
  };

  const handleServicesMouseLeave = () => {
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    servicesTimeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 250);
  };

  const handleIndustriesMouseEnter = () => {
    if (industriesTimeoutRef.current) clearTimeout(industriesTimeoutRef.current);
    setIndustriesOpen(true);
    setServicesOpen(false);
  };

  const handleIndustriesMouseLeave = () => {
    if (industriesTimeoutRef.current) clearTimeout(industriesTimeoutRef.current);
    industriesTimeoutRef.current = setTimeout(() => {
      setIndustriesOpen(false);
    }, 250);
  };

  return (
    <div
      ref={navWrapperRef}
      className="sticky top-3 sm:top-4 z-50 w-full px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto transition-all duration-300 relative"
    >
      <header className="bg-[#DFE2E6]/95 backdrop-blur-md border border-white/70 shadow-[0_8px_30px_rgba(0,0,0,0.08)] rounded-2xl px-4 sm:px-6 py-2.5 sm:py-3 transition-all duration-300 relative z-20">
        <div className="flex items-center justify-between gap-4">

          {/* Brand Logo */}
          <div className="shrink-0 flex items-center">
            <Link href="/" onClick={() => setActiveTab("home")} aria-label="NexoraTech Home">
              <Logo variant="horizontal" width={180} height={38} />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2">

            {/* Home Link */}
            <Link
              href="/"
              onClick={() => {
                setActiveTab("home");
                setServicesOpen(false);
                setIndustriesOpen(false);
              }}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${activeTab === "home"
                  ? "bg-black text-white shadow-sm"
                  : "text-slate-800 hover:text-black hover:bg-black/5"
                }`}
            >
              Home
            </Link>

            {/* About Link */}
            <Link
              href="/about"
              onClick={() => {
                setActiveTab("about");
                setServicesOpen(false);
                setIndustriesOpen(false);
              }}
              className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${activeTab === "about"
                  ? "bg-black text-white shadow-sm"
                  : "text-slate-800 hover:text-black hover:bg-black/5"
                }`}
            >
              About
            </Link>

            {/* Services Dropdown (Mega Menu Trigger) */}
            <div
              className="relative"
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
            >
              <button
                type="button"
                onClick={() => {
                  setServicesOpen(!servicesOpen);
                  setIndustriesOpen(false);
                }}
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${servicesOpen || activeTab === "services"
                    ? "bg-black text-white shadow-sm"
                    : "text-slate-800 hover:text-black hover:bg-black/5"
                  }`}
                aria-expanded={servicesOpen}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen
                      ? "rotate-180 text-white"
                      : activeTab === "services"
                        ? "text-white"
                        : "text-slate-700"
                    }`}
                />
              </button>
            </div>

            {/* Industries Dropdown (Mega Menu Trigger) */}
            <div
              className="relative"
              onMouseEnter={handleIndustriesMouseEnter}
              onMouseLeave={handleIndustriesMouseLeave}
            >
              <button
                type="button"
                onClick={() => {
                  setIndustriesOpen(!industriesOpen);
                  setServicesOpen(false);
                }}
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${industriesOpen || activeTab === "industries"
                    ? "bg-black text-white shadow-sm"
                    : "text-slate-800 hover:text-black hover:bg-black/5"
                  }`}
                aria-expanded={industriesOpen}
              >
                <span>Industries</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${industriesOpen
                      ? "rotate-180 text-white"
                      : activeTab === "industries"
                        ? "text-white"
                        : "text-slate-700"
                    }`}
                />
              </button>
            </div>

            {/* Contact Link */}
            <Link
              href="/contact"
              onClick={() => {
                setActiveTab("contact");
                setServicesOpen(false);
                setIndustriesOpen(false);
              }}
              className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${activeTab === "contact"
                  ? "bg-black text-white shadow-sm"
                  : "text-slate-800 hover:text-black hover:bg-black/5"
                }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Action: "Get a Demo ->" Button */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={openConsultation}
              id="nav-primary-cta"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-black hover:bg-neutral-800 shadow-sm hover:shadow transition-all duration-200 hover:translate-x-0.5 active:translate-x-0 shrink-0"
            >
              <span>Get a Demo</span>
              <ArrowRight className="w-3.5 h-3.5 text-white" />
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 min-w-[40px] min-h-[40px] rounded-xl text-slate-900 hover:bg-black/5 transition-colors flex items-center justify-center"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-slate-300/80 space-y-1 animate-in slide-in-from-top-2 duration-200">
            <Link
              href="/"
              onClick={() => {
                setActiveTab("home");
                setMobileMenuOpen(false);
              }}
              className={`flex items-center min-h-[44px] px-3.5 text-sm font-semibold rounded-xl ${activeTab === "home" ? "bg-black text-white" : "text-slate-900 hover:bg-black/5"
                }`}
            >
              Home
            </Link>

            <Link
              href="/about"
              onClick={() => {
                setActiveTab("about");
                setMobileMenuOpen(false);
              }}
              className={`flex items-center min-h-[44px] px-3.5 text-sm font-semibold rounded-xl ${activeTab === "about" ? "bg-black text-white" : "text-slate-900 hover:bg-black/5"
                }`}
            >
              About
            </Link>

            {/* Mobile Services Accordion (Catalog) */}
            <div>
              <button
                type="button"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between min-h-[44px] px-3.5 text-sm font-semibold text-slate-900 hover:bg-black/5 rounded-xl"
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""
                    }`}
                />
              </button>

              {mobileServicesOpen && (
                <div className="p-3 space-y-3 bg-[#0B0D11] rounded-2xl my-2 text-white border border-white/10 animate-in fade-in duration-150">
                  <div className="border-b border-white/10 pb-2">
                    <div className="text-xs font-bold text-white">Capabilities &amp; services catalog</div>
                    <div className="text-[11px] text-slate-400">Comprehensive engineering divisions</div>
                  </div>
                  <div className="space-y-3">
                    {serviceCategories.map((cat, idx) => (
                      <div key={idx} className="bg-[#16191E] p-3 rounded-xl border border-white/5 space-y-2">
                        <div className="text-xs font-bold text-white">{cat.title}</div>
                        <div className="space-y-2 pl-1">
                          {cat.items.map((item, itemIdx) => (
                            <Link
                              key={itemIdx}
                              href={item.href}
                              onClick={() => {
                                setActiveTab("services");
                                setMobileMenuOpen(false);
                              }}
                              className="block group"
                            >
                              <div className="text-xs font-medium text-slate-200 group-hover:text-cyan-400 transition-colors">
                                {item.name}
                              </div>
                              <div className="text-[10px] text-slate-400 leading-tight">
                                {item.desc}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Mobile Industries Accordion (Catalog) */}
            <div>
              <button
                type="button"
                onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
                className="w-full flex items-center justify-between min-h-[44px] px-3.5 text-sm font-semibold text-slate-900 hover:bg-black/5 rounded-xl"
              >
                <span>Industries</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${mobileIndustriesOpen ? "rotate-180" : ""
                    }`}
                />
              </button>

              {mobileIndustriesOpen && (
                <div className="p-3 space-y-3 bg-[#0B0D11] rounded-2xl my-2 text-white border border-white/10 animate-in fade-in duration-150">
                  <div className="border-b border-white/10 pb-2">
                    <div className="text-xs font-bold text-white">Enterprise industries catalog</div>
                    <div className="text-[11px] text-slate-400">Mission-critical domain architectures</div>
                  </div>
                  <div className="space-y-3">
                    {industryCategories.map((cat, idx) => (
                      <div key={idx} className="bg-[#16191E] p-3 rounded-xl border border-white/5 space-y-2">
                        <div className="text-xs font-bold text-white">{cat.title}</div>
                        <div className="space-y-2 pl-1">
                          {cat.items.map((item, itemIdx) => (
                            <Link
                              key={itemIdx}
                              href={item.href}
                              onClick={() => {
                                setActiveTab("industries");
                                setMobileMenuOpen(false);
                              }}
                              className="block group"
                            >
                              <div className="text-xs font-medium text-slate-200 group-hover:text-cyan-400 transition-colors">
                                {item.name}
                              </div>
                              <div className="text-[10px] text-slate-400 leading-tight">
                                {item.desc}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/contact"
              onClick={() => {
                setActiveTab("contact");
                setMobileMenuOpen(false);
              }}
              className={`flex items-center min-h-[44px] px-3.5 text-sm font-semibold rounded-xl ${activeTab === "contact" ? "bg-black text-white" : "text-slate-900 hover:bg-black/5"
                }`}
            >
              Contact
            </Link>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openConsultation();
                }}
                className="w-full min-h-[46px] inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-black hover:bg-neutral-800 shadow-sm transition-all"
              >
                <span>Get a Demo</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Services Mega Menu Dropdown (Absolute Floating Overlay - Matches Reference Image Exactly) */}
      {servicesOpen && (
        <div
          onMouseEnter={() => {
            if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
            setServicesOpen(true);
          }}
          onMouseLeave={handleServicesMouseLeave}
          className="absolute top-[calc(100%+8px)] left-3 right-3 sm:left-6 sm:right-6 lg:left-8 lg:right-8 bg-black border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-[0_30px_90px_rgba(0,0,0,0.95)] animate-in fade-in slide-in-from-top-2 duration-200 z-50 before:absolute before:-top-3 before:left-0 before:right-0 before:h-4 before:content-['']"
        >
          {/* Header of Mega Menu */}
          <div className="mb-6 pb-3 border-b border-white/[0.08]">
            <h3 className="text-sm sm:text-base font-semibold text-white tracking-tight">
              Capabilities &amp; services catalog
            </h3>
            <p className="text-xs text-neutral-400 mt-1">
              Comprehensive engineering divisions and digital capabilities
            </p>
          </div>

          {/* 3-Column x 2-Row Grid matching image */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {serviceCategories.map((category, idx) => (
              <div
                key={idx}
                className="rounded-2xl p-6 bg-[#161618] border border-white/[0.08] hover:border-white/20 transition-all duration-200 h-full flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-sm font-bold text-white mb-4 tracking-tight">
                    {category.title}
                  </h4>
                  <div className="space-y-4">
                    {category.items.map((item, itemIdx) => (
                      <Link
                        key={itemIdx}
                        href={item.href}
                        onClick={() => {
                          setActiveTab("services");
                          setServicesOpen(false);
                        }}
                        className="group block"
                      >
                        <div className="text-[13px] font-semibold text-white group-hover:text-cyan-400 transition-colors">
                          {item.name}
                        </div>
                        <div className="text-xs text-neutral-400 group-hover:text-neutral-300 transition-colors mt-0.5 leading-relaxed font-light">
                          {item.desc}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Industries Mega Menu Dropdown (Absolute Floating Overlay - Matches Reference Image Exactly) */}
      {industriesOpen && (
        <div
          onMouseEnter={() => {
            if (industriesTimeoutRef.current) clearTimeout(industriesTimeoutRef.current);
            setIndustriesOpen(true);
          }}
          onMouseLeave={handleIndustriesMouseLeave}
          className="absolute top-[calc(100%+8px)] left-3 right-3 sm:left-6 sm:right-6 lg:left-8 lg:right-8 bg-black border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-[0_30px_90px_rgba(0,0,0,0.95)] animate-in fade-in slide-in-from-top-2 duration-200 z-50 before:absolute before:-top-3 before:left-0 before:right-0 before:h-4 before:content-['']"
        >
          {/* Header of Mega Menu */}
          <div className="mb-6 pb-3 border-b border-white/[0.08]">
            <h3 className="text-sm sm:text-base font-semibold text-white tracking-tight">
              Enterprise industries &amp; sector solutions
            </h3>
            <p className="text-xs text-neutral-400 mt-1">
              Mission-critical domain architectures and delivered enterprise systems
            </p>
          </div>

          {/* 3-Column x 2-Row Grid matching Services style */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {industryCategories.map((category, idx) => (
              <div
                key={idx}
                className="rounded-2xl p-6 bg-[#161618] border border-white/[0.08] hover:border-white/20 transition-all duration-200 h-full flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-sm font-bold text-white mb-4 tracking-tight">
                    {category.title}
                  </h4>
                  <div className="space-y-4">
                    {category.items.map((item, itemIdx) => (
                      <Link
                        key={itemIdx}
                        href={item.href}
                        onClick={() => {
                          setActiveTab("industries");
                          setIndustriesOpen(false);
                        }}
                        className="group block"
                      >
                        <div className="text-[13px] font-semibold text-white group-hover:text-cyan-400 transition-colors">
                          {item.name}
                        </div>
                        <div className="text-xs text-neutral-400 group-hover:text-neutral-300 transition-colors mt-0.5 leading-relaxed font-light">
                          {item.desc}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
