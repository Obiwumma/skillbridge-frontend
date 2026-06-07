import apiClient from "./client";

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
  degree: string;
  university: string;
}

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: "STUDENT" | "RECRUITER" | "ADMIN";
  xp: number;
  employabilityScore: number;
}

export const authService = {
  login: async (payload: LoginPayload) => {
    const res = await apiClient.post<{ user: AuthUser }>("/auth/login", payload);
    return res.data;
  },

  register: async (payload: RegisterPayload) => {
    const res = await apiClient.post<{ user: AuthUser }>("/auth/register", payload);
    return res.data;
  },

  logout: async () => {
    await apiClient.post("/auth/logout");
  },

  me: async () => {
    const res = await apiClient.get<{ user: AuthUser }>("/auth/me");
    return res.data.user;
  },

  refresh: async () => {
    await apiClient.post("/auth/refresh");
  },
};
