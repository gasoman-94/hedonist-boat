import React from "react";
import { ChevronDown } from "lucide-react";

export function IntroSection() {
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
          src="/images/Hedonist_final-35.jpg"
          alt="Intro Background"
          className="w-full h-full object-cover object-center opacity-50"
        />
        {/* Cinematic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0C10] from-10% via-transparent via-50% to-[#0B0C10] to-90%" />
      </div>

      {/* Content Area */}
      <div className="absolute top-16 sm:top-24 left-0 right-0 w-full px-6 sm:px-12 z-10 flex flex-col justify-start max-w-7xl mx-auto gap-4 pointer-events-none">
        <div className="flex flex-col pb-4 pointer-events-auto w-full">
          <h2 className="text-[36px] sm:text-[44px] md:text-[52px] font-semibold tracking-tight mb-4 drop-shadow-md text-white text-right w-full leading-[1.1]">
            The Art of Adriatic Navigation
          </h2>

          <div className="flex flex-col gap-3 w-full">
            <p className="text-white/90 text-[14px] sm:text-[16px] leading-[22px] sm:leading-[26px] drop-shadow-sm mb-0 text-right w-full font-medium">
              We have spent a lifetime navigating and mastering the pristine
              waters of the Istrian coast. With our{" "}
              <strong className="text-white font-semibold">
                extensive maritime experience
              </strong>
              , you are in the hands of seasoned professionals.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Text Area */}
      <div className="absolute bottom-28 sm:bottom-32 left-0 right-0 w-full px-6 sm:px-12 z-10 flex flex-col justify-end max-w-7xl mx-auto pointer-events-none">
        <div className="pb-4 pointer-events-auto">
          <p className="text-white/90 text-[14px] sm:text-[16px] leading-[22px] sm:leading-[26px] drop-shadow-sm mb-0 text-left max-w-[300px] sm:max-w-[380px] font-medium">
            Whether you want to{" "}
            <strong className="text-white font-semibold">rent a boat</strong>{" "}
            and captain your own adventure, join our expert crew for curated{" "}
            <strong className="text-white font-semibold">guided tours</strong>,
            or simply require a reliable{" "}
            <strong className="text-white font-semibold">water taxi</strong>{" "}
            transfer, we offer an uncompromising experience.
          </p>
        </div>
      </div>

      <div
        onClick={handleScroll}
        className="absolute bottom-8 sm:bottom-12 left-0 right-0 w-full z-10 flex flex-col items-center justify-center cursor-pointer group"
      >
        <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-white/50 group-hover:text-[#D6BB8A] transition-colors duration-300 mb-2 sm:mb-3">
          Check out our fleet
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
