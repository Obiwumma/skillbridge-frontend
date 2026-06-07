"use client";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const EXPERTISE_TAGS = [
  "FINTECH",
  "UX STRATEGY",
  "TECH POLICY",
  "SUSTAINABILITY",
  "AI ETHICS",
  "PRODUCT MGMT",
];

export default function MentorApplyPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isApproved, setIsApproved] = useState(false);

  // Form states
  const [fullName, setFullName] = useState("");
  const [currentRole, setCurrentRole] = useState("");
  const [linkedinUrl, setLinkedinUrl] = useState("");
  const [experience, setExperience] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>(["FINTECH"]);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  // File upload state
  const [fileName, setFileName] = useState<string | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Toggle expertise tags
  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  // File upload handlers
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setFileName(e.dataTransfer.files[0].name);
    }
  };

  const triggerFileSelect = () => {
    fileInputRef.current?.click();
  };

  // Submit handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !currentRole || !linkedinUrl) {
      alert("Please fill in all required fields.");
      return;
    }
    setIsSubmitting(true);
    
    // Simulate verification/approval and redirect
    setTimeout(() => {
      setIsApproved(true);
      setTimeout(() => {
        router.push("/mentor/dashboard");
      }, 2000);
    }, 1500);
  };

  return (
    <div className="bg-background text-on-surface paper-texture relative min-h-screen overflow-x-hidden selection:bg-secondary/30">
      {/* Background Botanical Overlay */}
      <span
        className="material-symbols-outlined absolute top-[15%] -left-10 rotate-12 pointer-events-none opacity-5 z-0 text-[180px]"
        style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}
      >
        eco
      </span>
      <span
        className="material-symbols-outlined absolute bottom-[20%] right-20 rotate-45 pointer-events-none opacity-5 z-0 text-[180px]"
        style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}
      >
        yard
      </span>

      <Navbar />

      <main className="max-w-[1200px] mx-auto px-lg pt-32 pb-xl relative z-10">

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl mb-xl items-center">
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="font-display-lg text-display-lg text-primary mb-md leading-[1.1] text-5xl lg:text-6xl font-extrabold">
              Guide the <br />
              <span className="italic font-emphasis-script text-secondary underline decoration-primary/20">
                Next Generation
              </span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg mt-4">
              Turn your industry experience into a legacy. SkillBridge connects veterans with students hungry for authentic wisdom and tactical advice.
            </p>
          </motion.div>

          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.95, rotate: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: 2 }}
            whileHover={{ rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="note-card-lined bg-surface-container-low p-6 rounded-lg paper-lift shadow-md transition-transform duration-300">
              <img
                className="w-full h-48 object-cover rounded mb-md border border-primary/20"
                alt="A warm, overhead shot of a wooden table featuring an open paper journal, a vintage fountain pen, and a small green plant."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD24-gKW_lCXTYkXqvB8mU3HdhHjQBMMwSQdJ-tLBLW0CqlXVMnXXtroNIUu0xJ1WFrh3SiGi1J5uzW-lr_VTtKJ8tCp8FcLIEmZ-QrkfGlQjFVioFOE84Hy623CaTrmZa2Cm1aIJ5qMvBEjAiy443gAHnHYEChULsGRbSxEsOwO9XjQzrRj5Fmvt51Y3KQmDaT3FSXqmECBdu7sbU4eWeNwGMRuZp3JdXzaqTTKDbekh1m19kYjwyosPs-MvRWSw-3evsGcR_z3-He"
              />
              <p className="font-emphasis-script text-emphasis-script text-primary text-center italic text-xl mt-2">
                &quot;Mentorship is the bridge between knowledge and wisdom.&quot;
              </p>
            </div>
            {/* Botanical Accent */}
            <div className="absolute -top-10 -right-5 text-primary opacity-20 pointer-events-none">
              <span className="material-symbols-outlined text-[120px]">eco</span>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="botanical-divider my-12">
          <span className="material-symbols-outlined text-3xl">yard</span>
          <div className="w-24 h-px bg-primary mx-4"></div>
          <span className="material-symbols-outlined text-3xl">yard</span>
        </div>

        {/* Application Form */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-xl">
          <motion.div
            className="lg:col-span-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="bg-surface-container-lowest p-8 lg:p-12 border-[1.5px] border-primary rounded-lg paper-lift shadow-md">
              <h2 className="font-headline-lg text-headline-lg text-primary mb-10 font-bold border-b border-primary/10 pb-4">
                Mentor Dossier
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12 mb-10">
                {/* Full Name */}
                <div className="flex flex-col gap-sm">
                  <label
                    className={`font-label-caps text-xs tracking-wider font-bold transition-colors duration-200 ${focusedField === "fullName" ? "text-secondary" : "text-primary"
                      }`}
                  >
                    FULL NAME
                  </label>
                  <input
                    className="journal-input font-body-md"
                    placeholder="e.g. Julian Thorne"
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    onFocus={() => setFocusedField("fullName")}
                    onBlur={() => setFocusedField(null)}
                    required
                  />
                </div>

                {/* Current Role */}
                <div className="flex flex-col gap-sm">
                  <label
                    className={`font-label-caps text-xs tracking-wider font-bold transition-colors duration-200 ${focusedField === "currentRole" ? "text-secondary" : "text-primary"
                      }`}
                  >
                    CURRENT ROLE
                  </label>
                  <input
                    className="journal-input font-body-md"
                    placeholder="e.g. Principal Architect"
                    type="text"
                    value={currentRole}
                    onChange={(e) => setCurrentRole(e.target.value)}
                    onFocus={() => setFocusedField("currentRole")}
                    onBlur={() => setFocusedField(null)}
                    required
                  />
                </div>

                {/* LinkedIn URL */}
                <div className="flex flex-col gap-sm">
                  <label
                    className={`font-label-caps text-xs tracking-wider font-bold transition-colors duration-200 ${focusedField === "linkedinUrl" ? "text-secondary" : "text-primary"
                      }`}
                  >
                    LINKEDIN URL
                  </label>
                  <input
                    className="journal-input font-body-md"
                    placeholder="linkedin.com/in/username"
                    type="url"
                    value={linkedinUrl}
                    onChange={(e) => setLinkedinUrl(e.target.value)}
                    onFocus={() => setFocusedField("linkedinUrl")}
                    onBlur={() => setFocusedField(null)}
                    required
                  />
                </div>

                {/* Years of Experience */}
                <div className="flex flex-col gap-sm">
                  <label
                    className={`font-label-caps text-xs tracking-wider font-bold transition-colors duration-200 ${focusedField === "experience" ? "text-secondary" : "text-primary"
                      }`}
                  >
                    YEARS OF EXPERIENCE
                  </label>
                  <input
                    className="journal-input font-body-md"
                    placeholder="10+"
                    type="text"
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    onFocus={() => setFocusedField("experience")}
                    onBlur={() => setFocusedField(null)}
                    required
                  />
                </div>
              </div>

              {/* Expertise Tags */}
              <div className="mb-10">
                <label className="font-label-caps text-xs tracking-wider font-bold text-primary mb-4 block">
                  AREAS OF EXPERTISE
                </label>
                <div className="flex flex-wrap gap-3">
                  {EXPERTISE_TAGS.map((tag) => {
                    const isActive = selectedTags.includes(tag);
                    return (
                      <button
                        key={tag}
                        type="button"
                        onClick={() => toggleTag(tag)}
                        className={`washi-tape-interactive font-label-caps text-xs font-bold ${isActive ? "washi-tape-interactive-active" : ""
                          }`}
                      >
                        {tag}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Drag and Drop Verification */}
              <div className="mb-10">
                <label className="font-label-caps text-xs tracking-wider font-bold text-primary mb-4 block">
                  VERIFICATION (WORK ID / CERTIFICATIONS)
                </label>
                <div
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  onClick={triggerFileSelect}
                  className={`border-2 border-dashed rounded-lg p-8 flex flex-col items-center justify-center text-center transition-colors cursor-pointer group ${isDragOver
                      ? "border-secondary bg-secondary-container/10"
                      : "border-primary/40 bg-surface-container hover:border-primary"
                    }`}
                >
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    className="hidden"
                    accept=".pdf,.jpg,.jpeg,.png"
                  />

                  <span className={`material-symbols-outlined text-5xl mb-3 transition-colors ${isDragOver ? "text-secondary" : "text-primary/40 group-hover:text-primary"
                    }`}>
                    upload_file
                  </span>

                  <AnimatePresence mode="wait">
                    {fileName ? (
                      <motion.div
                        key="file-uploaded"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex flex-col items-center"
                      >
                        <p className="font-body-md text-primary font-bold flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-green-700 font-bold">check_circle</span>
                          {fileName}
                        </p>
                        <p className="text-[10px] font-label-caps text-outline mt-1 uppercase">Click to change file</p>
                      </motion.div>
                    ) : (
                      <div key="upload-prompt">
                        <p className="font-body-md text-on-surface-variant">
                          Drag and drop documents here or <span className="text-secondary font-bold underline">browse files</span>
                        </p>
                        <p className="text-[10px] font-label-caps text-outline mt-2">
                          PDF, JPG OR PNG • MAX 10MB
                        </p>
                      </div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Submit button */}
              <div className="flex justify-end">
                <motion.button
                  className="stamp-button bg-secondary text-white px-8 py-4 font-label-caps text-xs font-bold tracking-widest flex items-center gap-2"
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  SUBMIT APPLICATION
                  <span className="material-symbols-outlined text-sm">send</span>
                </motion.button>
              </div>
            </form>
          </motion.div>

          {/* Sidebar / Info */}
          <div className="lg:col-span-4 flex flex-col gap-lg">
            <motion.div
              className="note-card-lined bg-primary text-white p-6 rounded-lg rotate-1 paper-lift shadow-md"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <h3 className="font-headline-md text-headline-md text-2xl font-bold mb-4">
                The Mentor Pact
              </h3>
              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-sm">
                  <span
                    className="material-symbols-outlined text-primary-fixed mt-1 text-xs"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    fiber_manual_record
                  </span>
                  <p className="font-body-md text-sm">Share 2 hours of your time per week.</p>
                </li>
                <li className="flex items-start gap-sm">
                  <span
                    className="material-symbols-outlined text-primary-fixed mt-1 text-xs"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    fiber_manual_record
                  </span>
                  <p className="font-body-md text-sm">Provide honest, tactical feedback.</p>
                </li>
                <li className="flex items-start gap-sm">
                  <span
                    className="material-symbols-outlined text-primary-fixed mt-1 text-xs"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    fiber_manual_record
                  </span>
                  <p className="font-body-md text-sm">Maintain a safe space for growth.</p>
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="p-6 border border-primary/20 rounded-lg bg-surface-container-high/30"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <h4 className="font-label-caps text-xs tracking-wider font-bold text-primary mb-2">NEED HELP?</h4>
              <p className="font-body-md text-on-surface-variant italic text-sm">
                &quot;Our team is standing by to help you craft the perfect profile.&quot;
              </p>
              <a className="text-secondary font-bold underline block mt-4 font-label-caps text-xs tracking-wider" href="mailto:support@skillbridge.com">
                CONTACT SUPPORT
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Crumpled Paper CTA section before the main Footer */}
      <section className="mt-xl">
        <div className="crumpled-paper bg-surface-container-highest py-16 px-lg text-center">
          <div className="max-w-2xl mx-auto py-6">
            <h2 className="font-display-lg text-headline-lg text-primary text-4xl font-extrabold mb-2">
              Industry Veterans
            </h2>
            <p className="font-body-lg text-on-surface-variant mb-8 italic text-lg">
              For those with 20+ years of expertise looking for executive-level board opportunities.
            </p>
            <motion.a
              className="stamp-button bg-primary text-white px-8 py-4 font-label-caps text-xs font-bold tracking-widest inline-block shadow-sm"
              href="#"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              JOIN THE FELLOWSHIP
            </motion.a>
          </div>
        </div>
      </section>

      <Footer />

      <AnimatePresence>
        {isSubmitting && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-[#FAF9F3] border-2 border-[#1F3500] max-w-md w-full p-8 rounded-2xl shadow-xl flex flex-col items-center text-center relative overflow-hidden"
              style={{
                backgroundImage: "url('https://www.transparenttextures.com/patterns/natural-paper.png')",
              }}
            >
              {/* Plant overlay shadow in card */}
              <span
                className="material-symbols-outlined absolute -left-4 -top-4 text-[#3B4D28]/5 text-7xl select-none pointer-events-none"
                style={{ fontVariationSettings: "'FILL' 0" }}
              >
                eco
              </span>

              {/* Status Header */}
              <div className="washi-tape bg-[#F6BE39] text-[#1F3500] text-[10px] font-black font-label-caps tracking-widest px-4 py-1.5 rotate-1 mb-6 shadow-sm uppercase">
                {!isApproved ? "VERIFYING DOSSIER" : "STATUS: APPROVED"}
              </div>

              {!isApproved ? (
                <div className="flex flex-col items-center gap-4 py-4">
                  {/* Loading spinner */}
                  <div className="w-12 h-12 border-4 border-[#1F3500]/20 border-t-[#1F3500] rounded-full animate-spin"></div>
                  <h3 className="font-headline-md text-[#1F3500] text-lg font-black mt-2">
                    Analyzing Experience
                  </h3>
                  <p className="text-sm text-[#51643D] leading-relaxed">
                    Cross-referencing LinkedIn profile and credentials with the SkillBridge registry...
                  </p>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center gap-4 py-2"
                >
                  {/* Verified Checkmark Icon */}
                  <motion.div
                    initial={{ scale: 0.5, rotate: -20 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="w-16 h-16 bg-[#D4EAB8] border-2 border-[#1F3500] rounded-full flex items-center justify-center shadow-inner"
                  >
                    <span className="material-symbols-outlined text-[#1F3500] text-3xl font-black">
                      verified
                    </span>
                  </motion.div>

                  <h3 className="font-headline-md text-[#1F3500] text-xl font-black mt-2">
                    Welcome to the Fellowship!
                  </h3>
                  <p className="text-sm text-[#51643D] leading-relaxed">
                    Thank you, <strong className="text-[#1F3500]">{fullName}</strong>. Your application has been approved. Redirecting you to your active odysseys...
                  </p>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
