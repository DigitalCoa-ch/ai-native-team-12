// PersonaForge AI -- Day 1 Landing Page

const personas = [
  { role: "CISO", concern: "Zero-day risk, compliance, board reporting" },
  { role: "Procurement Director", concern: "Budget control, vendor risk, ROI" },
  { role: "IT Integration Manager", concern: "Legacy systems, API limits, downtime" },
  { role: "Compliance Officer", concern: "GDPR, SOC 2, regulatory exposure" },
];

const painPoints = [
  { label: "Slow", desc: "Cold outreach takes weeks. Nobody replies.", color: "bg-red-500/20 border-red-500/30 text-red-200" },
  { label: "Expensive", desc: "Consultants charge high fees for shallow reports.", color: "bg-orange-500/20 border-orange-500/30 text-orange-200" },
  { label: "Biased", desc: "Friends say yes. Mentors are polite.", color: "bg-yellow-500/20 border-yellow-500/30 text-yellow-200" },
  { label: "Network-gated", desc: "If you do not know a CISO, you are stuck.", color: "bg-rose-500/20 border-rose-500/30 text-rose-200" },
];

const aiPillars = [
  { title: "Adaptive Personas", desc: "AI-generated buyers with realistic goals, constraints, and objection styles that evolve across interviews." },
  { title: "Real-Time Reasoning", desc: "The AI does not script answers. Each response is dynamically constructed based on your pitch." },
  { title: "Memory and Context", desc: "Multi-turn conversations where the buyer remembers your previous claims and challenges inconsistencies." },
  { title: "Multi-Agent Debate", desc: "Multiple synthetic stakeholders debate your product simultaneously, surfacing hidden organizational tensions." },
];

const perch = [
  { title: "Perspective", content: "Early-stage founders need fast, honest validation. But founders are biased toward their own ideas. Enterprise buyers have opposite incentives." },
  { title: "Evidence", content: "Most startups fail due to no product-market fit. Enterprise buyers are gatekept, expensive, and slow. Simulated interviews cannot fully replicate this." },
  { title: "Context", content: "Cybersecurity SaaS is risk-sensitive, compliance-heavy, and procurement-driven. PersonaForge is an early validation layer, not final proof of demand." },
  { title: "Risk", content: "Synthetic realism is the core weakness. AI personas may be too generic, too polite, or too consistent. False-positive validation could lead founders to build the wrong product faster." },
];

function SectionHeader({ badge, title, subtitle }: { badge: string; title: string; subtitle: string }) {
  return (
    <div className="text-center mb-12">
      <span className="inline-block text-xs font-mono font-bold tracking-widest text-violet-400/60 uppercase mb-4 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20">
        {badge}
      </span>
      <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">{title}</h2>
      <p className="text-violet-300/60 text-base max-w-xl mx-auto">{subtitle}</p>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600 rounded-full blur-[120px] opacity-15 animate-float" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-violet-600 rounded-full blur-[100px] opacity-15 animate-float-slow" />
        <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-indigo-600 rounded-full blur-[80px] opacity-10 animate-pulse-slow" />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(124,58,237,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.04)_1px,transparent_1px)] bg-[size:50px_50px]" />
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-sm text-emerald-300 font-medium font-mono">DAY 1 CONCEPT STAGE</span>
        </div>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-gradient mb-4 tracking-tight leading-tight">PersonaForge AI</h1>
        <p className="text-lg sm:text-xl text-violet-300/70 font-light mb-6 max-w-xl mx-auto">Stop Building on Assumptions.</p>
        <div className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6 mb-10 max-w-2xl mx-auto">
          <p className="text-violet-200/80 leading-relaxed text-base">
            <span className="text-red-300 font-semibold">The problem:</span> B2B founders cannot access enterprise decision-makers.
            Customer discovery is slow, expensive, and gatekept.
            By the time you learn your thesis is wrong, you have already burned months and capital.
          </p>
        </div>
        <p className="text-xl sm:text-2xl text-white font-semibold mb-4">Simulate interviews with AI-generated enterprise buyers.</p>
        <p className="text-violet-300/60 text-base mb-10 max-w-lg mx-auto">
          Pitch to a CISO, a Procurement Director, or a Compliance Officer -- generated on the fly,
          challenged in real time, summarized instantly.
        </p>
        <div className="inline-flex flex-col items-center gap-3 px-8 py-6 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-center">
          <span className="text-amber-300 text-sm font-medium">Interactive prototype coming next</span>
          <p className="text-amber-200/60 text-xs max-w-sm">This page explains the concept. The live simulation engine is being built now.</p>
        </div>
      </div>
      <div className="absolute top-6 left-6 w-20 h-20 border-l-2 border-t-2 border-violet-500/20 rounded-tl-xl" />
      <div className="absolute bottom-6 right-6 w-20 h-20 border-r-2 border-b-2 border-violet-500/20 rounded-br-xl" />
    </section>
  );
}

function Problem() {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader badge="THE PAIN" title="Customer Discovery Is Broken" subtitle="Founders rely on methods that are slow, expensive, biased, and gatekept." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {painPoints.map((p) => (
            <div key={p.label} className={"rounded-xl border p-5 " + p.color}>
              <span className="text-2xl mb-3 block font-bold">{p.label}</span>
              <p className="text-sm opacity-80 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-2xl bg-white/5 border border-white/10 p-6 text-center">
          <p className="text-violet-200/70 text-sm leading-relaxed max-w-2xl mx-auto">
            <span className="text-white font-semibold">The real cost:</span> Most startups fail due to weak product-market fit --
            not technical ability. Founders who spend 6 months building before validating lose time, money, and investor confidence.
            PersonaForge AI shifts discovery earlier and faster.
          </p>
        </div>
      </div>
    </section>
  );
}

function PersonasSection() {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader badge="WHO YOU WILL MEET" title="Synthetic Enterprise Buyers" subtitle="Each persona is a distinct stakeholder type with unique concerns, incentives, and objection styles." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {personas.map((p) => (
            <div key={p.role} className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6 text-center hover:border-violet-500/30 transition-colors">
              <h3 className="text-white font-bold mb-2">{p.role}</h3>
              <p className="text-violet-300/60 text-xs leading-relaxed">{p.concern}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-center">
          <p className="text-cyan-200/80 text-sm">
            <span className="font-semibold">Why this matters:</span> In enterprise B2B, you do not sell to one person.
            Multiple stakeholders with conflicting priorities determine every deal.
            PersonaForge AI surfaces these tensions before you go to market.
          </p>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { n: "01", title: "Describe your product idea", desc: "Enter your startup concept, target market, and core value proposition." },
    { n: "02", title: "AI classifies buyer types", desc: "The system identifies which enterprise roles are most relevant to your deal." },
    { n: "03", title: "Simulate discovery interviews", desc: "Pitch to multiple synthetic personas and receive realistic questions and objections." },
    { n: "04", title: "Multi-agent debate", desc: "AI stakeholders debate your product simultaneously, revealing hidden organizational conflicts." },
    { n: "05", title: "Get a validation report", desc: "Receive a structured risk summary with confidence warnings and next-step recommendations." },
  ];
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeader badge="THE WORKFLOW" title="How PersonaForge AI Works" subtitle="Five steps from product idea to validated insight." />
        <div className="space-y-4">
          {steps.map((s) => (
            <div key={s.n} className="flex items-start gap-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-5 hover:border-violet-500/30 transition-colors">
              <span className="text-3xl font-black text-violet-400/60 tabular-nums">{s.n}</span>
              <div>
                <h3 className="text-white font-bold mb-1">{s.title}</h3>
                <p className="text-violet-300/60 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyAI() {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader badge="WHY AI-NATIVE" title="AI Is the Product, Not a Feature" subtitle="PersonaForge AI is structurally impossible without real-time AI reasoning." />
        <div className="grid sm:grid-cols-2 gap-4">
          {aiPillars.map((p) => (
            <div key={p.title} className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6">
              <h3 className="text-white font-bold mb-2">{p.title}</h3>
              <p className="text-violet-300/60 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-2xl bg-rose-500/10 border border-rose-500/20 p-6">
          <h3 className="text-rose-300 font-bold mb-3 flex items-center gap-2">Oxygen Test</h3>
          <p className="text-rose-200/80 text-sm leading-relaxed">
            <span className="font-semibold">If AI is removed, PersonaForge AI collapses.</span> Without AI, the platform becomes
            static persona PDFs, basic database templates, or pre-written interview scripts.
            The core value -- dynamic real-time conversations with evolving synthetic enterprise buyers -- disappears entirely.
          </p>
          <p className="text-rose-200/60 text-xs mt-3">This is what makes it AI-native, not AI-enabled.</p>
        </div>
      </div>
    </section>
  );
}

function PERCHSection() {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader badge="EVIDENCE AND RISK" title="PERCH Analysis" subtitle="What we know, what we do not know, and what could go wrong." />
        <div className="grid sm:grid-cols-2 gap-4">
          {perch.map((p) => (
            <div key={p.title} className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6">
              <h3 className="text-white font-bold mb-3">{p.title}</h3>
              <p className="text-violet-300/60 text-sm leading-relaxed">{p.content}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-2xl bg-violet-500/10 border border-violet-500/20 p-6 text-center">
          <p className="text-violet-200/80 text-sm max-w-2xl mx-auto leading-relaxed">
            <span className="font-semibold text-white">Key risk:</span> Synthetic realism is unproven. PersonaForge AI can show that the
            workflow is plausible -- it cannot prove that AI-generated feedback predicts real purchasing behavior.
            The tool is best used as an <span className="italic">early validation and preparation layer</span>,
            not as final proof of market demand.
          </p>
        </div>
      </div>
    </section>
  );
}

function NextSteps() {
  const roadmap = [
    { day: "Day 1", status: "Done", item: "Concept page and PERCH analysis", done: true },
    { day: "Day 2", status: "Building", item: "Interactive prototype -- persona selection and pitch input", done: false },
    { day: "Day 3", status: "Planned", item: "AI interview simulation and multi-agent debate engine", done: false },
  ];
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <SectionHeader badge="ROADMAP" title="What Comes Next" subtitle="This page explains the concept. The prototype proves the workflow." />
        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          {roadmap.map((d) => (
            <div key={d.day} className={"rounded-2xl border p-5 text-center " + (d.done ? "bg-emerald-500/10 border-emerald-500/20" : "bg-white/5 border-white/10")}>
              <div className={"text-xs font-mono font-bold mb-2 " + (d.done ? "text-emerald-400" : "text-violet-400")}>{d.day}</div>
              <div className={"text-sm font-bold mb-2 " + (d.done ? "text-emerald-300" : "text-white")}>{d.status}</div>
              <p className="text-violet-300/60 text-xs leading-relaxed">{d.item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <PersonasSection />
      <HowItWorks />
      <WhyAI />
      <PERCHSection />
      <NextSteps />
    </main>
  );
}
