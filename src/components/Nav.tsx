import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Globe } from "lucide-react";

type NavMode = "top" | "hidden" | "glass";

export function Nav() {
  const [navMode, setNavMode] = useState<NavMode>("hidden");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const scrollContainer = document.getElementById('main-scroll-container');
    if (!scrollContainer) return;

    let lastScrollY = scrollContainer.scrollTop;

    const handleScroll = () => {
      const currentScrollY = scrollContainer.scrollTop;
      const scrollUp = currentScrollY < lastScrollY;
      const heroHeight = window.innerHeight;

      if (currentScrollY < heroHeight * 0.5) {
        setNavMode("hidden");
      } else {
        if (scrollUp) {
          setNavMode("glass");
        } else {
          setNavMode("hidden");
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
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Top Nav (Static/Absolute at Top) */}
      <nav 
        className={`fixed top-4 left-0 right-0 z-50 flex justify-center transition-all duration-500 ease-in-out ${
          navMode === 'glass' ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className="w-[92%] md:w-[600px] lg:w-[800px] flex items-center justify-between bg-white/10 hover:bg-white/15 backdrop-blur-xl saturate-[1.2] border border-white/10 rounded-[20px] px-3 py-1.5 shadow-lg transition-colors">
          <div className="flex items-center gap-3 cursor-pointer pl-2 hover:opacity-80 transition-opacity" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
             <img src="/images/logobwnuni.png" alt="Hedonist Logo" className="h-7 w-auto object-contain drop-shadow-md" />
          </div>
          <div className="flex items-center gap-0.5 md:gap-1">
            <button className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl hover:bg-white/10 text-white transition-colors">
              <Globe size={18} className="text-white" />
              <span className="text-xs font-semibold tracking-wide">EN</span>
            </button>
            <button 
              onClick={() => setIsMobileMenuOpen(true)} 
              className="w-10 h-10 rounded-xl hover:bg-white/10 flex items-center justify-center transition-colors"
            >
              <Menu size={22} className="text-white" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Creamy */}
      <div
        className={`fixed inset-0 z-[60] bg-[#F6F3EE] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
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
            className="w-10 h-10 bg-[#1A1817]/5 rounded-xl border border-[#1A1817]/10 flex items-center justify-center text-[#1A1817] hover:bg-[#1A1817]/10 transition-colors"
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
            onClick={() => scrollTo("excursions")}
            className="text-4xl font-semibold tracking-tight text-[#1A1817]/50 hover:text-[#1A1817] transition-colors"
          >
            Excursions
          </button>
          <button
            onClick={() => scrollTo("fleet")}
            className="text-4xl font-semibold tracking-tight text-[#1A1817]/50 hover:text-[#1A1817] transition-colors"
          >
            Fleet
          </button>
          <button
            onClick={() => scrollTo("taxi")}
            className="text-4xl font-semibold tracking-tight text-[#1A1817]/50 hover:text-[#1A1817] transition-colors"
          >
            Transport
          </button>
          <button
            onClick={() => scrollTo("booking-engine")}
            className="mt-8 bg-[#181615] text-[#F6F3EE] rounded-2xl py-5 text-sm font-bold tracking-wide shadow-xl active:scale-95 transition-transform"
          >
            Book Now
          </button>
        </div>
      </div>
    </>
  );
}
