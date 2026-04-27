import { GlassCard } from "@/components/ui/GlassCard";

export default function Terms() {
  return (
    <div className="pt-24 pb-20 relative min-h-screen">
      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        <h1 className="text-4xl font-extrabold mb-8 text-white">Terms of <span className="text-gradient">Service</span></h1>
        
        <GlassCard delay={0.1} className="p-8 md:p-12 space-y-6 text-foreground/80 leading-relaxed">
          <p>
            By accessing this site, users agree to the terms published in our Terms of Service, Privacy Policy, and Refund Policy.
          </p>
          <p>
            This website and its original content, layout, graphics, copywriting, and branding are protected under applicable copyright and trademark laws. Any unauthorized copying, redistribution, republication, automated scraping, or commercial reuse is prohibited without written permission.
          </p>
          <p>
            Training guidance, interview support, and learner outcomes vary by experience, effort, and market conditions; no job placement or salary outcome is guaranteed unless explicitly stated in writing.
          </p>
        </GlassCard>
      </div>
    </div>
  );
}
