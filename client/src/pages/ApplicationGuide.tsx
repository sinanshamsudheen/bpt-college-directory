import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { GraduationCap, CheckCircle, AlertCircle, BookOpen, Briefcase } from "lucide-react";

export default function ApplicationGuide() {
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
              <span className="text-sm font-medium text-primary cursor-pointer">
                Application Guide
              </span>
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 py-12">
        <div className="container max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">BPT Admission Application Guide</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Step-by-step guide to apply for BPT courses in Kerala through the LBS Centre for Science & Technology
          </p>

          {/* About BPT */}
          <Card className="p-6 mb-8 border border-border">
            <div className="flex gap-4">
              <BookOpen className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-3 text-lg">About the BPT Program</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                  <div>
                    <p className="font-semibold text-foreground mb-1">Duration</p>
                    <p>4.5 years (4 years academic + 6-month compulsory internship)</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Degree Awarded</p>
                    <p>Bachelor of Physiotherapy (BPT) by Kerala University of Health Sciences (KUHS), Thrissur</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Regulatory Bodies</p>
                    <p>KUHS + Kerala Para-Medical Council (KPMC) for registration to practice</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Standard Intake</p>
                    <p>30 seats per college. All colleges in Kerala are affiliated to KUHS.</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Key Information */}
          <Card className="p-6 mb-8 border border-primary/20 bg-primary/5">
            <div className="flex gap-4">
              <AlertCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-2">Important: Admission Criteria</h3>
                <p className="text-muted-foreground">
                  BPT admission in Kerala is based solely on your 12th-grade PCB (Physics, Chemistry, Biology) marks. There is no separate entrance exam like KEAM or NEET. Your marks are normalized and used to create a merit rank list by the LBS Centre.
                </p>
              </div>
            </div>
          </Card>

          {/* Step-by-Step Guide */}
          <div className="space-y-6">
            {/* Step 1 */}
            <Card className="p-6 border border-border">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Visit LBS Centre Website</h3>
                  <p className="text-muted-foreground mb-4">
                    Go to the official LBS Centre for Science & Technology website: <strong>www.lbscentre.kerala.gov.in</strong>
                  </p>
                  <a
                    href="https://www.lbscentre.kerala.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Visit LBS Centre Website →
                  </a>
                </div>
              </div>
            </Card>

            {/* Step 2 */}
            <Card className="p-6 border border-border">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Online Registration</h3>
                  <p className="text-muted-foreground mb-4">
                    Click on the "Register" or "Apply Now" link on the LBS Centre homepage. Fill in your personal details including:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-2">
                    <li>Full name (as per 10th/12th certificate)</li>
                    <li>Date of birth</li>
                    <li>Email address (active and verified)</li>
                    <li>Mobile number</li>
                    <li>Address and district</li>
                    <li>Category (General/OBC/SC/ST/EWS)</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Step 3 */}
            <Card className="p-6 border border-border">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Pay Application Fee</h3>
                  <p className="text-muted-foreground mb-4">
                    After completing registration, you will receive a payment link. The application fee is typically ₹500-₹1000 (varies by year). Payment can be made online via:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-2">
                    <li>Debit/Credit Card</li>
                    <li>Net Banking</li>
                    <li>UPI</li>
                  </ul>
                  <p className="text-muted-foreground mt-4">
                    Keep the payment receipt for future reference.
                  </p>
                </div>
              </div>
            </Card>

            {/* Step 4 */}
            <Card className="p-6 border border-border">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Upload Required Documents</h3>
                  <p className="text-muted-foreground mb-4">
                    Scan and upload the following documents (typically in PDF format):
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-2">
                    <li>10th mark sheet (proof of date of birth)</li>
                    <li>12th mark sheet (PCB marks)</li>
                    <li>Nativity certificate</li>
                    <li>Caste certificate (if applicable)</li>
                    <li>Income certificate (for fee concessions, if applicable)</li>
                    <li>Non-Creamy Layer certificate (for OBC candidates)</li>
                    <li>Medical certificate (if claiming disability)</li>
                  </ul>
                  <p className="text-muted-foreground mt-4 text-sm">
                    Ensure all documents are clear and legible. Documents uploaded after the deadline will not be considered.
                  </p>
                </div>
              </div>
            </Card>

            {/* Step 5 */}
            <Card className="p-6 border border-border">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  5
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Application Verification</h3>
                  <p className="text-muted-foreground mb-4">
                    After submission, the LBS Centre will verify your application. You will receive an email or SMS with your registration ID and password. Keep these credentials safe.
                  </p>
                  <p className="text-muted-foreground">
                    The LBS Centre will publish accepted applications and may open a portal for corrections if needed.
                  </p>
                </div>
              </div>
            </Card>

            {/* Step 6 */}
            <Card className="p-6 border border-border">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  6
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Rank List Publication</h3>
                  <p className="text-muted-foreground mb-4">
                    The LBS Centre will publish the rank list based on normalized PCB marks. Your rank will determine your eligibility for college seats. Check the official website on the announced date.
                  </p>
                  <p className="text-muted-foreground">
                    You can download your rank card from the portal using your registration ID and password.
                  </p>
                </div>
              </div>
            </Card>

            {/* Step 7 */}
            <Card className="p-6 border border-border">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  7
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Option Entry (College Preference)</h3>
                  <p className="text-muted-foreground mb-4">
                    Log in to the LBS portal and enter your college preferences in order of preference. You can typically list 10-20 colleges. The system will consider your rank and preferences for allotment.
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Important:</strong> Carefully arrange colleges in order of your preference. Higher-ranked colleges should be listed first if you prefer them.
                  </p>
                </div>
              </div>
            </Card>

            {/* Step 8 */}
            <Card className="p-6 border border-border">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  8
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Allotment & Counseling</h3>
                  <p className="text-muted-foreground mb-4">
                    The LBS Centre conducts multiple rounds of online allotments. After each round, check the portal to see if you have been allotted a seat. If allotted, you must report to the college within the specified time.
                  </p>
                  <p className="text-muted-foreground">
                    If not satisfied with the allotment, you can participate in the next round of counseling.
                  </p>
                </div>
              </div>
            </Card>

            {/* Step 9 */}
            <Card className="p-6 border border-border">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  9
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">College Admission</h3>
                  <p className="text-muted-foreground mb-4">
                    Report to your allotted college with all original documents:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-2">
                    <li>10th and 12th mark sheets</li>
                    <li>Nativity certificate</li>
                    <li>Caste certificate (if applicable)</li>
                    <li>Income certificate</li>
                    <li>Allotment letter from LBS Centre</li>
                    <li>Medical fitness certificate</li>
                  </ul>
                  <p className="text-muted-foreground mt-4">
                    Pay the admission fee as per the college's fee structure and complete the registration process.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Important Dates */}
          <Card className="p-6 mt-8 border border-border bg-card">
            <h2 className="text-2xl font-bold mb-4">Important Dates (Typical Timeline)</h2>
            <div className="space-y-3">
              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-muted-foreground">Application Opening</span>
                <span className="font-semibold">May-June</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-muted-foreground">Application Closing</span>
                <span className="font-semibold">June-July</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-muted-foreground">Rank List Publication</span>
                <span className="font-semibold">July-August</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-muted-foreground">Option Entry</span>
                <span className="font-semibold">August</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-muted-foreground">Allotment & Admission</span>
                <span className="font-semibold">August-September</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              <strong>Note:</strong> Dates vary each year. Check the official LBS Centre website for the exact timeline for your academic year.
            </p>
          </Card>

          {/* Tips */}
          <Card className="p-6 mt-8 border border-border bg-primary/5">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-primary" />
              Pro Tips
            </h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <strong>✓ Register Early:</strong> Complete your registration as soon as the application window opens to avoid last-minute technical issues.
              </li>
              <li>
                <strong>✓ Verify Documents:</strong> Ensure all uploaded documents are clear, legible, and match the required format before submission.
              </li>
              <li>
                <strong>✓ Save Credentials:</strong> Keep your registration ID and password safe. You'll need them for all future communications with LBS Centre.
              </li>
              <li>
                <strong>✓ Monitor Updates:</strong> Regularly check the LBS Centre website and your registered email for important announcements and deadlines.
              </li>
              <li>
                <strong>✓ Contact Colleges:</strong> Once you have a shortlist, contact colleges directly to clarify fees, hostel facilities, and other details.
              </li>
              <li>
                <strong>✓ Prepare for Counseling:</strong> Have all documents ready and plan your travel to the college for the admission process.
              </li>
            </ul>
          </Card>

          {/* Scholarships */}
          <Card className="p-6 mt-8 border border-border">
            <h2 className="text-2xl font-bold mb-4">Scholarships Available</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-primary flex-shrink-0 font-bold">DC</span>
                <span><strong className="text-foreground">DC Scholarship</strong> — for Kerala domicile students in private self-financing colleges. Apply through the District Collectorate.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary flex-shrink-0 font-bold">SC/ST</span>
                <span><strong className="text-foreground">SC/ST Scholarship</strong> — government colleges nearly free. Significant fee concession in private colleges. Apply through the SC/ST Development Department.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary flex-shrink-0 font-bold">OBC</span>
                <span><strong className="text-foreground">OBC Post-Matric Scholarship</strong> — for OBC students from Kerala. Apply through the Backward Communities Development Department.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary flex-shrink-0 font-bold">MIN</span>
                <span><strong className="text-foreground">Minority Scholarships</strong> — available for Muslim and Christian minority students in eligible institutions. Inquire directly with the college.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary flex-shrink-0 font-bold">COL</span>
                <span><strong className="text-foreground">College Merit Scholarships</strong> — individual colleges may offer merit-based fee concessions. Inquire directly with the admission office.</span>
              </li>
            </ul>
          </Card>

          {/* Career Paths */}
          <Card className="p-6 mt-8 border border-border bg-primary/5">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Briefcase className="w-6 h-6 text-primary" />
              Career Paths After BPT
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Clinical Practice</h3>
                <ul className="space-y-1">
                  <li>• Hospital physiotherapist (government / private)</li>
                  <li>• Sports physiotherapy (IPL teams, national academies)</li>
                  <li>• Rehabilitation centres and old age homes</li>
                  <li>• Community health / NGOs</li>
                  <li>• Armed forces (SSC physiotherapist entry)</li>
                  <li>• Entrepreneurship: own clinic</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">International Opportunities</h3>
                <ul className="space-y-1">
                  <li>• <strong>UK</strong> — HCPC registration</li>
                  <li>• <strong>Australia</strong> — AHPRA registration</li>
                  <li>• <strong>Canada</strong> — Provincial PT licensing</li>
                  <li>• <strong>Gulf</strong> — DHA / HAAD / SCFHS licensing</li>
                </ul>
                <h3 className="font-semibold text-foreground mb-2 mt-4">Post-Graduation (MPT)</h3>
                <ul className="space-y-1">
                  <li>• MPT from KUHS / AIIMS / CMC Vellore</li>
                  <li>• MPT abroad (UK, Australia, Canada)</li>
                  <li>• PhD in Physiotherapy</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">
              Ready to explore colleges? Browse our comprehensive list of BPT colleges in Kerala.
            </p>
            <Link href="/colleges">
              <Button size="lg" className="cursor-pointer">
                Browse Colleges
              </Button>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-8 mt-12">
        <div className="container text-center text-sm text-muted-foreground">
          <p>Kerala BPT College Directory © 2026. Information based on LBS Centre regulations and official college data.</p>
          <p className="mt-1">Made with ♥ by <a href="https://instagram.com/s1nahn" target="_blank" rel="noopener noreferrer" className="hover:underline">Sinan</a></p>
        </div>
      </footer>
    </div>
  );
}
