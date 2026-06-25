import { API_BASE_URL } from "./constants";

export interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export interface QuotePayload {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  industry: string;
  projectType: string;
  budgetRange: string;
  description: string;
}

interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data: T;
}

async function postJson<T>(endpoint: string, data: T) {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const body = (await response.json().catch(() => ({}))) as ApiResponse;

  if (!response.ok || !body.success) {
    throw new Error(body.message ?? "Request failed. Please try again.");
  }

  return body;
}

export function submitContact(data: ContactPayload) {
  return postJson("/contact", data);
}

export function submitQuote(data: QuotePayload) {
  return postJson("/quotes", data);
}
