import React, { useState, useRef } from 'react';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { IntroSection } from './components/IntroSection';
import { FleetSection } from './components/FleetSection';
import { ExcursionsSection } from './components/ExcursionsSection';
import { TaxiSection } from './components/TaxiSection';
import { BookingEngine } from './components/BookingEngine';
import { Footer } from './components/Footer';
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
    <div id="main-scroll-container" className="font-sans text-neutral-100 bg-[#0B0C10] h-[100svh] overflow-y-auto overflow-x-hidden snap-y snap-mandatory selection:bg-[#1a1d24]">
      <Nav />
        <div className="snap-start snap-always w-full min-h-[100svh]" id="home">
          <Hero />
        </div>
        <main>
          <div className="snap-start w-full min-h-[100svh] flex flex-col justify-center" id="intro">
            <IntroSection />
          </div>
          <div className="snap-start w-full min-h-[100svh] flex flex-col justify-center" id="fleet">
            <FleetSection boats={BOATS} onBook={handleBook} />
          </div>
          <div className="snap-start w-full min-h-[100svh] flex flex-col" id="excursions">
            <ExcursionsSection excursions={ALL_EXCURSIONS} boats={BOATS} onBook={handleBook} />
          </div>
          <div id="taxi">
            <TaxiSection boats={BOATS} onBook={handleBook} />
          </div>
          <div className="snap-start w-full min-h-[100svh] flex flex-col justify-between" ref={bookingRef} id="booking-engine">
            <div className="flex-1 flex flex-col justify-center">
              <BookingEngine 
                boats={BOATS} 
                selectedBoatId={selectedBoatId} 
                selectedServiceId={selectedServiceId}
                onBoatChange={setSelectedBoatId}
                onServiceChange={setSelectedServiceId}
              />
            </div>
            <Footer />
          </div>
      </main>
    </div>
  );
}
