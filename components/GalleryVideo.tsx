"use client";

import { useState } from "react";
import { PlayCircle, X } from "lucide-react";

const galleryData = {
  therapy: [
    "images/gallery/therapy/therapy1.jpg",
    "images/gallery/therapy/therapy2.jpg",
    "images/gallery/therapy/therapy3.jpg",
    "images/gallery/therapy/therapy4.jpg",
    "images/gallery/therapy/therapy5.jpg",
  ],
  clinic: [
    "images/gallery/clinic/clinic1.jpg",
    "images/gallery/clinic/clinic2.jpg",
    "images/gallery/clinic/clinic3.jpg",
    "images/gallery/clinic/clinic4.jpg",
  ],
  videos: [
    {
      thumbnail: "images/gallery/video/video-thumb1.jpg",
      video: "images/gallery/video/clinic-video1.mp4",
    },
    {
      thumbnail: "images/gallery/video/video-thumb2.jpg",
      video: "images/gallery/video/clinic-video2.mp4",
    },
  ],
};

type TabType = "therapy" | "clinic" | "videos";

export default function GalleryVideo() {
  const [activeTab, setActiveTab] = useState<TabType>("therapy");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section
      id="gallery"
      className="bg-gradient-to-br from-white via-green-50 to-white py-16 sm:py-20"
    >
      <div className="container-page">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-green-700">
            Gallery
          </p>

          <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-5xl">
            Our Therapy Moments
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            A glimpse of therapy activities, clinic space, and child-friendly care.
          </p>
        </div>

        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {[
            { key: "therapy", label: "Therapy Photos" },
            { key: "clinic", label: "Clinic Photos" },
            { key: "videos", label: "Videos" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as TabType)}
              className={`rounded-full px-6 py-3 text-sm font-black transition sm:text-base ${
                activeTab === tab.key
                  ? "bg-green-700 text-white shadow-lg"
                  : "bg-white text-slate-700 shadow-sm ring-1 ring-green-100 hover:bg-green-50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab !== "videos" && (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {galleryData[activeTab].map((src, index) => (
              <button
                key={src}
                onClick={() => setSelectedImage(src)}
                className={`group overflow-hidden rounded-[1.7rem] bg-white p-2 shadow-sm ring-1 ring-green-100 transition hover:-translate-y-1 hover:shadow-xl ${
                  index === 0 ? "sm:col-span-2 sm:row-span-2" : ""
                }`}
              >
                <img
                  src={src}
                  alt="Sanjeevani gallery"
                  className={`w-full rounded-[1.3rem] object-contain bg-slate-50 transition duration-500 group-hover:scale-105 sm:object-cover ${
  index === 0 ? "max-h-[520px] sm:h-full" : "max-h-[420px] sm:h-64"
}`}
                />
              </button>
            ))}
          </div>
        )}

        {activeTab === "videos" && (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {galleryData.videos.map((item) => (
              <button
                key={item.video}
                onClick={() => setSelectedVideo(item.video)}
                className="group relative overflow-hidden rounded-[2rem] bg-white p-2 shadow-sm ring-1 ring-green-100 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <img
                  src={item.thumbnail}
                  alt="Therapy video"
                  className="max-h-[420px] w-full rounded-[1.5rem] bg-slate-50 object-contain transition duration-500 group-hover:scale-105 sm:h-72 sm:object-cover"
                />

                <div className="absolute inset-0 flex items-center justify-center rounded-[2rem] bg-black/25">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-xl">
                    <PlayCircle className="h-10 w-10 text-green-700" />
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute right-5 top-5 rounded-full bg-white p-3 text-slate-900"
          >
            <X />
          </button>

          <img
            src={selectedImage}
            alt="Gallery preview"
            className="max-h-[85vh] max-w-[95vw] rounded-3xl object-contain"
          />
        </div>
      )}

      {selectedVideo && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4">
          <button
            onClick={() => setSelectedVideo(null)}
            className="absolute right-5 top-5 rounded-full bg-white p-3 text-slate-900"
          >
            <X />
          </button>

          <video
            src={selectedVideo}
            controls
            autoPlay
            className="max-h-[85vh] max-w-[95vw] rounded-3xl bg-black"
          />
        </div>
      )}
    </section>
  );
}