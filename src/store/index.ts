import { create } from "zustand";
import type { AuthUser } from "@/services/api/auth.service";

interface UserStore {
  user: AuthUser | null;
  isAuthenticated: boolean;
  xp: number;
  employabilityScore: number;

  setUser: (user: AuthUser) => void;
  clearUser: () => void;
  updateXP: (xp: number) => void;
  updateScore: (score: number) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  isAuthenticated: false,
  xp: 0,
  employabilityScore: 0,

  setUser: (user) =>
    set({
      user,
      isAuthenticated: true,
      xp: user.xp,
      employabilityScore: user.employabilityScore,
    }),

  clearUser: () =>
    set({ user: null, isAuthenticated: false, xp: 0, employabilityScore: 0 }),

  updateXP: (xp) => set({ xp }),
  updateScore: (score) => set({ employabilityScore: score }),
}));

// Roadmap progression state
interface RoadmapStore {
  currentModuleId: number;
  completedModules: number[];
  activeRoadmapId: string | null;

  setCurrentModule: (id: number) => void;
  markModuleComplete: (id: number) => void;
  setRoadmap: (id: string) => void;
}

export const useRoadmapStore = create<RoadmapStore>((set) => ({
  currentModuleId: 5,
  completedModules: [1, 2, 3, 4],
  activeRoadmapId: null,

  setCurrentModule: (id) => set({ currentModuleId: id }),
  markModuleComplete: (id) =>
    set((state) => ({
      completedModules: [...state.completedModules, id],
    })),
  setRoadmap: (id) => set({ activeRoadmapId: id }),
}));

// Realtime notification state
interface NotificationStore {
  notifications: Notification[];
  unreadCount: number;
  addNotification: (n: Notification) => void;
  markAllRead: () => void;
}

interface Notification {
  id: string;
  type: "MATCH" | "ACHIEVEMENT" | "VALIDATION" | "SYSTEM";
  title: string;
  body: string;
  timestamp: Date;
  read: boolean;
}

export const useNotificationStore = create<NotificationStore>((set) => ({
  notifications: [],
  unreadCount: 0,

  addNotification: (n) =>
    set((state) => ({
      notifications: [n, ...state.notifications].slice(0, 50),
      unreadCount: state.unreadCount + 1,
    })),

  markAllRead: () =>
    set((state) => ({
      notifications: state.notifications.map((n) => ({ ...n, read: true })),
      unreadCount: 0,
    })),
}));
