"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const letters = [
  ["S", "#ff2020"],
  ["A", "#0b7f16"],
  ["N", "#46b8e8"],
  ["J", "#9b00d9"],
  ["E", "#1714b8"],
  ["E", "#ffb400"],
  ["V", "#5976ff"],
  ["A", "#71d94d"],
  ["N", "#9a744c"],
  ["I", "#ff2020"],
];

export default function AnimatedLogoLoader() {
  const [show, setShow] = useState(true);
  const [svgCode, setSvgCode] = useState("");
  const loaderRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("/images/treeLogo.svg")
      .then((res) => res.text())
      .then((data) => setSvgCode(data));
  }, []);

  useEffect(() => {
    if (!svgCode || !logoRef.current || !loaderRef.current) return;

    const svg = logoRef.current.querySelector("svg");
    const paths = logoRef.current.querySelectorAll("path");

    if (svg) {
      svg.setAttribute("width", "100%");
      svg.setAttribute("height", "100%");
      svg.style.display = "block";
    }

   const tl = gsap.timeline();

tl.set(paths, {
  opacity: 0,
  scale: 0.45,
  transformOrigin: "center center",
});

tl.set([".loader-letter", ".loader-subtitle", ".loader-loading-text"], {
  opacity: 0,
  y: 16,
});

tl.set(".loader-bar", {
  scaleX: 0,
});

// logo + SANJEEVANI start together
tl.to(paths, {
  opacity: 1,
  scale: 1,
  duration: 0.38,
  stagger: 0.006,
  ease: "back.out(1.7)",
}, 0);

tl.to(".loader-letter", {
  opacity: 1,
  y: 0,
  scale: 1,
  duration: 0.45,
  stagger: 0.06,
  ease: "back.out(1.7)",
}, 0.15);

tl.to(".loader-subtitle", {
  opacity: 1,
  y: 0,
  duration: 0.6,
}, 0.35);

tl.to(".loader-bar", {
  scaleX: 1,
  duration: 1.2,
  ease: "power2.out",
}, 0.5);

tl.to(".loader-loading-text", {
  opacity: 1,
  y: 0,
  duration: 0.5,
}, 0.6);

tl.to(loaderRef.current, {
  opacity: 0,
  duration: 0.7,
  delay: 0.6,
  ease: "power2.out",
  onComplete: () => setShow(false),
});
  }, [svgCode]);

  if (!show) return null;

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 via-white to-lime-100 px-4"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(253,224,71,0.22),transparent_38%)]" />

      <div className="relative z-10 flex w-full max-w-[92vw] flex-col items-center text-center">
        <div
          ref={logoRef}
          className="loader-logo h-[120px] w-[120px] sm:h-[150px] sm:w-[150px] md:h-[190px] md:w-[190px] lg:h-[220px] lg:w-[220px]"
          dangerouslySetInnerHTML={{ __html: svgCode }}
        />

        <h1 className="loader-text-shimmer mt-4 flex flex-wrap justify-center gap-[0.18em] text-[2rem] font-black leading-none tracking-[0.12em] sm:mt-5 sm:text-[3rem] md:text-[4rem] lg:text-[4.4rem]">
          {letters.map(([char, color], index) => (
            <span key={index} className="loader-letter" style={{ color }}>
              {char}
            </span>
          ))}
        </h1>

        <p className="loader-subtitle mt-3 max-w-[90vw] text-center text-[0.9rem] font-extrabold text-purple-700 sm:text-[1.15rem] md:text-[1.35rem]">
          Pediatric Rehab &amp; Wellness Center
        </p>

        <div className="mt-5 h-2 w-[70vw] max-w-[320px] overflow-hidden rounded-full bg-green-100 sm:mt-6">
          <div className="loader-bar h-full w-full rounded-full bg-gradient-to-r from-green-600 via-yellow-400 to-purple-700" />
        </div>

        <p className="loader-loading-text mt-4 text-[0.7rem] font-black uppercase tracking-[0.45em] text-green-800 sm:text-sm">
  Loading
</p>
      </div>
    </div>
  );
}