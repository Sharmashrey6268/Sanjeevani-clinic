const gallery = [
  {
    src: "/images/therapy-child.jpg",
    title: "Engaging Therapy Activities",
    text: "Play-based activities that help improve focus, movement and confidence.",
  },
  {
    src: "/images/therapy-room.jpg",
    title: "Safe Therapy Environment",
    text: "A calm and child-friendly space designed for learning and growth.",
  },
  {
    src: "/images/child-activity.jpg",
    title: "Skill Building Sessions",
    text: "Activities focused on sensory, motor and daily living skills.",
  },
];

export default function GalleryVideo() {
  return (
    <section
      id="gallery"
      className="bg-gradient-to-br from-white via-green-50 to-white py-16 sm:py-20"
    >
      <div className="container-page">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-green-700">
            Therapy Space
          </p>

          <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-5xl">
            Our Child-Friendly Center
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            A calm, colorful and engaging environment where children feel safe,
            motivated and supported.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {gallery.map((item) => (
            <div
              key={item.title}
              className="overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-green-100 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src={item.src}
                alt={item.title}
                className="h-56 w-full object-cover"
              />

              <div className="p-5 text-center">
                <h3 className="text-lg font-black text-green-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.text}
                </p>
              </div>
            </div>
          ))}

          <div className="overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-purple-100 transition hover:-translate-y-1 hover:shadow-xl">
            <video
              controls
              className="h-56 w-full object-cover"
              poster="/images/therapy-room.jpg"
            >
              <source src="/videos/clinic-video.mp4" type="video/mp4" />
            </video>

            <div className="p-5 text-center">
              <h3 className="text-lg font-black text-green-900">
                See How We Work
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                A short video showing our therapy approach and child-friendly
                environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}