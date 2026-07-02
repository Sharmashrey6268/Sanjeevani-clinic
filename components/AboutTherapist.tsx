import Image from "next/image";
import CTAButtons from "./CTAButtons";

export default function AboutTherapist() {
  const features = [
    "Experienced Occupational Therapist",
    "Apollo Hospital Experience",
    "Personalized Goal-Oriented Therapy",
    "Parent Guidance & Home Program",
    "Evidence-Based Practice",
    "Friendly Child Environment",
  ];

  return (
    <section
      id="therapist"
      className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-yellow-50 py-14 sm:py-20"
    >
      <div className="absolute left-4 top-10 text-3xl sm:text-5xl">🌿</div>
      <div className="absolute right-6 top-20 text-3xl sm:text-5xl">🌿</div>
      

      <div className="container-page relative">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-green-700">
            Meet Your Therapist
          </p>

          <h2 className="mt-3 text-3xl font-black text-green-900 sm:text-5xl">
            Dr. Shruti Sharma
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            Compassionate care for every child&apos;s unique developmental
            journey.
          </p>
        </div>

        <div className="grid items-center gap-10 rounded-[2rem] bg-white/90 p-5 shadow-soft sm:p-8 lg:grid-cols-2 lg:gap-14 lg:p-10">
          <div className="flex justify-center">
            <div className="relative w-full max-w-[430px]">
              <div className="absolute -left-3 -top-3 h-full w-full rounded-[2rem] bg-green-100 sm:-left-5 sm:-top-5" />

              <div className="relative overflow-hidden rounded-[2rem] bg-white shadow-2xl">
                <Image
                  src="/images/therapistt.jpg"
                  alt="Dr. Shruti Sharma"
                  width={520}
                  height={650}
                  priority
                  className="h-[420px] w-full object-cover object-top transition duration-500 hover:scale-105 sm:h-[520px] lg:h-[560px]"
                />
              </div>

              <div className="absolute -bottom-5 left-1/2 w-[88%] -translate-x-1/2 rounded-2xl bg-white px-4 py-3 text-center shadow-xl">
                <p className="text-sm font-black text-green-800 sm:text-base">
                  BOT, MOT
                </p>
                <p className="text-xs font-bold text-purple-700 sm:text-sm">
                  Pediatric Occupational Therapist
                </p>
              </div>
            </div>
          </div>

          <div className="pt-5 lg:pt-0">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-green-700">
              BOT, MOT
            </p>

            <h3 className="mt-3 text-3xl font-black leading-tight text-green-900 sm:text-4xl lg:text-5xl">
              Pediatric Occupational Therapist
            </h3>

            <p className="mt-4 text-lg font-bold leading-8 text-purple-700 sm:text-xl">
              Consultant Occupational Therapist at Buddhi Clinic, Apollo
              Hospital, Indore
            </p>

            <p className="mt-6 text-base leading-8 text-slate-700 sm:text-lg sm:leading-9">
              Every child is unique. Dr. Shruti focuses on understanding each
              child&apos;s needs and creating personalized therapy plans that
              help improve independence, attention, behavior, sensory
              processing, daily living skills, and confidence.
            </p>

            <div className="mt-6 rounded-[1.5rem] bg-purple-50 p-5 text-center text-2xl font-black text-purple-700 shadow-sm sm:text-3xl">
              “स्वस्थ बचपन, समर्थ भविष्य”
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {features.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-green-50 p-4 text-sm font-bold leading-6 text-green-900 shadow-sm sm:text-base"
                >
                  ✅ {item}
                </div>
              ))}
            </div>

            {/* <div className="mt-8">
              <CTAButtons compact />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}