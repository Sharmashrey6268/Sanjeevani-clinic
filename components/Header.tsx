"use client";

import { useEffect, useState } from "react";
import { MapPin, Menu, Phone, X } from "lucide-react";
import { siteConfig } from "@/data/site";
import Logo from "./Logo";

const navItems = [
  { title: "Home", link: "#home", id: "home" },
  { title: "Services", link: "#services", id: "services" },
  { title: "About Us", link: "#therapist", id: "therapist" },
  { title: "Gallery", link: "#gallery", id: "gallery" },
  { title: "Testimonials", link: "#testimonials", id: "testimonials" },
  { title: "Contact Us", link: "#contact", id: "contact" },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 130;
      let currentSection = "home";

      navItems.forEach((item) => {
        const section = document.getElementById(item.id);

        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            currentSection = item.id;
          }
        }
      });

      setActiveSection(currentSection);
      setIsOpen(false);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-green-100 bg-white/95 shadow-sm backdrop-blur-md">
      <nav className="mx-auto flex h-20 w-full max-w-[1800px] items-center justify-between overflow-hidden px-3 sm:h-[88px] sm:px-5 lg:h-24 lg:px-8 2xl:px-14">
       <a
  href="#home"
  className="block max-w-[210px] flex-shrink overflow-hidden sm:max-w-[300px] lg:max-w-none"
  onClick={() => setIsOpen(false)}
>
  <Logo />
</a>

        <div className="hidden flex-1 items-center justify-center gap-6 xl:flex 2xl:gap-10">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.id}
                href={item.link}
                className={`relative pb-2 text-sm font-bold transition 2xl:text-base ${
                  isActive
                    ? "text-green-700"
                    : "text-slate-700 hover:text-green-700"
                }`}
              >
                {item.title}

                <span
                  className={`absolute bottom-0 left-0 h-[3px] rounded-full bg-green-700 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />
              </a>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 xl:flex">
          <a
            href={siteConfig.phoneHref}
            className="inline-flex items-center justify-center rounded-full bg-green-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-green-800 2xl:px-6 2xl:text-base"
          >
            <Phone className="mr-2 h-4 w-4" />
            Call Now
          </a>

          <a
            href={siteConfig.mapsHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white px-5 py-3 text-sm font-bold text-slate-800 shadow-sm transition hover:bg-gray-50 2xl:px-6 2xl:text-base"
          >
            <MapPin className="mr-2 h-4 w-4" />
            Visit Center
          </a>
        </div>

        <div className="flex items-center gap-2 xl:hidden">
          <a
            href={siteConfig.phoneHref}
            aria-label="Call now"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-green-700 text-white shadow-sm sm:h-11 sm:w-11"
          >
            <Phone size={18} />
          </a>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 shadow-sm sm:h-11 sm:w-11"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="xl:hidden border-t border-green-100 bg-white px-4 py-4 shadow-lg sm:px-6">
          <div className="mx-auto grid max-w-2xl gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <a
                  key={item.id}
                  href={item.link}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-2xl px-4 py-3 text-base font-bold transition ${
                    isActive
                      ? "bg-green-50 text-green-700"
                      : "text-slate-700 hover:bg-green-50 hover:text-green-700"
                  }`}
                >
                  {item.title}
                </a>
              );
            })}

            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <a
                href={siteConfig.phoneHref}
                className="inline-flex items-center justify-center rounded-full bg-green-700 px-5 py-3 font-bold text-white"
              >
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </a>

              <a
                href={siteConfig.mapsHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-green-100 bg-white px-5 py-3 font-bold text-slate-800 shadow-sm"
              >
                <MapPin className="mr-2 h-4 w-4" />
                Visit Center
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}