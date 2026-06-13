import React, { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

type NavMode = "top" | "hidden" | "glass";

const LANGUAGES = [
  { code: "en", label: "EN" },
  { code: "hr", label: "HR" },
  { code: "de", label: "DE" },
  { code: "it", label: "IT" },
  { code: "nl", label: "NL" },
  { code: "sl", label: "SL" },
];

export function Nav() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [navMode, setNavMode] = useState<NavMode>("top");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  useEffect(() => {
    const scrollContainer = document.getElementById("main-scroll-container");
    if (!scrollContainer) return;

    let lastScrollY = scrollContainer.scrollTop;

    const handleScroll = () => {
      const currentScrollY = scrollContainer.scrollTop;
      const scrollUp = currentScrollY < lastScrollY;
      const heroHeight = window.innerHeight;

      if (currentScrollY < 50) {
        setNavMode("top");
      } else if (currentScrollY < heroHeight * 0.5) {
        setNavMode("hidden");
        setIsLangMenuOpen(false);
      } else {
        if (scrollUp) {
          setNavMode("glass");
        } else {
          setNavMode("hidden");
          setIsLangMenuOpen(false);
        }
      }

      lastScrollY = currentScrollY > 0 ? currentScrollY : 0;
    };

    scrollContainer.addEventListener("scroll", handleScroll, { passive: true });
    // Check initial position on mount
    handleScroll();
    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    
    let targetId = id;
    if (id === "taxi" && window.innerWidth >= 1024) {
      targetId = "taxi-widget";
    }
    
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentLang =
    LANGUAGES.find((l) => l.code === i18n.language) || LANGUAGES[0];

  return (
    <>
      <nav
        className={`fixed top-4 left-0 right-0 z-50 flex justify-center transition-all duration-500 ease-in-out ${
          navMode === "glass" || navMode === "top"
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div 
          className={`w-[92%] lg:w-[1200px] flex items-center justify-between rounded-[20px] px-3 lg:px-6 py-1.5 lg:py-3 transition-all duration-300 relative ${
            navMode === "glass"
              ? "bg-white/10 hover:bg-white/15 backdrop-blur-xl saturate-[1.2] border border-white/10 shadow-lg"
              : "bg-transparent border-transparent"
          }`}
        >
          <div
            className="flex items-center gap-3 cursor-pointer pl-2 hover:opacity-80 transition-opacity"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img
              src="/images/logobwnuni.png"
              alt="Hedonist Logo"
              width={160}
              height={56}
              className="h-7 lg:h-8 w-auto object-contain drop-shadow-md"
            />
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            <button
              onClick={() => scrollTo("intro")}
              className="text-[13px] font-bold tracking-widest uppercase text-white/70 hover:text-white transition-colors"
            >
              {t("nav.about")}
            </button>
            <button
              onClick={() => scrollTo("fleet")}
              className="text-[13px] font-bold tracking-widest uppercase text-white/70 hover:text-white transition-colors"
            >
              {t("nav.fleet")}
            </button>
            <button
              onClick={() => scrollTo("excursions")}
              className="text-[13px] font-bold tracking-widest uppercase text-white/70 hover:text-white transition-colors"
            >
              {t("nav.excursions")}
            </button>
            <button
              onClick={() => scrollTo("taxi")}
              className="text-[13px] font-bold tracking-widest uppercase text-white/70 hover:text-white transition-colors"
            >
              {t("nav.transport")}
            </button>
          </div>

          <div className="flex items-center gap-0.5 lg:gap-4">
            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                aria-label="Toggle language menu"
                aria-expanded={isLangMenuOpen}
                className="flex items-center gap-2 px-3 lg:px-4 py-2 rounded-xl hover:bg-white/10 text-white transition-colors"
              >
                <Globe size={18} className="text-white" />
                <span className="text-xs lg:text-[13px] font-semibold tracking-wide">
                  {currentLang.label}
                </span>
              </button>
              {isLangMenuOpen && (
                <div className="absolute top-[calc(100%+8px)] right-0 bg-[#0B0C10]/95 backdrop-blur-xl border border-white/10 rounded-2xl py-2 px-1 flex flex-col gap-1 min-w-[80px] shadow-2xl">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        navigate("/" + lang.code, { replace: true });
                        setIsLangMenuOpen(false);
                      }}
                      className={`text-xs lg:text-[13px] font-bold tracking-wider px-4 py-2.5 rounded-xl hover:bg-white/10 transition-colors ${
                        i18n.language === lang.code
                          ? "text-[#D6BB8A] bg-white/5"
                          : "text-white"
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {/* Desktop Book Now */}
            <button
              onClick={() => scrollTo("booking-engine")}
              className="hidden lg:flex items-center justify-center bg-white text-[#0B0C10] px-6 py-2.5 rounded-full text-[13px] font-bold tracking-widest uppercase hover:bg-white/90 transition-colors shadow-lg"
            >
              {t("nav.book_now")}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open mobile menu"
              aria-expanded={isMobileMenuOpen}
              className="lg:hidden w-10 h-10 rounded-xl hover:bg-white/10 flex items-center justify-center transition-colors"
            >
              <Menu size={22} className="text-white" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Creamy */}
      <div
        className={`fixed inset-0 z-[60] bg-[#F6F3EE] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-y-auto ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b border-[#1A1817]/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#1A1817] rounded-full flex items-center justify-center p-2">
              <img
                src="/images/logobwnuni.png"
                alt="Hedonist Logo"
                width={80}
                height={80}
                className="w-full h-full object-contain brightness-0 invert"
              />
            </div>
            {/* Mobile Lang Selector */}
            <div className="flex bg-[#1A1817]/5 p-1 rounded-xl border border-[#1A1817]/10">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => navigate("/" + lang.code, { replace: true })}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                    i18n.language === lang.code
                      ? "bg-[#1A1817] text-[#F6F3EE]"
                      : "text-[#1A1817]/60 hover:text-[#1A1817]"
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close mobile menu"
            className="w-10 h-10 bg-[#1A1817]/5 rounded-xl border border-[#1A1817]/10 flex items-center justify-center text-[#1A1817] hover:bg-[#1A1817]/10 transition-colors shrink-0"
          >
            <X size={20} className="stroke-[2.5]" />
          </button>
        </div>
        <div className="flex flex-col p-8 gap-8 text-center mt-6 mb-8">
          <button
            onClick={() => scrollTo("intro")}
            className="text-4xl font-semibold tracking-tight text-[#1A1817]/50 hover:text-[#1A1817] transition-colors"
          >
            {t("nav.about")}
          </button>
          <button
            onClick={() => scrollTo("fleet")}
            className="text-4xl font-semibold tracking-tight text-[#1A1817]/50 hover:text-[#1A1817] transition-colors"
          >
            {t("nav.fleet")}
          </button>
          <button
            onClick={() => scrollTo("excursions")}
            className="text-4xl font-semibold tracking-tight text-[#1A1817]/50 hover:text-[#1A1817] transition-colors"
          >
            {t("nav.excursions")}
          </button>
          <button
            onClick={() => scrollTo("taxi")}
            className="text-4xl font-semibold tracking-tight text-[#1A1817]/50 hover:text-[#1A1817] transition-colors"
          >
            {t("nav.transport")}
          </button>
          <button
            onClick={() => scrollTo("booking-engine")}
            className="mt-8 bg-[#181615] text-[#F6F3EE] rounded-2xl py-5 text-sm font-bold tracking-wide shadow-xl active:scale-95 transition-transform"
          >
            {t("nav.book_now")}
          </button>
        </div>
      </div>
    </>
  );
}
