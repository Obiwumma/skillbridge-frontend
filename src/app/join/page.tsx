"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function JoinFellowshipPage() {
  const router = useRouter();
  const [authMode, setAuthMode] = useState<"login" | "signup">("signup");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <div className="bg-background text-on-background font-body-md text-body-md overflow-x-hidden paper-texture min-h-screen flex flex-col justify-between selection:bg-secondary/30">
      <Navbar />

      <main className="flex-grow pt-32 pb-section-gap px-margin-mobile flex items-center justify-center max-w-[1280px] mx-auto w-full relative z-10">
        {/* Auth Bento Card */}
        <div className="w-full max-w-[1100px] bg-white border-2 border-primary-container rounded-3xl shadow-[12px_12px_0px_0px_#344C11] overflow-hidden flex flex-col md:flex-row">
          
          {/* Left Side: Editorial Section */}
          <div className="w-full md:w-1/2 bg-surface-container p-8 md:p-12 relative flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              {/* Decorative grid */}
              <div className="grid grid-cols-6 h-full border-r border-primary/20">
                <div className="border-r border-primary/20"></div>
                <div className="border-r border-primary/20"></div>
                <div className="border-r border-primary/20"></div>
                <div className="border-r border-primary/20"></div>
                <div className="border-r border-primary/20"></div>
              </div>
            </div>

            <div className="relative z-10">
              <span className="font-label-caps text-[10px] tracking-widest text-primary px-3 py-1 border-2 border-primary bg-primary-fixed mb-8 inline-block font-bold">
                EDITORIAL SERIES VOL. 01
              </span>
              <div className="relative mt-8">
                <div className="washi-tape absolute -top-4 -left-2 px-4 py-1 text-primary font-label-caps text-[10px] font-bold">
                  SUCCESS STORY
                </div>
                <h2 className="font-headline-lg text-headline-lg text-primary leading-tight mt-6 text-3xl font-extrabold">
                  Bridging the gap to your first tech job.
                </h2>
                <p className="font-headline-md text-headline-md italic text-on-surface-variant mt-6 opacity-80 text-lg leading-relaxed">
                  &quot;SkillBridge didn&apos;t just teach me how to code; it taught me how to lead in a global market.&quot;
                </p>
              </div>
            </div>

            <div className="mt-12 relative z-10">
              <div className="flex items-end gap-6">
                <div className="w-32 h-40 border-2 border-primary overflow-hidden shadow-[8px_8px_0px_0px_#67BD58] rounded-xl transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                  <img 
                    alt="Nigerian Professional" 
                    className="w-full h-full object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTsqe_mU8aD72JBlRt3LWb92jA-mLdxq5J8D8wk2Jd91kR1ViGu7vFGulJl6CsK6XM-L2mKN9UwjNhf2TJwOLbxFmcr0pfdaMtk3YiLbcYpDYcVIv5br28h70oMadDyNsdWcZuRSPQs8sGF0c5o5AGugDoWLJ2o8r3e6ZMEqlrs93_p6wW7BOEIKhPiJzxW--vDp28zbkHvSAGkoW2hg0_eoPx8eeJtL67-oY4AhA70TWqHhhCVuixcinCiOjMQrYdRTciH8GT-If1"
                  />
                </div>
                <div className="pb-4">
                  <p className="font-bold text-primary text-base">Adebayo O.</p>
                  <p className="text-xs text-on-surface-variant font-label-caps font-bold">SENIOR PRODUCT DESIGNER</p>
                  <p className="text-[10px] text-on-surface-variant mt-1">LAGOS, NIGERIA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Auth Form */}
          <div className="w-full md:w-1/2 p-8 md:p-12 bg-white flex flex-col justify-between">
            <div>
              {/* Toggle Switch */}
              <div className="flex justify-center mb-10">
                <div className="bg-surface-container-high p-1.5 rounded-full flex relative w-full max-w-[320px] border-2 border-primary-container paper-lift">
                  <button 
                    type="button"
                    className={`relative z-10 flex-1 py-3 text-center font-button-text text-xs transition-all font-bold ${
                      authMode === "login" ? "text-white" : "text-on-surface-variant"
                    }`} 
                    onClick={() => setAuthMode("login")}
                  >
                    Login
                  </button>
                  <button 
                    type="button"
                    className={`relative z-10 flex-1 py-3 text-center font-button-text text-xs transition-all font-bold ${
                      authMode === "signup" ? "text-white" : "text-on-surface-variant"
                    }`} 
                    onClick={() => setAuthMode("signup")}
                  >
                    Create Account
                  </button>
                  <div 
                    className="absolute top-1 bottom-1 w-[calc(50%-4px)] bg-primary rounded-full transition-all duration-300 transform" 
                    style={{
                      transform: authMode === "signup" ? "translateX(100%)" : "translateX(0)",
                      left: authMode === "signup" ? "-4px" : "4px"
                    }}
                  />
                </div>
              </div>

              <div>
                <h3 className="font-headline-md text-headline-md text-primary mb-8 font-extrabold text-2xl">
                  {authMode === "signup" ? "Start Your Journey" : "Welcome Back"}
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <AnimatePresence initial={false} mode="popLayout">
                    {authMode === "signup" && (
                      <motion.div
                        key="name"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <label className="font-label-caps text-[10px] tracking-wider font-bold text-on-surface-variant mb-1 block uppercase">
                          Full Name
                        </label>
                        <input 
                          className="w-full journal-input font-body-lg text-sm text-primary placeholder-outline-variant focus:outline-none" 
                          placeholder="Your Name" 
                          type="text"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          required={authMode === "signup"}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div>
                    <label className="font-label-caps text-[10px] tracking-wider font-bold text-on-surface-variant mb-1 block uppercase">
                      Email Address
                    </label>
                    <input 
                      className="w-full journal-input font-body-lg text-sm text-primary placeholder-outline-variant focus:outline-none" 
                      placeholder="email@skillbridge.org" 
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <label className="font-label-caps text-[10px] tracking-wider font-bold text-on-surface-variant mb-1 block uppercase">
                      Password
                    </label>
                    <input 
                      className="w-full journal-input font-body-lg text-sm text-primary placeholder-outline-variant focus:outline-none" 
                      placeholder="••••••••" 
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>

                  <div className="pt-4">
                    <motion.button 
                      className="w-full py-4 bg-primary text-white font-button-text text-sm flex items-center justify-center gap-2 shadow-[6px_6px_0px_0px_#112000] hover:shadow-[4px_4px_0px_0px_#112000] active:shadow-none transition-all rounded-xl" 
                      type="submit"
                      whileHover={{ y: -2, x: -2 }}
                      whileTap={{ y: 2, x: 2 }}
                    >
                      <span>
                        {authMode === "signup" ? "Join the Fellowship" : "Login to Dashboard"}
                      </span>
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </motion.button>
                  </div>
                </form>

                <div className="relative my-8 flex items-center">
                  <div className="flex-grow border-t border-outline-variant/60"></div>
                  <span className="px-4 font-label-caps text-[10px] tracking-wider font-bold text-on-surface-variant">
                    OR CONTINUE WITH
                  </span>
                  <div className="flex-grow border-t border-outline-variant/60"></div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <motion.button 
                    type="button"
                    className="flex items-center justify-center gap-2 py-3 border-2 border-primary-container bg-white shadow-[4px_4px_0px_0px_#344c11] hover:shadow-[3px_3px_0px_0px_#344c11] transition-all rounded-xl"
                    whileHover={{ y: -1, x: -1 }}
                    whileTap={{ y: 1, x: 1 }}
                  >
                    <span className="material-symbols-outlined text-base">google</span>
                    <span className="font-button-text text-xs">Google</span>
                  </motion.button>
                  <motion.button 
                    type="button"
                    className="flex items-center justify-center gap-2 py-3 border-2 border-primary-container bg-white shadow-[4px_4px_0px_0px_#344c11] hover:shadow-[3px_3px_0px_0px_#344c11] transition-all rounded-xl"
                    whileHover={{ y: -1, x: -1 }}
                    whileTap={{ y: 1, x: 1 }}
                  >
                    <span className="material-symbols-outlined text-base">work</span>
                    <span className="font-button-text text-xs">LinkedIn</span>
                  </motion.button>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-on-surface-variant text-[11px] leading-relaxed">
                By continuing, you agree to our &nbsp;
                <a className="underline font-bold text-primary" href="#">Terms of Service</a> 
                &nbsp; and &nbsp;
                <a className="underline font-bold text-primary" href="#">Privacy Policy</a>.
              </p>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
