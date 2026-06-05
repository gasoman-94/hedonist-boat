import React, { useState, useRef, useEffect } from "react";
import { Boat } from "../types";
import { MapPin, MessageCircle, ChevronDown, ArrowDown } from "lucide-react";

interface Props {
  boats: Boat[];
  onBook: (boatId: string, serviceId: string) => void;
}

export function TaxiSection({ boats, onBook }: Props) {
  const taxiBoat = boats.find((b) => b.services.some((s) => s.type === "taxi"));
  const taxiService = taxiBoat?.services.find((s) => s.type === "taxi");

  const [selectedRouteIndex, setSelectedRouteIndex] = useState(0);
  const [passengers, setPassengers] = useState(2);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!taxiBoat || !taxiService || taxiService.pricing.length === 0)
    return null;

  const selectedRoute =
    taxiService.pricing[selectedRouteIndex] || taxiService.pricing[0];
  const totalPrice = Math.max(
    selectedRoute.minPrice,
    selectedRoute.amount * passengers,
  );

  const handleWhatsApp = () => {
    const text = `Hello! I would like to request a Boat Transfer.\n\nPick-up: Poreč Harbour\nDrop-off: ${selectedRoute.description}\nPassengers: ${passengers}\nTotal Price Overview: €${totalPrice}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/385995919005?text=${encodedText}`, "_blank");
  };

  return (
    <>
      <section
        className="snap-start relative w-full h-[100svh] flex flex-col"
        id="taxi"
      >
        {/* Background Image Slide 1 */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/Hedonist_final-19.webp"
            alt="Boat Transfer"
            className="w-full h-full object-cover opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0C10] via-transparent via-60% to-[#0B0C10] to-100%" />
        </div>

        {/* Bottom Content Area */}
        <div className="absolute bottom-6 sm:bottom-10 left-0 right-0 w-full px-6 sm:px-12 z-10 flex items-end justify-between max-w-7xl mx-auto gap-4">
          <div className="flex flex-col items-start pb-4">
            <h1 className="text-[32px] sm:text-[32px] font-semibold tracking-tight mb-4 drop-shadow-md text-white text-left w-[260px] leading-tight">
              Boat Transfers
            </h1>

            <p className="text-white/90 text-[12px] leading-[20px] drop-shadow-sm mb-0 text-left w-[260px] font-medium pr-2">
              Skip the traffic and travel the coast in absolute comfort. Fast,
              secure, and stylish transfers between all major coastal
              destinations around Poreč.
            </p>
          </div>

          {/* Scroll Indicator */}
          <div
            onClick={() =>
              document
                .getElementById("taxi-widget")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="flex flex-col items-center z-20 cursor-pointer group pb-4 flex-shrink-0"
          >
            <div className="flex flex-col items-center -space-y-2 opacity-60 group-hover:opacity-100 transition-opacity mb-2">
              <ChevronDown
                size={18}
                strokeWidth={2.5}
                className="text-white animate-pulse"
                style={{ animationDelay: "150ms" }}
              />
              <ChevronDown
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
                BUILD RIDE
              </div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-b from-[#C5A059] to-[#8B6B25] shadow-inner flex flex-shrink-0 items-center justify-center">
                <ArrowDown size={16} strokeWidth={2.5} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="snap-start relative w-full h-[100svh] flex flex-col justify-center px-4 sm:px-6"
        id="taxi-widget"
      >
        {/* Background Image Slide 2 */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/Hedonist_final-50.webp"
            alt="Boat Transfer"
            className="w-full h-full object-cover opacity-60 object-bottom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0C10] from-0% via-[#0B0C10]/50 via-50% to-[#0B0C10] to-100%" />
        </div>

        <div className="relative z-10 w-full max-w-md mx-auto">
          <div className="mb-8 text-left pl-2 pr-4">
            <h2 className="text-[24px] font-semibold tracking-tight text-white mb-3">
              On-Demand Transfers
            </h2>
            <p className="text-white/80 text-[13px] leading-relaxed font-medium">
              Our boat transfer services are strictly on demand. Simply choose your
              destination from the available options and reach out to us on
              WhatsApp anytime to arrange your ride.
            </p>
          </div>

          <div className="flex items-center gap-3 mb-6 justify-start pl-2">
            <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-white/20 shadow-md">
              <img
                src={taxiBoat.imageUrl}
                alt={taxiBoat.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-left">
              <p className="text-[9px] uppercase font-bold tracking-widest text-[#D6BB8A] mb-0.5">
                Operated by
              </p>
              <p className="font-semibold text-[13px] tracking-tight text-white">
                {taxiBoat.name}
              </p>
            </div>
          </div>

          <div className="flex flex-col w-full bg-black/40 backdrop-blur-xl border border-white/10 rounded-[24px] p-5 sm:p-6 shadow-2xl relative">
            {/* Starting Location */}
            <div className="flex items-center gap-3 mb-2">
              <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center shrink-0">
                <span className="w-2 h-2 bg-black rounded-full" />
              </div>
              <div>
                <p className="text-[9px] font-bold tracking-widest text-white/50 uppercase mb-0.5">
                  Pick-up
                </p>
                <p className="text-[14px] font-bold text-white tracking-tight">
                  Poreč Harbour
                </p>
              </div>
            </div>

            {/* Connecting Line */}
            <div className="pl-[13px] my-1.5">
              <div className="w-[1.5px] h-5 border-l-[1.5px] border-white/20 border-dotted" />
            </div>

            {/* Drop Off */}
            <div className="flex items-center gap-3 mb-6" ref={dropdownRef}>
              <div className="w-7 h-7 rounded-full bg-[#D6BB8A] flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(214,187,138,0.3)]">
                <MapPin size={12} className="text-black" strokeWidth={2.5} />
              </div>
              <div className="flex-1 relative">
                <p className="text-[9px] font-bold tracking-widest text-[#D6BB8A] uppercase mb-0.5">
                  Drop-off
                </p>

                {/* Custom Dropdown Trigger */}
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full text-left flex items-center justify-between border-b border-white/20 pb-1.5 focus:outline-none focus:border-white transition-colors"
                >
                  <span className="text-[16px] font-bold text-white tracking-tight line-clamp-1 pr-2">
                    {selectedRoute.description}
                  </span>
                  <ChevronDown
                    size={14}
                    className={`text-white transition-transform duration-300 shrink-0 ${isDropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute top-[calc(100%+6px)] left-0 right-0 bg-[#141414] border border-white/10 rounded-[12px] shadow-2xl max-h-[180px] overflow-y-auto z-50 overflow-hidden custom-scrollbar">
                    {taxiService.pricing.map((route, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          setSelectedRouteIndex(i);
                          setIsDropdownOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2.5 text-[13px] font-medium hover:bg-white/5 transition-colors ${i === selectedRouteIndex ? "text-[#D6BB8A] bg-white/5" : "text-white"}`}
                      >
                        {route.description}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Passengers & Price Info */}
            <div className="flex flex-col gap-3 pt-5 border-t border-white/10">
              <div className="flex justify-between items-center w-full px-2">
                <div>
                  <p className="text-[11px] font-medium text-white/50 mb-2">
                    Passengers
                  </p>
                  <div className="flex items-center gap-3 bg-white/5 rounded-full p-1.5 border border-white/10 w-fit">
                    <button
                      onClick={() => setPassengers(Math.max(1, passengers - 1))}
                      className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                    >
                      -
                    </button>
                    <span className="font-bold text-white text-[16px] w-6 text-center">
                      {passengers}
                    </span>
                    <button
                      onClick={() =>
                        setPassengers(
                          Math.min(taxiBoat.capacity, passengers + 1),
                        )
                      }
                      className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-[11px] font-medium text-white/50 mb-1">
                    Total
                  </p>
                  <div className="flex items-baseline justify-end gap-1.5">
                    <span className="font-bold text-[36px] sm:text-[42px] tracking-tight text-white leading-none">
                      €{totalPrice}
                    </span>
                  </div>
                </div>
              </div>

              <div className="w-full flex flex-col items-center mt-3">
                <p className="text-[10px] font-medium text-white/50 mb-4 text-center">
                  €{selectedRoute.amount} per person • Min. €
                  {selectedRoute.minPrice}
                </p>
                <button
                  onClick={handleWhatsApp}
                  className="w-full bg-[#25D366] hover:bg-[#1EBE5D] text-white px-6 py-3 rounded-full text-[10px] font-bold tracking-widest uppercase transition-colors flex items-center justify-center gap-2 shadow-lg"
                >
                  Request a ride via WhatsApp <MessageCircle size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
