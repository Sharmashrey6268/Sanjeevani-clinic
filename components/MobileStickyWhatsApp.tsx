import { MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function MobileStickyWhatsApp() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-blue-100 bg-white p-3 shadow-2xl md:hidden">
      <a
        href={siteConfig.phoneHref}
        className="focus-ring inline-flex items-center justify-center rounded-full bg-brand-blue px-4 py-3 text-sm font-bold text-white"
      >
        <Phone className="mr-2 h-4 w-4" />
        Call
      </a>
      <a
        href={siteConfig.whatsappHref}
        target="_blank"
        rel="noreferrer"
        className="focus-ring inline-flex items-center justify-center rounded-full bg-brand-green px-4 py-3 text-sm font-bold text-white"
      >
        <MessageCircle className="mr-2 h-4 w-4" />
        WhatsApp
      </a>
    </div>
  );
}
