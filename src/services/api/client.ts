import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/api/v1";

export const apiClient = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // HTTP-only cookies per spec
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor - logging, auth headers
apiClient.interceptors.request.use(
  (config) => {
    // CSRF token injection (read from meta tag or cookie)
    const csrfToken = document.cookie
      .split("; ")
      .find((row) => row.startsWith("csrf="))
      ?.split("=")[1];
    if (csrfToken) config.headers["X-CSRF-Token"] = csrfToken;
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor - error normalisation + 401 refresh
apiClient.interceptors.response.use(
  (res) => res,
  async (error) => {
    const original = error.config;
    if (error.response?.status === 401 && !original._retry) {
      original._retry = true;
      try {
        await apiClient.post("/auth/refresh");
        return apiClient(original);
      } catch {
        // Redirect to login
        if (typeof window !== "undefined") window.location.href = "/login";
      }
    }
    return Promise.reject(normaliseError(error));
  }
);

function normaliseError(error: unknown) {
  if (axios.isAxiosError(error)) {
    return {
      message: error.response?.data?.message || error.message,
      status: error.response?.status,
      code: error.response?.data?.code,
    };
  }
  return { message: "An unexpected error occurred" };
}

export default apiClient;
