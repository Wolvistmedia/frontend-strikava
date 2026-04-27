"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { AnimatedButton } from "@/components/ui/AnimatedButton";
import { Mail, Phone, MapPin, CheckCircle2, AlertCircle } from "lucide-react";

type ContactState = {
  name: string;
  email: string;
  phone: string;
  program: string;
  message: string;
};

type AlertState = {
  type: "success" | "error";
  message: string;
};

export default function Contact() {
  const [formData, setFormData] = useState<ContactState>({
    name: "",
    email: "",
    phone: "",
    program: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alert, setAlert] = useState<AlertState | null>(null);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setAlert(null);

    try {
      const response = await fetch("https://strikava-backend.onrender.com/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          mobile: formData.phone,     
          course: formData.program,   
          message: formData.message,
          type: "contact",            
        })
      });

      const result = await response.json();

      if (!response.ok) {
        setAlert({ type: "error", message: result.error || "Submission failed." });
      } else {
        setAlert({ type: "success", message: result.message });
        setFormData({ name: "", email: "", phone: "", program: "", message: "" });
      }
    } catch (error) {
      setAlert({
        type: "error",
        message: "Unable to send the message right now. Please try again later.",
      });
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24 pb-20 relative min-h-screen">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-6">
            Talk to an <span className="text-gradient">Advisor</span>
          </h1>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Book a consultation to map your career gap and find the right roadmap for your next promotion.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          <div className="lg:w-1/3 space-y-6">
            <GlassCard delay={0.1} className="p-8">
              <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm text-foreground/50 uppercase tracking-wider mb-1">Email</h4>
                    <p className="text-white font-medium">info@strikava.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 text-accent mr-4">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm text-foreground/50 uppercase tracking-wider mb-1">Phone / WhatsApp</h4>
                    <a
                      href="https://wa.me/918383854378"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-medium hover:text-accent transition-colors"
                    >
                      +91 8383854378
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 text-blue-400 mr-4">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm text-foreground/50 uppercase tracking-wider mb-1">Location</h4>
                    <p className="text-white font-medium">Bengaluru, Karnataka, India</p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>

          <div className="lg:w-2/3">
            <GlassCard delay={0.2} className="p-8 md:p-10 relative overflow-hidden">
              <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>

              {alert?.type === "success" ? (
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-10 flex flex-col items-center justify-center p-6 text-center animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-green-500/45 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="text-green-500 w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Request Received!</h3>
                  <p className="text-white/80 font-bold text-base sm:text-xl md:text-xl lg:text-xl mb-8 max-w-md">
                    {alert.message}
                  </p>
                  <AnimatedButton
                    type="button"
                    onClick={() => setAlert(null)}
                    variant="outline"
                    className="bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-transform hover:scale-105 active:scale-95"
                  >
                    Send Another Message
                  </AnimatedButton>
                </div>
              ) : null}

              <form onSubmit={handleSubmit} className="space-y-6">
                {alert?.type === "error" ? (
                  <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-lg flex items-start">
                    <AlertCircle className="text-red-400 w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-red-200 text-sm">{alert.message}</p>
                  </div>
                ) : null}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground/80">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 text-black font-bold focus:outline-none focus:border-primary transition-colors disabled:opacity-50"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground/80">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 text-black font-bold focus:outline-none focus:border-primary transition-colors disabled:opacity-50"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-foreground/80">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 text-black font-bold focus:outline-none focus:border-primary transition-colors disabled:opacity-50"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="program" className="text-sm font-medium text-foreground/80">Program of Interest</label>
                    <select
                      id="program"
                      name="program"
                      value={formData.program}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 text-black font-bold focus:outline-none focus:border-primary transition-colors appearance-none disabled:opacity-50"
                    >
                      <option value="">Select a program</option>
                      <option value="cloud">Cloud Security Roadmap</option>
                      <option value="aws">AWS Certifications</option>
                      <option value="cyber">Ethical Hacking</option>
                      <option value="devops">DevOps Engineering</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground/80">Message / Career Goals *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    disabled={isSubmitting}
                    className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 text-black font-medium text-xl focus:outline-none focus:border-primary transition-colors resize-none disabled:opacity-50"
                    placeholder="Tell us about your current role and what you want to achieve..."
                  ></textarea>
                </div>

                <AnimatedButton
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 text-lg disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Submit Request"
                  )}
                </AnimatedButton>
              </form>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
}
