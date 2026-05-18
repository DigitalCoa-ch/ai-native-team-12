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
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-sm text-violet-300 font-medium">Stop Building Software Nobody Wants to Buy</span>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-gradient mb-6 leading-tight tracking-tight">
          Build What Sells
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl text-violet-300/80 font-light mb-8 max-w-2xl mx-auto leading-relaxed">
          Validate ideas before you build. Talk to customers first. Ship products people actually want to buy.
        </p>

        {/* Problem/Solution cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-2xl mx-auto">
          <div className="rounded-2xl bg-red-500/10 backdrop-blur-md border border-red-500/20 p-6 text-left">
            <div className="text-3xl mb-3">❌</div>
            <h3 className="text-lg font-bold text-red-300 mb-2">The Old Way</h3>
            <p className="text-sm text-red-200/60">Build first, ask questions later. 70% of software fails because nobody wants it.</p>
          </div>
          <div className="rounded-2xl bg-green-500/10 backdrop-blur-md border border-green-500/20 p-6 text-left">
            <div className="text-3xl mb-3">✅</div>
            <h3 className="text-lg font-bold text-green-300 mb-2">The Smart Way</h3>
            <p className="text-sm text-green-200/60">Validate first. Talk to customers. Ship only what people will pay for.</p>
          </div>
        </div>

        {/* CTA Card */}
        <div className="card-glow rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 p-8 max-w-md mx-auto">
          <div className="text-4xl mb-4">🚀</div>
          <h2 className="text-xl font-bold text-white mb-2">Ready to Validate?</h2>
          <p className="text-violet-300/70 text-sm leading-relaxed mb-4">
            Start by talking to 5 customers before writing a single line of code.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-2 rounded-full bg-violet-500/20 border border-violet-500/30 text-sm text-violet-200">Customer Interviews</span>
            <span className="px-4 py-2 rounded-full bg-violet-500/20 border border-violet-500/30 text-sm text-violet-200">Landing Pages</span>
            <span className="px-4 py-2 rounded-full bg-violet-500/20 border border-violet-500/30 text-sm text-violet-200">Pre-orders</span>
          </div>
        </div>

        {/* Team badge */}
        <div className="mt-12">
          <span className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-br from-violet-500/20 to-purple-600/20 backdrop-blur-sm border border-white/10">
            <span className="text-2xl font-black text-gradient">Team 12</span>
            <span className="text-sm text-violet-300 font-medium">· AI Native Enterprise Lab</span>
          </span>
        </div>
      </div>

      {/* Bottom status bar */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-6 text-xs text-violet-400/50 font-mono">
        <span>Next.js 15</span>
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