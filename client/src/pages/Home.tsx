import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { BookOpen, GraduationCap, MapPin } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <header className="border-b border-border bg-card sticky top-0 z-50">
        <div className="container py-4 flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <GraduationCap className="w-6 h-6 text-primary" />
              <span className="font-bold text-lg">Kerala BPT Directory</span>
            </div>
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="/colleges">
              <span className="text-sm font-medium hover:text-primary transition-colors cursor-pointer">
                Colleges
              </span>
            </Link>
            <Link href="/application-guide">
              <span className="text-sm font-medium hover:text-primary transition-colors cursor-pointer">
                Application Guide
              </span>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary/10 via-background to-background py-20">
          <div className="container">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-bold mb-4 text-foreground">
                Find Your Perfect BPT College in Kerala
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Explore top Bachelor of Physiotherapy colleges with detailed information on fees, placements, contact details, and admission processes. Designed for merit students seeking quality education with affordable options.
              </p>
              <div className="flex gap-4">
                <Link href="/colleges">
                  <Button size="lg" className="cursor-pointer">
                    Explore Colleges
                  </Button>
                </Link>
                <Link href="/application-guide">
                  <Button size="lg" variant="outline" className="cursor-pointer">
                    Application Guide
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-background">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">Why Use This Directory?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow">
                <MapPin className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2">Complete Information</h3>
                <p className="text-muted-foreground">
                  Access comprehensive details on fees, cut-offs, placements, and student reviews for all major BPT colleges in Kerala.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow">
                <BookOpen className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2">Direct Contact Information</h3>
                <p className="text-muted-foreground">
                  Get direct phone numbers and email addresses of admission departments for quick inquiries and applications.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow">
                <GraduationCap className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2">Admission Guidance</h3>
                <p className="text-muted-foreground">
                  Step-by-step application process guide based on LBS Centre regulations for merit-based admissions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Info Section */}
        <section className="py-16 bg-card border-t border-border">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Important Information</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Admission Criteria</h3>
                  <p className="text-muted-foreground">
                    BPT admission in Kerala is based solely on 12th-grade PCB (Physics, Chemistry, Biology) marks. There is no separate entrance exam like KEAM or NEET required for LBS-managed admissions. Your 12th-grade score is normalized and used to create a merit rank list.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">LBS Registration</h3>
                  <p className="text-muted-foreground">
                    All merit-based admissions are conducted through the LBS Centre for Science & Technology. Register on their official website (lbscentre.in) when the application window opens. This is the primary gateway for BPT admissions in Kerala.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Fee Structure</h3>
                  <p className="text-muted-foreground">
                    Government colleges offer the lowest fees (₹50,000-₹60,000 annually), while government-controlled self-financing colleges charge ₹75,000-₹1,10,000. Private colleges range from ₹1,10,000 to ₹2,30,000 per year. Merit-based scholarships and fee concessions may be available.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-8">
        <div className="container text-center text-sm text-muted-foreground">
          <p>Kerala BPT College Directory © 2026. Information based on LBS Centre regulations and official college data.</p>
        </div>
      </footer>
    </div>
  );
}
