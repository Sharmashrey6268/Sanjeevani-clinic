import { siteConfig } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-brand-ink py-10 text-white">
      <div className="container-page grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="text-xl font-bold">{siteConfig.clinicName}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-300">{siteConfig.tagline}</p>
        </div>
        <div>
          <h4 className="font-bold">Contact</h4>
          <p className="mt-3 text-sm text-slate-300">{siteConfig.address}</p>
          <p className="mt-2 text-sm text-slate-300">{siteConfig.phone}</p>
          <p className="mt-2 text-sm text-slate-300">{siteConfig.email}</p>
        </div>
        <div>
          <h4 className="font-bold">SEO Keywords</h4>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            Child therapy in Indore, Occupational therapist near me, Pediatric occupational therapy Indore,
            Autism therapy Indore, ADHD therapy for children, Speech delay support Indore.
          </p>
        </div>
      </div>
    </footer>
  );
}
