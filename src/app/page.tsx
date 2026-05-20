// PersonaForge AI -- Day 2 Landing + Simulation Demo
"use client";

import { useState } from "react";

interface SimulationResult {
  cisoObjection: string;
  procurementObjection: string;
  buyerFriction: string;
  validationReport: {
    securityRisk: string;
    procurementRisk: string;
    pmfConfidence: string;
    mainObjections: string[];
    recommendedNext: string[];
  };
}

function generateMockSimulation(data: any): SimulationResult {
  const product = (data.productDescription || "").toLowerCase();
  const hasSIEM = product.includes("siem") || product.includes("soc") || product.includes("log");
  const hasCompliance = product.includes("compliance") || product.includes("gdpr") || product.includes("soc2") || product.includes("audit");
  const hasZeroTrust = product.includes("zero trust") || product.includes("zta");
  const hasCNAPP = product.includes("cnapp") || product.includes("cloud") || product.includes("cspm");
  const hasPricing = data.pricing.toLowerCase().includes("per seat") || data.pricing.toLowerCase().includes("per-user");
  const securityRisk = hasSIEM || hasCNAPP ? "High" : hasCompliance || hasZeroTrust ? "Medium" : "Low";
  const procurementRisk = hasPricing ? "High" : "Medium";
  const pmfConfidence = (securityRisk === "High" || procurementRisk === "High") ? "Low" : "Medium";
  const cisoObjection = hasCompliance
    ? "Your compliance-automation claim is too broad. Before a bank or health system considers this, we need proof of SOC2 Type II readiness, data-handling controls, immutable audit logs, and integration security documentation."
    : hasSIEM
    ? "A SOC tool needs 18-24 months of operational maturity before a CISO will recommend it. We already have Splunk. Unless you show a path to reducing alert fatigue rather than adding to it, this will not pass security architecture review."
    : hasZeroTrust
    ? "Zero-trust claims are frequently overstated. We need specific implementation evidence: device posture checks, identity brokering, microsegmentation. Vague ZTA marketing will be challenged immediately."
    : hasCNAPP
    ? "CNAPP tools are crowded. Tenable, Palo Alto Prisma, and Wiz are established. A startup claiming better cloud security needs a unique data source or measurable reduction in alert-to-response time."
    : "The product description is too vague to evaluate. Enterprise buyers need specific, measurable claims. Vague value propositions do not survive a security architecture review.";
  const procurementObjection = hasPricing
    ? "Your per-seat model is difficult to justify without a calculable ROI. Enterprise procurement requires a TCO analysis. If the business case is it helps security, it will not clear budget approval."
    : "Annual subscription with no metered billing concerns us. This pattern signals vendor lock-in. Legal and procurement will flag this.";
  const buyerFriction = (hasSIEM || hasCompliance || hasZeroTrust)
    ? "Internal conflict detected: The CISO sees risk-reduction value, but Procurement does not see enough financial justification. The buying committee would likely delay purchase for 3-6 months pending a proof-of-concept."
    : "Mild friction detected: The CISO has neutral concerns. Procurement is cautiously interested but requires a vendor risk assessment before contract signature.";
  const mainObjections = [
    "Compliance claims require documented evidence (SOC2 Type II, ISO 27001, or equivalent).",
    "Enterprise security tooling requires a vendor risk assessment and legal review process.",
    "Pricing model requires a calculable ROI or TCO analysis to clear budget committee.",
    "Procurement will demand a proof-of-concept before multi-year contract commitment.",
  ];
  const recommendedNext = [
    "Prepare a vendor security questionnaire response (SIG, CAIQ, or VSA).",
    "Document the ROI calculation with a defensible TCO model for the target vertical.",
    "Target a mid-stage company with an active compliance pain point to shorten the sales cycle.",
    "Build a proof-of-concept with 90-day success metrics before pursuing enterprise contracts.",
  ];
  return { cisoObjection, procurementObjection, buyerFriction, validationReport: { securityRisk, procurementRisk, pmfConfidence, mainObjections, recommendedNext } };
}
export { generateMockSimulation };

function Badge({ children, variant }: { children: React.ReactNode; variant?: string }) {
  const colors: Record<string, string> = {
    blue: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400",
    green: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
    red: "bg-rose-500/10 border-rose-500/20 text-rose-400",
    yellow: "bg-amber-500/10 border-amber-500/20 text-amber-400",
    violet: "bg-violet-500/10 border-violet-500/20 text-violet-400/70",
  };
  return <span className={"inline-block text-xs font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full border " + (colors[variant || "violet"] || colors.violet)}>{children}</span>;
}
function Section({ id, children }: { id?: string; children: React.ReactNode }) {
  return <section id={id} className="relative py-20 px-6"><div className="max-w-5xl mx-auto">{children}</div></section>;
}
function SectionTitle({ badge, title, subtitle }: { badge: string; title: string; subtitle: string }) {
  return (
    <div className="text-center mb-12">
      <div className="mb-4"><Badge variant="violet">{badge}</Badge></div>
      <h2 className="text-3xl sm:text-4xl font-black text-white mt-4 mb-4">{title}</h2>
      <p className="text-violet-300/60 text-base max-w-xl mx-auto">{subtitle}</p>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[88vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600 rounded-full blur-[120px] opacity-10 animate-float" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-violet-600 rounded-full blur-[100px] opacity-10 animate-float-slow" />
        <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-indigo-600 rounded-full blur-[80px] opacity-8 animate-pulse-slow" />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(124,58,237,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          <Badge variant="blue">Multi-Agent Simulation</Badge>
          <Badge variant="blue">Cybersecurity SaaS</Badge>
          <Badge variant="blue">Human-in-the-Loop</Badge>
          <Badge variant="green">Oxygen Test: Strong Pass</Badge>
        </div>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white mb-6 tracking-tight leading-tight">PersonaForge AI</h1>
        <p className="text-xl sm:text-2xl text-violet-300/80 font-medium mb-4 max-w-xl mx-auto">An AI-native corporate friction engine for cybersecurity SaaS founders.</p>
        <p className="text-base text-violet-300/50 mb-10 max-w-2xl mx-auto leading-relaxed">Stress-test your startup idea against simulated CISO and Procurement resistance before wasting time and capital building the wrong product.</p>
        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-sm text-violet-300/70">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Interactive prototype below
        </div>
      </div>
      <div className="absolute top-6 left-6 w-20 h-20 border-l-2 border-t-2 border-violet-500/20 rounded-tl-xl" />
      <div className="absolute bottom-6 right-6 w-20 h-20 border-r-2 border-b-2 border-violet-500/20 rounded-br-xl" />
    </section>
  );
}

function Problem() {
  const cards = [
    { title: "Enterprise buyers are hard to access", desc: "CISOs, Procurement Directors, and Compliance Officers are gatekept, booked, and rarely available to first-time founders. Cold outreach response rates are below 5%." },
    { title: "Customer discovery takes weeks", desc: "Scheduling real enterprise interviews requires weeks of outreach, multiple email threads, and often an introducer. By the time you get feedback, assumptions are already baked into your roadmap." },
    { title: "Founders build on assumptions", desc: "Without access to real buyers, founders validate through friends, generic surveys, or accelerator advisors who are too polite to say your product has no market. This leads to products nobody buys." },
  ];
  return (
    <Section>
      <SectionTitle badge="THE PROBLEM" title="B2B SaaS Founders Face a Structural Validation Gap" subtitle="The people most likely to reject your product are the ones you cannot reach." />
      <div className="grid sm:grid-cols-3 gap-5">
        {cards.map((c) => (
          <div key={c.title} className="rounded-2xl bg-white/5 border border-white/10 p-6">
            <h3 className="text-white font-bold mb-3">{c.title}</h3>
            <p className="text-violet-300/60 text-sm leading-relaxed">{c.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Comparison() {
  return (
    <Section>
      <SectionTitle badge="THE CONTRAST" title="Old Way vs. AI-Native Way" subtitle="The same validation goal. Two radically different execution paths." />
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="rounded-2xl bg-rose-500/10 border border-rose-500/20 p-6">
          <h3 className="text-rose-300 font-bold text-lg mb-4">Old Way</h3>
          <ul className="space-y-3">
            <li key="Cold outreach to CISOs - no response" className="flex items-start gap-2 text-rose-200/70 text-sm"><span className="text-rose-400 mt-0.5">X</span> Cold outreach to CISOs - no response</li>
            <li key="LinkedIn messages ignored" className="flex items-start gap-2 text-rose-200/70 text-sm"><span className="text-rose-400 mt-0.5">X</span> LinkedIn messages ignored</li>
            <li key="Scheduling calls that never happen" className="flex items-start gap-2 text-rose-200/70 text-sm"><span className="text-rose-400 mt-0.5">X</span> Scheduling calls that never happen</li>
            <li key="Consultant reports costing 20K+" className="flex items-start gap-2 text-rose-200/70 text-sm"><span className="text-rose-400 mt-0.5">X</span> Consultant reports costing 20K+</li>
            <li key="Generic persona PDFs" className="flex items-start gap-2 text-rose-200/70 text-sm"><span className="text-rose-400 mt-0.5">X</span> Generic persona PDFs</li>
            <li key="Weeks of waiting for shallow feedback" className="flex items-start gap-2 text-rose-200/70 text-sm"><span className="text-rose-400 mt-0.5">X</span> Weeks of waiting for shallow feedback</li>
            <li key="No adversarial buyer friction simulation" className="flex items-start gap-2 text-rose-200/70 text-sm"><span className="text-rose-400 mt-0.5">X</span> No adversarial buyer friction simulation</li>
          </ul>
        </div>
        <div className="rounded-2xl bg-emerald-500/10 border border-emerald-500/20 p-6">
          <h3 className="text-emerald-300 font-bold text-lg mb-4">AI-Native Way</h3>
          <ul className="space-y-3">
            <li key="Instant adversarial simulation - no scheduling" className="flex items-start gap-2 text-emerald-200/70 text-sm"><span className="text-emerald-400 mt-0.5">OK</span> Instant adversarial simulation - no scheduling</li>
            <li key="CISO Agent evaluates security and compliance risk" className="flex items-start gap-2 text-emerald-200/70 text-sm"><span className="text-emerald-400 mt-0.5">OK</span> CISO Agent evaluates security and compliance risk</li>
            <li key="Procurement Agent evaluates budget and vendor risk" className="flex items-start gap-2 text-emerald-200/70 text-sm"><span className="text-emerald-400 mt-0.5">OK</span> Procurement Agent evaluates budget and vendor risk</li>
            <li key="Moderator Agent compares internal buyer friction" className="flex items-start gap-2 text-emerald-200/70 text-sm"><span className="text-emerald-400 mt-0.5">OK</span> Moderator Agent compares internal buyer friction</li>
            <li key="Structured validation report in under 60 seconds" className="flex items-start gap-2 text-emerald-200/70 text-sm"><span className="text-emerald-400 mt-0.5">OK</span> Structured validation report in under 60 seconds</li>
            <li key="Multi-agent debate surfaces hidden disagreements" className="flex items-start gap-2 text-emerald-200/70 text-sm"><span className="text-emerald-400 mt-0.5">OK</span> Multi-agent debate surfaces hidden disagreements</li>
            <li key="Decision latency drops from weeks to minutes" className="flex items-start gap-2 text-emerald-200/70 text-sm"><span className="text-emerald-400 mt-0.5">OK</span> Decision latency drops from weeks to minutes</li>
          </ul>
        </div>
      </div>
      <div className="mt-6 text-center"><p className="text-amber-300 text-sm font-medium">Decision latency drops from weeks to minutes.</p></div>
    </Section>
  );
}

function Workflow() {
  const steps = [
    { n: "01", title: "Founder inputs product description", desc: "The founder enters their startup idea, pricing model, target customer, and key technical or compliance claims." },
    { n: "02", title: "AI classifies startup context", desc: "The system identifies the relevant enterprise buyer types, risk profile, and procurement complexity." },
    { n: "03", title: "CISO Agent evaluates risk", desc: "A synthetic CISO agent evaluates technical feasibility, compliance posture, integration risk, and organizational security exposure." },
    { n: "04", title: "Procurement Agent evaluates budget", desc: "A synthetic Procurement agent evaluates pricing justification, ROI evidence, vendor risk, and internal budget friction." },
    { n: "05", title: "Moderator surfaces buyer friction", desc: "A Moderator agent compares objections from both agents and identifies where the internal buying committee would disagree." },
    { n: "06", title: "Human founder reviews validation report", desc: "The founder receives a structured report with risk ratings, main objections, and recommended next steps. The human decides next actions." },
  ];
  return (
    <Section>
      <SectionTitle badge="THE WORKFLOW" title="How the Simulation Works" subtitle="Six steps from idea input to structured validation." />
      <div className="space-y-4">
        {steps.map((s) => (
          <div key={s.n} className="flex items-start gap-5 rounded-2xl bg-white/5 border border-white/10 p-5">
            <span className="text-3xl font-black text-violet-400/50 tabular-nums shrink-0">{s.n}</span>
            <div><h3 className="text-white font-bold mb-1">{s.title}</h3><p className="text-violet-300/60 text-sm leading-relaxed">{s.desc}</p></div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Simulation() {
  const [form, setForm] = useState({ startupName: "", productDescription: "", targetCustomer: "", pricing: "", techClaim: "" });
  const [result, setResult] = useState<SimulationResult | null>(null);
  const [running, setRunning] = useState(false);
  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };
  const handleRun = () => {
    if (!form.productDescription || !form.targetCustomer) return;
    setRunning(true);
    setResult(null);
    setTimeout(() => { setResult(generateMockSimulation(form)); setRunning(false); }, 2200);
  };
  const riskColor = (r: string) => r === "High" ? "text-rose-400" : r === "Medium" ? "text-amber-400" : "text-emerald-400";
  const riskBadge = (r: string) => r === "High" ? "bg-rose-500/20 border-rose-500/30 text-rose-300" : r === "Medium" ? "bg-amber-500/20 border-amber-500/30 text-amber-300" : "bg-emerald-500/20 border-emerald-500/30 text-emerald-300";
  return (
    <Section id="simulation">
      <SectionTitle badge="LIVE DEMO" title="Run Enterprise Friction Simulation" subtitle="Enter your cybersecurity SaaS startup idea and see how enterprise buyers would respond." />
      <div className="rounded-2xl bg-white/5 border border-white/10 p-6 mb-8">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-mono text-violet-400/60 uppercase mb-2">Startup Name</label>
            <input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-violet-500/40" placeholder="e.g. SecureFlow AI" value={form.startupName} onChange={handleChange("startupName")} />
          </div>
          <div>
            <label className="block text-xs font-mono text-violet-400/60 uppercase mb-2">Target Customer</label>
            <input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-violet-500/40" placeholder="e.g. mid-size banks, healthcare providers" value={form.targetCustomer} onChange={handleChange("targetCustomer")} />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-xs font-mono text-violet-400/60 uppercase mb-2">Product Description</label>
            <textarea className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-violet-500/40 resize-none" rows={3} placeholder="Describe your product, core functionality, and the problem it solves..." value={form.productDescription} onChange={handleChange("productDescription")} />
          </div>
          <div>
            <label className="block text-xs font-mono text-violet-400/60 uppercase mb-2">Pricing Model</label>
            <input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-violet-500/40" placeholder="e.g. 15 per seat/month, enterprise annual" value={form.pricing} onChange={handleChange("pricing")} />
          </div>
          <div>
            <label className="block text-xs font-mono text-violet-400/60 uppercase mb-2">Technical / Compliance Claim</label>
            <input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-violet-500/40" placeholder="e.g. SOC2 certified, zero-trust architecture" value={form.techClaim} onChange={handleChange("techClaim")} />
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <button onClick={handleRun} disabled={running || !form.productDescription || !form.targetCustomer} className="px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 disabled:bg-violet-600/40 text-white text-sm font-bold transition-colors">
            {running ? "Running Simulation..." : "Run Enterprise Friction Simulation"}
          </button>
        </div>
      </div>
      {result && (
        <div className="space-y-5">
          <div className="rounded-2xl bg-rose-500/10 border border-rose-500/20 p-6">
            <h3 className="text-rose-300 font-bold mb-3">CISO Agent Objection</h3>
            <p className="text-rose-200/80 text-sm leading-relaxed">{result.cisoObjection}</p>
          </div>
          <div className="rounded-2xl bg-amber-500/10 border border-amber-500/20 p-6">
            <h3 className="text-amber-300 font-bold mb-3">Procurement Agent Objection</h3>
            <p className="text-amber-200/80 text-sm leading-relaxed">{result.procurementObjection}</p>
          </div>
          <div className="rounded-2xl bg-cyan-500/10 border border-cyan-500/20 p-6">
            <h3 className="text-cyan-300 font-bold mb-3">Internal Buyer Friction</h3>
            <p className="text-cyan-200/80 text-sm leading-relaxed">{result.buyerFriction}</p>
          </div>
          <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
            <h3 className="text-white font-bold mb-4">Validation Report</h3>
            <div className="grid sm:grid-cols-3 gap-4 mb-5">
              <div className="text-center p-4 rounded-xl bg-black/20">
                <div className={"text-2xl font-black mb-1 " + riskColor(result.validationReport.securityRisk)}>{result.validationReport.securityRisk}</div>
                <div className="text-xs text-violet-400/60 font-mono uppercase">Security Risk</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-black/20">
                <div className={"text-2xl font-black mb-1 " + riskColor(result.validationReport.procurementRisk)}>{result.validationReport.procurementRisk}</div>
                <div className="text-xs text-violet-400/60 font-mono uppercase">Procurement Risk</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-black/20">
                <div className={"text-2xl font-black mb-1 " + riskColor(result.validationReport.pmfConfidence)}>{result.validationReport.pmfConfidence}</div>
                <div className="text-xs text-violet-400/60 font-mono uppercase">PMF Confidence</div>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <h4 className="text-xs font-mono text-violet-400/60 uppercase mb-3">Main Objections</h4>
                <ul className="space-y-2">
                  {result.validationReport.mainObjections.map((o, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-rose-200/70"><span className="text-rose-400 mt-0.5">X</span> {o}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-mono text-violet-400/60 uppercase mb-3">Recommended Next Steps</h4>
                <ul className="space-y-2">
                  {result.validationReport.recommendedNext.map((r, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-emerald-200/70"><span className="text-emerald-400 mt-0.5">OK</span> {r}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-4 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-center">
              <p className="text-amber-200/80 text-xs">Human review required before making strategic decisions.</p>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
}

function RealSimulated() {
  const cards = [
    { title: "REAL", badge: "What you provide", color: "border-emerald-500/20 bg-emerald-500/5", items: ["Founder input form", "Agent-style objection generation", "Structured validation report", "Human review checkpoint"] },
    { title: "SIMULATED", badge: "What the AI generates", color: "border-cyan-500/20 bg-cyan-500/5", items: ["Internal enterprise procurement politics", "Private buyer behavior patterns", "Enterprise decision-making friction", "Multi-agent debate depth and structure"] },
    { title: "ASSUMED", badge: "What you interpret", color: "border-amber-500/20 bg-amber-500/5", items: ["Synthetic objections approximate real buyer concerns", "Founder can interpret feedback correctly", "Public cybersecurity knowledge is enough for early simulation", "Simulation output predicts real purchasing behavior"] },
  ];
  return (
    <Section>
      <SectionTitle badge="SIMULATION LAYERS" title="Real vs. Simulated vs. Assumed" subtitle="Every simulation layer serves a different purpose. The human founder must keep them separate." />
      <div className="grid sm:grid-cols-3 gap-5">
        {cards.map((c) => (
          <div key={c.title} className={"rounded-2xl border p-6 " + c.color}>
            <h3 className="text-white font-black text-lg mb-1">{c.title}</h3>
            <p className="text-xs text-violet-400/60 font-mono mb-4">{c.badge}</p>
            <ul className="space-y-2">
              {c.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-violet-200/70">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

function PERCHSection() {
  const rows = [
    { title: "Perspective", content: "The system is built from the founder perspective, but enterprise buyers have opposite incentives around risk, budget, compliance, and integration." },
    { title: "Evidence", content: "Public cybersecurity reports, compliance frameworks, procurement patterns, CISO job descriptions, and public SaaS reviews can support the simulation." },
    { title: "Reasoning Risk", content: "We must not assume that synthetic approval equals product-market fit. Simulation prepares founders for real discovery -- it does not replace it." },
    { title: "Context", content: "Cybersecurity purchasing is trust-heavy, compliance-driven, budget-sensitive, and slow. PersonaForge is an early validation layer -- not final proof of demand." },
    { title: "Hidden Fragility", content: "Synthetic realism dependency. If agents are too polite, generic, outdated, or optimistic, the tool creates false validation and worse decisions." },
  ];
  return (
    <Section>
      <SectionTitle badge="EVIDENCE AND RISK" title="PERCH Analysis" subtitle="What we know, what we do not know, and what could go wrong." />
      <div className="space-y-4">
        {rows.map((r) => (
          <div key={r.title} className="rounded-2xl bg-white/5 border border-white/10 p-5">
            <h3 className="text-white font-bold mb-2">{r.title}</h3>
            <p className="text-violet-300/60 text-sm leading-relaxed">{r.content}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function HITL() {
  return (
    <Section>
      <SectionTitle badge="HUMAN IN THE LOOP" title="The Human Founder Is the Strategic Interrogator" subtitle="AI surfaces friction. The human decides what to do with it." />
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
          <h3 className="text-white font-bold mb-4">What the human must do</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2 text-sm text-violet-200/70"><span className="text-violet-400 mt-0.5">1.</span> Review agent objections for realism and relevance</li>
            <li className="flex items-start gap-2 text-sm text-violet-200/70"><span className="text-violet-400 mt-0.5">2.</span> Challenge unrealistic or too-generic outputs</li>
            <li className="flex items-start gap-2 text-sm text-violet-200/70"><span className="text-violet-400 mt-0.5">3.</span> Tag objections as relevant or irrelevant to their specific context</li>
            <li className="flex items-start gap-2 text-sm text-violet-200/70"><span className="text-violet-400 mt-0.5">4.</span> Decide whether to pivot, persevere, or test with real customers</li>
          </ul>
        </div>
        <div className="rounded-2xl bg-amber-500/10 border border-amber-500/20 p-6">
          <h3 className="text-amber-300 font-bold mb-4">Critical Warning</h3>
          <p className="text-amber-200/80 text-sm leading-relaxed">PersonaForge AI does not replace real customer discovery. It prepares founders for better real-world validation by surfacing the objections they will actually face in enterprise sales cycles.</p>
          <p className="text-amber-200/60 text-sm leading-relaxed mt-3">The validation report is a preparation tool, not a verdict on market demand. Human judgment remains essential.</p>
        </div>
      </div>
    </Section>
  );
}

function NextSteps() {
  return (
    <Section>
      <SectionTitle badge="ROADMAP" title="What Comes Next" subtitle="Building toward a credible, grounded simulation engine." />
      <div className="rounded-2xl bg-white/5 border border-white/10 p-6 text-center">
        <h3 className="text-white font-bold mb-4">Planned Improvements</h3>
        <div className="grid sm:grid-cols-2 gap-4 text-left">
          <div>
            <h4 className="text-violet-300 font-medium text-sm mb-3">Data and Grounding</h4>
            <ul className="space-y-2">
              <li className="text-sm text-violet-200/70">Curated cybersecurity and procurement knowledge base</li>
              <li className="text-sm text-violet-200/70">Stronger persona calibration from real buying patterns</li>
              <li className="text-sm text-violet-200/70">Persistent memory across simulation sessions</li>
            </ul>
          </div>
          <div>
            <h4 className="text-violet-300 font-medium text-sm mb-3">Validation</h4>
            <ul className="space-y-2">
              <li className="text-sm text-violet-200/70">Comparison against real customer interview feedback</li>
              <li className="text-sm text-violet-200/70">Structured human rating of objection realism</li>
              <li className="text-sm text-violet-200/70">Tracking founder decision changes after simulation</li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <Comparison />
      <Workflow />
      <Simulation />
      <RealSimulated />
      <PERCHSection />
      <HITL />
      <NextSteps />
    </main>
  );
}
