import React, { useState } from "react";
import { Boat, Service } from "../types";
import { useTranslation } from "react-i18next";
import {
  Star,
  Anchor,
  Users,
  Ruler,
  Check,
  Plus,
  X,
  ArrowLeft,
  Calendar,
  Zap,
  Fuel,
  Droplets,
  BedDouble,
  ArrowLeftRight,
  ArrowDownToLine,
  Gauge,
} from "lucide-react";
import { motion, PanInfo, AnimatePresence } from "motion/react";

interface Props {
  boats: Boat[];
  onBook: (boatId: string, serviceId: string) => void;
}

export function FleetSection({ boats, onBook }: Props) {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedBoat, setSelectedBoat] = useState<Boat | null>(null);
  const [showAllAmenities, setShowAllAmenities] = useState<boolean>(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null,
  );

  const handleDragEnd = (_e: any, info: PanInfo) => {
    const threshold = 50;
    // Swipe left or up
    if (info.offset.x < -threshold || info.offset.y < -threshold) {
      setCurrentIndex((prev) => (prev + 1) % boats.length);
    }
    // Swipe right or down
    else if (info.offset.x > threshold || info.offset.y > threshold) {
      setCurrentIndex((prev) => (prev - 1 + boats.length) % boats.length);
    }
  };

  const getMinPrice = (boat: Boat) => {
    let min = Infinity;
    boat.services.forEach((service) => {
      service.pricing.forEach((p) => {
        const cost = p.minPrice || p.amount;
        if (cost < min) min = cost;
      });
    });
    return min === Infinity ? 0 : min;
  };

  return (
    <section
      className="h-full w-full flex flex-col justify-center pb-16 pt-16 px-4"
      id="fleet"
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col justify-center h-full max-h-[850px] relative">
        <div className="mb-8 px-2 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-3 tracking-tight">
              {t("nav.fleet")}
            </h2>
            <p className="text-white/70 text-sm md:text-base max-w-lg leading-[22px]">
              {t("hero.subtitle")}
            </p>
          </div>
        </div>

        <div
          className="grid w-full mt-10 max-w-sm md:max-w-2xl mx-auto"
          style={{ gridTemplateAreas: '"stack"' }}
        >
          {boats.map((boat, index) => {
            let offset = index - currentIndex;
            if (offset > 1) offset -= boats.length;
            if (offset < -1) offset += boats.length;

            const isCenter = offset === 0;
            const scale = isCenter ? 1 : 0.85;
            const x = `${offset * 60}%`;
            const opacity = isCenter ? 1 : 0.6;
            const zIndex = 10 - Math.abs(offset);

            return (
              <motion.div
                key={boat.id}
                className="relative rounded-[32px] md:rounded-[40px] overflow-hidden border border-white/10 w-full mb-8 origin-center transform-gpu aspect-[3/4] md:aspect-[4/5] min-h-[450px]"
                style={{ gridArea: "stack", zIndex }}
                drag={isCenter ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.6}
                onDragEnd={handleDragEnd}
                initial={false}
                animate={{
                  scale: scale,
                  x: x,
                  opacity: opacity,
                  boxShadow: isCenter
                    ? "0 30px 60px -10px rgba(0,0,0,0.6), 0 0 60px rgba(255,255,255,0.05)"
                    : "0 20px 40px -10px rgba(0,0,0,0.3)",
                  pointerEvents: isCenter ? "auto" : "none",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {/* Background Image */}
                <img
                  src={boat.imageUrl}
                  alt={boat.name}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/10 pointer-events-none" />

                {/* Pills at the top */}
                <div className="absolute top-6 left-6 right-6 flex justify-between items-start pointer-events-none gap-2">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 bg-black/40 backdrop-blur-md rounded-full border border-white/20 text-white text-xs font-semibold shadow-xl whitespace-nowrap">
                      {t("fleet.capacity", { count: boat.capacity })}
                    </span>
                  </div>
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex flex-col gap-4 pointer-events-none">
                  <div>
                    <h3 className="text-3xl font-semibold text-white tracking-tight drop-shadow-lg leading-tight">
                      {boat.name}
                    </h3>
                    <p className="text-white/80 text-sm font-medium mt-2 drop-shadow-md line-clamp-2 max-w-sm">
                      {boat.tagline}
                    </p>
                  </div>

                  <div className="flex gap-3 pointer-events-auto mt-2">
                    <button
                      onClick={() => {
                        setSelectedBoat(boat);
                        setShowAllAmenities(false);
                      }}
                      className="flex-1 bg-white/10 backdrop-blur-md border border-white/20 text-white py-3 rounded-full text-xs font-semibold tracking-wide transition-colors hover:bg-white/20 shadow-xl"
                    >
                      {t("fleet.read_more", "READ MORE").toUpperCase()}
                    </button>
                    <button
                      onClick={() => onBook(boat.id, boat.services[0]?.id)}
                      className="flex-1 bg-white text-[#181615] py-3 rounded-full text-xs font-bold tracking-wide shadow-xl hover:bg-gray-100 transition-colors"
                    >
                      {t("nav.book_now").toUpperCase()}
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="flex justify-center items-center gap-2.5 mt-8">
          {boats.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-[#E8E4DF]"
                  : "bg-[#E8E4DF]/20 hover:bg-[#E8E4DF]/40"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedBoat && (
          <div className="fixed inset-0 z-[100] flex flex-col bg-[#0B0C10] overflow-hidden font-sans">
            <motion.div
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute inset-0 flex flex-col w-full h-full bg-[#0B0C10]"
            >
              <div className="flex-1 overflow-y-auto pb-40">
                <div className="relative w-full h-[55vh] md:h-[60vh] flex-shrink-0">
                  <img
                    src={selectedBoat.imageUrl}
                    alt={selectedBoat.name}
                    width={1000}
                    height={800}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover rounded-b-[40px] md:rounded-b-[48px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 rounded-b-[40px] md:rounded-b-[48px]" />

                  <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-20">
                    <button
                      onClick={() => setSelectedBoat(null)}
                      aria-label="Close boat details"
                      className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                    >
                      <ArrowLeft className="w-5 h-5" />
                    </button>
                    <span className="font-medium text-lg drop-shadow-md tracking-wide text-white">
                      {t("fleet.overview", "Overview")}
                    </span>
                    <div className="w-12 h-12" />{" "}
                    {/* Empty div to maintain centered title */}
                  </div>
                </div>

                <div className="px-6 py-6 max-w-4xl mx-auto w-full">
                  <h3 className="text-[28px] md:text-[36px] font-semibold tracking-tight text-white mb-3 leading-tight">
                    {selectedBoat.name}
                  </h3>

                  <p className="text-white/70 font-medium text-[14px] leading-[20px] mb-8">
                    {t(
                      `fleet.boats.${selectedBoat.id}.description`,
                      selectedBoat.description,
                    )}
                  </p>

                  <div className="mb-8">
                    <div className="flex justify-between items-center mb-5">
                      <h4 className="text-lg font-medium text-white flex gap-2">
                        {t("fleet.specs_title", "Specifications")}
                      </h4>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                      <div className="bg-[#1A1A1A] rounded-[24px] p-4 md:p-5 flex flex-col items-center justify-center gap-1.5 border border-white/5 shadow-md text-center hover:border-white/10 transition-colors group">
                        <div className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center bg-[#D6BB8A]/10 group-hover:bg-[#D6BB8A]/20 transition-colors mb-2">
                          <Users
                            className="w-5 h-5 text-[#D6BB8A]"
                            strokeWidth={1.5}
                          />
                        </div>
                        <span className="text-white/40 font-medium text-[11px] md:text-xs uppercase tracking-widest leading-none mb-1">
                          {t("fleet.specs.Capacity", "Capacity")}
                        </span>
                        <span className="text-white/90 font-semibold text-sm md:text-base leading-none">
                          {selectedBoat.capacity}{" "}
                          {t("fleet.guests_word", "Guests")}
                        </span>
                      </div>
                      {selectedBoat.specs.map((spec, i) => {
                        const label = spec.label.toLowerCase();
                        let Icon = Zap;
                        if (label.includes("length")) Icon = Ruler;
                        else if (label.includes("type")) Icon = Anchor;
                        else if (
                          label.includes("beam") ||
                          label.includes("width")
                        )
                          Icon = ArrowLeftRight;
                        else if (label.includes("draft"))
                          Icon = ArrowDownToLine;
                        else if (label.includes("engine")) Icon = Gauge;
                        else if (label.includes("fuel")) Icon = Fuel;
                        else if (label.includes("water")) Icon = Droplets;
                        else if (
                          label.includes("bed") ||
                          label.includes("cabin")
                        )
                          Icon = BedDouble;

                        return (
                          <div
                            key={spec.label}
                            className="bg-[#1A1A1A] rounded-[24px] p-4 md:p-5 flex flex-col items-center justify-center gap-1.5 border border-white/5 shadow-md text-center hover:border-white/10 transition-colors group"
                          >
                            <div className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center bg-[#D6BB8A]/10 group-hover:bg-[#D6BB8A]/20 transition-colors mb-2">
                              <Icon
                                className="w-5 h-5 text-[#D6BB8A]"
                                strokeWidth={1.5}
                              />
                            </div>
                            <span className="text-white/40 font-medium text-[11px] md:text-xs uppercase tracking-widest leading-none mb-1">
                              {t(`fleet.specs.${spec.label}`, spec.label)}
                            </span>
                            <span className="text-white/90 font-semibold text-sm md:text-base leading-none">
                              {spec.value}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {selectedBoat.included &&
                    selectedBoat.included.length > 0 && (
                      <div className="mb-8">
                        <h4 className="text-lg font-medium text-white flex gap-2 mb-4">
                          {t(
                            "fleet.premium_amenities",
                            "Premium Amenities",
                          ).split(" ")[0] || "Premium"}{" "}
                          <span className="text-[#D6BB8A]">
                            {t("fleet.premium_amenities", "Premium Amenities")
                              .split(" ")
                              .slice(1)
                              .join(" ") || "Amenities"}
                          </span>
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {(showAllAmenities
                            ? selectedBoat.included
                            : selectedBoat.included.slice(0, 10)
                          ).map((item, i) => (
                            <div key={i} className="flex items-center gap-3">
                              <div className="w-6 h-6 rounded-full bg-[#1A1A1A] border border-white/10 flex items-center justify-center flex-shrink-0">
                                <Check className="w-3.5 h-3.5 text-[#D6BB8A]" />
                              </div>
                              <span className="text-white/80 text-sm">
                                {t(`fleet.amenities.${item}`, item)}
                              </span>
                            </div>
                          ))}
                        </div>
                        {selectedBoat.included.length > 10 && (
                          <div className="mt-4 flex justify-center">
                            <button
                              onClick={() =>
                                setShowAllAmenities(!showAllAmenities)
                              }
                              className="text-[#D6BB8A] text-sm font-semibold hover:text-[#E5CDA3] transition-colors"
                            >
                              {showAllAmenities
                                ? t(
                                    "fleet.show_fewer_amenities",
                                    "Show fewer amenities",
                                  )
                                : t(
                                    "fleet.read_all_amenities",
                                    "Read all amenities",
                                  )}
                            </button>
                          </div>
                        )}
                      </div>
                    )}

                  {selectedBoat.gallery && selectedBoat.gallery.length > 0 && (
                    <div className="mb-8">
                      <h4 className="text-lg font-medium text-white flex gap-2 mb-4">
                        {t("fleet.image_gallery", "Image Gallery").split(
                          " ",
                        )[0] || "Image"}{" "}
                        <span className="text-[#D6BB8A]">
                          {t("fleet.image_gallery", "Image Gallery")
                            .split(" ")
                            .slice(1)
                            .join(" ") || "Gallery"}
                        </span>
                      </h4>
                      <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-4 -mx-6 px-6 snap-x snap-mandatory">
                        {selectedBoat.gallery.map((imgUrl, idx) => (
                          <div
                            key={idx}
                            onClick={() => setSelectedImageIndex(idx)}
                            className="w-[280px] h-[200px] sm:w-[360px] sm:h-[240px] rounded-[24px] overflow-hidden flex-shrink-0 shadow-lg snap-center border border-white/5 cursor-pointer"
                          >
                            <img
                              src={imgUrl}
                              alt={`${selectedBoat.name} gallery image ${idx + 1}`}
                              loading="lazy"
                              width={400}
                              height={300}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedBoat.pricingDetails && (
                    <div className="mb-24">
                      <h4 className="text-[28px] font-semibold tracking-tight text-white mb-6">
                        {t("fleet.rates_fees", "Rates & Fees")}
                      </h4>

                      <div className="w-full border border-white/10 rounded-[24px] overflow-hidden bg-[#1A1A1A] shadow-xl">
                        {/* Table Header */}
                        {selectedBoat.pricingDetails.hourly ? (
                          <>
                            {/* Hourly Pricing Implementation */}
                            <div className="grid grid-cols-2 bg-white/5 px-4 sm:px-6 py-4 border-b border-white/5">
                              <div className="text-white/40 text-[11px] font-bold uppercase tracking-widest">
                                {t("fleet.service", "Service")}
                              </div>
                              <div className="text-white/40 text-[11px] font-bold uppercase tracking-widest text-right">
                                {t("fleet.rate", "Rate")}
                              </div>
                            </div>
                            {/* Boat Rental */}
                            <div className="grid grid-cols-2 px-4 sm:px-6 py-5 border-b border-white/5 items-center group hover:bg-white/[0.02] transition-colors">
                              <div>
                                <span className="block text-white font-medium text-sm md:text-base">
                                  {t("fleet.hourly_charter", "Hourly Charter")}
                                </span>
                                <span className="block text-white/50 text-[11px] sm:text-xs mt-1">
                                  {t("fleet.base_rate_per_hour", "Base rate per hour")}
                                </span>
                              </div>
                              <div className="text-right text-white font-semibold text-sm leading-5">
                                €{selectedBoat.pricingDetails.hourly}/h
                              </div>
                            </div>

                            {/* Skipper Service */}
                            <div className="grid grid-cols-2 px-4 sm:px-6 py-5 border-b border-white/5 items-center group hover:bg-white/[0.02] transition-colors">
                              <div>
                                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                                  <span className="block text-white font-medium text-sm md:text-base">
                                    {t("fleet.skipper", "Skipper")}
                                  </span>
                                  <span className="inline-flex w-fit px-2 py-0.5 rounded-full bg-[#D6BB8A]/20 text-[#D6BB8A] text-[9px] sm:text-[10px] font-bold tracking-wide uppercase">
                                    {t("fleet.included", "Included")}
                                  </span>
                                </div>
                                <span className="block text-white/50 text-[11px] sm:text-xs mt-1">
                                  {t(
                                    "fleet.professional_captain",
                                    "Professional captain",
                                  )}
                                </span>
                              </div>
                              <div className="text-right">
                                <span className="text-white/80 font-medium text-sm leading-5">
                                  {t(
                                    "fleet.included_in_price",
                                    "Included in price",
                                  )}
                                </span>
                              </div>
                            </div>

                            {/* Sailor / Tour Guide */}
                            {selectedBoat.pricingDetails.sailorIncluded && (
                              <div className="grid grid-cols-2 px-4 sm:px-6 py-5 border-b border-white/5 items-center group hover:bg-white/[0.02] transition-colors">
                                <div>
                                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                                    <span className="block text-white font-medium text-sm md:text-base">
                                      {t(
                                        "fleet.sailor_guide",
                                        "Sailor / Tour Guide",
                                      )}
                                    </span>
                                    <span className="inline-flex w-fit px-2 py-0.5 rounded-full bg-[#D6BB8A]/20 text-[#D6BB8A] text-[9px] sm:text-[10px] font-bold tracking-wide uppercase">
                                      {t("fleet.included", "Included")}
                                    </span>
                                  </div>
                                  <span className="block text-white/50 text-[11px] sm:text-xs mt-1">
                                    {t(
                                      "fleet.experienced_sailor",
                                      "Experienced sailor & guide",
                                    )}
                                  </span>
                                </div>
                                <div className="text-right">
                                  <span className="text-white/80 font-medium text-sm leading-5">
                                    {t(
                                      "fleet.included_in_price",
                                      "Included in price",
                                    )}
                                  </span>
                                </div>
                              </div>
                            )}

                            {/* Fuel Cost */}
                            <div className="grid grid-cols-2 px-4 sm:px-6 py-5 items-center group hover:bg-white/[0.02] transition-colors">
                              <div>
                                <div className="flex items-center gap-2">
                                  <Fuel
                                    className="w-4 h-4 text-[#D6BB8A]"
                                    strokeWidth={2}
                                  />
                                  <span className="block text-[#D6BB8A] font-medium text-sm md:text-base">
                                    Fuel
                                  </span>
                                </div>
                                <span className="block text-white/50 text-[11px] sm:text-xs mt-1">
                                  Fully covered
                                </span>
                              </div>
                              <div className="text-right">
                                <span className="inline-flex items-center rounded-full border border-[#D6BB8A]/20 bg-[#D6BB8A]/10 px-3 py-1 text-[10px] sm:text-[11px] font-bold text-[#D6BB8A] tracking-wide uppercase">
                                  Included
                                </span>
                              </div>
                            </div>
                          </>
                        ) : (
                          <>
                            {/* Table Header */}
                            <div className="grid grid-cols-3 bg-white/5 px-4 sm:px-6 py-4 border-b border-white/5">
                              <div className="text-white/40 text-[11px] font-bold uppercase tracking-widest">
                                Service
                              </div>
                              <div className="text-white/40 text-[11px] font-bold uppercase tracking-widest text-right">
                                {t("fleet.half_day", "Half Day")}
                              </div>
                              <div className="text-white/40 text-[11px] font-bold uppercase tracking-widest text-right">
                                {t("fleet.full_day", "Full Day")}
                              </div>
                            </div>

                            {/* Boat Rental */}
                            <div className="grid grid-cols-3 px-4 sm:px-6 py-5 border-b border-white/5 items-center group hover:bg-white/[0.02] transition-colors">
                              <div>
                                <span className="block text-white font-medium text-sm md:text-base">
                                  {t("fleet.boat_rental", "Boat Rental")}
                                </span>
                                <span className="block text-white/50 text-[11px] sm:text-xs mt-1">
                                  {t("fleet.base_rate", "Base rate")}
                                </span>
                              </div>
                              <div className="text-right text-white font-semibold text-sm leading-5">
                                €{selectedBoat.pricingDetails.halfDay}
                              </div>
                              <div className="text-right text-white font-semibold text-sm leading-5">
                                €{selectedBoat.pricingDetails.fullDay}
                              </div>
                            </div>

                            {/* Skipper Service */}
                            <div className="grid grid-cols-3 px-4 sm:px-6 py-5 border-b border-white/5 items-center group hover:bg-white/[0.02] transition-colors">
                              <div>
                                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                                  <span className="block text-white font-medium text-sm md:text-base">
                                    {t("fleet.skipper", "Skipper")}
                                  </span>
                                  {selectedBoat.pricingDetails
                                    .skipperIncluded ? (
                                    <span className="inline-flex w-fit px-2 py-0.5 rounded-full bg-[#D6BB8A]/20 text-[#D6BB8A] text-[9px] sm:text-[10px] font-bold tracking-wide uppercase">
                                      {t("fleet.required", "Required")}
                                    </span>
                                  ) : (
                                    <span className="inline-flex w-fit px-2 py-0.5 rounded-full bg-white/10 text-white/70 text-[9px] sm:text-[10px] font-medium tracking-wide uppercase">
                                      {t("fleet.optional", "Optional")}
                                    </span>
                                  )}
                                </div>
                                <span className="block text-white/50 text-[11px] sm:text-xs mt-1">
                                  {t(
                                    "fleet.professional_captain",
                                    "Professional captain",
                                  )}
                                </span>
                              </div>
                              {selectedBoat.pricingDetails.skipperIncluded ? (
                                <div className="col-span-2 text-right">
                                  <span className="text-white/80 font-medium text-sm leading-5">
                                    {t(
                                      "fleet.included_in_price",
                                      "Included in price",
                                    )}
                                  </span>
                                </div>
                              ) : (
                                <>
                                  <div className="text-right text-white/80 font-medium text-sm leading-5">
                                    +€
                                    {selectedBoat.pricingDetails.skipperHalfDay}
                                  </div>
                                  <div className="text-right text-white/80 font-medium text-sm leading-5">
                                    +€
                                    {selectedBoat.pricingDetails.skipperFullDay}
                                  </div>
                                </>
                              )}
                            </div>

                            {/* Fuel Cost */}
                            <div className="grid grid-cols-3 px-4 sm:px-6 py-5 items-center group hover:bg-white/[0.02] transition-colors">
                              <div className="col-span-1">
                                <div className="flex items-center gap-2">
                                  <Fuel
                                    className="w-4 h-4 text-[#D6BB8A]"
                                    strokeWidth={2}
                                  />
                                  <span className="block text-[#D6BB8A] font-medium text-sm md:text-base">
                                    {t("fleet.fuel", "Fuel")}
                                  </span>
                                </div>
                                <span className="block text-white/50 text-[11px] sm:text-xs mt-1">
                                  {selectedBoat.pricingDetails.fuelIncluded
                                    ? t("fleet.fully_covered", "Fully covered")
                                    : t("fleet.pay_per_use", "Pay per use")}
                                </span>
                              </div>
                              <div className="col-span-2 text-right">
                                {selectedBoat.pricingDetails.fuelIncluded ? (
                                  <span className="inline-flex items-center rounded-full border border-[#D6BB8A]/20 bg-[#D6BB8A]/10 px-3 py-1 text-[10px] sm:text-[11px] font-bold text-[#D6BB8A] tracking-wide uppercase">
                                    {t("fleet.included", "Included")}
                                  </span>
                                ) : (
                                  <span className="inline-flex items-center rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1 text-[10px] sm:text-[11px] font-bold text-red-400 tracking-wide uppercase">
                                    {t("fleet.not_included", "Not Included")}
                                  </span>
                                )}
                              </div>
                            </div>
                          </>
                        )}
                      </div>

                      {!selectedBoat.pricingDetails.fuelIncluded && (
                        <p className="mt-4 text-center text-white/40 text-[13px]">
                          {t(
                            "fleet.fuel_notice",
                            "The boat is provided with a full tank and must be returned full.",
                          )}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Sticky Bottom Bar */}
              <div className="absolute bottom-0 left-0 right-0 md:left-auto md:right-auto md:w-full md:max-w-4xl md:mx-auto">
                <div className="bg-[#1C1C1E]/95 backdrop-blur-2xl rounded-t-[32px] px-6 py-5 md:py-6 sm:px-8 border-t border-white/5 shadow-[0_-20px_40px_rgba(0,0,0,0.6)]">
                  <div className="flex gap-3">
                    <button aria-label="Calendar icon" className="w-[48px] h-[48px] rounded-full border border-white/10 flex items-center justify-center flex-shrink-0 text-white/70 hover:bg-white/5 hover:text-white hover:border-white/20 transition-all pointer-events-none">
                      <Calendar className="w-[18px] h-[18px]" strokeWidth={2} />
                    </button>
                    <button
                      onClick={() => {
                        setSelectedBoat(null);
                        onBook(selectedBoat.id, selectedBoat.services[0]?.id);
                      }}
                      className="flex-1 h-[48px] bg-[#D6BB8A] hover:bg-[#E5CDA3] text-black font-semibold text-[15px] rounded-full transition-all shadow-lg tracking-wide"
                    >
                      {t("nav.book_now")}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {selectedImageIndex !== null &&
          selectedBoat &&
          selectedBoat.gallery && (
            <div
              className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-8"
              onClick={() => setSelectedImageIndex(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="relative w-full max-w-6xl h-full flex flex-col justify-center items-center"
                onClick={(e) => e.stopPropagation()}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.6}
                onDragEnd={(_e, info) => {
                  const threshold = 50;
                  if (info.offset.x < -threshold) {
                    setSelectedImageIndex((prev) =>
                      prev !== null
                        ? (prev + 1) % selectedBoat.gallery!.length
                        : null,
                    );
                  } else if (info.offset.x > threshold) {
                    setSelectedImageIndex((prev) =>
                      prev !== null
                        ? (prev - 1 + selectedBoat.gallery!.length) %
                          selectedBoat.gallery!.length
                        : null,
                    );
                  }
                }}
              >
                <button
                  aria-label="Close gallery"
                  className="absolute top-4 right-4 sm:top-0 sm:right-0 w-12 h-12 bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-white z-20"
                  onClick={() => setSelectedImageIndex(null)}
                >
                  <XIcon />
                </button>

                {selectedBoat.gallery.length > 1 && (
                  <button
                    aria-label="Previous gallery image"
                    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-white z-20"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImageIndex((prev) =>
                        prev !== null
                          ? (prev - 1 + selectedBoat.gallery!.length) %
                            selectedBoat.gallery!.length
                          : null,
                      );
                    }}
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                )}

                {selectedBoat.gallery.length > 1 && (
                  <button
                    aria-label="Next gallery image"
                    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-white z-20"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImageIndex((prev) =>
                        prev !== null
                          ? (prev + 1) % selectedBoat.gallery!.length
                          : null,
                      );
                    }}
                  >
                    <ArrowLeft className="w-5 h-5 rotate-180" />
                  </button>
                )}

                <AnimatePresence mode="wait">
                  <motion.img
                    key={selectedImageIndex}
                    src={selectedBoat.gallery[selectedImageIndex]}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                    className="w-full h-full object-contain drop-shadow-2xl max-h-[85vh] sm:max-h-full pointer-events-none"
                    alt="Enlarged view"
                  />
                </AnimatePresence>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                  {selectedBoat.gallery.map((_, idx) => (
                    <div
                      key={idx}
                      className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                        idx === selectedImageIndex
                          ? "bg-[#E8E4DF]"
                          : "bg-[#E8E4DF]/20"
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          )}
      </AnimatePresence>
    </section>
  );
}

function XIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );
}
