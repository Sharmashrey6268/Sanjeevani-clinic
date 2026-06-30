import { Star } from "lucide-react";
import { testimonials } from "@/data/site";

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-16 sm:py-20">
      <div className="container-page">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-green-700">
            Parent Stories
          </p>

          <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-5xl">
            What Parents Say
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            Real parent feedback will be added here after launch.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="rounded-[2rem] border border-green-100 bg-gradient-to-br from-white to-green-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 flex gap-1 text-yellow-500">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-current" />
                ))}
              </div>

              <p className="text-base leading-8 text-slate-700">
                “{item.text}”
              </p>

              <div className="mt-6 border-t border-green-100 pt-5">
                <p className="font-black text-green-900">{item.name}</p>
                <p className="mt-1 text-sm font-medium text-slate-500">
                  Parent Feedback
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}