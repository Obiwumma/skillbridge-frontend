import apiClient from "./client";

export interface SkillGap {
  skill: string;
  confidence: number;
  marketDemand: number;
  priority: "HIGH" | "MEDIUM" | "LOW";
  reason: string;
}

export interface ResumeAnalysis {
  skills: string[];
  missingSkills: string[];
  experienceLevel: "JUNIOR" | "INTERMEDIATE" | "SENIOR";
  confidenceScore: number;
  employabilityScore: number;
  skillGaps: SkillGap[];
}

export interface StudentProfile {
  id: string;
  name: string;
  degree: string;
  university: string;
  xp: number;
  streak: number;
  employabilityScore: number;
  verifiedAchievements: string[];
  resumeAnalysis?: ResumeAnalysis;
}

export const profileService = {
  getProfile: async (userId: string) => {
    const res = await apiClient.get<StudentProfile>(`/profile/${userId}`);
    return res.data;
  },

  uploadResume: async (file: File) => {
    const form = new FormData();
    form.append("resume", file);
    const res = await apiClient.post<{ jobId: string }>("/profile/resume/upload", form, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return res.data;
  },

  getResumeAnalysis: async (userId: string) => {
    const res = await apiClient.get<ResumeAnalysis>(`/profile/${userId}/analysis`);
    return res.data;
  },
};
