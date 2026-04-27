import { GlassCard } from "@/components/ui/GlassCard";
import { Users, Star, Award } from "lucide-react";
import { AnimatedButton } from "@/components/ui/AnimatedButton";

export default function WhyChooseUs() {
  const stats = [
    { value: "12,000+", label: "Learners trained", icon: <Users className="w-8 h-8 text-primary" /> },
    { value: "4.8/5", label: "Average learner rating", icon: <Star className="w-8 h-8 text-accent" /> },
    { value: "300+", label: "Career transitions supported", icon: <Award className="w-8 h-8 text-green-400" /> }
  ];

  const features = [
    { title: "Skill Gap Audit", desc: "Current role analysis, target role benchmark, and exact gaps to close." },
    { title: "90-Day Plan", desc: "Weekly execution plan with milestones, assignments, and review checkpoints." },
    { title: "Promotion Evidence", desc: "Portfolio outputs, project artifacts, and certification mapping that managers value." },
    { title: "Live Problem Solving", desc: "Complex topics explained through guided implementation, not static slides." },
    { title: "Doubt Clinics", desc: "Dedicated Q and A sessions to unblock project and certification preparation." },
    { title: "Performance Feedback", desc: "Session-level feedback loops to improve speed, accuracy, and confidence." },
    { title: "Resume Positioning", desc: "Role-focused resume structure with measurable impact statements." },
    { title: "Mock Interviews", desc: "Technical and managerial simulations with scoring and targeted improvements." },
    { title: "Answer Frameworks", desc: "High-confidence templates for architecture, troubleshooting, and behavioral rounds." },
    { title: "Weekday Batches", desc: "Evening options for professionals balancing project delivery." },
    { title: "Weekend Intensives", desc: "Deep-dive sessions for focused learning without weekday disruption." },
    { title: "Corporate Cohorts", desc: "Team-specific training calendars aligned with business timelines." },
  ];

  return (
    <div className="pt-24 pb-20 relative">
      <div className="container mx-auto px-6 relative z-10">

        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h1 className="text-5xl font-extrabold mb-6">Why <span className="text-gradient">Choose Us</span></h1>
          <p className="text-xl text-foreground/80 leading-relaxed">
            Our model combines role-based strategy, live mentorship, practical enterprise labs, and interview readiness so your learning converts into real career growth.
          </p>
        </div>

        {/* Stats Section */}
        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {stats.map((stat, idx) => (
            <GlassCard
              key={idx}
              delay={idx * 0.1}
              className="p-6 sm:p-8 flex flex-col items-center text-center w-full overflow-hidden"
            >
              {/* ✅ Icon */}
              <div className="mb-3  sm:mb-4 p-5 sm:p-4 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                <div className="w-6 h-6 sm:w-8 sm:h-8">
                  {stat.icon}
                </div>
              </div>

              {/* ✅ Value */}
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">
                {stat.value}
              </h3>

              {/* ✅ Label */}
              <p className="text-xs sm:text-sm text-foreground/70 uppercase tracking-wider sm:tracking-widest font-semibold">
                {stat.label}
              </p>
            </GlassCard>
          ))}
        </div>

        {/* Features Grid */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-white mb-12">The Strikava Advantage</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <GlassCard key={idx} delay={idx * 0.05} className="p-6 border-l-4 border-l-primary hover:border-l-accent transition-colors">
                <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
                <p className="text-sm text-foreground/70 leading-relaxed">{feature.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>

        <GlassCard delay={0.5} className="bg-primary/5 border-primary/20 p-10 text-center max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-white mb-4">Ready to Plan Your Next Role Upgrade?</h3>
          <p className="text-lg text-foreground/80 mb-8">
            Get a personalized roadmap and timeline based on your current skills and target role.
          </p>
          <AnimatedButton href="/contact" variant="primary">
            Get Your Roadmap
          </AnimatedButton>
        </GlassCard>

      </div>
    </div>
  );
}
