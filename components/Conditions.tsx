import { CheckCircle2 } from "lucide-react";
import { conditions } from "@/data/site";
import CTAButtons from "./CTAButtons";
import SectionHeader from "./SectionHeader";

export default function Conditions() {
  return (
    <section id="conditions" className="section-padding bg-white">
      <div className="container-page">
        <SectionHeader
          eyebrow="Conditions"
          title="Conditions we commonly support"
          description="Early support can help children build confidence, independence, communication, and daily life skills."
        />
        <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
          {conditions.map((condition) => (
            <div key={condition} className="flex items-center gap-3 rounded-2xl border border-blue-50 bg-brand-softBlue p-4">
              <CheckCircle2 className="h-6 w-6 flex-none text-brand-green" />
              <span className="font-semibold text-brand-ink">{condition}</span>
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <CTAButtons compact />
        </div>
      </div>
    </section>
  );
}
