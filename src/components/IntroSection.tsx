import React from "react";
import { ChevronDown } from "lucide-react";
import { BOATS, ALL_EXCURSIONS } from "../data";
import { useTranslation } from "react-i18next";

export function IntroSection() {
  const { t } = useTranslation();

  const handleScroll = () => {
    const fleetSection = document.getElementById("fleet");
    if (fleetSection) {
      fleetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative min-h-[100svh] w-full flex flex-col justify-center bg-[#0B0C10] text-white font-sans overflow-hidden py-24"
      id="intro"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/Hedonist_final-35.webp"
          alt="Intro Background"
          width={1920}
          height={1080}
          loading="lazy"
          className="w-full h-full object-cover object-center opacity-50"
        />
        {/* Cinematic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0C10] from-10% via-transparent via-50% to-[#0B0C10] to-90%" />
      </div>

      {/* Content Area */}
      <div className="absolute top-16 sm:top-24 left-0 right-0 w-full px-6 sm:px-12 z-10 flex flex-col justify-start max-w-7xl mx-auto gap-4 pointer-events-none">
        <div className="flex flex-col pb-4 pointer-events-auto w-full">
          <h2 className="text-[36px] sm:text-[44px] md:text-[52px] font-semibold tracking-tight mb-4 drop-shadow-md text-white text-right w-full leading-[1.1]">
            {t("intro.welcome.title")}
          </h2>

          <div className="flex flex-col gap-3 w-full">
            <p className="text-white/90 text-[14px] sm:text-[16px] leading-[22px] sm:leading-[26px] drop-shadow-sm mb-0 text-right w-full font-medium">
              {t("intro.welcome.text1")}{" "}
              <strong className="text-white font-semibold">
                {t("intro.welcome.text1_bold")}
              </strong>
              {t("intro.welcome.text1_end")}
            </p>
          </div>
        </div>
      </div>

      {/* Stats Area */}
      <div className="absolute top-1/2 -translate-y-1/2 w-full px-4 sm:px-12 z-10 flex flex-row flex-wrap sm:flex-nowrap justify-center items-center gap-4 sm:gap-8 max-w-7xl mx-auto pointer-events-auto left-0 right-0">
        <div className="flex flex-col items-center justify-center p-4 sm:p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-[24px] w-28 sm:w-40 shadow-xl">
          <span className="text-3xl sm:text-5xl font-semibold text-white drop-shadow-md mb-1 sm:mb-2 leading-none">
            {BOATS.length}
          </span>
          <span className="text-[10px] sm:text-xs text-[#D6BB8A] uppercase tracking-[0.15em] font-bold">
            {t("intro.welcome.boats")}
          </span>
        </div>
        <div className="flex flex-col items-center justify-center p-4 sm:p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-[24px] w-28 sm:w-40 shadow-xl">
          <span className="text-3xl sm:text-5xl font-semibold text-white drop-shadow-md mb-1 sm:mb-2 leading-none">
            {ALL_EXCURSIONS.length}
          </span>
          <span className="text-[10px] sm:text-xs text-[#D6BB8A] uppercase tracking-[0.15em] font-bold">
            {t("intro.welcome.trips")}
          </span>
        </div>
        <div className="flex flex-col items-center justify-center p-4 sm:p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-[24px] w-28 sm:w-40 shadow-xl">
          <span className="text-3xl sm:text-5xl font-semibold text-white drop-shadow-md mb-1 sm:mb-2 leading-none">
            50+
          </span>
          <span className="text-[10px] sm:text-xs text-[#D6BB8A] uppercase tracking-[0.15em] font-bold">
            {t("intro.welcome.locations")}
          </span>
        </div>
      </div>

      {/* Bottom Text Area */}
      <div className="absolute bottom-28 sm:bottom-32 left-0 right-0 w-full px-6 sm:px-12 z-10 flex flex-col justify-end max-w-7xl mx-auto pointer-events-none">
        <div className="pb-4 pointer-events-auto">
          <p className="text-white/90 text-[14px] sm:text-[16px] leading-[22px] sm:leading-[26px] drop-shadow-sm mb-0 text-left max-w-[300px] sm:max-w-[380px] font-medium">
            {t("intro.welcome.text2")}{" "}
            <strong className="text-white font-semibold">
              {t("intro.welcome.text2_bold1")}
            </strong>{" "}
            {t("intro.welcome.text2_mid1")}{" "}
            <strong className="text-white font-semibold">
              {t("intro.welcome.text2_bold2")}
            </strong>
            ,{t("intro.welcome.text2_mid2")}{" "}
            <strong className="text-white font-semibold">
              {t("intro.welcome.text2_bold3")}
            </strong>
            {t("intro.welcome.text2_end")}
          </p>
        </div>
      </div>

      <div
        onClick={handleScroll}
        className="absolute bottom-8 sm:bottom-12 left-0 right-0 w-full z-10 flex flex-col items-center justify-center cursor-pointer group"
      >
        <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-white/50 group-hover:text-[#D6BB8A] transition-colors duration-300 mb-2 sm:mb-3">
          {t("intro.welcome.check_fleet")}
        </span>
        <div className="flex flex-col items-center -space-y-2 opacity-60 group-hover:opacity-100 transition-opacity">
          <ChevronDown
            size={18}
            strokeWidth={2}
            className="text-[#D6BB8A] animate-pulse"
            style={{ animationDelay: "0ms" }}
          />
          <ChevronDown
            size={18}
            strokeWidth={2}
            className="text-[#D6BB8A] animate-pulse"
            style={{ animationDelay: "150ms" }}
          />
        </div>
      </div>
    </section>
  );
}
