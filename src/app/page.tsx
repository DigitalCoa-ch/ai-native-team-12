// PersonaForge AI -- Day 3 Workflow-Centric Prototype
"use client";

import { useState } from "react";

interface SimulationResult {
  cisoObjection: string;
  procurementObjection: string;
  buyerFriction: string;
  validationReport: { securityRisk: string; procurementRisk: string; pmfConfidence: string; mainObjections: string[]; recommendedNext: string[]; };
}

function generateMockSimulation(data: any): SimulationResult {
  const p = (data.productDescription || "").toLowerCase();
  const hasSIEM = p.includes("siem") || p.includes("soc") || p.includes("log");
  const hasC = p.includes("compliance") || p.includes("gdpr") || p.includes("soc2") || p.includes("audit");
  const hasZT = p.includes("zero trust") || p.includes("zta");
  const hasCNAPP = p.includes("cnapp") || p.includes("cloud") || p.includes("cspm");
  const hasPrice = data.pricing.toLowerCase().includes("per seat") || data.pricing.toLowerCase().includes("per-user");
  const sr = hasSIEM || hasCNAPP ? "High" : hasC || hasZT ? "Medium" : "Low";
  const pr = hasPrice ? "High" : "Medium";
  const pmf = (sr === "High" || pr === "High") ? "Low" : "Medium";
  const ciso = hasC ? "Your compliance-automation claim is too broad. Before a bank or health system considers this, we need proof of SOC2 Type II readiness, data-handling controls, immutable audit logs, and integration security documentation." : hasSIEM ? "A SOC tool needs 18-24 months of operational maturity before a CISO will recommend it. We already have Splunk. Unless you show a path to reducing alert fatigue rather than adding to it, this will not pass security architecture review." : hasZT ? "Zero-trust claims are frequently overstated. We need specific implementation evidence: device posture checks, identity brokering, microsegmentation. Vague ZTA marketing will be challenged immediately." : hasCNAPP ? "CNAPP tools are crowded. Tenable, Palo Alto Prisma, and Wiz are established. A startup claiming better cloud security needs a unique data source or measurable reduction in alert-to-response time." : "The product description is too vague to evaluate. Enterprise buyers need specific, measurable claims.";
  const proc = hasPrice ? "Your per-seat model is difficult to justify without a calculable ROI. Enterprise procurement requires a TCO analysis. If the business case is it helps security, it will not clear budget approval." : "Annual subscription with no metered billing concerns us. This pattern signals vendor lock-in. Legal and procurement will flag this.";
  const friction = (hasSIEM || hasC || hasZT) ? "Internal conflict detected: The CISO sees risk-reduction value, but Procurement does not see enough financial justification. The buying committee would likely delay purchase for 3-6 months pending a proof-of-concept." : "Mild friction detected: The CISO has neutral concerns. Procurement is cautiously interested but requires a vendor risk assessment before contract signature.";
  const objections = [
    "Compliance claims require documented evidence (SOC2 Type II or ISO 27001).",
    "Enterprise security tooling requires a vendor risk assessment and legal review.",
    "Pricing model requires a calculable ROI or TCO analysis to clear budget.",
    "Procurement will demand a proof-of-concept before multi-year contract.",
  ];
  const nextSteps = [
    "Prepare a vendor security questionnaire (SIG, CAIQ, or VSA).",
    "Document the ROI calculation with a defensible TCO model.",
    "Target a mid-stage company with an active compliance pain point.",
    "Build a 90-day proof-of-concept with success metrics before pursuing contracts.",
  ];
  return { cisoObjection: ciso, procurementObjection: proc, buyerFriction: friction, validationReport: { securityRisk: sr, procurementRisk: pr, pmfConfidence: pmf, mainObjections: objections, recommendedNext: nextSteps } };
}

export { generateMockSimulation };function Badge({ children, variant }: { children: React.ReactNode; variant?: string }) {
  const c: Record<string,string> = { blue: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400", green: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400", red: "bg-rose-500/10 border-rose-500/20 text-rose-400", yellow: "bg-amber-500/10 border-amber-500/20 text-amber-400", violet: "bg-violet-500/10 border-violet-500/20 text-violet-400/70" };
  return <span className={"inline-block text-xs font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full border " + (c[variant||"violet"])}>{children}</span>;
}
function Section({ id, children }: { id?: string; children: React.ReactNode }) {
  return <section id={id} className="relative py-14 px-6"><div className="max-w-5xl mx-auto">{children}</div></section>;
}
function SectionTitle({ badge, title, subtitle }: { badge: string; title: string; subtitle: string }) {
  return <div className="text-center mb-10"><div className="mb-3"><Badge variant="violet">{badge}</Badge></div><h2 className="text-2xl sm:text-3xl font-black text-white mt-3 mb-3">{title}</h2><p className="text-violet-300/60 text-sm max-w-xl mx-auto">{subtitle}</p></div>;
}
function Hero() {
  return (
    <section className="relative min-h-[60vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-purple-600 rounded-full blur-[100px] opacity-10 animate-float" />
        <div className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] bg-violet-600 rounded-full blur-[80px] opacity-10 animate-float-slow" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="flex flex-wrap justify-center gap-2 mb-5">
          <Badge variant="blue">Multi-Agent</Badge>
          <Badge variant="blue">Cybersecurity SaaS</Badge>
          <Badge variant="blue">Human-in-the-Loop</Badge>
          <Badge variant="green">Oxygen Test Strong Pass</Badge>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4 tracking-tight">PersonaForge AI</h1>
        <p className="text-lg sm:text-xl text-violet-300/80 font-medium mb-3 max-w-xl mx-auto">An AI-native corporate friction engine for cybersecurity SaaS founders.</p>
        <p className="text-sm text-violet-300/50 mb-8 max-w-2xl mx-auto">Stress-test your startup idea against simulated CISO and Procurement resistance before wasting time building the wrong product.</p>
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-violet-300/60">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Scroll down to run the simulation
        </div>
      </div>
    </section>
  );
}
function Problem() {
  return (
    <Section>
      <SectionTitle badge="THE PROBLEM" title="B2B Founders Face a Structural Validation Gap" subtitle="The people most likely to reject your product are the ones you cannot reach." />
      <div className="grid sm:grid-cols-3 gap-4">
        <div className="rounded-xl bg-white/5 border border-white/10 p-5">
          <h3 className="text-white font-bold text-sm mb-2">Enterprise buyers are hard to access</h3>
          <p className="text-violet-300/60 text-xs leading-relaxed">CISOs, Procurement Directors, and Compliance Officers are gatekept. Cold outreach response rates below 5%.</p>
        </div>
        <div className="rounded-xl bg-white/5 border border-white/10 p-5">
          <h3 className="text-white font-bold text-sm mb-2">Discovery takes weeks</h3>
          <p className="text-violet-300/60 text-xs leading-relaxed">Scheduling real enterprise interviews requires weeks of outreach, multiple email threads, and often an introducer.</p>
        </div>
        <div className="rounded-xl bg-white/5 border border-white/10 p-5">
          <h3 className="text-white font-bold text-sm mb-2">Founders build on assumptions</h3>
          <p className="text-violet-300/60 text-xs leading-relaxed">Without access to real buyers, founders validate through friends or polite advisors. Products get built that nobody buys.</p>
        </div>
      </div>
    </Section>
  );
}
function WorkflowOverview() {
  const steps = [
    { n: "1", label: "User Input", desc: "Founder enters product idea, pricing, target customer, and tech claims.", badge: "INPUT", color: "border-cyan-500/20 bg-cyan-500/5", badgeColor: "text-cyan-400" },
    { n: "2", label: "AI Processing", desc: "CISO Agent, Procurement Agent, and Moderator Agent each evaluate the input independently.", badge: "AI", color: "border-violet-500/20 bg-violet-500/5", badgeColor: "text-violet-400" },
    { n: "3", label: "AI-Generated Output", desc: "Agent objections, internal buyer friction, and a structured validation report.", badge: "OUTPUT", color: "border-amber-500/20 bg-amber-500/5", badgeColor: "text-amber-400" },
    { n: "4", label: "Human Review", desc: "Founder reviews and approves the report before making strategic decisions.", badge: "HUMAN", color: "border-emerald-500/20 bg-emerald-500/5", badgeColor: "text-emerald-400" },
  ];
  return (
    <Section>
      <SectionTitle badge="THE LOOP" title="How PersonaForge AI Works" subtitle="Four steps. Human stays in control." />
      <div className="grid sm:grid-cols-4 gap-4">
        {steps.map((s, i) => (
          <div key={s.n} className={"rounded-xl border p-5 " + s.color}>
            <div className="flex items-center gap-2 mb-3">
              <span className={"text-sm font-black " + s.badgeColor}>{s.badge}</span>
              <span className="text-white font-bold text-sm">{s.label}</span>
            </div>
            <p className="text-violet-200/60 text-xs leading-relaxed">{s.desc}</p>
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
  const [approved, setApproved] = useState(false);
  const [phase, setPhase] = useState<"input" | "processing" | "output" | "review">("input");
  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };
  const handleRun = () => {
    if (!form.productDescription || !form.targetCustomer) return;
    setPhase("processing");
    setRunning(true);
    setResult(null);
    setApproved(false);
    setTimeout(() => { setResult(generateMockSimulation(form)); setRunning(false); setPhase("output"); }, 2200);
  };
  const handleApprove = () => { setApproved(true); setPhase("review"); };
  const riskColor = (r: string) => r === "High" ? "text-rose-400" : r === "Medium" ? "text-amber-400" : "text-emerald-400";
  const flow = [
    { label: "User Input", badge: "INPUT", color: "text-cyan-400" },
    { label: "AI Processing", badge: "AI", color: "text-violet-400" },
    { label: "AI-Generated Output", badge: "OUTPUT", color: "text-amber-400" },
    { label: "Human Review", badge: "HUMAN", color: "text-emerald-400" },
  ];
  const active = phase === "input" ? 0 : phase === "processing" ? 1 : phase === "output" ? 2 : 3;
  return (
    <Section id="simulation">
      <SectionTitle badge="LIVE DEMO" title="Run Enterprise Friction Simulation" subtitle="Follow the workflow loop. Enter your idea and see how enterprise buyers respond." />
      {/* Phase indicator */}
      <div className="flex items-center justify-center gap-0 mb-8">
        {flow.map((s, i) => (
          <div key={s.label} className="flex items-center">
            <div className={"flex flex-col items-center px-4 py-2 rounded-lg border " + (i <= active ? s.color + " bg-opacity-10" : "border-white/10")}>
              <span className={"text-xs font-black " + (i <= active ? s.color : "text-violet-400/30")}>{s.badge}</span>
              <span className={"text-xs " + (i <= active ? "text-white" : "text-violet-400/30")}>{s.label}</span>
            </div>
            {i < flow.length - 1 && <div className={"w-6 h-px " + (i < active ? "bg-violet-400/40" : "bg-white/10")} />}
          </div>
        ))}
      </div>
      {/* STEP 1: INPUT */}
      {(phase === "input" || phase === "processing") && (
        <div className="rounded-2xl bg-white/5 border border-cyan-500/20 p-6 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="blue">STEP 1</Badge>
            <span className="text-cyan-300 font-bold text-sm">User Input</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-violet-400/60 uppercase mb-2">Startup Name</label>
              <input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-500/40 placeholder:text-white/20" placeholder="e.g. SecureFlow AI" value={form.startupName} onChange={handleChange("startupName")} disabled={running} />
            </div>
            <div>
              <label className="block text-xs font-mono text-violet-400/60 uppercase mb-2">Target Customer</label>
              <input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-500/40 placeholder:text-white/20" placeholder="e.g. mid-size banks, healthcare providers" value={form.targetCustomer} onChange={handleChange("targetCustomer")} disabled={running} />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-xs font-mono text-violet-400/60 uppercase mb-2">Product Description</label>
              <textarea className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-500/40 resize-none placeholder:text-white/20" rows={3} placeholder="Describe your product, core functionality, and the problem it solves..." value={form.productDescription} onChange={handleChange("productDescription")} disabled={running} />
            </div>
            <div>
              <label className="block text-xs font-mono text-violet-400/60 uppercase mb-2">Pricing Model</label>
              <input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-500/40 placeholder:text-white/20" placeholder="e.g. per seat/month, enterprise annual" value={form.pricing} onChange={handleChange("pricing")} disabled={running} />
            </div>
            <div>
              <label className="block text-xs font-mono text-violet-400/60 uppercase mb-2">Technical / Compliance Claim</label>
              <input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-500/40 placeholder:text-white/20" placeholder="e.g. SOC2 certified, zero-trust architecture" value={form.techClaim} onChange={handleChange("techClaim")} disabled={running} />
            </div>
          </div>
          <div className="mt-4 flex justify-end">
            <button onClick={handleRun} disabled={running || !form.productDescription || !form.targetCustomer} className="px-6 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 disabled:bg-cyan-600/40 text-white text-sm font-bold transition-colors">
              {running ? "Processing..." : "Run Enterprise Friction Simulation"}
            </button>
          </div>
        </div>
      )}
      {/* STEP 2: PROCESSING */}
      {phase === "processing" && (
        <div className="rounded-2xl bg-violet-500/10 border border-violet-500/20 p-8 mb-6 text-center">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 rounded-full border-2 border-violet-400 border-t-transparent animate-spin" />
          </div>
          <p className="text-violet-200/80 font-bold mb-1">AI Processing</p>
          <p className="text-violet-400/60 text-sm">CISO Agent, Procurement Agent, and Moderator Agent are evaluating your startup idea...</p>
        </div>
      )}
      {/* STEP 3: OUTPUT */}
      {result && (phase === "output" || phase === "review") && (
        <div className="space-y-5">
          {/* Section header */}
          <div className="rounded-2xl bg-amber-500/10 border border-amber-500/20 p-5">
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="yellow">STEP 3</Badge>
              <span className="text-amber-300 font-bold">AI-Generated Output</span>
            </div>
            <p className="text-amber-200/60 text-xs">The simulation ran. Review the output below, then proceed to human review.</p>
          </div>
          {/* CISO Agent */}
          <div className="rounded-2xl bg-rose-500/10 border border-rose-500/20 p-6">
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="red">AGENT</Badge>
              <span className="text-rose-300 font-bold">CISO Agent Objection</span>
            </div>
            <p className="text-rose-200/80 text-sm leading-relaxed">{result.cisoObjection}</p>
          </div>
          {/* Procurement Agent */}
          <div className="rounded-2xl bg-amber-500/10 border border-amber-500/20 p-6">
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="yellow">AGENT</Badge>
              <span className="text-amber-300 font-bold">Procurement Agent Objection</span>
            </div>
            <p className="text-amber-200/80 text-sm leading-relaxed">{result.procurementObjection}</p>
          </div>
          {/* Buyer Friction */}
          <div className="rounded-2xl bg-cyan-500/10 border border-cyan-500/20 p-6">
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="blue">MODERATOR</Badge>
              <span className="text-cyan-300 font-bold">Internal Buyer Friction</span>
            </div>
            <p className="text-cyan-200/80 text-sm leading-relaxed">{result.buyerFriction}</p>
          </div>
          {/* Validation Report */}
          <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="violet">REPORT</Badge>
              <span className="text-white font-bold">Validation Report</span>
            </div>
            <div className="grid sm:grid-cols-3 gap-3 mb-5">
              <div className="text-center p-3 rounded-xl bg-black/20">
                <div className={"text-xl font-black mb-1 " + riskColor(result.validationReport.securityRisk)}>{result.validationReport.securityRisk}</div>
                <div className="text-xs text-violet-400/60 font-mono uppercase">Security Risk</div>
              </div>
              <div className="text-center p-3 rounded-xl bg-black/20">
                <div className={"text-xl font-black mb-1 " + riskColor(result.validationReport.procurementRisk)}>{result.validationReport.procurementRisk}</div>
                <div className="text-xs text-violet-400/60 font-mono uppercase">Procurement Risk</div>
              </div>
              <div className="text-center p-3 rounded-xl bg-black/20">
                <div className={"text-xl font-black mb-1 " + riskColor(result.validationReport.pmfConfidence)}>{result.validationReport.pmfConfidence}</div>
                <div className="text-xs text-violet-400/60 font-mono uppercase">PMF Confidence</div>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <h4 className="text-xs font-mono text-violet-400/60 uppercase mb-2">Main Objections</h4>
                <ul className="space-y-1">
                  {result.validationReport.mainObjections.map((o, i) => (<li key={i} className="flex items-start gap-2 text-xs text-rose-200/70"><span className="text-rose-400 mt-0.5">X</span> {o}</li>))}
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-mono text-violet-400/60 uppercase mb-2">Recommended Next Steps</h4>
                <ul className="space-y-1">
                  {result.validationReport.recommendedNext.map((r, i) => (<li key={i} className="flex items-start gap-2 text-xs text-emerald-200/70"><span className="text-emerald-400 mt-0.5">1</span> {r}</li>))}
                </ul>
              </div>
            </div>
          </div>
          {/* STEP 4: HUMAN REVIEW */}
          {!approved && phase === "output" && (
            <div className="rounded-2xl bg-emerald-500/10 border border-emerald-500/20 p-6">
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="green">STEP 4</Badge>
                <span className="text-emerald-300 font-bold">Human Review and Approval</span>
              </div>
              <p className="text-emerald-200/60 text-sm mb-4">Review the agent outputs above. Are the objections relevant to your specific product? Tag anything that feels generic, outdated, or incorrect. Then approve to complete the simulation.</p>
              <div className="flex justify-end">
                <button onClick={handleApprove} className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold transition-colors">
                  Approve and Complete Simulation
                </button>
              </div>
            </div>
          )}
          {approved && phase === "review" && (
            <div className="rounded-2xl bg-emerald-500/10 border border-emerald-500/20 p-6 text-center">
              <div className="text-emerald-400 text-3xl mb-3">VERIFIED</div>
              <p className="text-emerald-200/80 font-bold mb-1">Human Review Complete</p>
              <p className="text-emerald-200/60 text-sm">Simulation complete. The validation report is ready for strategic decision-making.</p>
            </div>
          )}
        </div>
      )}
    </Section>
  );
}
function HITL() {
  return (
    <Section>
      <SectionTitle badge="HUMAN IN THE LOOP" title="The Human Founder Is the Strategic Interrogator" subtitle="AI surfaces friction. The human decides what to do with it." />
      <div className="grid sm:grid-cols-2 gap-5">
        <div className="rounded-xl bg-white/5 border border-white/10 p-5">
          <h3 className="text-white font-bold mb-4">What the human must do</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2 text-sm text-violet-200/70"><span className="text-violet-400 font-bold mt-0.5">1.</span> Review agent objections for realism and relevance to your specific product</li>
            <li className="flex items-start gap-2 text-sm text-violet-200/70"><span className="text-violet-400 font-bold mt-0.5">2.</span> Challenge outputs that feel too generic, polite, or outdated</li>
            <li className="flex items-start gap-2 text-sm text-violet-200/70"><span className="text-violet-400 font-bold mt-0.5">3.</span> Tag objections as relevant or irrelevant to your context</li>
            <li className="flex items-start gap-2 text-sm text-violet-200/70"><span className="text-violet-400 font-bold mt-0.5">4.</span> Decide whether to pivot, persevere, or test with real customers</li>
          </ul>
        </div>
        <div className="rounded-xl bg-amber-500/10 border border-amber-500/20 p-5">
          <h3 className="text-amber-300 font-bold mb-3">Critical Warning</h3>
          <p className="text-amber-200/80 text-sm leading-relaxed">PersonaForge AI does not replace real customer discovery. It prepares founders for better real-world validation by surfacing the objections they will actually face in enterprise sales cycles.</p>
          <p className="text-amber-200/60 text-sm leading-relaxed mt-3">The validation report is a preparation tool, not a verdict on market demand. Human judgment remains essential.</p>
        </div>
      </div>
    </Section>
  );
}

function RealSimulated() {
  return (
    <Section>
      <SectionTitle badge="SIMULATION LAYERS" title="Real vs. Simulated vs. Assumed" subtitle="Every layer serves a different purpose. The human founder must keep them separate." />
      <div className="grid sm:grid-cols-3 gap-4">
        <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-5">
          <h3 className="text-white font-black mb-1">REAL</h3>
          <p className="text-xs text-violet-400/60 font-mono mb-4">What you provide</p>
          <ul className="space-y-2">
            <li className="text-xs text-violet-200/70">Founder input form</li>
            <li className="text-xs text-violet-200/70">Agent-style objection output</li>
            <li className="text-xs text-violet-200/70">Structured validation report</li>
            <li className="text-xs text-violet-200/70">Human review checkpoint</li>
          </ul>
        </div>
        <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-5">
          <h3 className="text-white font-black mb-1">SIMULATED</h3>
          <p className="text-xs text-violet-400/60 font-mono mb-4">What the AI generates</p>
          <ul className="space-y-2">
            <li className="text-xs text-violet-200/70">Internal procurement politics</li>
            <li className="text-xs text-violet-200/70">Private buyer behavior patterns</li>
            <li className="text-xs text-violet-200/70">Enterprise decision-making friction</li>
            <li className="text-xs text-violet-200/70">Multi-agent debate structure</li>
          </ul>
        </div>
        <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-5">
          <h3 className="text-white font-black mb-1">ASSUMED</h3>
          <p className="text-xs text-violet-400/60 font-mono mb-4">What you interpret</p>
          <ul className="space-y-2">
            <li className="text-xs text-violet-200/70">Synthetic objections approximate real buyer concerns</li>
            <li className="text-xs text-violet-200/70">Founder can interpret feedback correctly</li>
            <li className="text-xs text-violet-200/70">Public cybersecurity knowledge is sufficient for early simulation</li>
            <li className="text-xs text-violet-200/70">Simulation output predicts real purchasing behavior</li>
          </ul>
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
      <WorkflowOverview />
      <Simulation />
      <HITL />
      <RealSimulated />
    </main>
  );
}
