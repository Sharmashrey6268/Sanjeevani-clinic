import Image from "next/image";

export default function Logo() {
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

  return (
    <div className="flex min-w-0 items-center gap-2 sm:gap-3">
      <Image
        src="/images/sanjeevani-logo.png"
        alt="Sanjeevani Logo"
        width={78}
        height={78}
        priority
        className="h-11 w-11 flex-shrink-0 object-contain sm:h-14 sm:w-14 lg:h-20 lg:w-20"
      />

      <div className="min-w-0 leading-none">
        <div
          className="flex text-[18px] font-black tracking-[0.04em] sm:text-[26px] lg:text-[36px]"
          style={{
            textShadow: "0 4px 8px rgba(0,0,0,0.14)",
          }}
        >
          {letters.map(([letter, color], index) => (
            <span key={index} style={{ color }}>
              {letter}
            </span>
          ))}
        </div>

        <p className="mt-1 max-w-[180px] truncate font-serif text-[9px] italic font-bold tracking-[0.02em] text-red-800 sm:max-w-none sm:text-[12px] lg:text-[15px]">
          Pediatric Rehab and Wellness Center
        </p>
      </div>
    </div>
  );
}