import { ParticleBackground } from "@/components/ui/ParticleBackground";
import { AnimatedButton } from "@/components/ui/AnimatedButton";
import { GlassCard } from "@/components/ui/GlassCard";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden ">
        <ParticleBackground />

        <div className="container relative z-10 mx-auto px-6 text-center">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-md text-primary font-medium text-sm animate-pulse">
            Enterprise IT Training Company
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 max-w-4xl mx-auto leading-tight">
            Built for Professionals Who Need <br className="hidden md:block" />
            <span className="text-gradient">Real Technical Depth</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            We deliver industry-focused corporate training programs in Cybersecurity, Cloud, DevOps, and Data Engineering to help teams upskill and perform better.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <AnimatedButton href="/programs" variant="primary">
              Explore Training Programs
            </AnimatedButton>
            <AnimatedButton href="/contact" variant="outline">
              Talk to Advisor
            </AnimatedButton>
          </div>
        </div>

      </section>

      {/* Stats Section */}
      <section className="py-20 relative z-20 -mt-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8  items-center ">
            <GlassCard delay={0.1} className=" p-10 flex flex-col items-center justify-center">
             
              <h3 className="text-5xl font-bold text-white mb-2">34+</h3>
              <p className="text-foreground/70 uppercase tracking-widest text-sm font-semibold">Students</p>
            </GlassCard>

            <GlassCard delay={0.2} className="text-center p-10 flex flex-col items-center justify-center">
              
              <h3 className="text-5xl font-bold text-white mb-2">99%</h3>
              <p className="text-foreground/70 uppercase tracking-widest text-sm font-semibold">Rating</p>
            </GlassCard>

            <GlassCard delay={0.3} className="text-center p-10 flex flex-col items-center justify-center">
          
              <h3 className="text-5xl font-bold text-white mb-2">184+</h3>
              <p className="text-foreground/70 uppercase tracking-widest text-sm font-semibold">Hours Delivered</p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* About/Approach Section */}
      <section className="py-24 bg-secondary/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                What Defines Our Approach
              </h2>
              <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                Strikava was built around a simple idea: technical training should create real implementation confidence, not just course completion. Our programs combine mentor-led delivery, hands-on practice, and role-aligned learning plans so professionals and teams can grow with clarity.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Role-based learning",
                  "Hands-on labs experience",
                  "Mentor guidance",
                  "Certification & interviews support"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center text-lg text-foreground/80">
                    <CheckCircle2 className="text-primary mr-3 w-6 h-6 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <AnimatedButton href="/about" variant="primary">
                Read More About Us
              </AnimatedButton>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl rounded-full" />
              <GlassCard className="p-8 border border-white/10 relative z-10 bg-black/40 backdrop-blur-xl">
                <div className="space-y-6">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary font-bold">1</div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Assessment</h4>
                      <p className="text-sm text-foreground/70">Role-gap mapping & Transition feasibility review</p>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 text-accent font-bold">2</div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Custom Plan</h4>
                      <p className="text-sm text-foreground/70">Milestone-based roadmap & Weekly learning cadence</p>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 text-blue-400 font-bold">3</div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Hands-on Labs</h4>
                      <p className="text-sm text-foreground/70">Scenario-driven labs & Portfolio-ready project work</p>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 text-green-400 font-bold">4</div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Interview Ready</h4>
                      <p className="text-sm text-foreground/70">Mock interview practice & Final conversion strategy</p>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Programs CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Portal Depth Category Navigation</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-10">
            From skill-gap discovery to interview readiness, every stage is designed to move learners toward measurable delivery capability.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 text-left">
            {[
              { title: "Master Category Hub", desc: "Entry point with all technology pillars and role families." },
              { title: "Domain Category Pages", desc: "Dedicated portals like Cloud and Cybersecurity." },
              { title: "Vendor/Track Depth", desc: "Deep pages like AWS depth with Foundation & Pro tracks." },
              { title: "Program Detail Pages", desc: "Program final depth pages with curriculum & enrollment." }
            ].map((item, i) => (
              <GlassCard key={i} delay={0.1 * i} className="p-6">
                <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                <p className="text-sm text-foreground/70 mb-4">{item.desc}</p>
                <Link href="/programs" className="text-primary text-sm font-semibold flex items-center hover:underline">
                  Read More <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </GlassCard>
            ))}
          </div>
          <AnimatedButton href="/programs" variant="secondary" className="px-10 py-5 text-lg">
            Explore Full Catalog
          </AnimatedButton>
        </div>
      </section>
      {/* Success Stories on Home */}
      <section className="py-24 bg-secondary/30 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl text-foreground/70">From skill-gap discovery to interview readiness.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <GlassCard delay={0.1} className="p-8">
              <h3 className="text-xl font-bold text-white mb-2">Support Engineer to AWS Architect</h3>
              <p className="text-primary font-semibold mb-4">Rohit S. - Cloud Architect | Bengaluru</p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-2 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-foreground/80">AWS</span>
                <span className="px-2 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-foreground/80">Architecture</span>
                <span className="px-2 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-foreground/80">Migration</span>
              </div>
              <div className="pt-4 border-t border-white/10">
                <p className="text-sm text-foreground/60 mb-1">Before: L1 Support, 4.8 LPA</p>
                <p className="text-sm text-green-400 font-semibold">After: Cloud Architect, 11.2 LPA</p>
              </div>
              <Link href="/programs/aws-solutions-architect-associate" className="mt-6 inline-flex items-center text-primary text-sm font-semibold hover:underline">
                Read More <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </GlassCard>

            <GlassCard delay={0.2} className="p-8">
              <h3 className="text-xl font-bold text-white mb-2">SysAdmin to DevOps Engineer</h3>
              <p className="text-primary font-semibold mb-4">Ankit R. - DevOps Engineer | Pune</p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-2 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-foreground/80">CI/CD</span>
                <span className="px-2 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-foreground/80">Kubernetes</span>
                <span className="px-2 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-foreground/80">Automation</span>
              </div>
              <div className="pt-4 border-t border-white/10">
                <p className="text-sm text-foreground/60 mb-1">Before: Infra Ops, 5.4 LPA</p>
                <p className="text-sm text-green-400 font-semibold">After: DevOps Engineer, 12.5 LPA</p>
              </div>
              <Link href="/programs/aws-devops-engineer-professional" className="mt-6 inline-flex items-center text-primary text-sm font-semibold hover:underline">
                Read More <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </GlassCard>

            <GlassCard delay={0.3} className="p-8">
              <h3 className="text-xl font-bold text-white mb-2">IT Executive to Azure Admin</h3>
              <p className="text-primary font-semibold mb-4">Sneha M. - Azure Administrator | Noida</p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-2 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-foreground/80">Azure</span>
                <span className="px-2 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-foreground/80">IAM</span>
                <span className="px-2 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-foreground/80">Governance</span>
              </div>
              <div className="pt-4 border-t border-white/10">
                <p className="text-sm text-foreground/60 mb-1">Before: IT Executive, 4.2 LPA</p>
                <p className="text-sm text-green-400 font-semibold">After: Azure Administrator, 9.6 LPA</p>
              </div>
              <Link href="/programs/azure-az104" className="mt-6 inline-flex items-center text-primary text-sm font-semibold hover:underline">
                Read More <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </GlassCard>
          </div>
          <div className="text-center">
            <AnimatedButton href="/success-stories" variant="outline">
              View More Success Stories
            </AnimatedButton>
          </div>
        </div>
      </section>

      {/* Why Working Professionals Choose This Training */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Working Professionals Choose This Training</h2>
            <AnimatedButton href="/contact" variant="primary" className="mt-4">
              Download Roadmap Guide
            </AnimatedButton>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-primary/50 transition-colors">
              <h4 className="text-lg font-bold text-white mb-2">Roadmap to Promotion</h4>
              <p className="text-foreground/70 text-sm">Step-by-step path from current role to next-level designation.</p>
            </div>
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-primary/50 transition-colors">
              <h4 className="text-lg font-bold text-white mb-2">Mentor-led Live Coaching</h4>
              <p className="text-foreground/70 text-sm">Real-time classes, instant doubt resolution, and expert feedback.</p>
            </div>
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-primary/50 transition-colors">
              <h4 className="text-lg font-bold text-white mb-2">Real Enterprise Labs</h4>
              <p className="text-foreground/70 text-sm">Hands-on scenarios based on production SIEM, cloud, and DevOps use-cases.</p>
            </div>
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-primary/50 transition-colors">
              <h4 className="text-lg font-bold text-white mb-2">Interview Cracking Framework</h4>
              <p className="text-foreground/70 text-sm">Resume optimization, mock interviews, and answer frameworks.</p>
            </div>
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-primary/50 transition-colors">
              <h4 className="text-lg font-bold text-white mb-2">Flexible Batch Schedule</h4>
              <p className="text-foreground/70 text-sm">Weekday and weekend options designed for working professionals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Text CTA Block */}
      <section className="py-24 bg-gradient-to-b from-transparent to-primary/10 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center max-w-4xl relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white leading-tight">
            A clearer training model creates better execution confidence, stronger mentorship access, and more ready outcomes for working professionals.
          </h2>

          <div className="flex flex-col md:flex-row justify-center gap-8 my-12 text-left">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-primary mb-2">Role-focused</h3>
              <p className="text-foreground/70">Built around career transition and execution skill, not just syllabus coverage.</p>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-primary mb-2">Mentor-led</h3>
              <p className="text-foreground/70">Live practitioner guidance with review loops, doubt resolution, and interview support.</p>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-primary mb-2">Outcome-driven</h3>
              <p className="text-foreground/70">Projects, positioning, and structured preparation designed for real hiring outcomes.</p>
            </div>
          </div>

          <div className="p-8 bg-black/40 backdrop-blur-md rounded-2xl border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">Need a ready roadmap?</h3>
            <p className="text-foreground/70 mb-6">Download our role-based learning guide.</p>
            <AnimatedButton href="/contact" variant="primary">
              Download Guide
            </AnimatedButton>
          </div>
        </div>
      </section>
    </div>
  );
}
