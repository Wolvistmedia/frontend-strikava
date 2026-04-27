import { GlassCard } from "@/components/ui/GlassCard";

export default function RefundPolicy() {
  return (
    <div className="pt-24 pb-20 relative min-h-screen">
      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        <h1 className="text-4xl font-extrabold mb-8 text-white">Refund <span className="text-gradient">Policy</span></h1>
        
        <GlassCard delay={0.1} className="p-8 md:p-12 space-y-6 text-foreground/80 leading-relaxed">
          <p>
            Our commitment is to deliver high-quality, mentor-led enterprise training. We understand that circumstances may change, and our refund policy is designed to be fair to both our learners and our instructors.
          </p>
          <p>
            <strong>Standard Refund Request:</strong> You may request a full refund within 3 days of course purchase, provided you have not accessed more than 10% of the training materials or attended more than 1 live session.
          </p>
          <p>
            <strong>Exceptions:</strong> Bootcamp enrollments that include certification exam vouchers are non-refundable once the voucher code has been issued.
          </p>
          <p>
            Please contact info@strikava.com with your enrollment details to initiate a refund request.
          </p>
        </GlassCard>
      </div>
    </div>
  );
}
