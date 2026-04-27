"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Are these programs suitable for beginners?",
      answer: "While some of our foundation programs are suitable for beginners, our core focus is on working professionals looking to upskill. We recommend having basic IT knowledge before enrolling in our intermediate and advanced tracks."
    },
    {
      question: "How are the hands-on labs conducted?",
      answer: "Our labs are scenario-driven and based on real-world enterprise environments. You will get access to live cloud environments and security tools to practice your skills under mentor guidance."
    },
    {
      question: "Do you guarantee job placements?",
      answer: "Training guidance, interview support, and learning outcomes may vary by learner background, effort, market conditions, and execution; no job placement or salary outcome is guaranteed unless explicitly committed in writing. However, we provide extensive interview prep and resume building support."
    },
    {
      question: "Can I switch batches if my schedule changes?",
      answer: "Yes, we offer flexible weekday and weekend options. If your professional schedule changes, you can coordinate with your mentor to switch to an upcoming batch that better suits your timing."
    },
    {
      question: "Do you provide certification exam vouchers?",
      answer: "Some of our premium bootcamps include certification exam vouchers. Please check the specific program details or talk to an advisor to confirm what is included in your chosen roadmap."
    }
  ];

  return (
    <div className="pt-24 pb-20 relative min-h-screen">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-6">Frequently Asked <span className="text-gradient">Questions</span></h1>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Got questions? We&#39;ve got answers. If you need more details, feel free to talk to an advisor.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <GlassCard 
              key={index} 
              delay={index * 0.1}
              className="p-0 overflow-hidden cursor-pointer"
              hoverEffect={false}
            >
              <div 
                className="p-6 flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="text-primary" />
                </motion.div>
              </div>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-foreground/70 border-t border-white/5 mt-2 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
}
