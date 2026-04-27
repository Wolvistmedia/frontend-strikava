import axios from "axios";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000";

export const apiClient = axios.create({
  baseURL: BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

// API endpoints
export const inquiryAPI = {
  create: (data: { name: string; email?: string; mobile?: string; type: "contact" | "consultation" }) =>
    apiClient.post("/inquiry", data),
  
  list: () => apiClient.get("/inquiry"),
  
  getById: (id: string) => apiClient.get(`/inquiry/${id}`),
};

export default apiClient;
