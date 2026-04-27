import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-bold tracking-tighter mb-4 inline-block">
              <span className="text-white">Strik</span>
              <span className="text-primary">ava</span>
            </Link>
            <p className="text-foreground/70 max-w-sm mb-6">
              Enterprise IT training company helping professionals build cloud and DevOps careers. We deliver industry-focused corporate training programs in Cybersecurity, Cloud, DevOps, and Data Engineering to help teams upskill and perform better.
            </p>
            <div className="text-sm text-foreground/60 space-y-1">
              <p>info@strikava.com</p>
              <p><a href="https://wa.me/918383854378" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">+91 8383854378</a></p>
              <p>Bengaluru, Karnataka, India</p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/programs" className="text-foreground/70 hover:text-primary transition-colors">Courses & Programs</Link>
              </li>
              <li>
                <Link href="/why-choose-us" className="text-foreground/70 hover:text-primary transition-colors">Why Choose Us</Link>
              </li>
              <li>
                <Link href="/success-stories" className="text-foreground/70 hover:text-primary transition-colors">Success Stories</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="text-foreground/70 hover:text-primary transition-colors">Terms of Service</Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-foreground/70 hover:text-primary transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/refund-policy" className="text-foreground/70 hover:text-primary transition-colors">Refund Policy</Link>
              </li>
              <li>
                <Link href="/legal-notice" className="text-foreground/70 hover:text-primary transition-colors">Legal Notice</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 mt-12 pt-8 text-center text-sm text-foreground/50">
          <p className="mb-2">
            Third-party names, logos, course titles, and trademarks are property of their respective owners and are used only for identification and educational reference. No sponsorship, endorsement, or affiliation is implied unless explicitly stated.
          </p>
          <p>&copy; 2026 Strikava. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
