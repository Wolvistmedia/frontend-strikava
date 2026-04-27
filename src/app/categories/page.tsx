import { GlassCard } from "@/components/ui/GlassCard";
import { ArrowRight, Cloud, ShieldCheck, Cog, Database, Network, Terminal, Briefcase, BookOpen } from "lucide-react";
import Link from "next/link";
import { AnimatedButton } from "@/components/ui/AnimatedButton";

export default function CategoriesHub() {
  const categories = [
    {
      title: "Cloud Platforms",
      count: "20+ Programs",
      desc: "AWS, Azure, and Google Cloud paths from fundamentals to architect and security specialties.",
      icon: <Cloud className="w-10 h-10 text-blue-400 mb-4" />,
      link: "/categories/cloud"
    },
    {
      title: "Cybersecurity and SIEM",
      count: "16+ Programs",
      desc: "SOC, SIEM, governance, and security engineering tracks across enterprise use cases.",
      icon: <ShieldCheck className="w-10 h-10 text-green-400 mb-4" />,
      link: "/categories/cybersecurity"
    },
    {
      title: "DevOps and Automation",
      count: "12+ Programs",
      desc: "CI/CD, infrastructure automation, Kubernetes, and platform operations roadmaps.",
      icon: <Cog className="w-10 h-10 text-accent mb-4" />,
      link: "/categories/devops"
    },
    {
      title: "Data and Analytics",
      count: "10+ Programs",
      desc: "Data engineering, analytics, and cloud data pipelines for real delivery scenarios.",
      icon: <Database className="w-10 h-10 text-purple-400 mb-4" />,
      link: "/categories/data"
    },
    {
      title: "Networking and Infra",
      count: "9+ Programs",
      desc: "Enterprise routing, switching, cloud connectivity, and infrastructure tracks.",
      icon: <Network className="w-10 h-10 text-orange-400 mb-4" />,
      link: "/categories/networking"
    },
    {
      title: "Linux and Platform Ops",
      count: "8+ Programs",
      desc: "Linux administration, hardening, and server operations for production workloads.",
      icon: <Terminal className="w-10 h-10 text-yellow-400 mb-4" />,
      link: "/categories/linux"
    },
    {
      title: "Project and Service Management",
      count: "11+ Programs",
      desc: "PMI, ITIL, and governance-oriented tracks for leadership and delivery roles.",
      icon: <Briefcase className="w-10 h-10 text-pink-400 mb-4" />,
      link: "/categories/project-management"
    }
  ];

  return (
    <div className="pt-24 pb-20 relative min-h-screen">
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-primary/20 blur-[150px] pointer-events-none rounded-full" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-5xl font-extrabold mb-6">Master <span className="text-gradient">Category Hub</span></h1>
          <p className="text-xl text-foreground/80 leading-relaxed mb-6">
            Navigate to domain pages and then deep vendor track pages, exactly like multi-level training portals.
          </p>
          <p className="text-lg text-foreground/60">
            Choose a Domain and Go Deep. Each category includes role-based roadmaps, certification tracks, and practical programs for individual learners and enterprise teams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
          {categories.map((cat, idx) => (
            <GlassCard key={idx} delay={idx * 0.1} className="flex flex-col h-full p-6 hover:border-primary/50 transition-colors group relative overflow-hidden">
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/5 rounded-full blur-xl group-hover:bg-primary/20 transition-colors" />
              
              <div className="relative z-10">
                {cat.icon}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">{cat.title}</h3>
                  <span className="inline-block px-2 py-1 bg-white/10 rounded text-xs font-semibold text-primary/80 uppercase tracking-wider">{cat.count}</span>
                </div>
                <p className="text-sm text-foreground/70 mb-6 flex-grow">{cat.desc}</p>
              </div>
              
              <div className="mt-auto pt-4 border-t border-white/10 relative z-10">
                <Link href={cat.link} className="inline-flex items-center text-sm font-semibold text-white group-hover:text-primary transition-colors">
                  Open Domain <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Full Catalog CTA */}
        <div className="max-w-4xl mx-auto">
          <GlassCard delay={0.8} className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20 p-10 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start mb-3">
                <BookOpen className="text-primary mr-3 w-8 h-8" />
                <h3 className="text-2xl font-bold text-white">Complete Program Catalog</h3>
              </div>
              <span className="inline-block mb-3 px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs font-bold uppercase">Full Access</span>
              <p className="text-foreground/80 max-w-lg">
                Browse every roadmap, compare tracks, and pick the best path by role and outcome.
              </p>
            </div>
            <AnimatedButton href="/programs" variant="primary" className="whitespace-nowrap">
              Open Program Directory
            </AnimatedButton>
          </GlassCard>
        </div>

      </div>
    </div>
  );
}
