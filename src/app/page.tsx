export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-20 animate-float" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-violet-600 rounded-full blur-3xl opacity-20 animate-float-slow" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-indigo-600 rounded-full blur-3xl opacity-15 animate-pulse-slow" />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-10 animate-float" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(124,58,237,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto py-20">
        {/* Team badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-sm text-violet-300 font-medium">AI Native Enterprise Lab</span>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-gradient mb-4 leading-tight tracking-tight">
          Team 12
        </h1>
        <p className="text-xl sm:text-2xl text-violet-300/80 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
          Stop Building Software Nobody Wants to Buy
        </p>

        {/* Project identity cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12 text-left max-w-4xl mx-auto">
          
          {/* Mission */}
          <div className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6">
            <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
              <span>🎯</span> Our Mission
            </h2>
            <p className="text-violet-200/70 leading-relaxed mb-4">
              To eliminate startup failure by replacing polite assumptions with brutal, data-driven market reality.
            </p>
            <p className="text-violet-200/70 leading-relaxed mb-4">
              We believe founders shouldn't have to burn through their life savings or seed rounds just to find out their product-market fit is flawed.
            </p>
            <p className="text-violet-200/70 leading-relaxed">
              By using AI-native simulation to bypass gatekeepers, PersonaForge AI gives early-stage teams immediate, unconditional access to hyper-realistic, radically candid synthetic buyers. We shift entrepreneurship from "build and pray" to "simulate, perfect, and execute"—saving years of wasted human effort.
            </p>
          </div>

          {/* OpenClaw Workbench */}
          <div className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6">
            <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
              <span>🤖</span> OpenClaw Workbench
            </h2>
            <p className="text-violet-200/70 leading-relaxed mb-3">
              This project is powered by OpenClaw — an AI-native development workbench.
            </p>
            <a href="https://ai-native-12.digitalcoa.ch" target="_blank" rel="noopener noreferrer"
               className="text-sm text-violet-400 hover:text-violet-300 transition-colors underline">
              ai-native-12.digitalcoa.ch
            </a>
          </div>

          {/* Workflow */}
          <div className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6">
            <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
              <span>⚙️</span> Our Workflow
            </h2>
            <div className="flex flex-wrap gap-2 text-xs">
              {["Inspect repo", "Smallest change", "npm install", "npm run build", "Fix errors", "Update docs", "Commit", "Push to main"].map((step, i) => (
                <span key={step} className="flex items-center gap-1 px-3 py-1 rounded-full bg-violet-500/20 border border-violet-500/30 text-violet-200">
                  {i + 1}. {step}
                </span>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6">
            <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
              <span>🔧</span> Tech Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {["Next.js", "TypeScript", "Tailwind CSS", "npm", "Vercel"].map((tech) => (
                <span key={tech} className="px-3 py-1 rounded-full bg-violet-500/20 border border-violet-500/30 text-sm text-violet-200">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* What We've Done */}
          <div className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6 md:col-span-2">
            <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
              <span>✅</span> What We've Built
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-violet-200/70">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-0.5">✓</span>
                  <span>GitHub repo connected: DigitalCoa-ch/ai-native-team-12</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-0.5">✓</span>
                  <span>Vercel deployment pipeline with auto-deploy on push</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-0.5">✓</span>
                  <span>Fixed Turbopack CSS @import order for Next.js 16</span>
                </li>
              </ul>
              <ul className="space-y-2 text-violet-200/70">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-0.5">✓</span>
                  <span>Live homepage with "Build What Sells" messaging</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-0.5">✓</span>
                  <span>Memory and documentation system in place</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-0.5">⏳</span>
                  <span>Custom domain team-12.apps.digitalcoa.ch pending DNS</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a href="https://github.com/DigitalCoa-ch/ai-native-team-12" target="_blank" rel="noopener noreferrer"
             className="px-6 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-sm text-violet-300 hover:bg-white/10 hover:border-violet-500/30 transition-all">
            <span className="mr-2">📦</span>GitHub Repository
          </a>
          <a href="https://team-12-chi.vercel.app" target="_blank" rel="noopener noreferrer"
             className="px-6 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-sm text-violet-300 hover:bg-white/10 hover:border-violet-500/30 transition-all">
            <span className="mr-2">🚀</span>Live App
          </a>
          <a href="https://ai-native-12.digitalcoa.ch" target="_blank" rel="noopener noreferrer"
             className="px-6 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-sm text-violet-300 hover:bg-white/10 hover:border-violet-500/30 transition-all">
            <span className="mr-2">🤖</span>OpenClaw Workbench
          </a>
        </div>

        {/* Footer */}
        <div className="mt-8 inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-br from-violet-500/20 to-purple-600/20 backdrop-blur-sm border border-white/10">
          <span className="text-2xl font-black text-gradient">Team 12</span>
          <span className="text-sm text-violet-300">·</span>
          <span className="text-sm text-violet-300 font-medium">AI Native Enterprise Lab</span>
        </div>
      </div>

      {/* Bottom status bar */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-6 text-xs text-violet-400/50 font-mono">
        <span>Next.js 16</span>
        <span className="w-1 h-1 rounded-full bg-violet-400/30" />
        <span>TypeScript</span>
        <span className="w-1 h-1 rounded-full bg-violet-400/30" />
        <span>Tailwind CSS</span>
        <span className="w-1 h-1 rounded-full bg-violet-400/30" />
        <span>Vercel</span>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-violet-500/20 rounded-tl-3xl" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-violet-500/20 rounded-br-3xl" />
    </main>
  );
}