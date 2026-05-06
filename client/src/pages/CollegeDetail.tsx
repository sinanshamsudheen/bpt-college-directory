import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link, useParams } from "wouter";
import { GraduationCap, MapPin, Phone, Mail, Globe, ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";

interface College {
  college_name: string;
  website: string;
  location: { city: string; district: string };
  college_type?: string;
  affiliation?: string;
  hospital_affiliation?: string;
  intake?: number;
  fee_structure: any;
  admission_info?: string;
  cut_off_score?: any;
  academics_rating: number;
  academics_info?: string;
  clinical_exposure?: string;
  student_reviews_summary: any;
  placement_records: any;
  benefits?: string[];
  limitations?: string[];
  contact: { phone: string; email: string };
  value_prop: string;
}

const getFeeDisplay = (fee: any): string => {
  if (typeof fee === "object" && fee !== null) {
    const val =
      fee.annual_fee_merit ??
      fee.tuition_fee_per_year ??
      fee.tuition_fee ??
      fee.tuition_fee_merit_seats ??
      fee.tuition_fee_merit ??
      Object.values(fee)[0];
    return typeof val === "object" ? getFeeDisplay(val) : val || "N/A";
  }
  return fee || "N/A";
};

const getAdmissionDisplay = (college: College): string => {
  if (college.admission_info) return college.admission_info;
  if (college.cut_off_score) {
    return typeof college.cut_off_score === "object" && college.cut_off_score !== null
      ? String(Object.values(college.cut_off_score)[0])
      : college.cut_off_score;
  }
  return "Admission via LBS CAP based on 12th PCB marks. No entrance exam required.";
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
            <h1 className="text-4xl font-bold mb-3">{college.college_name}</h1>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-5 h-5" />
                <span className="text-lg">
                  {college.location.city}, {college.location.district}
                </span>
              </div>
              {college.college_type && (
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded font-medium">
                  {college.college_type}
                </span>
              )}
            </div>
            <p className="text-lg text-muted-foreground">{college.value_prop}</p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column: Details */}
            <div className="lg:col-span-2 space-y-6">

              {/* Overview Card */}
              {(college.affiliation || college.hospital_affiliation) && (
                <Card className="p-6 border border-border">
                  <h2 className="text-2xl font-bold mb-4">Overview</h2>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    {college.affiliation && (
                      <div>
                        <p className="text-muted-foreground mb-1">Affiliation</p>
                        <p className="font-medium">{college.affiliation}</p>
                      </div>
                    )}
                    <div>
                      <p className="text-muted-foreground mb-1">Program</p>
                      <p className="font-medium">
                        {college.intake ?? 30} seats · 4.5 years BPT
                      </p>
                    </div>
                    {college.hospital_affiliation && (
                      <div className="md:col-span-2">
                        <p className="text-muted-foreground mb-1">Hospital Affiliation</p>
                        <p className="font-medium">{college.hospital_affiliation}</p>
                      </div>
                    )}
                  </div>
                </Card>
              )}

              {/* Academic Information */}
              <Card className="p-6 border border-border">
                <h2 className="text-2xl font-bold mb-4">Academic Information</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Academic Rating</p>
                    <p className="text-2xl font-bold text-primary">
                      {college.academics_rating}/5
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Admission Criteria</p>
                    <p className="text-sm text-muted-foreground">
                      {getAdmissionDisplay(college)}
                    </p>
                  </div>
                </div>
                {college.academics_info && (
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-2 font-medium">Program Details</p>
                    <p className="text-sm text-muted-foreground">{college.academics_info}</p>
                  </div>
                )}
              </Card>

              {/* Clinical Exposure */}
              {college.clinical_exposure && (
                <Card className="p-6 border border-border">
                  <h2 className="text-2xl font-bold mb-4">Clinical Exposure</h2>
                  <p className="text-muted-foreground">{college.clinical_exposure}</p>
                </Card>
              )}

              {/* Fee Structure */}
              <Card className="p-6 border border-border">
                <h2 className="text-2xl font-bold mb-4">Fee Structure</h2>
                <div className="bg-background p-4 rounded-lg">
                  <p className="text-lg font-semibold">
                    {getFeeDisplay(college.fee_structure)}
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    {typeof college.fee_structure === "object" && college.fee_structure?.note
                      ? college.fee_structure.note
                      : "Annual fee for merit seats. Subject to change as per government regulations."}
                  </p>
                </div>
              </Card>

              {/* Student Reviews */}
              <Card className="p-6 border border-border">
                <h2 className="text-2xl font-bold mb-4">Student Reviews</h2>
                {typeof college.student_reviews_summary === "object" &&
                college.student_reviews_summary !== null ? (
                  <ul className="space-y-3">
                    {Object.entries(college.student_reviews_summary).map(([key, val]) => (
                      <li key={key} className="text-muted-foreground">
                        <span className="font-semibold capitalize text-foreground">
                          {key}:{" "}
                        </span>
                        {String(val)}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-muted-foreground">{college.student_reviews_summary}</p>
                )}
              </Card>

              {/* Placement Records */}
              <Card className="p-6 border border-border">
                <h2 className="text-2xl font-bold mb-4">Placement Records</h2>
                {typeof college.placement_records === "object" &&
                college.placement_records !== null ? (
                  <ul className="space-y-3">
                    {Object.entries(college.placement_records).map(([key, val]) => (
                      <li key={key} className="text-muted-foreground">
                        <span className="font-semibold capitalize text-foreground">
                          {key.replace(/_/g, " ")}:{" "}
                        </span>
                        {String(val)}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-muted-foreground">{college.placement_records}</p>
                )}
              </Card>

              {/* Benefits & Considerations */}
              {(college.benefits?.length || college.limitations?.length) ? (
                <Card className="p-6 border border-border">
                  <h2 className="text-2xl font-bold mb-4">Benefits & Considerations</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {college.benefits && college.benefits.length > 0 && (
                      <div>
                        <h3 className="font-semibold mb-3 text-primary">Benefits</h3>
                        <ul className="space-y-2">
                          {college.benefits.map((b, i) => (
                            <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                              <span className="text-primary mt-0.5 flex-shrink-0">✓</span>
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {college.limitations && college.limitations.length > 0 && (
                      <div>
                        <h3 className="font-semibold mb-3 text-muted-foreground">Considerations</h3>
                        <ul className="space-y-2">
                          {college.limitations.map((l, i) => (
                            <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                              <span className="mt-0.5 flex-shrink-0">•</span>
                              {l}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </Card>
              ) : null}
            </div>

            {/* Right Column: Contact & Actions */}
            <div className="space-y-6">
              {/* Contact Card */}
              <Card className="p-6 border border-border sticky top-20">
                <h2 className="text-xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-4">
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

              <Card className="p-4 border border-border bg-primary/5">
                <p className="text-sm text-foreground">
                  <span className="font-semibold">Tip:</span> Contact the college directly to confirm current fees and application deadlines. Always verify fee information at{" "}
                  <a
                    href="https://lbscentre.kerala.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    lbscentre.in
                  </a>{" "}
                  for the current academic year.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-border bg-card py-8 mt-12">
        <div className="container text-center text-sm text-muted-foreground">
          <p>Kerala BPT College Directory © 2026. Information based on LBS Centre regulations and official college data.</p>
          <p className="mt-1">Made with ♥ by <a href="https://instagram.com/s1nahn" target="_blank" rel="noopener noreferrer" className="hover:underline">Sinan</a></p>
        </div>
      </footer>
    </div>
  );
}
