import { getProgramBySlug, programs } from "@/lib/data";
import { notFound } from "next/navigation";
import { AnimatedButton } from "@/components/ui/AnimatedButton";
import { GlassCard } from "@/components/ui/GlassCard";
import { CheckCircle2, Calendar, Clock, Award } from "lucide-react";
import Link from "next/link";

import { Metadata } from "next";

export function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const program = getProgramBySlug(resolvedParams.slug);

  if (!program) {
    return { title: 'Program Not Found' };
  }

  return {
    title: `${program.title} | Strikava Cloud Training`,
    description: program.desc,
  };
}

export default async function ProgramDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const program = getProgramBySlug(resolvedParams.slug);

  if (!program) {
    notFound();
  }

  return (
    <div className="pt-24 pb-20 relative">
      {/* Background glowing orb */}
      <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-primary/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Breadcrumb */}
        <div className="mb-8 text-sm text-foreground/60 flex items-center space-x-2">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link href="/programs" className="hover:text-primary transition-colors">Programs</Link>
          <span>/</span>
          <span className="text-primary">{program.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-primary mb-4 font-semibold uppercase tracking-wider">
                {program.category.replace("-", " ")}
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-white leading-tight">
                {program.title}
              </h1>
              <p className="text-xl text-foreground/80 leading-relaxed">
                {program.desc}
              </p>
            </div>

            {/* Render Tiers if they exist (Complex Roadmap) */}
            {program.tiers && program.tiers.length > 0 ? (
              <div className="space-y-12">
                <h3 className="text-3xl font-bold text-white mb-8 border-b border-white/10 pb-4">Certification Roadmap</h3>
                
                {program.tiers.map((tier, tIdx) => (
                  <div key={tIdx} className="space-y-6">
                    <div>
                      <h4 className="text-2xl font-bold text-primary mb-2 flex items-center">
                        <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3 text-sm">{tIdx + 1}</span>
                        {tier.level}
                      </h4>
                      <p className="text-foreground/70 ml-11">{tier.desc}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ml-1 sm:ml-11 md:ml-11 lg:ml-11">
                      {tier.modules.map((mod, mIdx) => (
                        <GlassCard key={mIdx} delay={0.1 * mIdx} className="p-6 border-l-4 border-l-accent hover:border-l-primary transition-colors">
                          <h5 className="text-xl font-bold text-white mb-2">{mod.title}</h5>
                          <p className="text-sm text-primary font-medium mb-3">{mod.focus}</p>
                          <p className="text-foreground/70 text-sm mb-4 leading-relaxed">{mod.desc}</p>
                          {mod.duration && (
                            <div className="flex items-center text-xs font-semibold text-foreground/50 uppercase tracking-wider mt-auto pt-4 border-t border-white/10">
                              <Clock className="w-3 h-3 mr-2" /> {mod.duration}
                            </div>
                          )}
                        </GlassCard>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* Standard Syllabus rendering */
              <GlassCard delay={0.1} className="bg-primary/5 border-primary/20">
                <h3 className="text-2xl font-bold text-white mb-6">Program Syllabus</h3>
                <ul className="space-y-4">
                  {program.syllabus?.map((item, idx) => (
                    <li key={idx} className="flex items-start text-lg text-foreground/80 bg-white/5 p-4 rounded-xl border border-white/5">
                      <CheckCircle2 className="text-primary mr-4 w-6 h-6 mt-0.5 flex-shrink-0" />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            )}

            {/* Who Should Attend Section (for massive pages) */}
            {program.tiers && (
              <GlassCard delay={0.2} className="p-8 border-t-4 border-t-primary mt-12">
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Master this Track?</h3>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  Get training schedules, role-based pathways, and expert guidance for your certification journey. Our industry-recognized mentors will guide you from fundamentals to professional level.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <AnimatedButton href="/contact" variant="primary">
                    Request Free Consultation
                  </AnimatedButton>
                  <AnimatedButton href="/categories/aws" variant="outline">
                    Explore Category Paths
                  </AnimatedButton>
                </div>
              </GlassCard>
            )}

          </div>

          {/* Sidebar / Enrollment Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-32">
              <GlassCard delay={0.2} className="p-8">
                <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">Program Details</h3>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mr-4">
                      <Clock className="text-primary w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-foreground/50 uppercase tracking-wider">Duration</p>
                      <p className="font-semibold text-white">{program.duration}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mr-4">
                      <Calendar className="text-accent w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-foreground/50 uppercase tracking-wider">Mode</p>
                      <p className="font-semibold text-white">{program.mode} (Online)</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mr-4">
                      <Award className="text-green-400 w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-foreground/50 uppercase tracking-wider">Experience Level</p>
                      <p className="font-semibold text-white">{program.level}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <AnimatedButton href="/contact" className="w-full py-4 text-center">
                    Enroll Now
                  </AnimatedButton>
                  <AnimatedButton href="/contact" variant="outline" className="w-full py-4 text-center">
                    Talk to an Advisor
                  </AnimatedButton>
                </div>
              </GlassCard>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
