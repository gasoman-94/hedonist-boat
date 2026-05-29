import React, { useState, useRef } from 'react';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { IntroSection } from './components/IntroSection';
import { FleetSection } from './components/FleetSection';
import { ExcursionsSection } from './components/ExcursionsSection';
import { TaxiSection } from './components/TaxiSection';
import { BookingEngine } from './components/BookingEngine';
import { BOATS, ALL_EXCURSIONS } from './data';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  const [selectedBoatId, setSelectedBoatId] = useState<string>('');
  const [selectedServiceId, setSelectedServiceId] = useState<string>('');
  const bookingRef = useRef<HTMLDivElement>(null);

  const handleBook = (boatId: string, serviceId: string) => {
    setSelectedBoatId(boatId);
    setSelectedServiceId(serviceId);
    bookingRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="font-sans text-neutral-100 bg-[#0B0C10] h-[100svh] overflow-y-auto overflow-x-hidden snap-y snap-mandatory selection:bg-[#1a1d24]">
      <Nav />
      <div className="snap-start snap-always w-full min-h-[100svh]">
        <Hero />
      </div>
      <main>
        <div className="snap-start w-full min-h-[100svh] flex flex-col justify-center">
          <IntroSection />
        </div>
        <div className="snap-start w-full min-h-[100svh] flex flex-col justify-center">
          <FleetSection boats={BOATS} onBook={handleBook} />
        </div>
        <div className="snap-start w-full min-h-[100svh] flex flex-col justify-center">
          <ExcursionsSection excursions={ALL_EXCURSIONS} boats={BOATS} onBook={handleBook} />
        </div>
        <TaxiSection boats={BOATS} onBook={handleBook} />
        <div className="snap-start w-full min-h-[100svh] flex flex-col justify-center" ref={bookingRef} id="booking-engine">
          <BookingEngine 
            boats={BOATS} 
            selectedBoatId={selectedBoatId} 
            selectedServiceId={selectedServiceId}
            onBoatChange={setSelectedBoatId}
            onServiceChange={setSelectedServiceId}
          />
          <footer className="bg-[#050608] border-t border-white/5 px-6 md:px-12 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-xs text-white/40 font-medium tracking-wide">
              &copy; {new Date().getFullYear()} Poreč Charters
            </div>
            <div className="flex gap-8 text-xs font-bold text-white/50">
              <span className="hover:text-white cursor-pointer transition-colors">Instagram</span>
              <span className="hover:text-white cursor-pointer transition-colors">Terms</span>
              <span className="hover:text-white cursor-pointer transition-colors">Contact</span>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}
