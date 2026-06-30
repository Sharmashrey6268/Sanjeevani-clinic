"use client";

import { useEffect, useState } from "react";
import { MapPin, Phone, Menu } from "lucide-react";
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

 useEffect(() => {
  const handleScroll = () => {
    const scrollPosition = window.scrollY + 140;

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
  };

  handleScroll();

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <header className="sticky top-0 z-50 border-b border-green-100 bg-white/95 shadow-sm backdrop-blur-md">
      <nav className="mx-auto flex h-24 w-full max-w-[1500px] items-center justify-between px-2 sm:px-4 lg:px-6">
        <div className="flex flex-shrink-0 items-center">
          <a href="#home" className="block">
            <Logo />
          </a>
        </div>

        <div className="hidden flex-1 items-center justify-center gap-8 xl:flex 2xl:gap-10">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.id}
                href={item.link}
                className={`relative pb-2 text-[16px] font-semibold transition ${
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
            className="rounded-full bg-green-700 px-5 py-3 font-semibold text-white transition hover:bg-green-800"
          >
            <Phone className="mr-2 inline h-4 w-4" />
            Call Now
          </a>

          <a
            href={siteConfig.mapsHref}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-gray-200 bg-white px-5 py-3 font-semibold shadow-sm transition hover:bg-gray-50"
          >
            <MapPin className="mr-2 inline h-4 w-4" />
            Visit Center
          </a>
        </div>

        <div className="flex items-center gap-2 xl:hidden">
          <a
            href={siteConfig.phoneHref}
            className="rounded-full bg-green-700 px-4 py-2 text-white"
          >
            <Phone size={18} />
          </a>

          <button className="rounded-full border p-2">
            <Menu size={22} />
          </button>
        </div>
      </nav>
    </header>
  );
}