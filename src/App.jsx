import React, { useEffect, useMemo, useState } from "react";

const projects = [
  {
    title: "Gen AI - GAIA",
    tag: "GenAI",
    status: "Production",
    category: "Internal",
    tagline: "Assistive AI for BCA.",
    desc: "Initial build for GAIA assistants running on intranet.",
    detail: "Runs in intranet with low resource needs;",
    highlights: ["Intranet scope", "Low resource"],
    tech: ["Generative AI", "Python"],
    impact: "Draft assistants for GAIA users.",
    heroImage: "/assets/gaia.png",
    projectUrl: "https://www.gaia.intra.bca.co.id",
    metrics: [
      { label: "Users", value: "Internal BCA", icon: "👥" },
      { label: "Deployments", value: "Intranet", icon: "🛰️" },
    ],
    caseStudy: {
      hero: "Intranet-first GAIA assistant concepts.",
      slides: [
        {
          title: "Use cases",
          desc: "Gen AI - Layla Learning Recommendation.",
          image: "/assets/learning_layla.png",
        },
        {
          title: "Use cases",
          desc: "Gen AI - Layla Content Creation",
          image: "/assets/content_layla.png",
        },
        {
          title: "Lightweight",
          desc: "Low resource footprint for early runs.",
          image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=800&q=80",
        },
      ],
    },
  },
  {
    title: "Gen AI - Metahuman BCA.co.id",
    tag: "GenAI",
    status: "In Progress",
    category: "External",
    tagline: "Metahuman experience for BCA.co.id.",
    desc: "Runs on local/external PC with TDZ software; internet enabled.",
    detail: "Higher resource needs; no sign-in; suited for richer visuals.",
    highlights: ["External PC", "High resource", "Internet"],
    tech: ["Metahuman", "3D", "AI"],
    impact: "Showcase metahuman concierge for BCA.co.id.",
    heroImage: "https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?auto=format&fit=crop&w=1200&q=80",
    projectUrl: "/projects/metahuman",
    metrics: [
      { label: "Stage", value: "Prototype", icon: "🧪" },
      { label: "Resource", value: "High", icon: "⚡" },
    ],
    caseStudy: {
      hero: "Metahuman concierge concepts.",
      slides: [
        {
          title: "Visual fidelity",
          desc: "High-res avatars for web.",
          image: "https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?auto=format&fit=crop&w=800&q=80",
        },
        {
          title: "Runtime",
          desc: "External PC with TDZ software.",
          image: "https://images.unsplash.com/photo-1556767576-cfba0b6ae8f0?auto=format&fit=crop&w=800&q=80",
        },
        {
          title: "Bandwidth",
          desc: "Internet required for assets.",
          image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
        },
      ],
    },
  },
  {
    title: "Gen AI - CSO Roleplay",
    tag: "GenAI",
    status: "In Progress",
    category: "Training",
    tagline: "Roleplay simulator for CSO teams.",
    desc: "Local/external PC, TDZ software enabled, internet access.",
    detail: "Low resource need, no sign-in; focuses on scenario training.",
    highlights: ["Roleplay", "External PC", "Internet"],
    tech: ["Speech", "LLM", "React"],
    impact: "Upgrade CSO training throughput.",
    heroImage: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80",
    projectUrl: "/projects/cso-roleplay",
    metrics: [
      { label: "Scenarios", value: "Drafting", icon: "📜" },
      { label: "Devices", value: "External PCs", icon: "🖥️" },
    ],
    caseStudy: {
      hero: "Interactive CSO roleplay sessions.",
      slides: [
        {
          title: "Dialogue",
          desc: "LLM-driven branching scripts.",
          image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
        },
        {
          title: "Evaluation",
          desc: "Capture responses for coaching.",
          image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
        },
        {
          title: "Access",
          desc: "External PC + TDZ ready.",
          image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
        },
      ],
    },
  },
  {
    title: "Gen AI - Invoice Document Read",
    tag: "GenAI",
    status: "Beta",
    category: "Automation",
    tagline: "Invoice parsing on intranet.",
    desc: "Intranet run, no TDZ software, low resource, internet allowed.",
    detail: "Document extraction and parsing for invoices in internal network.",
    highlights: ["Intranet", "Parsing", "Low resource"],
    tech: ["OCR", "LLM", "API"],
    impact: "Speed up invoice intake.",
    heroImage: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80",
    projectUrl: "/projects/invoice-read",
    metrics: [
      { label: "Docs/day", value: "TBD", icon: "📄" },
      { label: "Accuracy", value: "Tuning", icon: "🎯" },
    ],
    caseStudy: {
      hero: "Internal invoice automation flows.",
      slides: [
        {
          title: "Upload",
          desc: "Secure intranet upload.",
          image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
        },
        {
          title: "Extraction",
          desc: "LLM + OCR parsing pipeline.",
          image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
        },
        {
          title: "Export",
          desc: "Structured outputs to ERP.",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
        },
      ],
    },
  },
  {
    title: "Mattermost",
    tag: "Collaboration",
    status: "Live",
    category: "Tools",
    tagline: "Team chat deployment.",
    desc: "Local/external PC, TDZ software, internet depends, low-med resources, sign-in required.",
    detail: "Deployed chat tool for teams with flexible connectivity.",
    highlights: ["Chat", "Sign-in", "Low-med resource"],
    tech: ["Mattermost", "Docker"],
    impact: "Enable secure team comms.",
    heroImage: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
    projectUrl: "/projects/mattermost",
    metrics: [
      { label: "Teams", value: "TBD", icon: "👥" },
      { label: "Uptime", value: "Tracked", icon: "⏱️" },
    ],
    caseStudy: {
      hero: "Collaboration rollouts.",
      slides: [
        {
          title: "Workspace",
          desc: "Channel setup and roles.",
          image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
        },
        {
          title: "Access",
          desc: "Sign-in with flexible network.",
          image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=800&q=80",
        },
        {
          title: "Ops",
          desc: "TDZ ready deployment.",
          image: "https://images.unsplash.com/photo-1556767576-cfba0b6ae8f0?auto=format&fit=crop&w=800&q=80",
        },
      ],
    },
  },
  {
    title: "Rocket.Chat",
    tag: "Collaboration",
    status: "Live",
    category: "Tools",
    tagline: "Alt chat stack.",
    desc: "Local/external PC, TDZ software, internet depends, low-med resources, sign-in.",
    detail: "Alternative chat platform with similar footprint to Mattermost.",
    highlights: ["Chat", "Sign-in", "Low-med resource"],
    tech: ["Rocket.Chat", "Docker"],
    impact: "Provide chat redundancy option.",
    heroImage: "https://images.unsplash.com/photo-1556767576-cfba0b6ae8f0?auto=format&fit=crop&w=1200&q=80",
    projectUrl: "/projects/rocket-chat",
    metrics: [
      { label: "Instances", value: "TBD", icon: "🗂️" },
      { label: "Resource", value: "Low-med", icon: "⚙️" },
    ],
    caseStudy: {
      hero: "Rocket.Chat deployments.",
      slides: [
        {
          title: "Channels",
          desc: "Config patterns for teams.",
          image: "https://images.unsplash.com/photo-1556767576-cfba0b6ae8f0?auto=format&fit=crop&w=800&q=80",
        },
        {
          title: "Connectivity",
          desc: "Works with flexible internet.",
          image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
        },
        {
          title: "Access",
          desc: "Sign-in enforced.",
          image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=800&q=80",
        },
      ],
    },
  },
  {
    title: "Game BLI",
    tag: "Game",
    status: "In Progress",
    category: "Experience",
    tagline: "BLI game experience.",
    desc: "Gamification for learning internal BCA",
    detail: "External-PC game that runs offline; TDZ ready with sign-in.",
    highlights: ["Offline", "External PC", "Sign-in"],
    tech: ["Game", "Client"],
    impact: "Engagement for BLI users.",
    heroImage: "/assets/gamebli.png",
    projectUrl: "https://www.gallerygame.site",
    metrics: [
      { label: "Players", value: "TBD", icon: "🎮" },
      { label: "Mode", value: "Offline", icon: "🔌" },
    ],
    caseStudy: {
      hero: "Game experience concepts.",
      slides: [
        {
          title: "Gameplay",
          desc: "Core loop outline.",
          image: "/assets/gamebli.png",
        },
        {
          title: "Access",
          desc: "Through .",
          image: "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?auto=format&fit=crop&w=800&q=80",
        },
        {
          title: "Platform",
          desc: "External PC with TDZ install.",
          image: "https://images.unsplash.com/photo-1488229297570-58520851e868?auto=format&fit=crop&w=800&q=80",
        },
      ],
    },
  },
];

const futures = [
  "Banking in Smart Glasses",
  "Voice Guidance Using Computer Vision",
  "Autonomous site reliability",
  "Bio-signal authentication",
  "Neural interface prototypes",
];

const pipeline = [
  { label: "Next", slot: "2026", title: "Reachy Mini", note: "Surface runaway cost & latency spikes" },
  { label: "Next", slot: "2026", title: "Blockchain based Money transfer", note: "Release train + golden paths for DIS teams" },
  { label: "Next", slot: "2026", title: "Palm Biometric for Payment", note: "Bundles for low-connectivity deployments" },
];

// const team = [
//   { name: "Alya Pratama", role: "Product Design", blurb: "Ngeracik UI/UX biar jelas & niat.", color: "from-sky-500 to-cyan-400" },
//   { name: "Raka Mahendra", role: "Frontend", blurb: "Ngulik microinteractions & perf web.", color: "from-indigo-500 to-blue-500" },
//   { name: "Nadya Wirawan", role: "Backend/DevOps", blurb: "Ngurus infra, deployment, SRE guardrails.", color: "from-emerald-500 to-teal-400" },
//   { name: "Bima Satriya", role: "AI/Automation", blurb: "Ngeracik model & pipeline observability.", color: "from-amber-400 to-orange-500" },
// ];

const liveMetrics = [
  { label: "Active Projects", value: "5" },
  { label: "Completed", value: "12" },
  { label: "Experiments", value: "3 running" },
  { label: "Last Deploy", value: "2h ago" },
];

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalProject, setModalProject] = useState(null);
  const [caseStudyProject, setCaseStudyProject] = useState(null);
  const [showStatusCard, setShowStatusCard] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  const activeProject = useMemo(() => projects[activeIndex], [activeIndex]);

  const next = () => setActiveIndex((prev) => (prev + 1) % projects.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  const openModal = (project) => setModalProject(project);
  const closeModal = () => setModalProject(null);
  const openCaseStudy = (project) => setCaseStudyProject(project);
  const closeCaseStudy = () => setCaseStudyProject(null);
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const offset = 120; // keep target clear of hero overlap
    const y = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  useEffect(() => {
    const autoplay = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 8000);
    return () => clearInterval(autoplay);
  }, []);

  return (
    <div className="min-h-screen bg-[#030611] text-sky-50 font-space">
      {/* Intro overlay */}
      <div
        className={`fixed inset-0 z-40 flex items-center justify-center bg-[#05070d] transition-opacity duration-700 ${
          showIntro ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="relative flex flex-col items-center gap-5 text-center">
          <div className="absolute -inset-24 bg-[radial-gradient(circle_at_50%_30%,rgba(51,168,255,0.2),transparent_45%),radial-gradient(circle_at_30%_60%,rgba(124,241,255,0.15),transparent_40%)] blur-3xl" />
          <div className="relative flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm uppercase tracking-[0.3em] text-sky-100 backdrop-blur">
            Welcome to
          </div>
          <h1 className="relative text-5xl font-semibold text-white sm:text-6xl intro-rise">DIS</h1>
          <p className="relative max-w-xl text-lg text-slate-300 intro-rise delay-150">Digital Innovation Solution</p>
        </div>
      </div>

      <div className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute left-[-10%] top-[-15%] h-80 w-80 rounded-full bg-sky-500/25 blur-3xl" />
        <div className="pointer-events-none absolute right-[-12%] top-[10%] h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-[-20%] left-[20%] h-80 w-80 rounded-full bg-blue-900/35 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_30%,rgba(51,168,255,0.12),transparent_40%),radial-gradient(circle_at_85%_20%,rgba(124,241,255,0.12),transparent_35%),radial-gradient(circle_at_40%_80%,rgba(37,99,235,0.18),transparent_45%)] opacity-70" />

        <main className="relative mx-auto max-w-6xl px-5 pb-24 pt-16 sm:px-8 lg:px-12">
          <div className="pointer-events-none absolute left-[-110px] top-[28%] hidden h-[320px] w-24 rotate-6 rounded-3xl border border-white/5 bg-gradient-to-b from-slate-900/70 via-sky-900/20 to-transparent blur-[1px] sm:block lg:left-[-140px]" />
          <div className="pointer-events-none absolute right-[-110px] top-[46%] hidden h-[320px] w-24 -rotate-6 rounded-3xl border border-white/5 bg-gradient-to-b from-slate-900/70 via-cyan-900/25 to-transparent blur-[1px] sm:block lg:right-[-140px]" />
          <div className="pointer-events-none absolute left-[-70px] top-[18%] hidden flex-col gap-3 sm:flex">
            {/* <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-200 shadow-lg backdrop-blur">
              Latency wins: <span className="text-sky-200">-38%</span>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-200 shadow-lg backdrop-blur">
              Deploys / wk: <span className="text-sky-200">27</span>
            </div> */}
          </div>
          <div className="pointer-events-none absolute right-[-70px] top-[58%] hidden flex-col gap-3 sm:flex">
            <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-200 shadow-lg backdrop-blur">
              Uptime: <span className="text-sky-200">99.98%</span>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-200 shadow-lg backdrop-blur">
              AI assists: <span className="text-sky-200">142k</span>
            </div>
          </div>
          <header className="relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-slate-900/80 via-slate-900/40 to-slate-950/80 px-7 py-14 shadow-[0_30px_120px_rgba(0,0,0,0.6)] backdrop-blur-2xl sm:px-12 sm:py-16">
            <div className="absolute inset-0 opacity-50 [background:radial-gradient(circle_at_30%_20%,rgba(51,168,255,0.18),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(124,241,255,0.14),transparent_30%)]" />
            <div className="relative flex flex-col gap-4">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-sky-200/20 bg-sky-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-sky-100">
                Welcome to DIS
              </div>
              <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                Digital Innovation Solution
              </h1>
              <p className="max-w-3xl text-lg text-slate-200 sm:text-xl">
                Showcasing the projects and future tech shaping our next wave of innovation.
              </p>
              <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center">
                <button
                  onClick={() => scrollTo("projects-section")}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-400 px-6 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:-translate-y-0.5 hover:shadow-cyan-400/40 sm:w-auto"
                >
                  Explore Projects
                </button>
                <button
                  onClick={() => scrollTo("future-section")}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:border-sky-300/60 hover:text-sky-100 sm:w-auto"
                >
                  Future Tech
                </button>
              </div>
            </div>
          </header>

          {/* <section className="mt-12 rounded-3xl border border-white/5 bg-white/5 px-6 py-8 shadow-xl backdrop-blur-2xl sm:px-10">
            <div className="flex flex-wrap items-start justify-between gap-6">
              <div className="max-w-2xl space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-200">About DIS</p>
                <h2 className="text-3xl font-semibold text-white sm:text-4xl">Tim kecil, prototyping cepat</h2>
                <p className="text-base text-slate-200 sm:text-lg">
                  Kami studio teknologi kecil yang fokus ke automation, AI tooling, dan platform web yang bisa dipakai tim internal
                  dengan cepat. Eksperimen-driven, future-tech minded, dan selalu ngejar shipping cepat tanpa ninggalin reliability.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Fast prototyping", "Experiment-first", "Future tech", "Secure by default"].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-sky-400/10 px-3 py-1 text-xs font-semibold text-sky-100"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="grid gap-3 text-sm text-slate-200 sm:w-64">
                <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4 shadow-lg">
                  <p className="text-xs uppercase tracking-[0.3em] text-sky-200">Siapa kami</p>
                  <p className="mt-2 font-semibold text-white">Studio + komunitas builder</p>
                  <p className="text-slate-300">Kolaborasi lintas frontend, backend, AI, dan ops.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4 shadow-lg">
                  <p className="text-xs uppercase tracking-[0.3em] text-sky-200">Fokus</p>
                  <p className="mt-2 font-semibold text-white">Automation, AI tools, web platforms</p>
                  <p className="text-slate-300">Dari dashboard observability sampai internal delivery tools.</p>
                </div>
              </div>
            </div>
          </section> */}

          <section id="projects-section" className="mt-16 space-y-8 scroll-mt-32" aria-labelledby="projects">
            <div className="flex flex-wrap items-center gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-200">Portfolio</p>
                <h2 id="projects" className="mt-1 text-3xl font-semibold text-white sm:text-4xl">
                  Project Showcase
                </h2>
                <p className="mt-2 text-base text-slate-300 sm:text-lg">
                  Select builds that push reliability, intelligence, and scale.
                </p>
              </div>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-sky-400/60 to-transparent opacity-60" />
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-2xl sm:p-8">
              <div className="absolute inset-0 opacity-60 [background:radial-gradient(circle_at_20%_20%,rgba(51,168,255,0.1),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(124,241,255,0.08),transparent_45%)]" />
              <div className="relative grid gap-6">
                <article
                  key={activeProject.title}
                  className="project-fade group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-6 shadow-xl backdrop-blur-xl transition"
                >
                  <div className="flex flex-wrap items-center gap-3 text-sm">
                    <span className="rounded-full bg-sky-400/15 px-4 py-1 font-semibold text-sky-100">{activeProject.tag}</span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-200">
                      {activeProject.category}
                    </span>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        activeProject.status === "Live"
                          ? "bg-emerald-400/15 text-emerald-100 border border-emerald-300/30"
                          : activeProject.status === "Beta"
                          ? "bg-amber-400/15 text-amber-100 border border-amber-300/30"
                          : "bg-white/5 text-slate-200 border border-white/10"
                      }`}
                    >
                      {activeProject.status}
                    </span>
                    <span className="relative ml-auto flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-300/70" />
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-sky-400" />
                    </span>
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold text-white lg:text-3xl">{activeProject.title}</h3>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">{activeProject.tagline}</p>
                  <p className="mt-3 text-base text-slate-200 lg:text-lg">{activeProject.desc}</p>
                  <p className="mt-2 text-sm text-slate-300">{activeProject.impact}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {activeProject.highlights.map((h) => (
                      <span
                        key={h}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-sky-50"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-200">
                    {activeProject.tech.map((t) => (
                      <span key={t} className="rounded-full border border-white/10 bg-slate-800/70 px-3 py-1 font-semibold">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 flex items-center gap-3">
                    <button
                      onClick={prev}
                      className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-sky-300/60"
                    >
                      Prev
                    </button>
                    <button
                      onClick={next}
                      className="rounded-xl border border-white/15 bg-gradient-to-r from-sky-500 to-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:-translate-y-0.5"
                    >
                      Next
                    </button>
                    <button
                      onClick={() => openModal(activeProject)}
                      className="ml-auto inline-flex items-center gap-2 rounded-xl border border-sky-200/30 bg-sky-400/15 px-4 py-2 text-sm font-semibold text-sky-100 transition hover:-translate-y-0.5 hover:border-sky-200/70 hover:text-white"
                    >
                      View Details
                      <span className="text-base"></span>
                    </button>
                    <button
                      onClick={() => openCaseStudy(activeProject)}
                      className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-sky-300/60"
                    >
                      View Case Study
                    </button>
                  </div>
                </article>

                <div className="grid gap-3 text-sm text-slate-300 lg:grid-cols-[1fr,320px]">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                    <p className="text-xs uppercase tracking-[0.3em] text-sky-200">Navigation</p>
                    <div className="mt-3 flex flex-wrap items-center justify-start gap-1.5 sm:gap-2">
                      {projects.map((p, idx) => (
                        <button
                          key={p.title}
                          onClick={() => setActiveIndex(idx)}
                          className={`h-2 w-5 sm:h-2.5 sm:w-7 rounded-full transition ${
                            idx === activeIndex ? "bg-sky-400 shadow-[0_0_12px_rgba(51,168,255,0.7)]" : "bg-white/15"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                    <p className="text-xs uppercase tracking-[0.3em] text-sky-200">Now Showing</p>
                    <p className="mt-2 text-lg font-semibold text-white">{activeProject.title}</p>
                    <p className="mt-1 text-slate-300">{activeProject.detail}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="future-section" className="mt-16 space-y-6 scroll-mt-32" aria-labelledby="future">
            <div className="flex flex-wrap items-center gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-200">Pipeline</p>
                <h2 id="future" className="mt-1 text-2xl font-semibold text-white sm:text-3xl">
                  Future Pipeline / Roadmap
                </h2>
                {/* <p className="mt-1 text-sm text-slate-300 sm:text-base">Now → Next → Later, biar roadmapnya kebayang.</p> */}
              </div>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-sky-400/60 to-transparent opacity-60" />
            </div>

            <div className="grid gap-4 lg:grid-cols-[2fr,1fr]">
              <div className="grid gap-3">
                {pipeline.map((item) => (
                  <div
                    key={item.title}
                    className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 p-4 shadow-lg backdrop-blur-xl transition hover:border-sky-300/60"
                  >
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-200">
                      <span className="rounded-full bg-sky-400/15 px-3 py-1 text-sky-100">{item.label}</span>
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-slate-200">{item.slot}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-300/70" />
                        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-sky-400" />
                      </span>
                    </div>
                    <p className="text-sm text-slate-300">{item.note}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl backdrop-blur-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-200">Radar</p>
                {/* <p className="mt-1 text-sm text-slate-300">Signals kita pantau & siap dicoba.</p> */}
                <div className="mt-4 grid gap-2">
                  {futures.map((item, idx) => (
                    <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/5 bg-slate-900/60 px-4 py-3">
                      <span className="text-xs font-semibold text-sky-200">0{idx + 1}</span>
                      <span className="flex-1 text-sm font-medium text-white">{item}</span>
                      <span className="relative flex h-3 w-3">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300/70" />
                        <span className="relative inline-flex h-3 w-3 rounded-full bg-cyan-300" />
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* <section className="mt-16 space-y-6" aria-labelledby="team">
            <div className="flex flex-wrap items-center gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-200">People</p>
                <h2 id="team" className="mt-1 text-2xl font-semibold text-white sm:text-3xl">
                  Tim DIS
                </h2>
                <p className="mt-1 text-sm text-slate-300 sm:text-base">Builder yang ngerjain langsung.</p>
              </div>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-sky-400/60 to-transparent opacity-60" />
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {team.map((member) => (
                <div key={member.name} className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-lg backdrop-blur-xl">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${member.color} text-base font-semibold text-slate-950`}>
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-white">{member.name}</h3>
                  <p className="text-sm font-semibold text-sky-200">{member.role}</p>
                  <p className="mt-2 text-sm text-slate-300">{member.blurb}</p>
                </div>
              ))}
            </div>
          </section> */}

          <div className="fixed bottom-6 right-6 z-30">
            {showStatusCard ? (
              <div className="w-[260px] rounded-3xl border border-white/10 bg-slate-950/80 p-4 shadow-[0_20px_80px_rgba(0,0,0,0.6)] backdrop-blur-2xl">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-200">Status</p>
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.7)]" />
                    <button
                      onClick={() => setShowStatusCard(false)}
                      className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[11px] font-semibold text-slate-200 transition hover:border-sky-300/60 hover:text-white"
                    >
                      Minimize
                    </button>
                  </div>
                </div>
                <div className="mt-3 grid gap-2 text-sm text-slate-200">
                  {liveMetrics.map((item) => (
                    <div key={item.label} className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 px-3 py-2">
                      <span>{item.label}</span>
                      <span className="font-semibold text-white">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <button
                onClick={() => setShowStatusCard(true)}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/80 px-4 py-2 text-xs font-semibold text-slate-100 shadow-[0_15px_50px_rgba(0,0,0,0.6)] backdrop-blur-2xl transition hover:border-sky-300/60 hover:text-white"
              >
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.7)]" />
                Show status
              </button>
            )}
          </div>

          {/* <section className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-2xl sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-200">Stay in touch</p>
                <h2 className="mt-1 text-2xl font-semibold text-white sm:text-3xl">Contact / Join DIS</h2>
                <p className="mt-1 text-sm text-slate-300 sm:text-base">Punya ide, mau kolab, atau pingin nimbrung eksperimen baru?</p>
              </div>
              <div className="flex gap-3">
                <button className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-sky-300/60">
                  Contact Us
                </button>
                <button className="rounded-xl bg-gradient-to-r from-sky-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:-translate-y-0.5 hover:shadow-cyan-400/40">
                  Join DIS
                </button>
              </div>
            </div>
          </section> */}

          <footer className="mt-14 border-t border-white/5 pt-6 text-center text-sm text-slate-400">
            <p>DIS - Digital Innovation Solutions.</p>
            <div className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-500">Tech-forward - Secure - Human-centric</div>
          </footer>
        </main>
      </div>

      {/* Modal */}
      {modalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-6 backdrop-blur" onClick={closeModal}>
          <div
            className="modal-rise relative w-full max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-slate-950/95 shadow-[0_18px_90px_rgba(0,0,0,0.65)] backdrop-blur-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute inset-0 opacity-50 [background:radial-gradient(circle_at_20%_20%,rgba(51,168,255,0.18),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(124,241,255,0.12),transparent_35%)]" />
            <div className="relative space-y-5 p-5 sm:p-6">
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-sky-200">
                    <span className="rounded-full bg-sky-400/15 px-3 py-1 text-sky-100">{modalProject.tag}</span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-slate-200">{modalProject.category}</span>
                    <span
                      className={`rounded-full px-3 py-1 ${
                        modalProject.status === "Live"
                          ? "bg-emerald-400/15 text-emerald-100 border border-emerald-300/30"
                          : modalProject.status === "Beta"
                          ? "bg-amber-400/15 text-amber-100 border border-amber-300/30"
                          : "bg-white/5 text-slate-200 border border-white/10"
                      }`}
                    >
                      {modalProject.status}
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold text-white sm:text-3xl">{modalProject.title}</h3>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">{modalProject.tagline}</p>
                </div>
                <button
                  onClick={closeModal}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-200 transition hover:border-sky-300/60 hover:text-white"
                >
                  Close
                </button>
              </div>

              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-slate-900/80 via-slate-800/60 to-sky-900/60 shadow-lg">
                {modalProject.heroImage ? (
                  <img
                    src={modalProject.heroImage}
                    alt={modalProject.title}
                    className="h-[260px] w-full object-cover sm:h-[320px]"
                    loading="lazy"
                  />
                ) : (
                  <div className="aspect-[16/9] bg-[radial-gradient(circle_at_20%_30%,rgba(56,189,248,0.25),transparent_35%),radial-gradient(circle_at_70%_60%,rgba(14,165,233,0.25),transparent_40%),linear-gradient(120deg,rgba(15,23,42,0.9),rgba(3,7,18,0.95))]" />
                )}
                <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full bg-emerald-400/20 px-3 py-1 text-xs font-semibold text-emerald-100 backdrop-blur">
                  <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                  {modalProject.status}
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-200">Description</p>
                <p className="text-base text-slate-200">
                  <span className="font-semibold text-sky-200">{modalProject.desc}</span>
                  <br />
                  <span className="text-slate-300">{modalProject.detail}</span>
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-200">Technologies</p>
                <div className="flex flex-wrap gap-2">
                  {modalProject.tech.map((t) => (
                    <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-sky-50">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-200">Key Metrics</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {modalProject.metrics?.map((m) => (
                    <div key={m.label} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-slate-200">
                      <span className="text-lg">{m.icon}</span>
                      <div className="flex flex-col">
                        <span className="text-xs uppercase tracking-[0.15em] text-slate-300">{m.label}</span>
                        <span className="text-base font-semibold text-white">{m.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-200">Status</p>
                <div className="flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-500/15 px-4 py-2 text-sm font-semibold text-emerald-100">
                  <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                  {modalProject.status}
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
                <button
                  onClick={closeModal}
                  className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-sky-300/60"
                >
                  Close
                </button>
                <a
                  href={modalProject.projectUrl || "#"}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-gradient-to-r from-sky-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:-translate-y-0.5 hover:shadow-cyan-400/40"
                >
                  Open Full Project Page
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Case Study Modal */}
      {caseStudyProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-6 backdrop-blur" onClick={closeCaseStudy}>
          <div
            className="modal-rise relative w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-slate-950/95 shadow-[0_25px_120px_rgba(0,0,0,0.7)] backdrop-blur-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute inset-0 opacity-45 [background:radial-gradient(circle_at_20%_20%,rgba(51,168,255,0.18),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(124,241,255,0.12),transparent_35%)]" />
            <div className="relative space-y-5 p-6 sm:p-7">
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-200">Case Study</p>
                  <h3 className="text-2xl font-semibold text-white sm:text-3xl">{caseStudyProject.title}</h3>
                  <p className="text-sm text-slate-300">{caseStudyProject.caseStudy?.hero}</p>
                </div>
                <button
                  onClick={closeCaseStudy}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-200 transition hover:border-sky-300/60 hover:text-white"
                >
                  Close
                </button>
              </div>

              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-slate-900/80 via-slate-800/60 to-sky-900/60 shadow-lg">
                {caseStudyProject.heroImage ? (
                  <img
                    src={caseStudyProject.heroImage}
                    alt={caseStudyProject.title}
                    className="h-[240px] w-full object-cover sm:h-[280px]"
                    loading="lazy"
                  />
                ) : (
                  <div className="aspect-[16/9] bg-[radial-gradient(circle_at_25%_30%,rgba(56,189,248,0.2),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(14,165,233,0.2),transparent_45%),linear-gradient(120deg,rgba(15,23,42,0.95),rgba(3,7,18,0.92))]" />
                )}
                <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full bg-sky-400/20 px-3 py-1 text-xs font-semibold text-sky-100 backdrop-blur">
                  <span className="h-2 w-2 rounded-full bg-sky-300 shadow-[0_0_10px_rgba(56,189,248,0.8)]" />
                  Visual concept
                </div>
              </div>

              <div className="grid gap-3 md:grid-cols-3">
                {caseStudyProject.caseStudy?.slides.map((slide) => (
                  <div
                    key={slide.title}
                    className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 p-4 shadow-lg backdrop-blur-xl"
                  >
                    {slide.image ? (
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="mb-3 h-28 w-full rounded-xl object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="mb-3 h-28 w-full overflow-hidden rounded-xl bg-[radial-gradient(circle_at_20%_30%,rgba(56,189,248,0.18),transparent_45%),linear-gradient(135deg,rgba(15,23,42,0.95),rgba(3,7,18,0.92))]" />
                    )}
                    <h4 className="text-base font-semibold text-white">{slide.title}</h4>
                    <p className="text-sm text-slate-300">{slide.desc}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
                <button
                  onClick={closeCaseStudy}
                  className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-sky-300/60"
                >
                  Close
                </button>
                <a
                  href={caseStudyProject.projectUrl || "#"}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-gradient-to-r from-sky-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:-translate-y-0.5 hover:shadow-cyan-400/40"
                >
                  Open Full Project Page
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
