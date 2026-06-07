"use client";
import React, { useState, useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import MentorSidebar from "@/components/dashboard/MentorSidebar";

interface Message {
  sender: "student" | "mentor";
  text: string;
  time: string;
  washiColor?: string;
}

interface MenteeDetail {
  id: string;
  name: string;
  fit: string;
  avatar: string;
  initialMessages: Message[];
}

const MENTEES_DB: Record<string, MenteeDetail> = {
  "1": {
    id: "1",
    name: "Julian Vance",
    fit: "92% Fit · Systems Thinker",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDoXrgX3YZXkhb4HThUPHXCXDkrPYcbPuuROTI7-2QqJHEwUfs61wDbbPpJT5cWzFmXlrG00l4BsTt31omrHoBU7jZAgNTbgOmjsZu0K4a_NYmgXAIEHmRDwLIVBj6IDwS0cMRE7qSp1HW4PIZpAKH1CWMTE9iddbqHsXXyUQLAxYNv_RFHQzNmuVxf8kCnH-PPfabIUOcmjLHLwK_xCbGZy1P28p9BGyTHrz0sc7JcQWkjeaS7vYrh9ZuVMjjEqShPBTplU1q3gLm-",
    initialMessages: [
      { sender: "student", text: "Hey Mentor, I'm working on Systems Thinking. I'm wondering if you have any good book recommendations for understanding feedback loops?", time: "10:42 AM" },
      { sender: "mentor", text: "Hi Julian! 'Thinking in Systems' by Donella Meadows is the absolute gold standard. I highly recommend starting there.", time: "10:45 AM" },
    ],
  },
  "2": {
    id: "2",
    name: "Elena Rodriguez",
    fit: "89% Fit · UX/UI Designer",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUc1MIH2cxIuBfnPCgY5qE2YMswZ8rJii8fIYPWdR5nW58fLEOoEvOD01RyJ6JbWje1__z8W3HkDPdyqOmqMy3I-KIbOcO6e-4kRWILe1Wvj0PYh06mfrLR_qEPcfga3oNSs0Ri7lIAN3qO3MX6ql-jDbM3E_uvDxGJjQ6NICuo07JPnnBtWZ5MBVISmjDyEaSj22QE6veIu-JJoV9Ek3mXocfdQ79ErSbQwAOtJf2yAXKWFE1ntpA0mGLUbcrRCKJVon-gTn6HehV",
    initialMessages: [
      { sender: "student", text: "Hello! I'm mapping out the branding guidelines for the startup cohort. Should we prioritize typography or accessibility first?", time: "11:02 AM" },
      { sender: "mentor", text: "Elena, always design with accessibility in mind from day one! It guides typography choices naturally.", time: "11:10 AM" },
    ],
  },
  "3": {
    id: "3",
    name: "Liam Chen",
    fit: "94% Fit · Junior Systems Architect",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDAGVFTlS3VG4dQG_YJMXTQ9dnPe397e54-ZpuEB0Xm3hL8uXpUJnFjWh-0NgP1-QpnpZCufsPKB5DryJCbV2OSgD1oRGtXI480MHUoQOPkMANsCWXs8gGYSCha0LERe8LWjHvt-tuADi_UdtqlXn3xP8zR1ejSmuHXHnPOUMpKsgN160PxPhA5gKDffGBKQM-DAh70rVxvJDzhlVoWHiApMr5zw_qBuDyI017_ReUu0pCMmEsLdQbCT5oNoBhOvLDEUQSy13abhiDa",
    initialMessages: [
      { sender: "student", text: "Hey Mentor, I've been reviewing the architecture for the microservices project. I'm struggling a bit with the event-driven communication between the Auth service and the User Profile service. Should I use a message broker like RabbitMQ or just direct REST calls for this specific use case?", time: "10:42 AM" },
      { sender: "mentor", text: "Great question, Liam. For scalability and decoupling, a message broker is definitely the \"architectural\" way to go. However, for this specific 94% match profile you're aiming for, they focus on resilience. \n\nLet's use a simple Redis Pub/Sub for now to keep the overhead low but maintain the event-driven pattern.", time: "10:45 AM" },
      { sender: "student", text: "That makes sense. I've sketched out a small code snippet of the emitter logic. Can you take a look at the retry logic I implemented? I want to make sure it handles network partitions gracefully without losing messages.", time: "11:02 AM" },
      { sender: "mentor", text: "Send it over! If the retry logic is solid, I think we're ready for that internal referral. Your progress on systems thinking has been impressive this week.", time: "11:10 AM", washiColor: "#fd8f85" },
    ],
  },
  "4": {
    id: "4",
    name: "Aisha Bwan",
    fit: "88% Fit · Global Logistics",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAk5M3s0jwmkynOeflgYP0TUnvJqRK6GbNM-1CScNrHNNXzGzHALmCaL9iVcr8x4LkwWp-g1YFCChOu_tPTOQUCiQydycxcKhw4MNL6sXc5XPWp4Jty3b5PiLFaU4BwyWgXwL2_lb2CuLQzdNV8_jWC62joz0vcgcf8chowFagBHYCNmuWV1CsvDlJH0K3nqt8GxBbyOyZy-ij-7f61_e7M068A1EnGY4LbhzHTt7wprVGVjWbryfRbNljSCEjdRkkv_96TD4CgExHc",
    initialMessages: [
      { sender: "student", text: "Mentor, I'm working on Module 4. What are the key bottlenecks to watch for in shipping operations?", time: "09:15 AM" },
      { sender: "mentor", text: "Hi Aisha. Customs clearing and port congestion are the big two. Focus on buffer inventory strategies for your case study.", time: "09:30 AM" },
    ],
  },
  "5": {
    id: "5",
    name: "Sam Walters",
    fit: "95% Fit · Urban Planner",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJ0H58j2ELJiD7agMdfI_epL2h2olgjJyCk1-O445du-WCWH6x5BgPBPkEKaXpRmW-6EnxrX3uUFCen3imjNTnPclORheYQBNCPdoQROKLHkyoLvZLRvU1C-3fzfg0MK0QIarhLZO6__HKUl7xMHKTkDxzB8bjFAVCno382Khv5S1L5AJJG0_jz9lhHJu6qv4XRdqr8EIklcSlCmimVNyKKEyxf_6oHCZd-kEQqK0gX2anpWFvKzMFZrmNMlt60LsViHg4Kk9ogOqR",
    initialMessages: [
      { sender: "student", text: "Mentor, I've finalized the thesis outline for Urban Resilience. Do you think I should focus on water scarcity or energy grid failures?", time: "10:20 AM" },
      { sender: "mentor", text: "Both are critical, Sam, but water scarcity has more direct alignment with the municipal project you want to join. Let's go with that.", time: "10:40 AM" },
    ],
  },
};

export default function MentorChatPage() {
  const { id } = useParams();
  const menteeId = (Array.isArray(id) ? id[0] : id) || "3";
  const mentee = MENTEES_DB[menteeId] || MENTEES_DB["3"];

  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState("");
  const chatFeedRef = useRef<HTMLElement>(null);

  // Initialize chat history
  useEffect(() => {
    setMessages(mentee.initialMessages);
  }, [menteeId]);

  // Auto-scroll chat feed
  useEffect(() => {
    if (chatFeedRef.current) {
      chatFeedRef.current.scrollTop = chatFeedRef.current.scrollHeight;
    }
  }, [messages]);

  // Send message handler
  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || inputText;
    if (!text.trim()) return;

    const newMsg: Message = {
      sender: "mentor",
      text: text,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      washiColor: textToSend ? "#fd8f85" : undefined,
    };

    setMessages((prev) => [...prev, newMsg]);
    if (!textToSend) setInputText("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen flex bg-background relative overflow-hidden font-sans">
      {/* Fixed Left Sidebar */}
      <MentorSidebar />

      {/* Main Content */}
      <main className="ml-72 flex-grow flex flex-col h-screen overflow-hidden relative z-10">
        {/* Top App Bar */}
        <header className="bg-background/80 backdrop-blur-md sticky top-0 border-b-2 border-[#1F3500] flex justify-between items-center w-full px-10 py-4 z-40">
          <div className="flex items-center gap-4">
            <div className="relative">
              <img
                alt={mentee.name}
                className="w-12 h-12 rounded-full border-2 border-[#1F3500] object-cover"
                src={mentee.avatar}
              />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#1F3500] border-2 border-[#FAF9F3] rounded-full"></div>
            </div>
            <div>
              <h2 className="font-headline-md text-[#1F3500] text-xl leading-tight font-black">
                {mentee.name}
              </h2>
              <span className="bg-[#D4EAB8] text-[#3A4C27] text-[10px] font-bold font-label-caps px-2 py-0.5 border border-[#1F3500]/20 rounded shadow-sm inline-block mt-0.5">
                {mentee.fit}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden lg:flex items-center gap-2 text-[#51643D] font-bold font-label-caps text-xs">
              <span
                className="material-symbols-outlined text-[#1F3500]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                local_fire_department
              </span>
              <span>12 Day Streak</span>
            </div>
            <div className="flex gap-4">
              <button className="material-symbols-outlined text-[#1F3500] hover:text-[#9B433C] transition-colors active:scale-95">
                notifications
              </button>
              <button className="material-symbols-outlined text-[#1F3500] hover:text-[#9B433C] transition-colors active:scale-95">
                account_circle
              </button>
            </div>
          </div>
        </header>

        {/* Chat Feed Area */}
        <section
          ref={chatFeedRef}
          className="flex-1 overflow-y-auto px-10 py-8 flex flex-col gap-8 pb-36 custom-scrollbar bg-[#FAF9F3] relative"
        >
          {/* Date Divider */}
          <div className="flex items-center justify-center gap-4 opacity-40 select-none py-2">
            <div className="h-[1px] flex-1 bg-[#1F3500]"></div>
            <span className="font-label-caps text-[9px] uppercase tracking-widest text-[#1F3500] font-bold">
              October 24th, 2024
            </span>
            <div className="h-[1px] flex-1 bg-[#1F3500]"></div>
          </div>

          {/* Render Chat Messages */}
          {messages.map((msg, idx) => {
            if (msg.sender === "student") {
              return (
                <div
                  key={idx}
                  className="flex flex-col items-start max-w-2xl w-full select-text"
                >
                  <div className="chat-journal-entry relative">
                    {/* Retro Pin Accent */}
                    <div className="absolute -top-4 -left-2.5 transform -rotate-12 select-none pointer-events-none">
                      <img
                        alt="pin"
                        className="w-7 h-7"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoOpTofB_Ekxl9ApHqLuN2u30lBM91JUHhYvgfSOuxON4y2KFD_dQmc095f8TwdTwDPGRrVmh_LtZnNRQEsX9Ls92kq0CwpTT3sj3ebfqvdS3BmSstYMyrqwZqhZNLURi-ghClAT1OybkbkoL9jpAt-MPw2FjkrL3N7muDRGyHyAad9XICDFt1KYtuk4GIHyDAOx-iY50JZC3NbU9maV9tN2C7TGFTWlqHadQweW9TIMm3JqeLnLxk_hQWfuBZul6WLmD3h8MCin2t"
                      />
                    </div>
                    <p className="font-body-md text-[#1B1C19]">{msg.text}</p>
                    <div className="mt-4 flex justify-between items-center opacity-65">
                      <span className="text-[9px] font-label-caps font-bold">{msg.time}</span>
                      <span className="material-symbols-outlined text-xs">done_all</span>
                    </div>
                  </div>
                </div>
              );
            } else {
              return (
                <div
                  key={idx}
                  className="flex flex-col items-end max-w-2xl w-full self-end select-text"
                >
                  <div className="relative bg-[#1F3500]/10 border border-[#1F3500] p-5 shadow-[2px_2px_0px_0px_rgba(37,54,20,1)] max-w-md">
                    {/* Event-driven Washi Tape ribbon */}
                    <div
                      className="absolute -top-2.5 -right-3 chat-washi-tape"
                      style={{ background: msg.washiColor || "#F6BE39" }}
                    ></div>
                    <p className="font-body-md text-[#1F3500] font-medium whitespace-pre-line">
                      {msg.text}
                    </p>
                    <div className="mt-4 text-right opacity-65">
                      <span className="text-[9px] font-label-caps font-bold text-[#1F3500]">
                        {msg.time}
                      </span>
                    </div>
                  </div>
                </div>
              );
            }
          })}

          {/* Leaf Silhouette Background Illustration */}
          <div className="absolute right-8 bottom-36 opacity-[0.04] text-[#253614] pointer-events-none select-none z-0">
            <svg
              fill="none"
              height="300"
              viewBox="0 0 200 300"
              width="200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 280C100 280 40 200 40 120C40 60 80 20 100 20C120 20 160 60 160 120C160 200 100 280 100 280Z"
                stroke="#253614"
                strokeWidth="2"
              ></path>
              <path d="M100 20V280" stroke="#253614" strokeWidth="2"></path>
              <path d="M100 80L140 60" stroke="#253614" strokeWidth="2"></path>
              <path d="M100 140L60 120" stroke="#253614" strokeWidth="2"></path>
              <path d="M100 200L150 170" stroke="#253614" strokeWidth="2"></path>
            </svg>
          </div>
        </section>

        {/* Floating Action Drawer Footer */}
        <footer className="fixed bottom-8 left-1/2 -translate-x-1/2 md:left-[calc(50%+144px)] flex items-center justify-center w-full max-w-3xl px-6 pointer-events-none z-30">
          <div className="bg-[#FAF9F3] border-2 border-[#1F3500] p-4 shadow-[6px_6px_0px_0px_rgba(37,54,20,1)] flex flex-col gap-4 pointer-events-auto w-full">
            {/* Input Row */}
            <div className="flex-1 flex items-center gap-3 px-3 py-1.5 border-b-2 border-[#1F3500] bg-white">
              <span className="material-symbols-outlined text-[#1F3500]/60">edit_note</span>
              <input
                className="bg-transparent border-none focus:ring-0 text-sm w-full placeholder-[#1F3500]/40 font-body-md text-[#1F3500] outline-none"
                placeholder="Type a message..."
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={handleKeyPress}
              />
              <button
                onClick={() => handleSendMessage()}
                className="material-symbols-outlined text-[#1F3500] hover:text-[#9B433C] active:scale-95 transition-transform"
              >
                send
              </button>
            </div>

            {/* Quick Actions Row */}
            <div className="flex flex-wrap items-center justify-end gap-3.5">
              <button
                onClick={() =>
                  handleSendMessage(
                    "Here is my Calendly link to schedule our next sync session: calendly.com/marcus-thorne/mentor-session"
                  )
                }
                className="bg-[#E3E3DD] text-[#44483E] font-bold border border-[#3B4D28]/30 font-label-caps px-4 py-2.5 paper-lift text-[9px] uppercase flex items-center gap-2 whitespace-nowrap"
              >
                <span className="material-symbols-outlined text-sm">calendar_today</span>
                Send Calendly
              </button>
              <button
                onClick={() =>
                  handleSendMessage(
                    `// Redis Pub/Sub Connection\nconst redis = require('redis');\nconst subscriber = redis.createClient();\nsubscriber.subscribe('auth-events');`
                  )
                }
                className="bg-[#E3E3DD] text-[#44483E] font-bold border border-[#3B4D28]/30 font-label-caps px-4 py-2.5 paper-lift text-[9px] uppercase flex items-center gap-2 whitespace-nowrap"
              >
                <span className="material-symbols-outlined text-sm">code</span>
                Code Snippet
              </button>
              <button
                onClick={() =>
                  handleSendMessage(
                    "I've reviewed your event retry configurations and they look excellent. I've initiated the internal referral dossier to the hiring team at OPay! 🎉"
                  )
                }
                className="bg-[#9B433C] text-white font-bold font-label-caps px-5 py-2.5 paper-lift text-[9px] uppercase flex items-center gap-2 whitespace-nowrap border-2 border-[#1F3500]"
              >
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                  verified
                </span>
                Ready for Referral
              </button>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
