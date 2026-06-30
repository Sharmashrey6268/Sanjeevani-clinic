import { trustItems } from "@/data/site";

export default function Trust() {
  return (
    <section className="bg-white py-10">
      <div className="container-page grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {trustItems.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="rounded-3xl border border-blue-50 bg-white p-6 shadow-sm">
              <Icon className="mb-4 h-8 w-8 text-brand-blue" />
              <h3 className="font-bold text-brand-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
