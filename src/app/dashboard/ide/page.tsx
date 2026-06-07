"use client";
import Link from "next/link";

const CODE_LINES = [
  { n: "01", parts: [{ t: "const", c: "#83db72" }, { t: " express = ", c: "#f0eee5" }, { t: "require", c: "#b8ce9e" }, { t: "('express');", c: "#ceeda0" }] },
  { n: "02", parts: [{ t: "const", c: "#83db72" }, { t: " app = ", c: "#f0eee5" }, { t: "express", c: "#b8ce9e" }, { t: "();", c: "#f0eee5" }] },
  { n: "03", parts: [] },
  { n: "04", parts: [{ t: "// Fetch all orders from database", c: "#ceeda0", o: "0.4" }] },
  { n: "05", parts: [{ t: "app.", c: "#f0eee5" }, { t: "get", c: "#ceeda0" }, { t: "('/api/v1/orders', (req, res) => {", c: "#f0eee5" }] },
  { n: "06", parts: [{ t: "  const", c: "#83db72" }, { t: " orders = [", c: "#f0eee5" }] },
  { n: "07", parts: [{ t: "    { id: ", c: "#f0eee5" }, { t: "1", c: "#ceeda0" }, { t: ", status: ", c: "#f0eee5" }, { t: "'paid'", c: "#ceeda0" }, { t: " },", c: "#f0eee5" }] },
  { n: "08", parts: [{ t: "    { id: ", c: "#f0eee5" }, { t: "2", c: "#ceeda0" }, { t: ", status: ", c: "#f0eee5" }, { t: "'pending'", c: "#ceeda0" }, { t: " }", c: "#f0eee5" }] },
  { n: "09", parts: [{ t: "  ];", c: "#f0eee5" }] },
  { n: "10", parts: [] },
  { n: "11", parts: [{ t: "  res.", c: "#f0eee5" }, { t: "status", c: "#b8ce9e" }, { t: "(", c: "#f0eee5" }, { t: "200", c: "#ceeda0" }, { t: ").", c: "#f0eee5" }, { t: "json", c: "#b8ce9e" }, { t: "(orders);", c: "#f0eee5" }] },
  { n: "12", parts: [{ t: "});", c: "#f0eee5" }] },
  { n: "13", parts: [] },
  { n: "14", parts: [{ t: "app.", c: "#f0eee5" }, { t: "listen", c: "#b8ce9e" }, { t: "(", c: "#f0eee5" }, { t: "3000", c: "#ceeda0" }, { t: ", () => {", c: "#f0eee5" }] },
  { n: "15", parts: [{ t: "  console.", c: "#f0eee5" }, { t: "log", c: "#b8ce9e" }, { t: "('Server active on 3000');", c: "#ceeda0" }] },
  { n: "16", parts: [{ t: "});", c: "#f0eee5" }] },
];

const AI_MESSAGES = [
  { type: "ok",  text: "Syntax check passed. Express initialization is correct." },
  { type: "err", text: "Warning: You forgot to add input validation middleware on line 14. This would fail OPay's security standards for production routing." },
];

export default function IDEPage() {
  return (
    <div className="h-screen overflow-hidden flex flex-col">
      {/* Header */}
      <header className="h-14 bg-surface/80 backdrop-blur-md border-b-2 border-primary-container flex items-center px-6 justify-between flex-shrink-0">
        <div className="flex items-center gap-4">
          <Link href="/dashboard/roadmap" className="flex items-center gap-2 text-primary font-label-caps text-[11px] hover:opacity-70 transition-opacity">
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            Back to Roadmap
          </Link>
          <div className="h-5 w-px bg-outline-variant mx-1" />
          <nav className="flex items-center gap-2 font-label-caps text-[11px]">
            <span className="text-on-surface-variant">Full-Stack Mastery</span>
            <span className="material-symbols-outlined text-on-surface-variant scale-75">chevron_right</span>
            <span className="text-primary font-bold">Module 4: API Routing</span>
          </nav>
        </div>
        {/* Step progress */}
        <div className="flex items-center gap-6 flex-1 max-w-md px-10">
          <div className="w-full bg-surface-container-highest h-3 rounded-full overflow-hidden border border-primary-container">
            <div className="flex h-full">
              <div className="w-1/5 bg-primary border-r border-background" />
              <div className="w-1/5 bg-primary border-r border-background" />
              <div className="w-3/5 bg-transparent" />
            </div>
          </div>
          <span className="font-label-caps text-[11px] text-on-surface-variant whitespace-nowrap">Step 2 / 5</span>
        </div>
        <button className="bg-error-container text-on-error-container px-4 py-1.5 border-2 border-primary-container rounded-lg font-button-text text-sm brutal-shadow-sm">
          End Session
        </button>
      </header>

      {/* 3-column workspace */}
      <main className="grid grid-cols-12 gap-5 p-5 flex-1 overflow-hidden">

        {/* Left: Guide + AI chat */}
        <aside className="col-span-3 flex flex-col gap-5 h-full overflow-y-auto pr-1">
          {/* Task card */}
          <div className="bg-surface-container-lowest border-2 border-primary-container rounded-2xl p-6 brutal-shadow flex-shrink-0">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary-fixed rounded-lg flex items-center justify-center border-2 border-primary-container">
                <span className="material-symbols-outlined text-primary">assignment</span>
              </div>
              <h2 className="font-headline-md text-xl text-primary">Task: Build a GET Endpoint</h2>
            </div>
            <p className="font-body-md text-on-surface-variant mb-5 leading-relaxed text-sm">
              Create a <code className="bg-surface-container px-1 rounded font-bold">GET</code> endpoint at{" "}
              <code className="bg-surface-container px-1 rounded font-bold">/api/v1/orders</code>.
            </p>
            <div className="bg-primary-container text-on-primary-container p-4 rounded-xl font-label-caps text-[12px] leading-6">
              <div className="flex justify-between items-center mb-2 border-b border-on-primary-container/20 pb-2">
                <span>express_template.js</span>
                <span className="material-symbols-outlined text-[16px] cursor-pointer hover:opacity-70">content_copy</span>
              </div>
              <pre className="overflow-x-auto text-[11px]">{`app.get('/path', (req, res) => {\n  res.status(200).json({ data });\n});`}</pre>
            </div>
          </div>

          {/* AI Validator chat */}
          <div className="bg-surface-container-lowest border-2 border-primary-container rounded-2xl flex flex-col flex-1 brutal-shadow overflow-hidden">
            <div className="p-4 border-b-2 border-primary-container flex items-center justify-between flex-shrink-0">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
                <h3 className="font-label-caps text-[11px] text-primary">AI Validator Active</h3>
              </div>
            </div>
            <div className="flex-1 p-4 space-y-4 overflow-y-auto">
              {AI_MESSAGES.map((msg, i) => (
                <div key={i} className="flex flex-col items-start gap-2">
                  <div className="flex items-center gap-2">
                    <div className={`w-6 h-6 rounded flex items-center justify-center ${msg.type === "err" ? "bg-error" : "bg-primary-container"}`}>
                      <span className="material-symbols-outlined text-[13px] text-white">
                        {msg.type === "err" ? "warning" : "smart_toy"}
                      </span>
                    </div>
                    <span className={`font-label-caps text-[10px] ${msg.type === "err" ? "text-error font-bold" : "text-on-surface-variant"}`}>
                      {msg.type === "err" ? "Critical Feedback" : "Validator"}
                    </span>
                  </div>
                  <div className={`p-3 rounded-2xl rounded-tl-none max-w-[95%] ${msg.type === "err" ? "bg-error-container/40 border-2 border-error" : "bg-surface-container border border-outline-variant"}`}>
                    <p className={`font-body-md text-xs ${msg.type === "err" ? "text-on-error-container" : "text-on-surface"}`}>
                      {msg.type === "err" && <span className="font-bold">Warning: </span>}{msg.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-3 bg-surface-container-low border-t-2 border-primary-container flex-shrink-0">
              <div className="relative">
                <input className="w-full bg-surface-container-lowest border-2 border-primary-container rounded-xl px-4 py-2.5 pr-10 font-body-md text-sm brutal-shadow-sm outline-none focus:border-primary" placeholder="Ask AI for a hint..." />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 text-primary hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[20px]">send</span>
                </button>
              </div>
            </div>
          </div>
        </aside>

        {/* Centre: Dark IDE */}
        <section className="col-span-9 flex flex-col h-full bg-[#2A381C] border-2 border-primary-container rounded-2xl overflow-hidden brutal-shadow relative">
          {/* Tabs */}
          <div className="flex bg-[#1a2311] border-b-2 border-primary-container px-4 flex-shrink-0">
            {["controller.js", "routes.js"].map((tab, i) => (
              <button key={tab}
                className={`px-7 py-3.5 font-label-caps text-[11px] flex items-center gap-2 transition-colors
                  ${i === 0 ? "text-primary-fixed border-b-2 border-primary-fixed bg-[#2A381C]" : "text-on-primary-container/50 hover:text-on-primary-container/80"}`}
              >
                <span className="material-symbols-outlined text-[15px]">{i === 0 ? "javascript" : "route"}</span>
                {tab}
              </button>
            ))}
          </div>

          {/* Code */}
          <div className="flex-1 p-8 font-mono text-[14px] leading-loose overflow-y-auto">
            <div className="flex gap-6">
              <div className="text-on-primary-container/25 select-none text-right space-y-0 leading-loose">
                {CODE_LINES.map((l) => <div key={l.n}>{l.n}</div>)}
              </div>
              <div className="flex-1 leading-loose">
                {CODE_LINES.map((line, i) => (
                  <div key={i}>
                    {line.parts.map((p, j) => (
                      <span key={j} style={{ color: p.c, opacity: (p as { o?: string }).o ? parseFloat((p as { o?: string }).o!) : 1 }}>{p.t}</span>
                    ))}
                    {i === CODE_LINES.length - 1 && (
                      <span className="inline-block w-2 h-5 bg-primary-fixed ml-1 align-middle cursor-blink" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Run button */}
          <div className="absolute bottom-8 right-8">
            <button className="bg-primary-fixed text-primary px-8 py-4 border-2 border-primary-container rounded-2xl font-button-text brutal-shadow flex items-center gap-3 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:brutal-shadow-lg active:translate-x-1 active:translate-y-1 transition-all">
              <span className="material-symbols-outlined">play_circle</span>
              Run & Validate Code with AI
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
