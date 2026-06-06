import React, { useState } from "react";
import { Instagram, Globe, ChevronUp, MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export function Footer() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [langOpen, setLangOpen] = useState(false);

  const languages = [
    { code: "en", label: "EN" },
    { code: "hr", label: "HR" },
    { code: "de", label: "DE" },
    { code: "it", label: "IT" },
    { code: "nl", label: "NL" },
    { code: "sl", label: "SL" },
  ];
  const currentLangLabel =
    languages.find((l) => l.code === i18n.language)?.label || "EN";

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-[#0B0C10] border-t border-white/10 w-full relative z-10 pt-16 pb-12 px-6 md:px-12 flex flex-col gap-10">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 justify-between items-center lg:items-start text-center lg:text-left">
        {/* Brand Section */}
        <div className="flex flex-col items-center lg:items-start gap-6 max-w-sm">
          <div className="text-2xl font-bold tracking-tight text-white flex items-center gap-3">
            Hedonist Boat Charter
          </div>
          <p className="text-sm text-white/50 leading-relaxed font-light">
            Premium boat rentals and curated excursions across the pristine
            waters of the Istrian coast.
          </p>
          <div className="flex items-center gap-4 mt-2">
            <a
              href="https://www.instagram.com/hedonist.boat_porec/"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:text-black hover:bg-white transition-all hover:scale-105"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/385995919005"
              target="_blank"
              rel="noreferrer"
              onClick={() => {
                if (typeof window !== "undefined" && (window as any).gtag) {
                  (window as any).gtag("event", "whatsapp_click", {
                    event_category: "communication",
                    event_label: "footer_whatsapp_icon",
                  });
                }
              }}
              className="w-12 h-12 rounded-full bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all hover:scale-105"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 gap-x-16 gap-y-10 w-full lg:w-auto">
          <div className="flex flex-col gap-4 items-center lg:items-start">
            <h4 className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase mb-2">
              {t("footer.nav")}
            </h4>
            <button
              onClick={() => scrollTo("home")}
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              {t("footer.home")}
            </button>
            <button
              onClick={() => scrollTo("fleet")}
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              {t("nav.fleet")}
            </button>
            <button
              onClick={() => scrollTo("excursions")}
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              {t("nav.excursions")}
            </button>
            <button
              onClick={() => scrollTo("taxi")}
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              {t("nav.transport")}
            </button>
            <button
              onClick={() => scrollTo("booking-engine")}
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              {t("nav.book_now")}
            </button>
          </div>

          <div className="flex flex-col gap-4 items-center lg:items-start">
            <h4 className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase mb-2">
              {t("footer.contact")}
            </h4>
            <a
              href="mailto:hedonistboat@gmail.com"
              onClick={() => {
                if (typeof window !== "undefined" && (window as any).gtag) {
                  (window as any).gtag("event", "email_click", {
                    event_category: "communication",
                    event_label: "footer_email_link",
                  });
                }
              }}
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              Email
            </a>
            <span className="text-sm text-white/60 text-center lg:text-left">
              Obala Maršala Tita, 52440, Poreč, Croatia
            </span>
            <a
              href="tel:+385995919005"
              onClick={() => {
                if (typeof window !== "undefined" && (window as any).gtag) {
                  (window as any).gtag("event", "phone_click", {
                    event_category: "communication",
                    event_label: "footer_phone_link",
                  });
                }
              }}
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              +385 99 591 9005
            </a>
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-white/10 flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-0 mt-4">
        <div className="text-xs text-white/30 tracking-wide">
          &copy; {new Date().getFullYear()} Hedonist Boat Charter.{" "}
          {t("footer.rights")}.
        </div>

        <div className="relative">
          <button
            onClick={() => setLangOpen(!langOpen)}
            className="flex items-center gap-2 text-xs font-semibold tracking-wide text-white/80 hover:text-black hover:bg-white transition-all bg-white/5 py-2.5 px-5 rounded-full border border-white/10"
          >
            <Globe className="w-4 h-4" />
            <span>{currentLangLabel}</span>
            <ChevronUp
              className={`w-3 h-3 transition-transform duration-300 ${langOpen ? "rotate-180" : ""}`}
            />
          </button>

          {langOpen && (
            <div className="absolute bottom-full right-0 lg:right-auto lg:left-0 mb-3 w-32 bg-[#1A1D24] border border-white/10 rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.5)] origin-bottom animate-in fade-in zoom-in-95 duration-200 z-50">
              <div className="flex flex-col py-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      navigate("/" + lang.code, { replace: true });
                      setLangOpen(false);
                    }}
                    className={`w-full text-left px-5 py-2.5 text-sm transition-colors ${
                      i18n.language === lang.code
                        ? "bg-white/10 text-white font-medium"
                        : "text-white/50 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
