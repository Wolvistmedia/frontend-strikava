"use server";

import { inquiryAPI } from '@/lib/api';

export async function submitContactForm(prevState: any, formData: FormData) {
  // 1. Extract data
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const program = formData.get("program") as string;
  const message = formData.get("message") as string;

  // 2. Validate data
  if (!name || !email || !message) {
    return { error: "Name, email, and message fields are required." };
  }
  
  if (!email.includes("@")) {
    return { error: "Please enter a valid email address." };
  }

  try {
    // 3. Send to Backend API via axios
    const inquiryData = {
      name,
      email: email || undefined,
      mobile: phone || undefined,
      type: "contact" as const,
    };

    const response = await inquiryAPI.create(inquiryData);

    // 4. Backend handles email sending and database storage
    // Return success response
    return { 
      success: true, 
      message: "Thank you! Your message has been sent successfully. Our team will contact you shortly.",
      data: response.data
    };
  } catch (error: any) {
    console.error("Error submitting inquiry:", error.response?.data || error.message);
    
    // Handle Backend validation or connection errors
    const errorMessage = error.response?.data?.message || "An unexpected error occurred. Please try again later.";
    return { error: errorMessage };
  }
}

