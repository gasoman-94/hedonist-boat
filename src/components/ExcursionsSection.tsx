import React, { useState } from "react";
import { Boat, Service } from "../types";
import { useTranslation } from "react-i18next";
import {
  Plus,
  X,
  ArrowRight,
  Clock,
  Info,
  Check,
  ChevronLeft,
  MoreHorizontal,
  MapPin,
  Anchor,
  Compass,
  ChevronDown,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface Props {
  excursions: Service[];
  boats: Boat[];
  onBook: (boatId: string, serviceId: string) => void;
}

export function ExcursionsSection({ excursions, boats, onBook }: Props) {
  const { t } = useTranslation();
  const [selectedExcursion, setSelectedExcursion] = useState<Service | null>(
    null,
  );
  const [activeFilterId, setActiveFilterId] = useState("all");
  const [selectedPackageIndex, setSelectedPackageIndex] = useState<number>(0);

  const getBoatDetails = (boatId: string) => boats.find((b) => b.id === boatId);

  const getImageUrl = (id: string, index: number) => {
    const images = [
      "/images/Hedonist_final-38.webp",
      "/images/swimming.jpg",
      "/images/porec-panorama.webp",
      "/images/romantic-sunset-cruise.jpg",
      "/images/Gaia_dolphin.webp",
      "/images/Hedonist_final-31.webp",
      "/images/dolphins%20sunset.webp",
      "/images/shared%20dolphins.jpg",
      "/images/bachelorette.webp",
      "/images/wedding.jpg",
    ];
    return images[index % images.length];
  };

  const filters = [
    { id: "all", label: t("excursions.all_trips", "All Trips") },
    ...boats.map((b) => ({ id: b.id, label: b.name })),
  ];

  const activeIndex = filters.findIndex((f) => f.id === activeFilterId);

  const filteredExcursions =
    activeFilterId === "all"
      ? excursions
      : excursions.filter((e) => e.boatId === activeFilterId);

  return (
    <div id="experiences" className="w-full flex flex-col bg-[#0B0C10]">
      <section className="relative w-full min-h-[100svh] flex flex-col justify-start pt-20 sm:pt-24 lg:pt-32 overflow-hidden text-white font-sans px-0">
        {/* Background Image layer - Consistent with Hero */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/Hedonist_final-47.webp"
            alt="Excursions background"
            width={1920}
            height={1080}
            loading="lazy"
            className="w-full h-full object-cover object-center opacity-40 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0C10] from-10% via-transparent via-50% to-[#0B0C10] to-90%" />
        </div>

        {/* Content Area */}
        <div className="relative w-full px-6 sm:px-12 z-10 flex flex-col items-start justify-start max-w-7xl mx-auto">
          <div className="flex flex-col items-start pb-4 w-full max-w-[500px]">
            <span className="text-[#D6BB8A] font-bold tracking-[0.2em] uppercase text-[10px] sm:text-xs mb-2 sm:mb-4 block drop-shadow-md">
              {t("excursions.subtitle", "Curated Marine Experiences")}
            </span>
            <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-semibold tracking-tight mb-2 sm:mb-4 drop-shadow-md text-white text-left leading-[1.1]">
              {t("nav.excursions")}
            </h2>
            <p className="text-white/90 text-[14px] leading-[22px] drop-shadow-sm mb-0 text-left font-medium pr-2">
              {t(
                "excursions.description",
                "Let us take the helm while you simply sit back and enjoy. From intimate sunset cruises to exhilarating island-hopping adventures, our bespoke, predefined tours with seasoned skippers are tailored for those who want to discover the Adriatic in pure relaxation.",
              )}
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          onClick={() =>
            document
              .getElementById("experiences-grid")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer z-20 group"
        >
          <span className="text-[10px] sm:text-xs text-[#D6BB8A] uppercase tracking-[0.2em] font-bold group-hover:text-white transition-colors duration-300 drop-shadow-md">
            {t("excursions.explore")}
          </span>
          <div className="w-[1px] h-16 sm:h-24 bg-white/20 relative overflow-hidden group-hover:bg-white/30 transition-colors">
            <motion.div
              className="w-full h-1/2 bg-[#D6BB8A] absolute top-0"
              animate={{ y: ["-100%", "200%"] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
              }}
            />
          </div>
        </div>
      </section>

      <section
        className="snap-start w-full min-h-[100svh] flex flex-col justify-center pt-8 pb-20 lg:pt-12 lg:pb-32 overflow-hidden px-0 md:pl-8 lg:pl-12"
        id="experiences-grid"
      >
        <div className="w-full max-w-[1800px] mx-auto">
          {/* Filter Label */}
          <div className="w-full flex justify-center mb-6 relative z-10 pointer-events-none">
            <div className="flex items-center gap-2 text-white/40 bg-black/20 backdrop-blur-md border border-white/5 rounded-full px-4 py-1.5">
              <span className="uppercase tracking-[0.15em] text-[10px] font-bold">
                {t("excursions.filter_trips", "Filter trips by boat")}
              </span>
            </div>
          </div>

          {/* Animated Filter Arc */}
          <div className="relative w-full h-32 flex flex-col justify-start items-center overflow-hidden mb-2 sm:mb-4 pointer-events-none mt-2">
            {/* Compass background elements */}
            <div className="absolute top-[44px] w-[800px] h-[800px] border-[0.5px] border-white/15 rounded-full flex items-start justify-center pt-[2px] z-0">
              <div className="w-[780px] h-[780px] border-[0.5px] border-white/10 rounded-full border-dashed" />
            </div>

            {/* Center windrose star */}
            <svg
              className="absolute top-[32px] w-6 h-6 text-[#D6BB8A] z-10 drop-shadow-[0_0_8px_rgba(214,187,138,0.6)]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0l-3 10-9 2 9 2 3 10 3-10 9-2-9-2-3-10z" />
            </svg>

            <div className="relative w-full max-w-3xl h-full flex justify-center items-start pt-[50px] pointer-events-auto z-20">
              {filters.map((filter, i) => {
                const diff = i - activeIndex;
                const xOffset = diff * 120; // spread items horizontally
                const yOffset = Math.abs(diff) * Math.abs(diff) * 3; // structural curve down
                const rotate = diff * 8; // rotate along curve

                const isCenter = diff === 0;
                const scale = isCenter ? 1 : 0.85;
                const opacity = isCenter ? 1 : 0.4;
                const zIndex = 10 - Math.abs(diff);

                return (
                  <motion.div
                    key={filter.id}
                    className="absolute flex flex-col items-center cursor-pointer select-none origin-bottom"
                    onClick={() => setActiveFilterId(filter.id)}
                    animate={{
                      x: xOffset,
                      y: yOffset,
                      rotate,
                      scale,
                      opacity,
                      zIndex,
                    }}
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  >
                    {/* Compass Ticks for items */}
                    <div
                      className={`w-[2px] h-3 mb-2 rounded-full transition-colors duration-300 ${isCenter ? "bg-[#D6BB8A]" : "bg-white/20"}`}
                    />
                    <span
                      className={`text-[12px] sm:text-[13px] ${isCenter ? "text-[#D6BB8A] font-bold" : "text-white/70 font-medium"} whitespace-nowrap tracking-widest uppercase`}
                    >
                      {filter.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* Fade out edges */}
            <div className="absolute inset-y-0 left-0 w-[15%] sm:w-1/4 bg-gradient-to-r from-[#0B0C10] to-transparent z-30" />
            <div className="absolute inset-y-0 right-0 w-[15%] sm:w-1/4 bg-gradient-to-l from-[#0B0C10] to-transparent z-30" />
          </div>

          <div
            className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory pb-12 px-4 md:px-0 md:pr-8 lg:pr-12 no-scrollbar scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {filteredExcursions.map((excursion, _index) => {
              const originalIndex = excursions.findIndex(
                (e) => e.id === excursion.id,
              );
              const price =
                excursion.pricing[0].minPrice || excursion.pricing[0].amount;
              const priceSuffix =
                excursion.pricing[0].type === "hourly" ? "€/h" : "€";
              const prefix = excursion.pricing.length > 1 ? "From " : "";
              const formattedPrice = `${prefix}${price}${priceSuffix}`;

              return (
                <div
                  key={excursion.id}
                  className="flex-shrink-0 relative w-[85vw] sm:w-[340px] md:w-[360px] h-[600px] sm:h-[640px] rounded-[32px] overflow-hidden bg-zinc-900 flex flex-col shadow-lg mx-auto sm:max-w-none max-w-[360px] snap-center sm:snap-start cursor-pointer group"
                  onClick={() => {
                    setSelectedExcursion(excursion);
                    setSelectedPackageIndex(0);
                  }}
                >
                  {/* Background Image filling the card */}
                  <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
                    <img
                      src={getImageUrl(excursion.id, originalIndex)}
                      alt={excursion.title}
                      width={600}
                      height={800}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    {/* Subtle vignette on top */}
                    <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-black/40 to-transparent" />
                    {/* Bottom Vignette for text contrast */}
                    <div className="absolute bottom-0 inset-x-0 h-2/3 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  </div>

                  {/* Glassmorphic Content Box */}
                  <div className="relative z-10 flex flex-col justify-end h-full p-3 sm:p-4 pb-4">
                    <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-[24px] p-4 flex flex-col justify-between shadow-2xl transition-transform duration-300">
                      <div>
                        {/* Title & Price Row */}
                        <div className="flex justify-between items-start mb-2 gap-3">
                          <h3 className="text-lg sm:text-[20px] font-bold text-white tracking-tight leading-[1.2]">
                            {t(`trips.${excursion.id}.title`, excursion.title)}
                          </h3>
                          <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-full px-3 h-[24px] flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-[#D6BB8A] text-[11px] font-medium tracking-wide leading-none translate-y-[0.5px]">
                              {formattedPrice}
                            </span>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-white/80 text-[12px] leading-[1.4] line-clamp-2 mb-3 pr-2 font-medium">
                          {t(
                            `trips.${excursion.id}.description`,
                            excursion.description,
                          ) ||
                            "Experience the beauty of the coast with this carefully curated excursion."}
                        </p>

                        {/* Tags Row */}
                        <div className="flex flex-wrap gap-2 mb-3">
                          {getBoatDetails(excursion.boatId) && (
                            <div className="bg-white/10 backdrop-blur-md rounded-full px-2 py-1 flex items-center gap-1.5 border border-white/10">
                              <Anchor size={10} className="text-white" />
                              <span className="text-white text-[10px] font-medium tracking-wide">
                                {getBoatDetails(excursion.boatId)?.name}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2 w-full mt-auto">
                        <button
                          className="flex-1 bg-white hover:bg-gray-100 text-[#1A1A1A] text-[13px] font-bold uppercase rounded-[14px] py-2 transition-colors shadow-md"
                          onClick={(e) => {
                            e.stopPropagation();
                            onBook(excursion.boatId, excursion.id);
                          }}
                        >
                          {t("nav.book_now")}
                        </button>
                        <button
                          className="flex-[0.6] min-w-max px-3 bg-white/10 hover:bg-white/20 text-white text-[13px] font-bold rounded-[14px] py-2 transition-colors border border-white/20 backdrop-blur-md"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedExcursion(excursion);
                            setSelectedPackageIndex(0);
                          }}
                        >
                          {t("fleet.read_more", "Read more")}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedExcursion && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-6 pb-0 sm:pb-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedExcursion(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="relative w-full h-[100dvh] sm:max-w-[420px] sm:h-auto sm:max-h-[85vh] bg-[#111111] sm:rounded-[40px] overflow-hidden shadow-2xl flex flex-col mx-auto border-0 sm:border sm:border-white/10 z-10 overscroll-y-contain"
            >
              {/* Sticky Header Buttons */}
              <div className="absolute top-0 inset-x-0 flex justify-between items-center p-6 pt-12 sm:pt-6 z-20 pointer-events-none">
                <button
                  onClick={() => setSelectedExcursion(null)}
                  aria-label="Close excursion details"
                  className="w-10 h-10 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-transform active:scale-95 pointer-events-auto shadow-md"
                >
                  <ChevronLeft size={20} strokeWidth={2.5} className="mr-0.5" />
                </button>
                <button aria-label="More options" className="w-10 h-10 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-transform active:scale-95 pointer-events-auto shadow-md pointer-events-none">
                  <MoreHorizontal size={20} strokeWidth={2.5} />
                </button>
              </div>

              <div className="relative z-10 flex flex-col h-full overflow-y-auto no-scrollbar">
                <div className="relative w-full h-[60vh] sm:h-[480px] shrink-0">
                  <img
                    src={getImageUrl(
                      selectedExcursion.id,
                      excursions.indexOf(selectedExcursion),
                    )}
                    alt={selectedExcursion.title}
                    width={800}
                    height={800}
                    loading="lazy"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-black/50 via-black/20 to-transparent pointer-events-none" />
                  <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#111111] to-transparent pointer-events-none" />
                </div>

                <div className="px-6 sm:px-8 pb-8 flex-shrink-0 bg-[#111111] -mt-6 pt-8 rounded-t-3xl relative z-10">
                  {/* Pill Content */}
                  <div className="flex items-center mb-4">
                    <div className="bg-white/10 backdrop-blur-md rounded-full px-3 py-1.5 flex items-center gap-2 border border-white/10">
                      <span className="text-white text-[12px] font-semibold flex items-center gap-1.5">
                        <span className="text-sm border-r border-white/20 pr-1.5 py-0.5">
                          🇭🇷 Croatia
                        </span>
                        <span className="text-white/80">
                          {selectedExcursion.pricing[0].minPrice ||
                            selectedExcursion.pricing[0].amount}
                          {selectedExcursion.pricing[0].type === "hourly"
                            ? "€/h"
                            : "€"}
                        </span>
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="text-[28px] sm:text-[32px] font-bold text-white tracking-tight mb-3 leading-[1.1]">
                    {t(
                      `trips.${selectedExcursion.id}.title`,
                      selectedExcursion.title,
                    )}
                  </h2>

                  {/* Location & Rating */}
                  <div className="flex flex-wrap items-center gap-2 mb-6">
                    <MapPin size={14} className="text-white/60" />
                    <span className="text-white/80 text-[13px] font-medium">
                      Istrian Coast
                    </span>
                    {getBoatDetails(selectedExcursion.boatId) && (
                      <>
                        <div className="w-1 h-1 rounded-full bg-white/30 mx-1" />
                        <Anchor size={14} className="text-white/60" />
                        <span className="text-white/80 text-[13px] font-medium">
                          {getBoatDetails(selectedExcursion.boatId)?.name}
                        </span>
                      </>
                    )}
                  </div>

                  <div className="flex flex-col gap-6 mb-8 font-medium pr-2 text-white/70 text-[14px]">
                    {selectedExcursion.highlights &&
                      selectedExcursion.highlights.length > 0 && (
                        <div>
                          <h3 className="text-white text-[16px] font-bold mb-2">
                            {t("fleet.highlights", "Highlights")}
                          </h3>
                          <ul className="list-disc pl-5 space-y-1">
                            {selectedExcursion.highlights.map((h, index) => (
                              <li key={index}>
                                {t(
                                  `trips.${selectedExcursion.id}.highlights.${index}`,
                                  h,
                                )}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                    {selectedExcursion.fullDescription && (
                      <div>
                        <h3 className="text-white text-[16px] font-bold mb-2">
                          {t("fleet.full_description", "Full description")}
                        </h3>
                        <div className="space-y-2 whitespace-pre-wrap">
                          {t(
                            `trips.${selectedExcursion.id}.fullDescription`,
                            selectedExcursion.fullDescription,
                          )}
                        </div>
                      </div>
                    )}

                    {!selectedExcursion.fullDescription && (
                      <p className="leading-[1.6]">
                        {t(
                          `trips.${selectedExcursion.id}.description`,
                          selectedExcursion.description,
                        )}
                      </p>
                    )}

                    {selectedExcursion.hourlyPackages &&
                      selectedExcursion.hourlyPackages.length > 0 && (
                        <div className="mb-2 bg-white/5 border border-white/10 rounded-2xl p-5 mt-2">
                          <h3 className="text-white text-[16px] font-bold mb-4">
                            Select Duration
                          </h3>

                          <div className="flex items-center gap-4 mb-6">
                            <button
                              aria-label="Previous duration package"
                              onClick={() =>
                                setSelectedPackageIndex(
                                  Math.max(0, selectedPackageIndex - 1),
                                )
                              }
                              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0 hover:bg-white/20 transition-colors disabled:opacity-30 disabled:hover:bg-white/10"
                              disabled={selectedPackageIndex <= 0}
                            >
                              <ChevronLeft size={20} />
                            </button>
                            <div className="flex-1 text-center">
                              <div className="text-[28px] font-bold text-white leading-none mb-1">
                                {selectedExcursion.hourlyPackages[
                                  selectedPackageIndex
                                ]?.durationLabel ||
                                  `${selectedExcursion.hourlyPackages[selectedPackageIndex]?.hours} `}
                                {!selectedExcursion.hourlyPackages[
                                  selectedPackageIndex
                                ]?.durationLabel && (
                                  <span className="text-lg text-white/60">
                                    hours
                                  </span>
                                )}
                              </div>
                              <div className="text-sm font-medium text-[#D6BB8A]">
                                {
                                  selectedExcursion.hourlyPackages[
                                    selectedPackageIndex
                                  ]?.price
                                }
                                €
                              </div>
                            </div>
                            <button
                              aria-label="Next duration package"
                              onClick={() =>
                                setSelectedPackageIndex(
                                  Math.min(
                                    selectedExcursion.hourlyPackages!.length -
                                      1,
                                    selectedPackageIndex + 1,
                                  ),
                                )
                              }
                              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0 hover:bg-white/20 transition-colors disabled:opacity-30 disabled:hover:bg-white/10"
                              disabled={
                                selectedPackageIndex >=
                                selectedExcursion.hourlyPackages.length - 1
                              }
                            >
                              <ChevronLeft size={20} className="rotate-180" />
                            </button>
                          </div>

                          {(() => {
                            const pkg =
                              selectedExcursion.hourlyPackages[
                                selectedPackageIndex
                              ];
                            if (!pkg) return null;
                            return (
                              <div className="space-y-4 pt-4 border-t border-white/10">
                                <div>
                                  <div className="text-white/60 text-[11px] font-semibold uppercase tracking-wider mb-1">
                                    Package Name
                                  </div>
                                  <div className="text-white text-[15px] font-semibold">
                                    {pkg.name}
                                  </div>
                                </div>
                                <div>
                                  <div className="text-white/60 text-[11px] font-semibold uppercase tracking-wider mb-1">
                                    {t("intro.welcome.locations", "Locations")}
                                  </div>
                                  <div className="text-white/90 text-[14px] leading-relaxed">
                                    {t(
                                      `trips.${selectedExcursion.id}.packages.${selectedPackageIndex}.locations`,
                                      pkg.locations,
                                    )}
                                  </div>
                                </div>
                                <div>
                                  <div className="text-white/60 text-[11px] font-semibold uppercase tracking-wider mb-2">
                                    Inclusions
                                  </div>
                                  <ul className="space-y-2">
                                    {pkg.inclusions.map((inc, i) => (
                                      <li
                                        key={i}
                                        className="flex gap-2.5 items-start text-[14px] text-white/90"
                                      >
                                        <Check
                                          size={16}
                                          strokeWidth={2.5}
                                          className="text-[#D6BB8A] mt-[2px] shrink-0"
                                        />
                                        <span>
                                          {t(
                                            `trips.${selectedExcursion.id}.packages.${selectedPackageIndex}.inclusions.${i}`,
                                            inc,
                                          )}
                                        </span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            );
                          })()}
                        </div>
                      )}

                    {selectedExcursion.availableMonths && (
                      <div className="grid grid-cols-2 gap-4 mt-2 mb-2 p-5 bg-white/5 border border-white/10 rounded-2xl">
                        <div>
                          <div className="text-white/60 text-[11px] font-semibold uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                            <Clock size={12} /> Months
                          </div>
                          <div className="text-white text-[13px] font-medium">
                            {selectedExcursion.availableMonths}
                          </div>
                        </div>
                        <div>
                          <div className="text-white/60 text-[11px] font-semibold uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                            <Clock size={12} /> Weekdays
                          </div>
                          <div className="text-white text-[13px] font-medium">
                            {selectedExcursion.availableWeekdays}
                          </div>
                        </div>
                        <div className="col-span-2 mt-2 pt-4 border-t border-white/10">
                          <div className="text-white/60 text-[11px] font-semibold uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                            <Info size={12} /> Languages
                          </div>
                          <div className="text-white text-[13px] font-medium">
                            {selectedExcursion.activityLanguages?.join(", ")}
                          </div>
                        </div>
                      </div>
                    )}

                    {selectedExcursion.includes &&
                      selectedExcursion.includes.length > 0 && (
                        <div>
                          <h3 className="text-white text-[16px] font-bold mb-3">
                            {t("fleet.includes", "Includes")}
                          </h3>
                          <ul className="space-y-2">
                            {selectedExcursion.includes.map((h, index) => (
                              <li
                                key={index}
                                className="flex gap-3 items-start"
                              >
                                <Check
                                  size={18}
                                  className="text-[#D6BB8A] mt-0.5 shrink-0"
                                />
                                <span className="leading-tight pt-0.5">
                                  {t(
                                    `trips.${selectedExcursion.id}.includes.${index}`,
                                    h,
                                  )}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                    {selectedExcursion.meetingPoint && (
                      <div>
                        <h3 className="text-white text-[16px] font-bold mb-2">
                          Meeting point
                        </h3>
                        <div className="flex gap-3 items-start">
                          <MapPin
                            size={18}
                            className="text-white/60 mt-0.5 shrink-0"
                          />
                          <span className="leading-tight pt-0.5">
                            {selectedExcursion.meetingPoint}
                          </span>
                        </div>
                      </div>
                    )}

                    {selectedExcursion.whatToBring &&
                      selectedExcursion.whatToBring.length > 0 && (
                        <div>
                          <h3 className="text-white text-[16px] font-bold mb-2">
                            {t("fleet.what_to_bring", "What to bring")}
                          </h3>
                          <ul className="list-disc pl-5 space-y-1">
                            {selectedExcursion.whatToBring.map((h, index) => (
                              <li key={index}>
                                {t(
                                  `trips.${selectedExcursion.id}.whatToBring.${index}`,
                                  h,
                                )}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                    {selectedExcursion.knowBeforeYouGo &&
                      selectedExcursion.knowBeforeYouGo.length > 0 && (
                        <div>
                          <h3 className="text-white text-[16px] font-bold mb-3">
                            {t(
                              "fleet.know_before_you_go",
                              "Know before you go",
                            )}
                          </h3>
                          <ul className="space-y-3">
                            {selectedExcursion.knowBeforeYouGo.map(
                              (h, index) => (
                                <li
                                  key={index}
                                  className="flex gap-3 items-start"
                                >
                                  <Info
                                    size={18}
                                    className="text-white/60 mt-0.5 shrink-0"
                                  />
                                  <span className="leading-tight pt-0.5">
                                    {t(
                                      `trips.${selectedExcursion.id}.knowBeforeYouGo.${index}`,
                                      h,
                                    )}
                                  </span>
                                </li>
                              ),
                            )}
                          </ul>
                        </div>
                      )}
                  </div>

                  {/* Book Action */}
                  <button
                    className="w-full bg-white hover:bg-gray-100 text-[#1A1A1A] font-bold text-[15px] uppercase py-[18px] rounded-full shadow-lg active:scale-95 transition-transform"
                    onClick={() => {
                      onBook(selectedExcursion.boatId, selectedExcursion.id);
                      setSelectedExcursion(null);
                    }}
                  >
                    {t("nav.book_now", "BOOK NOW")}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
