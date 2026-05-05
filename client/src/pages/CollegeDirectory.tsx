import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { GraduationCap, MapPin, Phone, Search } from "lucide-react";
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

export default function CollegeDirectory() {
  const [colleges, setColleges] = useState<College[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/colleges.json")
      .then((res) => res.json())
      .then((data) => {
        setColleges(data);
        setLoading(false);
      });
  }, []);

  const districts = Array.from(
    new Set(colleges.map((c) => c.location.district))
  ).sort();

  const getFeeDisplay = (fee: any) => {
    if (typeof fee === "object" && fee !== null) {
      return fee.tuition_fee_per_year || Object.values(fee)[0] || "N/A";
    }
    return fee || "N/A";
  };

  const filtered = colleges.filter((college) => {
    const matchesSearch = college.college_name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesDistrict =
      !selectedDistrict || college.location.district === selectedDistrict;
    return matchesSearch && matchesDistrict;
  });

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Loading colleges...</p>
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
              <span className="text-sm font-medium text-primary cursor-pointer">
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
          <h1 className="text-4xl font-bold mb-8">BPT Colleges in Kerala</h1>

          {/* Search and Filter */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search by college name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <select
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
              className="px-3 py-2 border border-border rounded-md bg-background text-foreground"
            >
              <option value="">All Districts</option>
              {districts.map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
            </select>
          </div>

          {/* Results Count */}
          <p className="text-sm text-muted-foreground mb-6">
            Showing {filtered.length} of {colleges.length} colleges
          </p>

          {/* Colleges Grid */}
          <div className="grid gap-6">
            {filtered.map((college, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all border border-border">
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Left: College Info */}
                  <div className="md:col-span-2">
                    <Link href={`/colleges/${index}`}>
                      <h2 className="text-xl font-bold mb-2 text-primary hover:underline cursor-pointer">
                        {college.college_name}
                      </h2>
                    </Link>
                    <div className="flex items-center gap-2 text-muted-foreground mb-4">
                      <MapPin className="w-4 h-4" />
                      <span>
                        {college.location.city}, {college.location.district}
                      </span>
                    </div>

                    <p className="text-sm text-muted-foreground mb-4">
                      {college.value_prop}
                    </p>

                    <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                      <div>
                        <span className="font-semibold">Academic Rating:</span>
                        <p className="text-muted-foreground">
                          {college.academics_rating}/5
                        </p>
                      </div>
                      <div>
                        <span className="font-semibold">Fee Structure:</span>
                        <p className="text-muted-foreground">
                          {getFeeDisplay(college.fee_structure)}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right: Contact Info */}
                  <div className="bg-card border border-border rounded-lg p-4">
                    <h3 className="font-semibold mb-4">Contact</h3>
                    <div className="space-y-3">
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">
                          Phone
                        </p>
                        <a
                          href={`tel:${college.contact.phone}`}
                          className="text-primary hover:underline flex items-center gap-2 text-sm"
                        >
                          <Phone className="w-4 h-4" />
                          {college.contact.phone}
                        </a>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">
                          Email
                        </p>
                        <a
                          href={`mailto:${college.contact.email}`}
                          className="text-primary hover:underline text-sm break-all"
                        >
                          {college.contact.email}
                        </a>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">
                          Website
                        </p>
                        <a
                          href={college.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline text-sm"
                        >
                          Visit Website
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No colleges found matching your criteria.
              </p>
            </div>
          )}
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
