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
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-sm text-violet-300 font-medium">Stop Building Software Nobody Wants to Buy</span>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-gradient mb-6 leading-tight tracking-tight">
          Hello World, Team 12
        </h1>

        {/* Team badge */}
        <div className="mb-12">
          <span className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-br from-violet-500/20 to-purple-600/20 backdrop-blur-sm border border-white/10">
            <span className="text-2xl font-black text-gradient">AI Native Enterprise Lab</span>
          </span>
        </div>

        {/* Project summary cards */}
        <div className="space-y-6 mb-12 text-left max-w-3xl mx-auto">
          <div className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6">
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="text-violet-400">📋</span> Project Summary
            </h2>
            <p className="text-violet-200/70 leading-relaxed">
              Team 12 is building an AI-native web application using modern technologies. 
              The mission: create products people actually want to buy — validate first, build second.
            </p>
          </div>

          <div className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6">
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="text-violet-400">🔧</span> Tech Stack
            </h2>
            <div className="flex flex-wrap gap-3">
              {["Next.js", "TypeScript", "Tailwind CSS", "npm", "Vercel"].map((tech) => (
                <span key={tech} className="px-4 py-2 rounded-full bg-violet-500/20 border border-violet-500/30 text-sm text-violet-200">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6">
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="text-violet-400">🚀</span> What We Built
            </h2>
            <ul className="text-violet-200/70 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">✓</span>
                <span>Connected GitHub repository: <code className="text-violet-300">DigitalCoa-ch/ai-native-team-12</code></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">✓</span>
                <span>Set up Vercel deployment pipeline with auto-deploy on push</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">✓</span>
                <span>Fixed Turbopack CSS @import order for Next.js 16 compatibility</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">✓</span>
                <span>Deployed live homepage: "Build What Sells" landing page</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400 mt-1">⏳</span>
                <span>Custom domain <code className="text-violet-300">team-12.apps.digitalcoa.ch</code> pending DNS setup</span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6">
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="text-violet-400">💡</span> Core Philosophy
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-xl bg-red-500/10 border border-red-500/20 p-4">
                <p className="text-red-300 font-medium mb-1">❌ The Old Way</p>
                <p className="text-sm text-red-200/60">Build first, ask questions later. 70% of software fails because nobody wants it.</p>
              </div>
              <div className="rounded-xl bg-green-500/10 border border-green-500/20 p-4">
                <p className="text-green-300 font-medium mb-1">✅ The Smart Way</p>
                <p className="text-sm text-green-200/60">Validate first. Talk to customers. Ship only what people will pay for.</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6">
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="text-violet-400">🔗</span> Links
            </h2>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="https://github.com/DigitalCoa-ch/ai-native-team-12" target="_blank" rel="noopener noreferrer" 
                 className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-violet-300 hover:bg-white/10 transition-colors">
                GitHub Repository
              </a>
              <a href="https://team-12-chi.vercel.app" target="_blank" rel="noopener noreferrer"
                 className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-violet-300 hover:bg-white/10 transition-colors">
                Live App (Vercel)
              </a>
              <a href="https://ai-native-12.digitalcoa.ch" target="_blank" rel="noopener noreferrer"
                 className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-violet-300 hover:bg-white/10 transition-colors">
                OpenClaw Workbench
              </a>
            </div>
          </div>
        </div>

        {/* Footer badge */}
        <div className="mt-8">
          <span className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-br from-violet-500/20 to-purple-600/20 backdrop-blur-sm border border-white/10">
            <span className="text-2xl font-black text-gradient">Team 12</span>
            <span className="text-sm text-violet-300 font-medium">· AI Native Enterprise Lab</span>
          </span>
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
        <span>Deployed on Vercel</span>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-violet-500/20 rounded-tl-3xl" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-violet-500/20 rounded-br-3xl" />
    </main>
  );
}