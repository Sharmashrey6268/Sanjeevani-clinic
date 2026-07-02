"use client";

import { useEffect, useState } from "react";
import { MapPin, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/data/site";

const heroImages = [
  "/images/hero/therapy1.jpg",
  "/images/hero/therapy2.jpg",
  "/images/hero/therapy3.jpg",
  "/images/hero/therapy4.jpg",
  "/images/hero/therapy5.jpg",
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-lime-100"
    >
      <div className="pointer-events-none absolute left-6 top-32 hidden text-4xl opacity-70 lg:block">
        💗
      </div>

      <div className="pointer-events-none absolute right-8 top-32 hidden text-4xl opacity-70 lg:block">
        🌿
      </div>

      <div className="pointer-events-none absolute left-[45%] top-44 hidden text-5xl opacity-80 lg:block">
        🌿
      </div>

      <div className="container-page relative grid min-h-[82vh] items-center gap-10 pb-28 pt-10 lg:grid-cols-2 lg:gap-16 lg:pt-14">
        <div className="relative z-10 order-1">
          <div className="mb-5 inline-flex rounded-full bg-white px-5 py-3 text-xs font-black text-green-800 shadow sm:text-sm">
            💗 Indore&apos;s Trusted Pediatric Therapy Center
          </div>
<h1 className="max-w-full break-words text-4xl font-black leading-tight text-green-900 sm:text-5xl md:text-6xl lg:text-7xl">
          
            Restoring Life.
            <span className="block text-orange-500">Renewing</span>
            <span className="block text-blue-500">Strength.</span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-700 sm:text-lg sm:leading-8 lg:text-xl">
            Compassionate, child-centered therapy to help your child improve
            independence, attention, behavior, motor skills, sensory processing,
            and confidence.
          </p>

          <p className="mt-4 text-xl font-black text-purple-700 sm:text-2xl">
            “स्वस्थ बचपन, समर्थ भविष्य”
          </p>

          <div className="mt-7 max-w-xl">
            <div className="grid gap-3 sm:grid-cols-2">
              <a
                href={siteConfig.phoneHref}
                className="inline-flex h-14 items-center justify-center rounded-full bg-green-800 px-6 text-base font-black text-white shadow-lg transition hover:-translate-y-1 hover:bg-green-900 sm:h-16 sm:text-lg"
              >
                <Phone className="mr-2 h-5 w-5 sm:mr-3 sm:h-6 sm:w-6" />
                Call Now
              </a>

              <a
                href={siteConfig.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-14 items-center justify-center rounded-full bg-green-600 px-6 text-base font-black text-white shadow-lg transition hover:-translate-y-1 hover:bg-green-700 sm:h-16 sm:text-lg"
              >
                <MessageCircle className="mr-2 h-5 w-5 sm:mr-3 sm:h-6 sm:w-6" />
                WhatsApp Chat
              </a>

              <a
                href={siteConfig.mapsHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-14 items-center justify-center rounded-full border border-green-100 bg-white px-6 text-base font-black text-slate-800 shadow-lg transition hover:-translate-y-1 hover:bg-green-50 sm:col-span-2 sm:h-16 sm:text-lg"
              >
                <MapPin className="mr-2 h-5 w-5 sm:mr-3 sm:h-6 sm:w-6" />
                Get Directions
              </a>
            </div>
          </div>
        </div>

        <div className="relative z-10 order-2 flex items-center justify-center">
          <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-green-200/40 via-yellow-100/30 to-blue-200/40 blur-3xl" />

          <div className="hero-image-frame group relative w-full max-w-[620px] overflow-hidden rounded-[2rem] bg-white p-2 shadow-[0_30px_80px_rgba(0,0,0,.15)] transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_40px_100px_rgba(0,0,0,.22)] sm:rounded-[2.8rem]">
            <img
              key={currentImage}
              src={heroImages[currentImage]}
              alt="Child therapy activity"
              className="hero-slide-image h-[320px] w-full rounded-[1.6rem] object-cover object-center sm:h-[440px] sm:rounded-[2.3rem] lg:h-[540px] xl:h-[600px]"
            />

            <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-white/85 px-3 py-2 shadow">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentImage(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    currentImage === index
                      ? "w-7 bg-green-700"
                      : "w-2.5 bg-slate-300"
                  }`}
                  aria-label={`Show therapy image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 rounded-t-[60%] bg-lime-200/60 sm:h-24" />
    </section>
  );
}