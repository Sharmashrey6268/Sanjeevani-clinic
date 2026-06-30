import { ArrowRight } from "lucide-react";
import { services, siteConfig } from "@/data/site";
import SectionHeader from "./SectionHeader";

const hindiTitles = [
  "विकास में देरी",
  "स्पीच सपोर्ट",
  "व्यवहार थेरेपी",
  "होम विजिट",
  "विकास सहायता",
];

const colors = [
  "border-green-100",
  "border-sky-100",
  "border-purple-100",
  "border-orange-100",
  "border-pink-100",
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-16 sm:py-20">
      <div className=" text-xl container-page text-pink-700">
        <SectionHeader
          eyebrow="हमारी सेवाएं"
          title="Our Therapy Services"
          description="Every child is unique. We provide personalized therapy plans based on your child's individual developmental needs."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className={`group rounded-[2rem] border ${colors[index]} bg-white p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}
              >
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-50 transition group-hover:scale-110 sm:h-24 sm:w-24">
                  <Icon className="h-10 w-10 text-green-700 sm:h-11 sm:w-11" />
                </div>

                <p className="mt-6 text-sm font-bold text-purple-700 sm:text-base">
                  {hindiTitles[index]}
                </p>

                <h3 className="mt-3 text-2xl font-black text-green-900 sm:text-3xl">
                  {service.title}
                </h3>

                <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                  {service.text}
                </p>
              </div>
            );
          })}
        </div>

        {/* <div className="mt-14 rounded-[2rem] bg-gradient-to-r from-green-700 to-green-800 px-6 py-8 text-center text-white shadow-xl sm:px-8 sm:py-10">
          <h3 className="text-2xl font-black sm:text-3xl">
            Not sure which therapy your child needs?
          </h3>

          <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-green-100 sm:text-lg">
            Every child is different. Book an assessment and we&apos;ll help you
            understand the best therapy plan for your child&apos;s development.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={siteConfig.phoneHref}
              className="rounded-full bg-white px-7 py-4 font-bold text-green-800 transition hover:scale-105"
            >
              Call Now
            </a>

            <a
              href={siteConfig.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white px-7 py-4 font-bold text-white transition hover:bg-white hover:text-green-800"
            >
              WhatsApp Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div> */}
      </div>
    </section>
  );
}