import { GlassCard } from "@/components/ui/GlassCard";
import { CheckCircle2, Target  } from "lucide-react";
import { AnimatedButton } from "@/components/ui/AnimatedButton";

export default function About() {
  return (
    <div className="pt-20 sm:pt-24 pb-16 sm:pb-20 relative overflow-x-hidden">

      
      <div className="absolute top-20 left-10 w-[300px] sm:w-[400px] md:w-[600px] h-[300px] sm:h-[400px] md:h-[600px] bg-primary/10 blur-[120px] pointer-events-none rounded-full" />
      
     
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6">
              About <span className="text-gradient">Strikava</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-foreground/80">
              Enterprise IT training company helping professionals build cloud and DevOps careers.
            </p>
          </div>

          <GlassCard delay={0.1} className="mb-12 sm:mb-16 p-6 sm:p-8 md:p-12 w-full overflow-hidden">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6">
              Built for Professionals Who Need Real Technical Depth
            </h2>

            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-foreground/80 leading-relaxed">
              <p>
                Strikava was built around a simple idea: technical training should create real implementation confidence, not just course completion.
              </p>
              <p>
                Our programs combine mentor-led delivery, hands-on practice, and role-aligned learning plans so professionals and teams can grow with clarity.
              </p>
            </div>
            
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-8 sm:mt-10 mb-6">
              What Defines Our Approach
            </h3>

            <ul className="space-y-3 sm:space-y-4">
              {[
                "Role-based learning paths instead of generic course flow",
                "Hands-on labs and applied implementation practice",
                "Mentor guidance focused on real execution challenges",
                "Support for certification, interviews, and business outcomes"
              ].map((item, i) => (
                <li key={i} className="flex items-start sm:items-center text-sm sm:text-base text-foreground/80 bg-white/5 p-3 sm:p-4 rounded-xl border border-white/5">
                  <CheckCircle2 className="text-primary mr-3 sm:mr-4 w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-1 sm:mt-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </GlassCard>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
            {["Practical","Role-Aligned","Flexible"].map((title, i) => (
              <GlassCard key={i} delay={0.2 + i * 0.1} className="p-5 sm:p-6 text-center w-full overflow-hidden">
                <h3 className="text-lg sm:text-xl font-bold text-primary mb-2 sm:mb-3">{title}</h3>
                <p className="text-sm sm:text-base text-foreground/70">
                  {title === "Practical" && "Implementation-first learning model"}
                  {title === "Role-Aligned" && "Tracks mapped to real job outcomes"}
                  {title === "Flexible" && "Built for individuals and teams"}
                </p>
              </GlassCard>
            ))}
          </div>

          {/* Section */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 border-b border-white/10 pb-4">
              Training Designed Around Capability, Not Just Content
            </h2>

            <p className="text-base sm:text-lg text-foreground/80 leading-relaxed mb-8">
              We focus on helping learners and delivery teams build confidence in the work they are expected to perform...
            </p>

            <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
              {["Recognizing the Gap","Building a Better Format","Expanding With Purpose"].map((t,i)=>(
                <GlassCard key={i} delay={0.1+i*0.1} className="p-5 sm:p-6 w-full overflow-hidden">
                  <h4 className="font-bold text-white mb-2 text-sm sm:text-base">{t}</h4>
                  <p className="text-xs sm:text-sm text-foreground/70">
                    Content stays same...
                  </p>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* Principles */}
          <div className="mb-12 sm:mb-16 space-y-4 sm:space-y-6">
            {["Clarity","Depth","Relevance","Support"].map((p,i)=>(
              <GlassCard key={i} className="p-5 sm:p-6 border-l-4 border-l-primary w-full overflow-hidden">
                <h4 className="text-lg sm:text-xl font-bold text-white mb-2">{p}</h4>
                <p className="text-sm sm:text-base text-foreground/70">Description stays same...</p>
              </GlassCard>
            ))}
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-16">
            {["Assess","Design","Deliver","Validate"].map((step,i)=>(
              <div key={i} className="flex bg-white/5 p-4 sm:p-6 rounded-2xl border border-white/10 w-full overflow-hidden">
                <div className="mr-3 sm:mr-4 text-primary">
                  <Target className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm sm:text-base mb-1">{step}</h4>
                  <p className="text-xs sm:text-sm text-foreground/70">Content same...</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <GlassCard delay={0.5} className="bg-primary/5 border-primary/20 p-6 sm:p-10 text-center w-full overflow-hidden">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4">
              Need a Trusted Upskilling Partner?
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-foreground/80 mb-8">
              Connect with us for individual learning guidance...
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 w-full">
              <AnimatedButton href="/contact" variant="primary" className="w-full sm:w-auto">
                Talk to Advisor
              </AnimatedButton>
              <AnimatedButton href="/contact" variant="outline" className="w-full sm:w-auto">
                Corporate Solutions
              </AnimatedButton>
            </div>
          </GlassCard>

        </div>
      </div>
    </div>
  );
}