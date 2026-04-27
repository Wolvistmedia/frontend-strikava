import { GlassCard } from "@/components/ui/GlassCard";

export default function LegalNotice() {
  return (
    <div className="pt-24 pb-20 relative min-h-screen">
      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        <h1 className="text-4xl font-extrabold mb-8 text-white">Legal <span className="text-gradient">Notice</span></h1>
        
        <GlassCard delay={0.1} className="p-8 md:p-12 space-y-6 text-foreground/80 leading-relaxed">
          <p>
            <strong>Copyright owner: Strikava. All rights reserved.</strong>
          </p>
          <p>
            Third-party logos, certification names, and brand references (including AWS, Microsoft Azure, Google Cloud, and others) belong to their respective owners. Brand references are used only for training and informational identification and do not imply partnership, sponsorship, or endorsement unless explicitly stated.
          </p>
          <p>
            If you believe any content on this page infringes your rights, contact info@strikava.com with evidence for review and prompt action.
          </p>
        </GlassCard>
      </div>
    </div>
  );
}
