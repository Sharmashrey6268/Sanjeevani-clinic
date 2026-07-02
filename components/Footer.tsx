import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container-page py-8">
        <div className="grid gap-6 md:grid-cols-2 md:items-center">
          {/* Left */}
          <div>
            <h2 className="text-2xl font-black">
              {siteConfig.clinicName}
            </h2>

            <p className="mt-2 text-sm text-slate-300">
              Restoring Life. Renewing Strength.
            </p>
          </div>

          {/* Right */}
          <div>
            <h3 className="text-lg font-bold">
              Contact
            </h3>

            <div className="mt-3 space-y-2 text-sm text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="mt-1 h-4 w-4 flex-shrink-0 text-green-400" />
                <p>
                  1165/28 Nanda Nagar, Near Baby Care Convent School,
                  Indore (M.P)
                </p>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-green-400" />
                <a
                  href="tel:+916268353343"
                  className="hover:text-white"
                >
                  +91 62683 53343
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-green-400" />
                <a
                  href="mailto:sanjeevanipediatricrehab@gmail.com"
                  className="break-all hover:text-white"
                >
                  sanjeevanipediatricrehab@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 border-t border-slate-700 pt-4 text-center">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} Sanjeevani Pediatric Rehab & Wellness Center. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}