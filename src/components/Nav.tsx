import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-6 px-6 md:px-12 flex justify-between items-center pointer-events-none ${isScrolled ? "bg-[#12100E]/90 backdrop-blur-xl border-b border-white/5 shadow-md" : ""}`}
      >
        <div
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/5 shadow-lg flex items-center justify-center text-white pointer-events-auto cursor-pointer hover:bg-white/20 transition-all p-2"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img
            src="/images/logobwnuni.png"
            alt="Hedonist Logo"
            className="w-full h-full object-contain"
          />
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="px-6 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/5 shadow-lg flex items-center justify-center text-white font-semibold text-sm tracking-wide hover:bg-white/20 transition-all pointer-events-auto"
        >
          Menu
        </button>
      </nav>

      {/* Mobile Menu - Creamy */}
      <div
        className={`fixed inset-0 z-[60] bg-[#F6F3EE] transition-transform duration-500 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-between items-center p-6 border-b border-[#1A1817]/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#1A1817] rounded-full flex items-center justify-center p-2">
              <img
                src="/images/logobwnuni.png"
                alt="Hedonist Logo"
                className="w-full h-full object-contain brightness-0 invert"
              />
            </div>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-10 h-10 bg-[#1A1817]/5 rounded-full border border-[#1A1817]/10 flex items-center justify-center text-[#1A1817] hover:bg-[#1A1817]/10 transition-colors"
          >
            <X size={20} className="stroke-[2.5]" />
          </button>
        </div>
        <div className="flex flex-col p-8 gap-8 text-center mt-12">
          <button
            onClick={() => scrollTo("intro")}
            className="text-4xl font-semibold tracking-tight text-[#1A1817]/50 hover:text-[#1A1817] transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollTo("experiences")}
            className="text-4xl font-semibold tracking-tight text-[#1A1817]/50 hover:text-[#1A1817] transition-colors"
          >
            Excursions
          </button>
          <button
            onClick={() => scrollTo("fleet")}
            className="text-4xl font-semibold tracking-tight text-[#1A1817]/50 hover:text-[#1A1817] transition-colors"
          >
            Features
          </button>
          <button
            onClick={() => scrollTo("taxi")}
            className="text-4xl font-semibold tracking-tight text-[#1A1817]/50 hover:text-[#1A1817] transition-colors"
          >
            Transport
          </button>
          <button
            onClick={() => scrollTo("booking-engine")}
            className="mt-8 bg-[#181615] text-[#F6F3EE] rounded-full py-5 text-sm font-bold tracking-wide shadow-xl active:scale-95 transition-transform"
          >
            Book Now
          </button>
        </div>
      </div>
    </>
  );
}
