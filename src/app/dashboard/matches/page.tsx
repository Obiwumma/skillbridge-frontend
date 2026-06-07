"use client";

const MATCHES = [
  {
    company: "OPay",
    role: "Junior Backend Intern",
    match: 92,
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuDc1U9fu8sIHZwk_9-Whs-1eUrSoJYX2iLBXYEKbyISDZ1Eefzh8NY9yFTjBlczTfeZIn72eB4vj7KCw17dvPB0cXiA4KLpOoHqFRxWMlVhQGtNVoyQAndN-qVDOfwWiVf7l2JU73THspv0aFyzZXlDoFtmPrQuD5klzxFCUeNWDrcx_63T-IHHlTDXkZ58GlxOKuEmNdoTAT3rbHkWQfWwydixRZ-Kc6ct7cJn9zKMtuKSV15tQ1YCcq7BVtExCEMtX7sJovHs3EnJ",
    skills: ["PYTHON", "POSTGRESQL"],
    missing: ["DOCKER"],
    locked: false,
  },
  {
    company: "Google",
    role: "Frontend Developer",
    match: 88,
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuBHGQGlos5IE7wHL6ZGNHV04YOXIoO8j6UyIXiIjJzx1QhbGp6RSda71UONhHQTVjPidf9eC336B8n66eHWLE6rDJN9ohEUW528E4Foc-g9Z88_UCtBkQVbgCjmiribhkERtg762EFk8UQ3FsyLfKuyoJsksvEge9qp4ocq3dKmkWHFKOi_5ftOa0JxW-LlKatx52WDMhk1bxGc9WBxWQktxcAaK7Tsyk_loVUPTbmhjWLQYhl_DesTFdCkaPvbZ7NMTWZWsi4kWxAQ",
    skills: ["REACT.JS", "TAILWIND", "TYPESCRIPT"],
    missing: [],
    locked: false,
  },
  {
    company: "Kuda Bank",
    role: "Software Engineer",
    match: 85,
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuDqQqUz09K422iP78gE6mkFV_hynfysF6qMb9zavQG16lNnvj3TVTN7I0D7OJw8p6BXoSeMZtuL32eM05_z-RBPZ3w8pr9dmuUXS7MnMbsPFuaATPoxEW9Iqk3VUUI6pzfbwSWF__bYpfYk4djWdYfSS8cMg5Yb9ZL-vnAHfRB-gk419N7dzr0_0cSKRGQE8O8uhCdMiAAPCBHpiO5BMH2uPlEejttUWHSesN4T5xg9IIsDhfepLBw2VnHWhhljOsrkLUMkVCfUJept",
    skills: ["GO", "KUBERNETES"],
    missing: ["REDIS"],
    locked: false,
  },
  {
    company: "Paystack",
    role: "Mid-Level Engineer",
    match: 45,
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuB6MsNSEwdaD7RvsQTVUgq5LHj_RfCHKSsiFfXYkqSxkCk18CvWVHWa--uLYEJSj5IBHtCCPKlEaWwX-A5laNg3SkzqUE8NUR6YllfzMKcSYYDdhcwMvOsqfpvu9VMV7SOl-ymXuqJ5xD9DUVg97tCOxF5J82l_7yYQEs15uUcew8rXVja4yFJvQgKve2JJ-R1-eiMAUuXHV_ZA7hhsYjl5VzS09YXgi2iokj0qFsT_oiBkyYz45iCf8Dkdr-6R4pXzkoggsC6g8HDo",
    skills: ["NODE.JS", "AWS"],
    missing: [],
    locked: true,
  },
];

export default function MatchesPage() {
  return (
    <div className="min-h-screen px-10 pt-10 pb-32">
      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
        <div>
          <h2 className="font-headline-lg text-4xl text-primary">Your Verified Career Matches</h2>
          <p className="font-body-lg text-on-surface-variant mt-2 max-w-2xl">
            Congratulations! Your{" "}
            <span className="font-bold text-primary">Employability Score of 85%</span>{" "}
            has unlocked direct applications to our corporate partners.
          </p>
        </div>
        <div className="flex items-center gap-3 bg-white border-2 border-primary px-6 py-3 rounded-2xl neo-shadow flex-shrink-0">
          <span className="material-symbols-outlined text-tertiary-container" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
          <span className="font-label-caps text-[11px] text-primary">Current Streak: 12 Days</span>
        </div>
      </header>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {MATCHES.map((job) =>
          job.locked ? (
            /* Locked card */
            <div key={job.company} className="relative bg-white/50 border-2 border-outline-variant p-8 rounded-3xl flex flex-col grayscale opacity-60 pointer-events-none">
              <div className="absolute inset-0 z-10 backdrop-blur-[4px] rounded-3xl flex items-center justify-center p-8 bg-surface/10">
                <div className="text-center bg-white border-2 border-primary p-6 rounded-2xl neo-shadow max-w-xs -rotate-2">
                  <span className="material-symbols-outlined text-primary text-4xl mb-3 block">lock</span>
                  <p className="font-body-md text-on-surface font-bold">Requires a 90% Employability Score to unlock.</p>
                  <p className="font-body-md text-on-surface-variant text-sm mt-2">Finish your CI/CD Roadmap module to apply.</p>
                </div>
              </div>
              <div className="flex gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-surface-container-high border-2 border-outline-variant overflow-hidden flex-shrink-0">
                  <img src={job.logo} alt={job.company} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-headline-md text-xl">{job.company}</h3>
                  <p className="font-body-md text-on-surface-variant italic">{job.role}</p>
                </div>
              </div>
              <div className="w-full bg-surface-container h-3 rounded-full overflow-hidden mb-6">
                <div className="bg-outline-variant h-full rounded-full" style={{ width: `${job.match}%` }} />
              </div>
              <button className="mt-auto w-full bg-surface-variant text-on-surface-variant py-5 rounded-2xl font-button-text border-2 border-outline-variant">
                Application Locked
              </button>
            </div>
          ) : (
            /* Active card */
            <div key={job.company} className="bg-white border-2 border-primary p-8 rounded-3xl neo-shadow flex flex-col transition-all duration-300 hover:-translate-y-1">
              <div className="flex justify-between items-start mb-6">
                <div className="flex gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-surface-container-high border-2 border-primary overflow-hidden flex-shrink-0">
                    <img src={job.logo} alt={job.company} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-headline-md text-xl text-on-surface">{job.company}</h3>
                    <p className="font-body-md text-on-surface-variant italic">{job.role}</p>
                  </div>
                </div>
                <div className="bg-secondary-container/30 px-3 py-1 rounded-full border border-secondary text-secondary font-label-caps text-[10px] flex-shrink-0">
                  {job.match}% MATCH
                </div>
              </div>

              {/* Progress bar */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-label-caps text-[11px] text-primary">SkillBridge Match Score</span>
                  <span className="font-label-caps text-[11px] text-primary font-bold">{job.match}%</span>
                </div>
                <div className="w-full bg-surface-container h-3 rounded-full overflow-hidden border border-primary/10">
                  <div
                    className="bg-secondary h-full rounded-full transition-all duration-1000"
                    style={{ width: `${job.match}%` }}
                  />
                </div>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-10">
                {job.skills.map((s) => (
                  <span key={s} className="px-3 py-1 bg-secondary-container text-on-secondary-container rounded-lg border-2 border-primary font-label-caps text-[11px]">
                    {s}
                  </span>
                ))}
                {job.missing.map((s) => (
                  <span key={s} className="px-3 py-1 bg-surface-variant text-on-surface-variant rounded-lg border-2 border-outline-variant font-label-caps text-[11px] flex items-center gap-1">
                    <span className="material-symbols-outlined text-xs">close</span> MISSING: {s}
                  </span>
                ))}
              </div>

              <button className="mt-auto w-full bg-primary-container text-on-primary-container py-5 rounded-2xl font-button-text neo-shadow flex items-center justify-center gap-3 transition-all hover:scale-[1.02]">
                Apply with Verified AI Profile ⚡
              </button>
            </div>
          )
        )}
      </div>

      {/* FAB */}
      <button className="fixed bottom-8 right-8 w-16 h-16 bg-tertiary-container text-on-tertiary rounded-full shadow-2xl flex items-center justify-center border-2 border-white transition-all hover:scale-110 active:scale-90 group z-50">
        <span className="material-symbols-outlined text-2xl group-hover:rotate-12 transition-transform">chat_bubble</span>
      </button>
    </div>
  );
}
