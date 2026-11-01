export interface SiteConfig {
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  url: string;
  ogImage: string;
  contact: {
    email: string;
    phone: string;
    address: {
      street: string;
      city: string;
      state: string;
      country: string;
      postalCode: string;
    };
    officeHours: string;
  };
  social: {
    linkedin: string;
    github: string;
    twitter: string;
  };
  navigation: Array<{
    name: string;
    href: string;
    description?: string;
  }>;
}

export const siteConfig: SiteConfig = {
  name: "NexoraTech",
  legalName: "NexoraTech Engineering Solutions Pvt. Ltd.",
  tagline: "Building Smarter Tomorrow",
  description:
    "Enterprise Digital Engineering, Cloud Infrastructure, SaaS Platforms, and AI Integration. From custom software and cloud infrastructure to intelligent AI-powered platforms, NexoraTech turns ambitious ideas into secure, scalable digital solutions.",
  url: "https://www.nexoratech.io",
  ogImage: "/assets/hero-bg.jpg",
  contact: {
    email: "pandeynagendra804@gmail.com",
    phone: "+91-6306719562, +91-8303483701",
    address: {
      street: "Urbtech, Sector 132",
      city: "Noida",
      state: "Uttar Pradesh",
      country: "India",
      postalCode: "201304",
    },
    officeHours: "Monday – Friday: 9:30 AM – 6:30 PM (IST)",
  },
  social: {
    linkedin: "https://linkedin.com/company/nexoratech",
    github: "https://github.com/nexoratech",
    twitter: "https://twitter.com/nexoratech",
  },
  navigation: [
    { name: "Services", href: "#services", description: "End-to-end custom development & engineering" },
    { name: "Solutions", href: "#solutions", description: "Illustrative architectural implementations" },
    { name: "Cloud & DevOps", href: "#cloud-infra", description: "Multi-cloud architecture & reliability" },
    { name: "AI Engineering", href: "#ai-engineering", description: "LLMs, RAG & Autonomous Agent pipelines" },
    { name: "Industries", href: "#industries", description: "Enterprise domain technical capabilities" },
    { name: "Process", href: "#process", description: "From discovery to production deployment" },
    { name: "About", href: "#why-nexora", description: "Engineering principles & architectural standards" },
    { name: "Contact", href: "#contact", description: "Discuss your project requirements" },
  ],
};

export const businessServices = [
  {
    id: "custom-software",
    category: "Software Engineering",
    title: "Custom Software Development",
    shortDesc: "Bespoke, robust enterprise software engineered to solve complex operational challenges with maintainable code.",
    iconName: "Code2",
    deliverables: [
      "Domain-Driven Architectural Blueprints",
      "Modular, Scalable Backend Services",
      "Comprehensive Automated Unit & E2E Tests",
      "CI/CD Integration and Comprehensive API Docs",
    ],
    problemsSolved:
      "Eliminates vendor lock-in, bottlenecks from off-the-shelf software, and rigid technical debt in mission-critical workflows.",
    outcomes: "Tailored operational velocity, strict data ownership, and seamless horizontal scale.",
  },
  {
    id: "enterprise-apps",
    category: "Software Engineering",
    title: "Enterprise Application Development",
    shortDesc: "High-concurrency systems featuring distributed microservices, role-based access control, and rock-solid resilience.",
    iconName: "Building2",
    deliverables: [
      "Distributed Microservice Topologies",
      "Fine-grained RBAC & IAM Integration",
      "High-throughput Event-driven Message Brokers",
      "Disaster Recovery & Redundant Clustering",
    ],
    problemsSolved:
      "Overcomes scalability bottlenecks, siloed organizational data, and slow enterprise release cycles.",
    outcomes: "99.99% uptime resilience, strict audit compliance, and seamless cross-departmental data synchronization.",
  },
  {
    id: "web-apps",
    category: "Web & Mobile",
    title: "Web Application Development",
    shortDesc: "Modern, reactive, and lightning-fast web applications built on Next.js, React, and TypeScript.",
    iconName: "Globe2",
    deliverables: [
      "Server-Side Rendered (SSR) & Edge Hydration",
      "Interactive Micro-frontends & Fluid UI Components",
      "Real-time WebSocket & SSE Subscriptions",
      "Lighthouse 95+ Core Web Vitals Optimization",
    ],
    problemsSolved:
      "Fixes slow page speeds, poor mobile responsiveness, and fragile client-side state handling.",
    outcomes: "Frictionless user conversion, rapid interface responsiveness, and enterprise-grade maintainability.",
  },
  {
    id: "corporate-ecommerce",
    category: "Web & Mobile",
    title: "Corporate Websites & E-Commerce",
    shortDesc: "Cinematic, high-conversion digital flagships and headless e-commerce architectures built for brand authority.",
    iconName: "ShoppingBag",
    deliverables: [
      "Headless CMS & Commerce Integration",
      "Sub-second Global Edge CDN Routing",
      "Dynamic Product Discovery & Search Engine",
      "Secure PCI-compliant Payment Gateways",
    ],
    problemsSolved:
      "Resolves sluggish legacy CMS platforms, template bloat, and poor mobile checkout conversion rates.",
    outcomes: "Elevated brand prestige, search engine domination, and frictionless global transactions.",
  },
  {
    id: "mobile-apps",
    category: "Web & Mobile",
    title: "Mobile Apps (iOS & Android)",
    shortDesc: "Native and high-performance cross-platform applications with offline-first sync and silky smooth 60fps animations.",
    iconName: "Smartphone",
    deliverables: [
      "Cross-Platform Native Builds (Flutter / React Native)",
      "Local Encrypted SQLite / Realm Sync",
      "Biometric Authentication & Native Push Channels",
      "App Store & Google Play Automated Release Pipeline",
    ],
    problemsSolved:
      "Prevents dual-codebase maintenance overhead and inconsistent mobile UX across screen sizes.",
    outcomes: "Single unified codebase, rapid feature deployment, and five-star mobile customer delight.",
  },
  {
    id: "desktop-apps",
    category: "Software Engineering",
    title: "Windows Desktop Applications",
    shortDesc: "Hardware-accelerated, native Windows applications built for heavy processing, peripheral integration, and offline power.",
    iconName: "Monitor",
    deliverables: [
      "C#/.NET Core & Electron Native Shells",
      "Direct Hardware & COM Port Communication",
      "Silent Background Auto-updates & MSIX Packaging",
      "Local Thread-pool Multiprocessing",
    ],
    problemsSolved:
      "Solves browser memory limits, unsupported local device drivers, and heavy computational bottlenecks.",
    outcomes: "Zero-latency local processing, robust device telemetry, and dependable offline industrial operation.",
  },
  {
    id: "cloud-migration",
    category: "Cloud & DevOps",
    title: "Cloud Infrastructure & Migration",
    shortDesc: "Frictionless migration to AWS, Azure, and Google Cloud with zero unplanned downtime and optimized cost governance.",
    iconName: "Cloud",
    deliverables: [
      "Cloud Readiness Audit & Migration Phasing",
      "Database Live Replication & Cutover Runbooks",
      "Multi-AZ High Availability Architecture",
      "FinOps Cloud Cost Optimization Strategy",
    ],
    problemsSolved:
      "Eliminates aging on-premise hardware risks, massive capital expenditures, and migration downtime fears.",
    outcomes: "Predictable cloud operating costs, instant vertical/horizontal elasticity, and global presence.",
  },
  {
    id: "devops-cicd",
    category: "Cloud & DevOps",
    title: "DevOps, CI/CD & Reliability Engineering",
    shortDesc: "GitOps automation pipelines, Infrastructure-as-Code (Terraform), Kubernetes orchestration, and 24/7 observability.",
    iconName: "Cpu",
    deliverables: [
      "Declarative Terraform & OpenTofu Modules",
      "Automated Staging/Production CI/CD Pipelines",
      "Prometheus, Grafana & OpenTelemetry Observability",
      "Chaos Engineering & SLO/SLA Monitoring",
    ],
    problemsSolved:
      "Removes error-prone manual deployments, release anxiety, and delayed incident detection.",
    outcomes: "10x deployment frequency, 15-minute mean-time-to-recovery (MTTR), and reliable audit trails.",
  },
  {
    id: "saas-platforms",
    category: "SaaS & Platforms",
    title: "SaaS & Multi-tenant Platforms",
    shortDesc: "Scalable SaaS engines with tenant data isolation, subscription billing, usage metering, and tenant provisioning.",
    iconName: "Layers",
    deliverables: [
      "Schema-per-tenant or Row-level Security (RLS)",
      "Stripe / LemonSqueezy Metered Billing Engine",
      "Self-serve Team Onboarding & Invite Workflows",
      "White-label Custom Domain Routing",
    ],
    problemsSolved:
      "Avoids tenant data contamination, complex billing calculation bugs, and manual onboarding friction.",
    outcomes: "Rapid ARR expansion, bulletproof enterprise data isolation, and low customer support friction.",
  },
  {
    id: "cloud-native-iaas",
    category: "Cloud & DevOps",
    title: "IaaS, PaaS & Cloud-Native Platforms",
    shortDesc: "Containerized environments, serverless compute, and internal developer platforms (IDP) tailored for engineering teams.",
    iconName: "Server",
    deliverables: [
      "Standardized Golden Paths for Developers",
      "Serverless Event Pipelines & Edge Functions",
      "Secure Service Mesh (Istio / Linkerd)",
      "Automated Ephemeral Preview Environments",
    ],
    problemsSolved:
      "Curbs configuration drift, complex developer onboarding, and infrastructure sprawl.",
    outcomes: "Substantially shorter developer ramp-up time and unified infrastructure governance.",
  },
  {
    id: "ai-llm-integration",
    category: "AI Integration",
    title: "AI Integration, LLMs & Agents",
    shortDesc: "Production-ready GenAI workflows: Retrieval-Augmented Generation (RAG), autonomous multi-agent systems, and specialized LLMs.",
    iconName: "Sparkles",
    deliverables: [
      "Enterprise RAG Pipelines with Hybrid Search",
      "Autonomous Decision-Making Agent Graphs",
      "Semantic Caching & Prompt Optimization",
      "Model Guardrails, PII Redaction & Hallucination Mitigation",
    ],
    problemsSolved:
      "Overcomes hallucination risks, high token costs, and sluggish response times in enterprise GenAI.",
    outcomes: "Contextually accurate AI assistants, dramatic cost containment, and fully compliant data boundaries.",
  },
  {
    id: "api-integrations",
    category: "Enterprise Solutions",
    title: "API Engineering & Integrations",
    shortDesc: "High-performance RESTful & GraphQL APIs, webhook orchestration, and robust connections to 3rd-party ERPs and CRMs.",
    iconName: "Network",
    deliverables: [
      "OpenAPI 3.1 & GraphQL Schema Contracts",
      "Distributed Rate-Limiting & Token Throttling",
      "Webhook Ingestion with Idempotency Guarantees",
      "Salesforce, SAP, NetSuite & Workday Connectors",
    ],
    problemsSolved:
      "Solves disjointed SaaS ecosystems, fragile webhook handling, and API performance bottlenecks.",
    outcomes: "Consistent data flow across enterprise toolchains with zero data loss during high spikes.",
  },
  {
    id: "database-engineering",
    category: "Enterprise Solutions",
    title: "Database Design & Data Engineering",
    shortDesc: "ACID relational databases, distributed NoSQL, vector search stores, and real-time streaming data pipelines.",
    iconName: "Database",
    deliverables: [
      "PostgreSQL, Redis & ClickHouse Schema Architecture",
      "Vector Embeddings Storage (pgvector / Qdrant)",
      "Real-time CDC Pipelines (Debezium / Kafka)",
      "Query Profiling, Indexing & Connection Pooling",
    ],
    problemsSolved:
      "Eliminates database deadlocks, slow analytical queries, and unscalable schema migrations.",
    outcomes: "Sub-millisecond query latencies, massive data pipeline throughput, and effortless indexing.",
  },
  {
    id: "legacy-modernization",
    category: "Enterprise Solutions",
    title: "Legacy Modernization & Refactoring",
    shortDesc: "Deconstructing brittle monoliths into modular cloud architectures using the Strangler Fig pattern with zero downtime.",
    iconName: "RefreshCw",
    deliverables: [
      "System Dependency & Risk Mapping",
      "Incremental Strangler Fig Decommissioning",
      "Containerization & Microservices Extraction",
      "Automated Regression Safety Harnesses",
    ],
    problemsSolved:
      "Removes fear of touching brittle legacy codebases, end-of-life framework dependencies, and slow innovation.",
    outcomes: "Revitalized business agility, modernized developer talent acquisition, and drastically reduced maintenance overhead.",
  },
  {
    id: "security-consulting",
    category: "Enterprise Solutions",
    title: "Security Architecture & Consulting",
    shortDesc: "Zero-Trust architecture, automated vulnerability scanning, OWASP compliance, and continuous technical advisory.",
    iconName: "ShieldCheck",
    deliverables: [
      "Threat Modeling & Architecture Security Reviews",
      "Automated SAST/DAST in CI/CD Pipelines",
      "Zero-Trust Network Access Policies",
      "Detailed Executive & Engineering Remediation Plans",
    ],
    problemsSolved:
      "Prevents costly data breaches, compliance penalties (SOC2, GDPR, HIPAA), and unpatched attack surfaces.",
    outcomes: "Battle-hardened enterprise defense, client trust validation, and calm compliance audits.",
  },
];

export const processSteps = [
  {
    step: "01",
    phase: "Discover",
    title: "Domain & Objective Alignment",
    description: "Deep technical workshops to understand your architectural constraints, business logic, user personas, and target SLAs.",
    deliverable: "Technical Requirements Document (TRD) & Scope Matrix",
  },
  {
    step: "02",
    phase: "Architect",
    title: "Systems & Security Blueprint",
    description: "Formulating system topology, microservice boundaries, database schemas, encryption standards, and cloud topologies.",
    deliverable: "High-Level Architecture (HLA) & Security Audit Plan",
  },
  {
    step: "03",
    phase: "Design",
    title: "UX Flow & Interface Design",
    description: "Iterative prototyping with design systems, clickable user journeys, accessibility testing, and responsive layouts.",
    deliverable: "Figma Component Library & Tested User Prototypes",
  },
  {
    step: "04",
    phase: "Develop",
    title: "Clean Code & Agile Sprints",
    description: "Two-week test-driven development sprints with continuous code reviews, automated linting, and type-safe contracts.",
    deliverable: "Modular Production Codebase & Automated Test Suite",
  },
  {
    step: "05",
    phase: "Integrate",
    title: "Ecosystem & API Synthesis",
    description: "Connecting enterprise ERPs, payment gateways, vector stores, authentication providers, and third-party tools.",
    deliverable: "Validated API Contracts & Verified Webhook Handlers",
  },
  {
    step: "06",
    phase: "Deploy",
    title: "Automated GitOps Launch",
    description: "Zero-downtime blue/green or canary deployment onto auto-scaling cloud infrastructure with full telemetry.",
    deliverable: "Live Production Cluster & CI/CD Pipelines",
  },
  {
    step: "07",
    phase: "Optimize",
    title: "Continuous Observability & Scale",
    description: "Active monitoring of Core Web Vitals, database query latencies, cloud spend, and proactive reliability tuning.",
    deliverable: "Real-time Telemetry Dashboard & Dedicated SLAs",
  },
];

export const illustrativeShowcases = [
  {
    id: "concept-cloud-mesh",
    title: "NextGen Cloud Orchestrator",
    badge: "Illustrative Architecture Concept",
    domain: "Distributed Infrastructure & FinOps",
    summary:
      "A conceptual multi-region Kubernetes topology with automated failover, distributed edge caching, and real-time telemetry metrics.",
    image: "/assets/cloud-showcase.jpg",
    stack: ["Go", "Kubernetes", "AWS EKS", "Terraform", "Prometheus", "OpenTelemetry"],
    features: [
      "Sub-25ms global cross-region data synchronization",
      "Automated spot-instance cost arbitrage reducing cloud bill",
      "GitOps-driven blue/green rollout with automated canary rollback",
    ],
  },
  {
    id: "concept-ai-agentic",
    title: "Autonomous Knowledge Copilot",
    badge: "Illustrative Architecture Concept",
    domain: "Enterprise GenAI & RAG Workflows",
    summary:
      "A conceptual high-throughput multi-agent orchestration pipeline integrating vector search with deterministic validation guardrails.",
    image: "/assets/ai-showcase.jpg",
    stack: ["Python", "FastAPI", "Next.js", "LangChain", "Qdrant", "PostgreSQL pgvector"],
    features: [
      "Hybrid dense-sparse retrieval yielding 98.4% contextual relevance",
      "Deterministic PII masking & automated hallucination filtering",
      "Sub-300ms streaming generation with intelligent prompt caching",
    ],
  },
  {
    id: "concept-saas-platform",
    title: "HyperScale Multi-Tenant Engine",
    badge: "Illustrative Architecture Concept",
    domain: "B2B SaaS & Usage-Based Billing",
    summary:
      "A conceptual enterprise platform blueprint featuring isolated tenant data partitions, self-serve developer APIs, and usage metering.",
    image: "/assets/hero-bg.jpg",
    stack: ["TypeScript", "Next.js 15", "Node.js", "Redis", "Kafka", "PostgreSQL RLS"],
    features: [
      "Cryptographic tenant isolation with row-level security policies",
      "High-throughput event ingestion processing 50k events/sec",
      "Dynamic webhook dispatcher with automatic exponential backoff",
    ],
  },
];

export const engagementModels = [
  {
    name: "Dedicated Engineering Pod",
    idealFor: "Fast-growing scaleups and enterprises needing dedicated technical horsepower.",
    features: [
      "Full-stack engineers, cloud architect & QA specialist",
      "Direct integration into your Slack/Jira sprint cadence",
      "Weekly velocity reports and transparent code commits",
      "Flexible scaling of pod size based on product roadmap",
    ],
    highlight: true,
  },
  {
    name: "Fixed-Scope Milestone Projects",
    idealFor: "Defined product releases, MVPs, legacy refactoring, or specific migrations.",
    features: [
      "Pre-agreed milestones, deliverables, and timelines",
      "Fixed budget certainty with zero hidden cost surprises",
      "Strict scope boundary management & testing runbooks",
      "Comprehensive handover documentation and warranty",
    ],
    highlight: false,
  },
  {
    name: "Ongoing Reliability & Support (SLA)",
    idealFor: "Production applications requiring 24/7 uptime, security patches, and scaling.",
    features: [
      "Guaranteed response time SLAs (up to 15-minute response)",
      "Proactive cloud infrastructure & database optimization",
      "Continuous dependency updates and CVE patch management",
      "Monthly architectural advisory & performance audits",
    ],
    highlight: false,
  },
];

export const industriesList = [
  {
    name: "SaaS & Cloud Software",
    desc: "Multi-tenant platforms, usage metering, webhook hubs, and high-concurrency microservices.",
    icon: "Layers",
  },
  {
    name: "FinTech & Payments",
    desc: "PCI-DSS compliant architectures, ledger consistency, idempotent APIs, and fraud detection logic.",
    icon: "ShieldAlert",
  },
  {
    name: "Healthcare & Life Sciences",
    desc: "HIPAA-conscious data pipelines, secure patient portals, and interoperable HL7/FHIR integrations.",
    icon: "Activity",
  },
  {
    name: "Logistics & Supply Chain",
    desc: "Real-time telemetry tracking, routing optimization engines, warehouse systems, and IoT pipelines.",
    icon: "Truck",
  },
  {
    name: "E-Commerce & Retail",
    desc: "Headless commerce, dynamic catalog search, high-volume checkout funnels, and inventory sync.",
    icon: "ShoppingBag",
  },
  {
    name: "Education & EdTech",
    desc: "Interactive video classrooms, automated grading pipelines, LMS integrations, and student analytics.",
    icon: "GraduationCap",
  },
  {
    name: "Professional Services & Legal",
    desc: "Document workflow automation, secure client vaults, audit logs, and semantic legal search.",
    icon: "Briefcase",
  },
];

export const faqs = [
  {
    q: "How does NexoraTech estimate project timelines and milestones?",
    a: "We begin with a discovery phase to map business requirements into technical work-breakdown structures. Typical MVP builds range from 6 to 12 weeks, while complex enterprise platforms are scoped in iterative 2-week agile sprints with demonstrable deliverables at the end of each sprint.",
  },
  {
    q: "How do you ensure enterprise-grade security and data privacy?",
    a: "Security is engineered from day zero. We enforce Zero-Trust access patterns, encrypt data in transit (TLS 1.3) and at rest (AES-256), conduct automated SAST/DAST scans in CI/CD, and adhere to OWASP Top 10 guidelines.",
  },
  {
    q: "Can NexoraTech assist in migrating legacy applications to the cloud?",
    a: "Yes. We specialize in zero-downtime legacy modernization using proven patterns like the Strangler Fig approach. We containerize legacy workloads, establish real-time database replication, and cut over traffic incrementally with instant rollback safety.",
  },
  {
    q: "How do you handle AI integration without exposing sensitive company data?",
    a: "We implement private enterprise AI architectures. Your data never trains public models. We use VPC-isolated model endpoints, client-side PII scrubbing, role-based access to vector stores, and strict semantic guardrails.",
  },
  {
    q: "What engagement model is recommended for an early-stage startup vs. an enterprise?",
    a: "Startups often prefer either a Fixed-Scope Milestone engagement for a well-defined MVP or a Dedicated Pod for maximum agility. Enterprises typically leverage our Dedicated Pod model for ongoing engineering velocity and our SLA Support tier for 24/7 mission-critical reliability.",
  },
  {
    q: "Who owns the intellectual property (IP) and source code?",
    a: "You retain 100% full ownership of all source code, architecture diagrams, infrastructure scripts, and intellectual property developed during our engagement. Everything is committed directly to your private repositories.",
  },
];
