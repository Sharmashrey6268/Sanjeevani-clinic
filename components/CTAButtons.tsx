import { MapPin, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/data/site";

type CTAButtonsProps = {
  compact?: boolean;
};

export default function CTAButtons({ compact = false }: CTAButtonsProps) {
  const base =
    "focus-ring inline-flex items-center justify-center rounded-full font-semibold transition hover:-translate-y-0.5";
  const size = compact ? "px-4 py-2 text-sm" : "px-5 py-3 text-base";

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      <a href={siteConfig.phoneHref} className={`${base} ${size} bg-brand-blue text-white shadow-soft`}>
        <Phone className="mr-2 h-4 w-4" />
        Call Now
      </a>
      <a
        href={siteConfig.whatsappHref}
        target="_blank"
        rel="noreferrer"
        className={`${base} ${size} bg-brand-green text-white shadow-soft`}
      >
        <MessageCircle className="mr-2 h-4 w-4" />
        WhatsApp Chat
      </a>
      <a
        href={siteConfig.mapsHref}
        target="_blank"
        rel="noreferrer"
        className={`${base} ${size} border border-blue-100 bg-white text-brand-ink hover:bg-brand-softBlue`}
      >
        <MapPin className="mr-2 h-4 w-4" />
        Visit Center
      </a>
    </div>
  );
}
