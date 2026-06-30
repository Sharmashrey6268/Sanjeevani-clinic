import {
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { siteConfig } from "@/data/site";

export default function Hero() {
  const badges = [
    "Child-Friendly Environment",
    "Apollo Hospital Experience",
    "Certified Occupational Therapist",
    "Indore Based Center",
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-lime-100">
      <div className="absolute left-6 top-24 text-4xl opacity-70">💗</div>
      <div className="absolute right-8 top-28 text-4xl opacity-70">🌿</div>
      <div className="absolute left-[45%] top-36 text-5xl opacity-80">☀️</div>

      <div className="container-page relative grid min-h-[82vh] items-center gap-10 py-12 lg:grid-cols-2">
        <div>
          <div className="mb-5 inline-flex rounded-full bg-white px-5 py-3 text-sm font-black text-green-800 shadow">
            💗 Indore&apos;s Trusted Pediatric Therapy Center
          </div>

          <h1 className="text-5xl font-black leading-tight text-green-900 sm:text-6xl lg:text-7xl">
            Restoring Life.
            <span className="block text-orange-500">Renewing </span>
            <span className="block text-blue-500"> Strength.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700 sm:text-xl">
            Compassionate, child-centered therapy to help your child improve
            independence, attention, behavior, motor skills, sensory processing,
            and confidence.
          </p>

          <p className="mt-4 text-2xl font-black text-purple-700">
            “स्वस्थ बचपन, समर्थ भविष्य”
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center justify-center rounded-full bg-green-800 px-7 py-4 font-black text-white shadow-lg transition hover:-translate-y-1 hover:bg-green-900"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </a>

            <a
              href={siteConfig.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-green-600 px-7 py-4 font-black text-white shadow-lg transition hover:-translate-y-1 hover:bg-green-700"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Chat
            </a>

            <a
              href={siteConfig.mapsHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-green-100 bg-white px-7 py-4 font-black text-slate-800 shadow-lg transition hover:-translate-y-1 hover:bg-green-50"
            >
              <MapPin className="mr-2 h-5 w-5" />
              Get Directions
            </a>
          </div>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {badges.map((badge) => (
              <div
                key={badge}
                className="flex items-center gap-2 rounded-2xl bg-white/90 px-4 py-3 text-sm font-bold text-slate-700 shadow-sm"
              >
                <ShieldCheck className="h-5 w-5 text-green-700" />
                {badge}
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-white p-3 shadow-2xl">
            <img
              src="/images/therapy-child.jpg"
              alt="Child doing therapy activity"
              className="h-[360px] w-full rounded-[2rem] object-cover object-center sm:h-[460px] lg:h-[560px]"
            />

            <div className="absolute left-6 top-6 rounded-full bg-white/95 px-4 py-2 text-sm font-black text-green-800 shadow">
              <Sparkles className="mr-1 inline h-4 w-4 text-yellow-500" />
              Personalized Care
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 rounded-t-[60%] bg-lime-200/60" />
    </section>
  );
}