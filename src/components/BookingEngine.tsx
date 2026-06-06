import React, { useState, useEffect, useMemo, useRef } from "react";
import { Boat, Service } from "../types";
import { useTranslation } from "react-i18next";
import {
  Send,
  Smartphone,
  ChevronDown,
  Check,
  CalendarDays,
  Users,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

interface Props {
  boats: Boat[];
  selectedBoatId: string;
  selectedServiceId: string;
  onBoatChange: (id: string) => void;
  onServiceChange: (id: string) => void;
}

export function BookingEngine({
  boats,
  selectedBoatId,
  selectedServiceId,
  onBoatChange,
  onServiceChange,
}: Props) {
  const { t, i18n } = useTranslation();
  const [dateStr, setDateStr] = useState<string>("");
  const [guests, setGuests] = useState<number>(2);
  const [bookingType, setBookingType] = useState<"tour" | "rental">("tour");

  const [wantsSkipper, setWantsSkipper] = useState<boolean>(false);
  const [selectedPricingIndex, setSelectedPricingIndex] = useState<number>(0);
  const [selectedHourlyPackageIndex, setSelectedHourlyPackageIndex] =
    useState<number>(0);

  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const calendarRef = useRef<HTMLDivElement>(null);
  const [calendarViewDate, setCalendarViewDate] = useState(new Date());
  const [tempSelectedDateStr, setTempSelectedDateStr] = useState<string>("");
  const [isSummaryOpen, setIsSummaryOpen] = useState(false);

  useEffect(() => {
    if (isCalendarOpen) {
      setTempSelectedDateStr(dateStr);
    }
  }, [isCalendarOpen, dateStr]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsServiceDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const days = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();
    return { days, firstDay };
  };

  const handlePrevMonth = (e: React.MouseEvent) => {
    e.stopPropagation();
    const today = new Date();
    if (
      calendarViewDate.getFullYear() > today.getFullYear() ||
      (calendarViewDate.getFullYear() === today.getFullYear() &&
        calendarViewDate.getMonth() > today.getMonth())
    ) {
      setCalendarViewDate(
        new Date(
          calendarViewDate.getFullYear(),
          calendarViewDate.getMonth() - 1,
          1,
        ),
      );
    }
  };

  const handleNextMonth = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCalendarViewDate(
      new Date(
        calendarViewDate.getFullYear(),
        calendarViewDate.getMonth() + 1,
        1,
      ),
    );
  };

  const handleDateClick = (day: number) => {
    const d = new Date(
      calendarViewDate.getFullYear(),
      calendarViewDate.getMonth(),
      day,
    );
    setTempSelectedDateStr(d.toLocaleDateString());
  };

  const renderCalendarDays = () => {
    const { days, firstDay } = getDaysInMonth(calendarViewDate);
    const today = new Date();
    const currentDay = today.getDate();
    const isCurrentMonth =
      today.getMonth() === calendarViewDate.getMonth() &&
      today.getFullYear() === calendarViewDate.getFullYear();

    const emptyDaysCount = firstDay === 0 ? 6 : firstDay - 1;
    const emptyDays = Array.from({ length: emptyDaysCount }).map((_, i) => (
      <div key={`empty-${i}`} className="w-7 h-7 sm:w-8 sm:h-8"></div>
    ));

    const monthDays = Array.from({ length: days }).map((_, i) => {
      const dayNum = i + 1;
      const dateObj = new Date(
        calendarViewDate.getFullYear(),
        calendarViewDate.getMonth(),
        dayNum,
      );
      const isPast = isCurrentMonth && dayNum < currentDay;
      const isSelected = tempSelectedDateStr === dateObj.toLocaleDateString();

      return (
        <button
          type="button"
          key={`day-${i}`}
          onClick={(e) => {
            e.stopPropagation();
            if (!isPast) handleDateClick(dayNum);
          }}
          disabled={isPast || false}
          className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-[11px] sm:text-[12px] font-medium transition-all ${
            isPast
              ? "text-white/20 cursor-not-allowed"
              : isSelected
                ? "bg-white text-black"
                : "text-white/80 hover:bg-white/10 cursor-pointer"
          }`}
        >
          {dayNum}
        </button>
      );
    });

    return [...emptyDays, ...monthDays];
  };

  const isValidServiceType = (s: Service, bType: "tour" | "rental") => {
    if (bType === "tour") return s.type === "tour" || s.type === "package";
    return s.type === "rental";
  };

  const availableBoats = useMemo(() => {
    return boats.filter((boat) =>
      boat.services.some((s) => isValidServiceType(s, bookingType)),
    );
  }, [boats, bookingType]);

  const activeBoat =
    availableBoats.find((b) => b.id === selectedBoatId) || availableBoats[0];

  const validService = useMemo(() => {
    if (!activeBoat) return undefined;
    const availableServices = activeBoat.services.filter((s) =>
      isValidServiceType(s, bookingType),
    );
    const service = availableServices.find((s) => s.id === selectedServiceId);
    if (!service && availableServices.length > 0) return availableServices[0];
    return service;
  }, [activeBoat, selectedServiceId, bookingType]);

  const activeService =
    validService ||
    (activeBoat &&
      activeBoat.services.filter((s) => isValidServiceType(s, bookingType))[0]);

  useEffect(() => {
    setSelectedPricingIndex(0);
    setSelectedHourlyPackageIndex(0);
    setWantsSkipper(false);
  }, [activeService, bookingType]);

  useEffect(() => {
    if (
      availableBoats.length > 0 &&
      (!selectedBoatId || !availableBoats.find((b) => b.id === selectedBoatId))
    ) {
      onBoatChange(availableBoats[0].id);
    }
  }, [availableBoats, selectedBoatId, onBoatChange]);

  useEffect(() => {
    if (activeService && activeService.id !== selectedServiceId) {
      onServiceChange(activeService.id);
    }
  }, [activeService, selectedServiceId, onServiceChange]);

  const priceDetails = useMemo(() => {
    if (!activeService || activeService.pricing.length === 0)
      return { estimate: 0, label: "Contact for pricing", type: "custom" };

    if (
      activeService.hourlyPackages &&
      activeService.hourlyPackages.length > 0
    ) {
      const pkg =
        activeService.hourlyPackages[selectedHourlyPackageIndex] ||
        activeService.hourlyPackages[0];
      return {
        estimate: pkg.price,
        label: pkg.durationLabel || `${pkg.hours} Hours`,
        type: "hourly_package",
      };
    }

    const validPricingIndex =
      selectedPricingIndex < activeService.pricing.length
        ? selectedPricingIndex
        : 0;

    const isMasterRenalHack =
      activeService.type === "rental" && activeBoat?.id === "master-660";
    const priceRule = isMasterRenalHack
      ? activeService.pricing[0]
      : activeService.pricing[validPricingIndex];

    let basePrice = 0;

    if (priceRule.type === "flat") {
      const amount = priceRule.amount;
      basePrice = priceRule.minPrice
        ? Math.max(amount, priceRule.minPrice)
        : amount;
    } else if (priceRule.type === "hourly") {
      basePrice = priceRule.amount;
    } else if (priceRule.type === "per_person") {
      const amount = priceRule.amount * guests;
      basePrice = priceRule.minPrice
        ? Math.max(amount, priceRule.minPrice)
        : amount;
    } else if (priceRule.type === "tiered") {
      basePrice = Math.min(
        ...activeService.pricing.map((p) => p.minPrice || 0),
      );
    }

    if (wantsSkipper && isMasterRenalHack && activeService.pricing[1]) {
      basePrice += activeService.pricing[1].amount;
    }

    return {
      estimate: basePrice,
      label: priceRule.duration ? priceRule.duration : "Base Rate",
      type: priceRule.type,
    };
  }, [
    activeService,
    guests,
    selectedPricingIndex,
    selectedHourlyPackageIndex,
    wantsSkipper,
    activeBoat,
  ]);

  const constructMessage = () => {
    if (!activeBoat || !activeService) return "";

    let extraDetails = "";
    if (
      activeService.hourlyPackages &&
      activeService.hourlyPackages.length > 0
    ) {
      const pkg =
        activeService.hourlyPackages[selectedHourlyPackageIndex] ||
        activeService.hourlyPackages[0];
      extraDetails = `\nDuration/Package: ${pkg.name} (${pkg.durationLabel || `${pkg.hours} Hours`})`;
    } else if (
      activeService.pricing.length > 1 &&
      bookingType === "rental" &&
      activeBoat?.id !== "master-660"
    ) {
      extraDetails = `\nDuration: ${activeService.pricing[selectedPricingIndex]?.duration || t("booking.custom", "Custom")}`;
    }

    let skipperInfo = "";
    if (bookingType === "rental") {
      if (activeBoat?.id === "gaia-22") {
        skipperInfo = "\nSkipper: Included (Mandatory)";
      } else {
        skipperInfo = `\nSkipper: ${wantsSkipper ? t("booking.requested", "Requested") : t("booking.not_requested", "Not requested")}`;
      }
    }

    return `Hello! I'm interested in booking the ${activeBoat.name}.\n\nExperience: ${activeService.title}${extraDetails}${skipperInfo}\nDate: ${dateStr || "Pending"}\nGuests: ${guests}\nEstimated Price: €${priceDetails.estimate}\n\nPlease confirm availability.`;
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(constructMessage());
    window.open(`https://wa.me/385912345678?text=${text}`, "_blank");
  };

  const handleEmail = () => {
    const text = encodeURIComponent(constructMessage());
    window.location.href = `mailto:booking@porecyachts.com?subject=Booking Inquiry&body=${text}`;
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 w-full min-h-[100svh] flex flex-col justify-center">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/Hedonist_final-19.webp"
          alt="Booking Background"
          width={1920}
          height={1080}
          loading="lazy"
          className="w-full h-full object-cover opacity-60 object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0C10] from-0% via-[#0B0C10]/50 via-50% to-[#0B0C10] to-100%" />
      </div>

      <div className="relative z-10 w-full max-w-[700px] mx-auto flex flex-col gap-6 lg:gap-8 items-start">
        <div className="w-full pl-2">
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-3 tracking-tight">
            {t("booking.title", "Book Your Experience")}
          </h2>
          <p className="text-white/70 text-sm md:text-base max-w-lg leading-relaxed">
            {t(
              "booking.desc",
              "If you've found a trip you like, or you simply want to rent a vessel for your own adventure, you can easily configure your experience below. Select your vessel, experience, and party size to get an instant estimate and request your booking.",
            )}
          </p>
        </div>

        {/* Left Form */}
        <div className="w-full bg-black/40 backdrop-blur-xl border border-white/10 rounded-[24px] lg:rounded-[32px] shadow-2xl p-4 sm:p-5 lg:p-8 flex flex-col gap-4 lg:gap-5 relative">
          <div className="mb-0">
            <h2 className="text-[10px] uppercase tracking-widest font-bold text-[#D6BB8A] mb-0.5">
              {t("booking.booking", "Booking")}
            </h2>
            <h3 className="text-[20px] sm:text-[24px] lg:text-[28px] leading-none font-semibold tracking-tight text-white mb-1">
              {t("booking.create_journey", "Create your journey")}
            </h3>
          </div>

          {/* Segmented Control */}
          <div className="flex bg-white/5 p-1 rounded-full w-full">
            <button
              onClick={() => setBookingType("tour")}
              className={`flex-1 py-2 px-3 rounded-full text-[11px] sm:text-[12px] font-semibold tracking-wide transition-all duration-300 ${
                bookingType === "tour"
                  ? "bg-white text-black shadow-md"
                  : "text-white/50 hover:text-white"
              }`}
            >
              {t("booking.guided_tour", "Guided Tour")}
            </button>
            <button
              onClick={() => setBookingType("rental")}
              className={`flex-1 py-2 px-3 rounded-full text-[11px] sm:text-[12px] font-semibold tracking-wide transition-all duration-300 ${
                bookingType === "rental"
                  ? "bg-white text-black shadow-md"
                  : "text-white/50 hover:text-white"
              }`}
            >
              {t("booking.rent_boat", "Rent a Boat")}
            </button>
          </div>

          <div className="space-y-4">
            {/* Vessel Selection */}
            <div>
              <label className="text-[10px] font-bold tracking-widest block mb-1.5 text-white/50 uppercase">
                {t("booking.select_vessel", "Select Vessel")}
              </label>
              <div className="flex bg-white/5 p-1 rounded-full w-full">
                {availableBoats.map((boat) => (
                  <button
                    key={boat.id}
                    onClick={() => onBoatChange(boat.id)}
                    className={`flex-1 py-1.5 px-2 rounded-full transition-all duration-300 flex items-center justify-center gap-2 ${
                      selectedBoatId === boat.id
                        ? "bg-white text-black shadow-md"
                        : "text-white/50 hover:text-white"
                    }`}
                  >
                    <img
                      src={boat.imageUrl}
                      width={24}
                      height={24}
                      loading="lazy"
                      className="w-6 h-6 rounded-full object-cover shrink-0"
                      alt={boat.name}
                    />
                    <span className="text-[10px] sm:text-[11px] font-semibold text-center leading-tight whitespace-nowrap overflow-hidden text-ellipsis">
                      {boat.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Service Selection */}
            {activeBoat && (
              <div className="animate-fade-in relative z-50" ref={dropdownRef}>
                <label className="text-[10px] font-bold tracking-widest uppercase block mb-1.5 text-white/50">
                  {t("booking.select_experience", "Select Experience")}
                </label>

                <button
                  onClick={() =>
                    setIsServiceDropdownOpen(!isServiceDropdownOpen)
                  }
                  className="w-full text-left flex items-center justify-between border-b border-white/10 pb-1.5 focus:outline-none transition-colors"
                >
                  <span className="text-[13px] sm:text-[14px] font-medium text-white pr-2">
                    {activeService
                      ? t(
                          `trips.${activeService.id}.title`,
                          activeService.title,
                        )
                      : t("booking.choose", "Choose")}
                  </span>
                  <ChevronDown
                    size={16}
                    className={`text-white/50 transition-transform duration-300 shrink-0 ${isServiceDropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {isServiceDropdownOpen && (
                  <div className="absolute top-[calc(100%+8px)] left-0 right-0 bg-[#1A1A1A] border border-white/5 rounded-[20px] shadow-2xl max-h-[200px] overflow-y-auto z-50 custom-scrollbar p-1.5">
                    {activeBoat.services
                      .filter((s) => isValidServiceType(s, bookingType))
                      .map((service) => (
                        <button
                          key={service.id}
                          onClick={() => {
                            onServiceChange(service.id);
                            setIsServiceDropdownOpen(false);
                          }}
                          className={`w-full text-left px-4 py-3 text-[13px] font-medium transition-colors rounded-[12px] flex justify-between items-center ${activeService?.id === service.id ? "text-black bg-white cursor-default" : "text-white/70 hover:bg-white/5 hover:text-white"}`}
                        >
                          <span>
                            {t(`trips.${service.id}.title`, service.title)}
                          </span>
                          {activeService?.id === service.id && (
                            <Check size={14} className="text-black" />
                          )}
                        </button>
                      ))}
                  </div>
                )}
              </div>
            )}

            {(activeService?.hourlyPackages?.length ?? 0) > 0 && (
              <div className="animate-fade-in relative z-10 pt-1 pb-1">
                <label className="text-[10px] font-bold tracking-widest block mb-2 text-white/50 uppercase">
                  {t("booking.duration", "Duration")}
                </label>
                <div className="bg-white/5 border border-white/10 rounded-full p-2">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() =>
                        setSelectedHourlyPackageIndex(
                          Math.max(0, selectedHourlyPackageIndex - 1),
                        )
                      }
                      className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white shrink-0 hover:bg-white/10 transition-colors disabled:opacity-30 disabled:hover:bg-white/5"
                      disabled={selectedHourlyPackageIndex === 0}
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <div className="flex-1 text-center">
                      <div className="text-[16px] font-bold text-white leading-none mb-0.5">
                        {activeService!.hourlyPackages![
                          selectedHourlyPackageIndex
                        ]?.durationLabel ||
                          `${activeService!.hourlyPackages![selectedHourlyPackageIndex]?.hours} `}
                        {!activeService!.hourlyPackages![
                          selectedHourlyPackageIndex
                        ]?.durationLabel && (
                          <span className="text-xs text-white/60">
                            {t("booking.hours", "hours")}
                          </span>
                        )}
                      </div>
                      <div className="text-[11px] font-medium text-[#D6BB8A]">
                        {
                          activeService!.hourlyPackages![
                            selectedHourlyPackageIndex
                          ]?.name
                        }
                      </div>
                    </div>
                    <button
                      onClick={() =>
                        setSelectedHourlyPackageIndex(
                          Math.min(
                            activeService!.hourlyPackages!.length - 1,
                            selectedHourlyPackageIndex + 1,
                          ),
                        )
                      }
                      className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white shrink-0 hover:bg-white/10 transition-colors disabled:opacity-30 disabled:hover:bg-white/5"
                      disabled={
                        selectedHourlyPackageIndex >=
                        activeService!.hourlyPackages!.length - 1
                      }
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeService &&
              !activeService.hourlyPackages &&
              activeService.pricing.length > 1 &&
              bookingType === "rental" &&
              activeBoat?.id !== "master-660" && (
                <div className="animate-fade-in relative z-10">
                  <label className="text-[10px] uppercase font-bold tracking-widest block mb-2 text-white/50">
                    {t("booking.duration", "Duration")}
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {activeService.pricing.map((p, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedPricingIndex(idx)}
                        className={`py-1.5 px-4 rounded-full border text-[11px] font-bold uppercase tracking-widest transition-all ${
                          selectedPricingIndex === idx
                            ? "bg-white text-black border-white shadow-md scale-[1.02]"
                            : "border-white/20 bg-transparent text-white/70 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        {p.duration ||
                          `${t("booking.option", "Option")} ${idx + 1}`}
                      </button>
                    ))}
                  </div>
                </div>
              )}

            {bookingType === "rental" && (
              <div className="animate-fade-in relative z-10">
                <label className="text-[10px] uppercase font-bold tracking-widest block mb-2 text-white/50">
                  {t("booking.skipper_option", "Skipper Option")}
                </label>
                {activeBoat?.id === "gaia-22" ? (
                  <p className="text-[#D6BB8A]/80 text-[11px] font-medium flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D6BB8A] shrink-0" />{" "}
                    {t(
                      "booking.mandatory_skipper",
                      "Professional skipper included (Mandatory)",
                    )}
                  </p>
                ) : (
                  <label
                    onClick={() => setWantsSkipper(!wantsSkipper)}
                    className={`flex items-center gap-3 cursor-pointer py-2.5 px-4 rounded-full border transition-all max-w-[280px] ${
                      wantsSkipper
                        ? "border-white bg-white/10"
                        : "border-white/10 bg-white/5 hover:bg-white/10"
                    }`}
                  >
                    <div
                      className={`w-3.5 h-3.5 rounded-full flex items-center justify-center border transition-all ${wantsSkipper ? "bg-white border-white" : "border-white/30"}`}
                    >
                      {wantsSkipper && (
                        <div className="w-1.5 h-1.5 bg-black rounded-full" />
                      )}
                    </div>
                    <span
                      className={`text-[11px] font-semibold ${wantsSkipper ? "text-white" : "text-white/70"}`}
                    >
                      {t(
                        "booking.request_skipper",
                        "Request a professional skipper",
                      )}
                    </span>
                  </label>
                )}
              </div>
            )}

            {/* Date & Guests */}
            {activeBoat && (
              <>
                <div className="animate-fade-in relative z-20 grid grid-cols-2 gap-4 lg:gap-5">
                  <div className="min-w-0">
                    <label className="text-[10px] font-bold tracking-widest uppercase block text-white/50 mb-1.5">
                      {t("booking.travel_date", "Travel Date")}
                    </label>
                    <div className="relative w-full h-[40px]" ref={calendarRef}>
                      <div
                        role="button"
                        tabIndex={0}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setIsCalendarOpen(!isCalendarOpen);
                        }}
                        className={`w-full h-full transition-all rounded-full flex items-center justify-between px-4 outline-none cursor-pointer ${dateStr ? "bg-white text-black" : "bg-white/5 hover:bg-white/10 text-white border border-transparent"}`}
                      >
                        <span
                          className={`text-[12px] font-semibold ${dateStr ? "text-black" : "text-white/80"}`}
                        >
                          {dateStr || t("booking.select_date", "Select Date")}
                        </span>
                        <CalendarDays
                          size={14}
                          className={
                            dateStr ? "text-black/60" : "text-white/50"
                          }
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <label className="text-[10px] font-bold tracking-widest uppercase text-white/50 mb-1.5">
                      {t("booking.party_size", "Party Size")}
                    </label>
                    <div className="flex justify-between items-center bg-white/5 rounded-full p-1 h-[40px] w-full">
                      <button
                        aria-label="Decrease guests"
                        onClick={() => setGuests(Math.max(1, guests - 1))}
                        className="w-8 h-8 flex items-center justify-center text-white/60 hover:text-white transition-colors rounded-full hover:bg-white/10"
                      >
                        -
                      </button>
                      <div className="text-center font-medium text-white text-[13px]">
                        {guests}
                      </div>
                      <button
                        aria-label="Increase guests"
                        onClick={() =>
                          setGuests(Math.min(activeBoat.capacity, guests + 1))
                        }
                        className="w-8 h-8 flex items-center justify-center text-white/60 hover:text-white transition-colors rounded-full hover:bg-white/10"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-2 animate-fade-in">
                  <button
                    onClick={() => {
                      if (dateStr) setIsSummaryOpen(true);
                    }}
                    disabled={!dateStr}
                    className={`w-full px-6 py-3 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all shadow-lg flex items-center justify-center gap-2 ${
                      dateStr
                        ? "bg-white text-black hover:scale-[1.02]"
                        : "bg-white/10 text-white/40 cursor-not-allowed"
                    }`}
                  >
                    {t("booking.confirm_details", "Confirm Booking Details")}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {isSummaryOpen && activeBoat && activeService && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsSummaryOpen(false)}
          />
          <div className="relative w-full max-w-md bg-[#1A1A1A] border border-white/5 rounded-[32px] shadow-2xl p-6 lg:p-8 animate-fade-in flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <h4 className="text-white font-semibold text-[18px]">
                Booking Summary
              </h4>
              <button
                aria-label="Close summary"
                onClick={() => setIsSummaryOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            <div className="space-y-3 text-[13px] sm:text-[14px] font-medium text-white/80 mb-6">
              <div className="flex justify-between items-start pb-3 border-b border-white/5">
                <span className="text-white/50">
                  {t("booking.vessel", "Vessel")}
                </span>
                <span className="text-white text-right">{activeBoat.name}</span>
              </div>
              <div className="flex justify-between items-start pb-3 border-b border-white/5">
                <span className="text-white/50">
                  {t("booking.experience", "Experience")}
                </span>
                <span className="text-white text-right max-w-[180px] leading-snug">
                  {t(`trips.${activeService.id}.title`, activeService.title)}
                </span>
              </div>

              {activeService.hourlyPackages &&
                activeService.hourlyPackages.length > 0 && (
                  <div className="flex justify-between items-start pb-3 border-b border-white/5">
                    <span className="text-white/50">
                      {t("booking.duration", "Duration")}
                    </span>
                    <span className="text-white text-right flex flex-col items-end">
                      <span className="whitespace-nowrap">
                        {activeService.hourlyPackages[
                          selectedHourlyPackageIndex
                        ]?.name || activeService.hourlyPackages[0].name}
                      </span>
                      <span className="text-white/40 text-[12px] mt-0.5 font-normal whitespace-nowrap">
                        (
                        {activeService.hourlyPackages[
                          selectedHourlyPackageIndex
                        ]?.durationLabel ||
                          `${activeService.hourlyPackages[selectedHourlyPackageIndex]?.hours || activeService.hourlyPackages[0].hours} ${t("booking.hours", "hours")}`}
                        )
                      </span>
                    </span>
                  </div>
                )}

              {!activeService.hourlyPackages &&
                activeService.pricing.length > 1 &&
                bookingType === "rental" &&
                activeBoat?.id !== "master-660" && (
                  <div className="flex justify-between items-start pb-3 border-b border-white/5">
                    <span className="text-white/50">
                      {t("booking.duration", "Duration")}
                    </span>
                    <span className="text-white text-right max-w-[180px] leading-snug">
                      {activeService.pricing[selectedPricingIndex]?.duration ||
                        "Custom"}
                    </span>
                  </div>
                )}

              {bookingType === "rental" && (
                <div className="flex justify-between items-start pb-3 border-b border-white/5">
                  <span className="text-white/50">
                    {t("booking.skipper", "Skipper")}
                  </span>
                  <span className="text-white text-right max-w-[180px] leading-snug">
                    {activeBoat?.id === "gaia-22"
                      ? t("booking.included_mandatory", "Included (Mandatory)")
                      : wantsSkipper
                        ? t("booking.requested", "Requested")
                        : t("booking.not_requested", "Not requested")}
                  </span>
                </div>
              )}

              <div className="flex justify-between items-start pb-3 border-b border-white/5">
                <span className="text-white/50">
                  {t("booking.fuel", "Fuel")}
                </span>
                <span className="text-white text-right max-w-[180px] leading-snug">
                  {activeBoat?.pricingDetails?.fuelIncluded
                    ? t("booking.included", "Included")
                    : t("booking.pay_per_use", "Pay per use")}
                </span>
              </div>

              <div className="flex justify-between items-start pb-3 border-b border-white/5">
                <span className="text-white/50">
                  {t("booking.date", "Date")}
                </span>
                <span className="text-white text-right">
                  {dateStr || t("booking.select_date", "Select Date")}
                </span>
              </div>
              <div className="flex justify-between items-start pb-3 border-b border-white/5">
                <span className="text-white/50">
                  {t("booking.guests", "Guests")}
                </span>
                <span className="text-white text-right">
                  {guests}{" "}
                  {guests === 1
                    ? t("booking.person", "Person")
                    : t("booking.people", "People")}
                </span>
              </div>
            </div>

            <div className="flex flex-col items-center mb-8 text-center">
              <div className="text-[11px] font-bold uppercase tracking-widest mb-1 text-white/50">
                {t("booking.total_est", "Total Est.")}
              </div>
              <div className="text-[36px] font-medium text-white tracking-tight leading-none mb-2">
                €{priceDetails.estimate}
              </div>
              <p className="text-[11px] text-white/40 font-medium px-4">
                {t(
                  "booking.disclaimer",
                  "Detailed starting hours should be further arranged with the skipper. Final quotes may include requested extras.",
                )}
              </p>
            </div>

            <div className="flex flex-row gap-2">
              <button
                onClick={handleWhatsApp}
                className="flex-1 bg-[#25D366] hover:bg-[#1EBE5D] text-white py-2 px-1.5 rounded-full text-[9px] sm:text-[10px] font-bold tracking-widest uppercase transition-colors flex items-center justify-center gap-1 shadow-lg text-center"
              >
                {t("booking.whatsapp", "WhatsApp")}
              </button>
              <button
                onClick={handleEmail}
                className="flex-1 bg-white/10 hover:bg-white/20 text-white py-2 px-1.5 rounded-full text-[9px] sm:text-[10px] font-bold tracking-widest uppercase transition-colors flex items-center justify-center gap-1 shadow-lg border border-white/5 text-center"
              >
                {t("booking.email", "Email")}
              </button>
            </div>
          </div>
        </div>
      )}

      {isCalendarOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsCalendarOpen(false)}
          />
          <div className="relative w-full max-w-sm bg-[#1A1A1A] border border-white/5 rounded-[32px] shadow-2xl p-6 lg:p-8 animate-fade-in">
            <div className="flex justify-between items-center mb-6">
              <h4 className="text-white font-semibold text-[18px]">
                {t("booking.select_date", "Select Date")}
              </h4>
              <button
                aria-label="Close calendar"
                onClick={() => setIsCalendarOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            <div className="flex items-center justify-between mb-6">
              <button
                aria-label="Previous month"
                type="button"
                onClick={handlePrevMonth}
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 text-white/70 transition-colors cursor-pointer"
              >
                <ChevronLeft size={20} />
              </button>
              <span className="text-[15px] font-semibold text-white">
                {calendarViewDate.toLocaleString(i18n.language || "en", {
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <button
                aria-label="Next month"
                type="button"
                onClick={handleNextMonth}
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 text-white/70 transition-colors cursor-pointer"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            <div className="grid grid-cols-7 gap-2 mb-4">
              {(() => {
                const map: Record<string, string[]> = {
                  en: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
                  de: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"],
                  hr: ["Po", "Ut", "Sr", "Če", "Pe", "Su", "Ne"],
                  it: ["Lu", "Ma", "Me", "Gi", "Ve", "Sa", "Do"],
                  nl: ["Ma", "Di", "Wo", "Do", "Vr", "Za", "Zo"],
                  sl: ["Po", "To", "Sr", "Če", "Pe", "So", "Ne"],
                };
                // @ts-ignore
                const lang = i18n.language || "en";
                // @ts-ignore
                return (map[lang] || map.en).map((day) => (
                  <div
                    key={day}
                    className="text-center text-[12px] font-bold tracking-wider text-white/40"
                  >
                    {day}
                  </div>
                ));
              })()}
            </div>
            <div className="grid grid-cols-7 gap-2 mb-8">
              {renderCalendarDays()}
            </div>

            <button
              onClick={() => {
                if (tempSelectedDateStr) {
                  setDateStr(tempSelectedDateStr);
                }
                setIsCalendarOpen(false);
              }}
              className="w-full bg-white text-black py-3.5 rounded-full text-[14px] font-semibold tracking-wide transition-all shadow-lg hover:scale-[1.02]"
            >
              {t("booking.confirm_date", "Confirm Date")}
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
