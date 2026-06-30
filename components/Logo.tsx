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
    <div className="flex items-center gap-3">

      <Image
        src="/images/sanjeevani-logo.png"
        alt="Sanjeevani Logo"
        width={78}
        height={78}
        priority
        className="h-16 w-16 object-contain lg:h-20 lg:w-20"
      />

      <div className="leading-none">

        <div
          className="flex text-[28px] font-black tracking-[0.08em] lg:text-[36px]"
          style={{
            textShadow: "0 4px 8px rgba(0,0,0,0.18)",
          }}
        >
          {letters.map(([letter, color], index) => (
            <span key={index} style={{ color }}>
              {letter}
            </span>
          ))}
        </div>

        <p className="mt-1 font-serif text-[13px] italic font-bold text-red-800 tracking-[0.03em] lg:text-[15px]">
          Pediatric Rehab and Wellness Center
        </p>

      </div>

    </div>
  );
}