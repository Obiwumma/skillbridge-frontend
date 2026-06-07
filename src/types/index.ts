// ─── User & Auth ────────────────────────────────────────────────────────────

export type UserRole = "STUDENT" | "RECRUITER" | "ADMIN";
export type ExperienceLevel = "JUNIOR" | "INTERMEDIATE" | "SENIOR";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  createdAt: string;
}

// ─── Student Profile ─────────────────────────────────────────────────────────

export interface StudentProfile {
  userId: string;
  degree: string;
  university: string;
  graduationYear: number;
  xp: number;
  streak: number;
  employabilityScore: number;
  verifiedSkills: string[];
  achievements: Achievement[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  xpReward: number;
  unlockedAt: string;
  icon: string;
}

// ─── Roadmap ─────────────────────────────────────────────────────────────────

export type ModuleStatus = "locked" | "available" | "in_progress" | "completed";

export interface RoadmapNode {
  id: string;
  title: string;
  description: string;
  skills: string[];
  prerequisites: string[];
  xpReward: number;
  status: ModuleStatus;
  position: { x: number; y: number };
}

export interface Roadmap {
  id: string;
  userId: string;
  title: string;
  targetRole: string;
  nodes: RoadmapNode[];
  currentNodeId: string;
  completionPercent: number;
  createdAt: string;
}

// ─── AI / Resume ─────────────────────────────────────────────────────────────

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
  experienceLevel: ExperienceLevel;
  confidenceScore: number;
  employabilityScore: number;
  skillGaps: SkillGap[];
}

// ─── Recruiter ───────────────────────────────────────────────────────────────

export interface RecruiterMatch {
  candidateId: string;
  candidateName: string;
  matchScore: number;
  roleId: string;
  roleTitle: string;
  company: string;
  location: string;
  verifiedSkills: string[];
  initiatedAt: string;
}

// ─── Workspace ───────────────────────────────────────────────────────────────

export interface ValidationResult {
  passed: boolean;
  score: number;
  feedback: string;
  architectureQuality: number;
  securityScore: number;
  maintainabilityScore: number;
  performanceScore: number;
  suggestions: string[];
}

// ─── WebSocket Events ─────────────────────────────────────────────────────────

export type WSEventType =
  | "VALIDATION_RESULT"
  | "AI_FEEDBACK_CHUNK"
  | "RECRUITER_MATCH"
  | "XP_UPDATE"
  | "MODULE_UNLOCKED"
  | "STREAK_UPDATE";

export interface WSEvent<T = unknown> {
  type: WSEventType;
  payload: T;
  timestamp: string;
}
