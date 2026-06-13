import React from "react";
import { ChevronUp, ArrowUp } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Hero() {
  const { t } = useTranslation();

  const handleScroll = () => {
    const introSection = document.getElementById("intro");
    if (introSection) {
      introSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-[#0B0C10] text-white font-sans">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source media="(min-width: 1024px)" srcSet="/images/Hedonist_final-31.webp" />
          <img
            src="/images/hedo_hero_cut_real.webp"
            alt="Hero Background"
            width={1920}
            height={1080}
            className="w-full h-full object-cover object-center"
          />
        </picture>
        {/* Soft gradient overlay for text readability and smooth section transition */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent via-50% to-[#0B0C10] to-90%" />
      </div>

      {/* Top Logo Area */}
      <div className="absolute top-12 sm:top-16 lg:top-24 left-0 right-0 w-full flex flex-col items-center justify-center z-10 pointer-events-none">
        <img
          src="/images/logobwnuni.png"
          alt="Hedonist Yachting"
          width={400}
          height={200}
          className="h-32 sm:h-40 lg:h-28 w-auto object-contain drop-shadow-xl"
        />
      </div>

      {/* Bottom Content Area */}
      <div className="absolute bottom-6 sm:bottom-10 lg:bottom-16 left-0 right-0 w-full px-6 sm:px-12 lg:px-24 z-10 flex items-end justify-between max-w-[1400px] mx-auto gap-4">
        <div className="flex flex-col items-start pb-4 lg:pb-0">
          <h1 className="text-[36px] sm:text-[44px] lg:text-[72px] lg:w-[800px] font-semibold tracking-tight mb-4 drop-shadow-md text-white text-left w-[300px] sm:w-[380px] leading-[1.1]">
            {t("hero.title")}
          </h1>

          <p className="text-white/90 text-[14px] sm:text-[16px] lg:text-[18px] leading-[22px] sm:leading-[26px] lg:leading-[32px] drop-shadow-sm mb-0 text-left w-[300px] sm:w-[380px] lg:w-[600px] font-medium pr-2">
            {t("hero.subtitle")}
          </p>
        </div>

        {/* Scroll Indicator */}
        <div
          onClick={handleScroll}
          className="flex flex-col items-center z-20 cursor-pointer group pb-4 flex-shrink-0"
        >
          <div className="flex flex-col items-center -space-y-2 opacity-60 group-hover:opacity-100 transition-opacity mb-2">
            <ChevronUp
              size={18}
              strokeWidth={2.5}
              className="text-white animate-pulse"
              style={{ animationDelay: "150ms" }}
            />
            <ChevronUp
              size={18}
              strokeWidth={2.5}
              className="text-white animate-pulse"
              style={{ animationDelay: "0ms" }}
            />
          </div>

          <div className="w-[42px] h-[124px] rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.25)] flex flex-col items-center p-1 transition-all duration-300 group-hover:-translate-y-1">
            <div
              className="flex-1 flex items-center justify-center font-sans font-semibold tracking-[0.2em] text-[8px] uppercase text-white opacity-95 pt-2"
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
              }}
            >
              {t("hero.start_now")}
            </div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-b from-[#C5A059] to-[#8B6B25] shadow-inner flex flex-shrink-0 items-center justify-center">
              <ArrowUp size={16} strokeWidth={2.5} className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
