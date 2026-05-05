import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link, useParams } from "wouter";
import { GraduationCap, MapPin, Phone, Mail, Globe, ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";

interface College {
  college_name: string;
  website: string;
  location: { city: string; district: string };
  fee_structure: any;
  cut_off_score: any;
  academics_rating: number;
  student_reviews_summary: string;
  placement_records: string;
  contact: { phone: string; email: string };
  value_prop: string;
}

const getFeeDisplay = (fee: any) => {
  if (typeof fee === "object" && fee !== null) {
    return fee.tuition_fee_per_year || Object.values(fee)[0] || "N/A";
  }
  return fee || "N/A";
};

export default function CollegeDetail() {
  const params = useParams();
  const collegeIndex = parseInt(params.id || "0");
  const [college, setCollege] = useState<College | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/colleges.json")
      .then((res) => res.json())
      .then((data) => {
        if (data[collegeIndex]) {
          setCollege(data[collegeIndex]);
        }
        setLoading(false);
      });
  }, [collegeIndex]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Loading college details...</p>
      </div>
    );
  }

  if (!college) {
    return (
      <div className="min-h-screen flex flex-col">
        <header className="border-b border-border bg-card">
          <div className="container py-4 flex items-center justify-between">
            <Link href="/">
              <div className="flex items-center gap-2 cursor-pointer">
                <GraduationCap className="w-6 h-6 text-primary" />
                <span className="font-bold text-lg">Kerala BPT Directory</span>
              </div>
            </Link>
          </div>
        </header>
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p className="text-muted-foreground mb-4">College not found</p>
            <Link href="/colleges">
              <Button className="cursor-pointer">Back to Colleges</Button>
            </Link>
          </div>
        </main>
      </div>
    );
  }

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

      <main className="flex-1 py-12">
        <div className="container">
          {/* Back Button */}
          <Link href="/colleges">
            <Button variant="outline" size="sm" className="mb-6 cursor-pointer">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Colleges
            </Button>
          </Link>

          {/* College Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{college.college_name}</h1>
            <div className="flex items-center gap-2 text-muted-foreground mb-4">
              <MapPin className="w-5 h-5" />
              <span className="text-lg">
                {college.location.city}, {college.location.district}
              </span>
            </div>
            <p className="text-lg text-muted-foreground">{college.value_prop}</p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column: Details */}
            <div className="lg:col-span-2 space-y-6">
              {/* Academic Information */}
              <Card className="p-6 border border-border">
                <h2 className="text-2xl font-bold mb-4">Academic Information</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      Academic Rating
                    </p>
                    <p className="text-2xl font-bold text-primary">
                      {college.academics_rating}/5
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      Cut-off Score
                    </p>
                    <p className="text-lg">
                      {typeof college.cut_off_score === "object"
                        ? Object.values(college.cut_off_score)[0]
                        : college.cut_off_score}
                    </p>
                  </div>
                </div>
              </Card>

              {/* Fee Structure */}
              <Card className="p-6 border border-border">
                <h2 className="text-2xl font-bold mb-4">Fee Structure</h2>
                <div className="bg-background p-4 rounded-lg">
                  <p className="text-lg font-semibold">
                    {getFeeDisplay(college.fee_structure)}
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Annual fee for merit seats. Subject to change as per government regulations.
                  </p>
                </div>
              </Card>

              {/* Student Reviews */}
              <Card className="p-6 border border-border">
                <h2 className="text-2xl font-bold mb-4">Student Reviews</h2>
                <p className="text-muted-foreground">
                  {college.student_reviews_summary}
                </p>
              </Card>

              {/* Placement Records */}
              <Card className="p-6 border border-border">
                <h2 className="text-2xl font-bold mb-4">Placement Records</h2>
                <p className="text-muted-foreground">
                  {college.placement_records}
                </p>
              </Card>
            </div>

            {/* Right Column: Contact & Actions */}
            <div className="space-y-6">
              {/* Contact Card */}
              <Card className="p-6 border border-border sticky top-20">
                <h2 className="text-xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  {/* Phone */}
                  <div>
                    <p className="text-xs text-muted-foreground mb-2 uppercase font-semibold">
                      Phone
                    </p>
                    <a
                      href={`tel:${college.contact.phone}`}
                      className="flex items-center gap-2 text-primary hover:underline"
                    >
                      <Phone className="w-4 h-4" />
                      <span className="font-semibold">{college.contact.phone}</span>
                    </a>
                  </div>

                  {/* Email */}
                  <div>
                    <p className="text-xs text-muted-foreground mb-2 uppercase font-semibold">
                      Email
                    </p>
                    <a
                      href={`mailto:${college.contact.email}`}
                      className="flex items-center gap-2 text-primary hover:underline break-all"
                    >
                      <Mail className="w-4 h-4 flex-shrink-0" />
                      <span className="text-sm">{college.contact.email}</span>
                    </a>
                  </div>

                  {/* Website */}
                  <div>
                    <p className="text-xs text-muted-foreground mb-2 uppercase font-semibold">
                      Website
                    </p>
                    <a
                      href={college.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary hover:underline"
                    >
                      <Globe className="w-4 h-4" />
                      <span className="text-sm">Visit Website</span>
                    </a>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-6 space-y-3">
                  <a href={`tel:${college.contact.phone}`} className="block">
                    <Button className="w-full cursor-pointer">Call Now</Button>
                  </a>
                  <a href={`mailto:${college.contact.email}`} className="block">
                    <Button variant="outline" className="w-full cursor-pointer">
                      Send Email
                    </Button>
                  </a>
                  <a
                    href={college.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button variant="outline" className="w-full cursor-pointer">
                      Visit Website
                    </Button>
                  </a>
                </div>
              </Card>

              {/* Info Box */}
              <Card className="p-4 border border-border bg-primary/5">
                <p className="text-sm text-foreground">
                  <span className="font-semibold">Tip:</span> Contact the college directly to confirm current fees, cut-offs, and application deadlines. Information may vary by academic year.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-8 mt-12">
        <div className="container text-center text-sm text-muted-foreground">
          <p>Kerala BPT College Directory © 2026. Information based on LBS Centre regulations and official college data.</p>
        </div>
      </footer>
    </div>
  );
}
