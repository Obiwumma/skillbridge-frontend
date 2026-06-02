"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TERMINAL_STEPS = [
  "Initializing neural parser...",
  "Reading document metadata...",
  "Extracting technical skills...",
  "Mapping projects to OPay standards...",
  "Cross-referencing university curriculum...",
  "Calculating readiness score...",
  "Generating optimized career path...",
  "Profile complete. Redirecting..."
];

export default function CVAnalyzerSection() {
  // Form states
  const [university, setUniversity] = useState("");
  const [currentLevel, setCurrentLevel] = useState("300 Level");
  const [targetRole, setTargetRole] = useState("");
  
  // File upload states
  const [fileName, setFileName] = useState<string | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Terminal state
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

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

  // Submit/Analysis handler
  const handleAnalyze = (e: React.FormEvent) => {
    e.preventDefault();
    if (!university || !targetRole) {
      alert("Please fill in all the details first.");
      return;
    }
    if (!fileName) {
      alert("Please upload your Resume/CV to begin analysis.");
      return;
    }

    setIsAnalyzing(true);
    setTerminalLines([]);
    setCurrentStepIndex(0);
  };

  // Typing simulation effect
  useEffect(() => {
    if (!isAnalyzing) return;

    if (currentStepIndex < TERMINAL_STEPS.length) {
      const timer = setTimeout(() => {
        setTerminalLines((prev) => [...prev, TERMINAL_STEPS[currentStepIndex]]);
        setCurrentStepIndex((prev) => prev + 1);
      }, 800);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setIsAnalyzing(false);
        alert("AI Career Onboarding analysis complete!");
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isAnalyzing, currentStepIndex]);

  return (
    <div className="max-w-6xl w-full flex flex-col lg:flex-row gap-8 items-stretch justify-center mx-auto py-12">
      {/* Focused Intake Card */}
      <div className="flex-grow bento-card rounded-xl p-8 md:p-12 relative overflow-hidden flex flex-col justify-between">
        {/* Progress Bar */}
        <div className="absolute top-0 left-0 w-full h-1.5 bg-surface-variant/30">
          <motion.div 
            className="h-full bg-primary-container rounded-r-full"
            initial={{ width: "0%" }}
            animate={{ width: isAnalyzing ? "100%" : fileName ? "50%" : "25%" }}
            transition={{ duration: 1.0, ease: "easeInOut" }}
          />
        </div>

        <div>
          <div className="mb-10 text-center lg:text-left">
            <span className="inline-block px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full font-label-sm text-xs font-bold mb-4">
              STEP 1 OF 2
            </span>
            <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight text-3xl font-bold">
              Let&apos;s build your career profile.
            </h1>
            <p className="text-on-surface-variant mt-2 font-body-md text-sm leading-relaxed">
              Our AI analyzes your background to match you with top-tier internships.
            </p>
          </div>

          <form onSubmit={handleAnalyze} className="space-y-8">
            {/* Section A: Information Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-label-md text-sm font-semibold text-on-surface-variant block ml-1">
                  University / Institution
                </label>
                <input 
                  className="w-full bg-surface-container border-none focus:ring-2 focus:ring-primary-container rounded-lg p-4 font-body-md text-sm text-on-surface placeholder:text-outline-variant/60 focus:outline-none" 
                  placeholder="Veritas University Abuja" 
                  type="text"
                  value={university}
                  onChange={(e) => setUniversity(e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label className="font-label-md text-sm font-semibold text-on-surface-variant block ml-1">
                  Current Level
                </label>
                <select 
                  className="w-full bg-surface-container border-none focus:ring-2 focus:ring-primary-container rounded-lg p-4 font-body-md text-sm text-on-surface focus:outline-none"
                  value={currentLevel}
                  onChange={(e) => setCurrentLevel(e.target.value)}
                >
                  <option>100 Level</option>
                  <option>200 Level</option>
                  <option>300 Level</option>
                  <option>400 Level</option>
                  <option>Final Year / 500 Level</option>
                  <option>Graduate</option>
                </select>
              </div>
              
              <div className="md:col-span-2 space-y-2">
                <label className="font-label-md text-sm font-semibold text-on-surface-variant block ml-1">
                  Target Role
                </label>
                <input 
                  className="w-full bg-surface-container border-none focus:ring-2 focus:ring-primary-container rounded-lg p-4 font-body-md text-sm text-on-surface placeholder:text-outline-variant/60 focus:outline-none" 
                  placeholder="Junior Backend Engineer" 
                  type="text"
                  value={targetRole}
                  onChange={(e) => setTargetRole(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Section B: Upload Zone */}
            <div 
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={triggerFileSelect}
              className={`border-2 border-dashed rounded-lg p-10 flex flex-col items-center justify-center transition-all duration-300 cursor-pointer relative group ${
                isDragOver
                  ? "border-primary bg-primary-fixed/20"
                  : "border-outline-variant hover:border-primary-container bg-primary-fixed/5"
              }`}
            >
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleFileChange}
                className="hidden" 
                accept=".pdf,.docx"
              />

              <div className="w-16 h-16 bg-primary-fixed rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary-container text-3xl">cloud_upload</span>
              </div>
              
              <AnimatePresence mode="wait">
                {fileName ? (
                  <motion.div
                    key="uploaded"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center"
                  >
                    <h3 className="font-headline-md text-lg font-bold text-primary mb-1">
                      {fileName}
                    </h3>
                    <p className="text-secondary font-bold font-label-md text-xs uppercase mt-1">
                      File Selected • Click to change
                    </p>
                  </motion.div>
                ) : (
                  <div key="prompt" className="text-center">
                    <h3 className="font-headline-md text-lg font-bold text-primary mb-1">
                      Drag &amp; Drop your Resume/CV here
                    </h3>
                    <p className="text-on-surface-variant font-label-md text-xs">
                      Supports PDF, DOCX (Max 10MB)
                    </p>
                  </div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <motion.button 
                type="submit"
                className="glow-button w-full bg-primary text-white py-5 rounded-full font-headline-md text-lg font-bold flex items-center justify-center gap-2 transition-all shadow-sm"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                Analyze Profile with AI 
                <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>
                  auto_awesome
                </span>
              </motion.button>
            </div>
          </form>
        </div>
      </div>

      {/* AI Processing Panel (Glassmorphism) */}
      <aside className={`lg:w-80 glass-panel rounded-xl p-6 flex flex-col justify-between self-start lg:sticky lg:top-8 transition-all duration-500 shadow-lg min-h-[360px] ${
        isAnalyzing ? "opacity-100 ring-2 ring-inverse-primary/20 scale-105" : "opacity-40"
      }`}>
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className={`w-2 h-2 rounded-full ${
              isAnalyzing ? "bg-error animate-pulse" : "bg-inverse-primary"
            }`}></div>
            <span className="text-inverse-primary font-label-sm text-xs font-bold tracking-widest uppercase">
              {isAnalyzing ? "ANALYZING PROFILE" : "AI ENGINE IDLE"}
            </span>
          </div>

          <div className="space-y-3 font-mono text-xs text-on-tertiary-container">
            <div>
              <p className="text-on-tertiary/60 font-semibold mb-1">&gt; System check initiated...</p>
              <p className="text-on-tertiary/60 font-semibold mb-3">&gt; Waiting for user input...</p>
            </div>
            
            <div className="space-y-2">
              {terminalLines.map((line, idx) => (
                <motion.div 
                  key={idx}
                  className="text-inverse-primary"
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  &gt; {line}
                </motion.div>
              ))}
            </div>

            {isAnalyzing && (
              <div className="mt-1">
                <span className="terminal-cursor"></span>
              </div>
            )}
          </div>
        </div>

        <div className="pt-6 border-t border-on-tertiary/10 mt-6">
          <div className="flex items-center justify-between text-on-tertiary/40 font-label-sm text-[10px] font-bold">
            <span>VERSION 2.4.0</span>
            <span>SKILLBRIDGE-ALPHA</span>
          </div>
        </div>
      </aside>
    </div>
  );
}
