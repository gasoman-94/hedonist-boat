import fs from 'fs';

let code = fs.readFileSync('src/components/FleetSection.tsx', 'utf8');

const replacement = `                         {selectedBoat.pricingDetails.hourly ? (
                            <>
                              {/* Hourly Pricing Implementation */}
                              <div className="grid grid-cols-2 bg-white/5 px-4 sm:px-6 py-4 border-b border-white/5">
                                <div className="text-white/40 text-[11px] font-bold uppercase tracking-widest">Service</div>
                                <div className="text-white/40 text-[11px] font-bold uppercase tracking-widest text-right">Rate</div>
                              </div>
                              {/* Boat Rental */}
                              <div className="grid grid-cols-2 px-4 sm:px-6 py-5 border-b border-white/5 items-center group hover:bg-white/[0.02] transition-colors">
                                <div>
                                  <span className="block text-white font-medium text-sm md:text-base">Hourly Charter</span>
                                  <span className="block text-white/50 text-[11px] sm:text-xs mt-1">Base rate per hour</span>
                                </div>
                                <div className="text-right text-white font-semibold text-sm leading-5">€{selectedBoat.pricingDetails.hourly}/h</div>
                              </div>
                              
                              {/* Skipper Service */}
                              <div className="grid grid-cols-2 px-4 sm:px-6 py-5 border-b border-white/5 items-center group hover:bg-white/[0.02] transition-colors">
                                <div>
                                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                                    <span className="block text-white font-medium text-sm md:text-base">Skipper</span>
                                    <span className="inline-flex w-fit px-2 py-0.5 rounded-full bg-[#D6BB8A]/20 text-[#D6BB8A] text-[9px] sm:text-[10px] font-bold tracking-wide uppercase">Included</span>
                                  </div>
                                  <span className="block text-white/50 text-[11px] sm:text-xs mt-1">Professional captain</span>
                                </div>
                                <div className="text-right">
                                  <span className="text-white/80 font-medium text-sm leading-5">Included in price</span>
                                </div>
                              </div>

                              {/* Sailor / Tour Guide */}
                              {selectedBoat.pricingDetails.sailorIncluded && (
                                <div className="grid grid-cols-2 px-4 sm:px-6 py-5 border-b border-white/5 items-center group hover:bg-white/[0.02] transition-colors">
                                  <div>
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                                      <span className="block text-white font-medium text-sm md:text-base">Sailor / Tour Guide</span>
                                      <span className="inline-flex w-fit px-2 py-0.5 rounded-full bg-[#D6BB8A]/20 text-[#D6BB8A] text-[9px] sm:text-[10px] font-bold tracking-wide uppercase">Included</span>
                                    </div>
                                    <span className="block text-white/50 text-[11px] sm:text-xs mt-1">Experienced sailor & guide</span>
                                  </div>
                                  <div className="text-right">
                                    <span className="text-white/80 font-medium text-sm leading-5">Included in price</span>
                                  </div>
                                </div>
                              )}
                              
                              {/* Fuel Cost */}
                              <div className="grid grid-cols-2 px-4 sm:px-6 py-5 items-center group hover:bg-white/[0.02] transition-colors">
                                <div>
                                  <div className="flex items-center gap-2">
                                    <Fuel className="w-4 h-4 text-[#D6BB8A]" strokeWidth={2} />
                                    <span className="block text-[#D6BB8A] font-medium text-sm md:text-base">Fuel</span>
                                  </div>
                                  <span className="block text-white/50 text-[11px] sm:text-xs mt-1">Fully covered</span>
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
                                <div className="text-white/40 text-[11px] font-bold uppercase tracking-widest">Service</div>
                                <div className="text-white/40 text-[11px] font-bold uppercase tracking-widest text-right">Half Day</div>
                                <div className="text-white/40 text-[11px] font-bold uppercase tracking-widest text-right">Full Day</div>
                              </div>
                              
                              {/* Boat Rental */}
                              <div className="grid grid-cols-3 px-4 sm:px-6 py-5 border-b border-white/5 items-center group hover:bg-white/[0.02] transition-colors">
                                <div>
                                  <span className="block text-white font-medium text-sm md:text-base">Boat Rental</span>
                                  <span className="block text-white/50 text-[11px] sm:text-xs mt-1">Base rate</span>
                                </div>
                                <div className="text-right text-white font-semibold text-sm leading-5">€{selectedBoat.pricingDetails.halfDay}</div>
                                <div className="text-right text-white font-semibold text-sm leading-5">€{selectedBoat.pricingDetails.fullDay}</div>
                              </div>
  
                              {/* Skipper Service */}
                              <div className="grid grid-cols-3 px-4 sm:px-6 py-5 border-b border-white/5 items-center group hover:bg-white/[0.02] transition-colors">
                                <div>
                                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                                    <span className="block text-white font-medium text-sm md:text-base">Skipper</span>
                                    {selectedBoat.pricingDetails.skipperIncluded ? (
                                      <span className="inline-flex w-fit px-2 py-0.5 rounded-full bg-[#D6BB8A]/20 text-[#D6BB8A] text-[9px] sm:text-[10px] font-bold tracking-wide uppercase">Required</span>
                                    ) : (
                                      <span className="inline-flex w-fit px-2 py-0.5 rounded-full bg-white/10 text-white/70 text-[9px] sm:text-[10px] font-medium tracking-wide uppercase">Optional</span>
                                    )}
                                  </div>
                                  <span className="block text-white/50 text-[11px] sm:text-xs mt-1">Professional captain</span>
                                </div>
                                {selectedBoat.pricingDetails.skipperIncluded ? (
                                  <div className="col-span-2 text-right">
                                    <span className="text-white/80 font-medium text-sm leading-5">Included in price</span>
                                  </div>
                                ) : (
                                  <>
                                    <div className="text-right text-white/80 font-medium text-sm leading-5">+€{selectedBoat.pricingDetails.skipperHalfDay}</div>
                                    <div className="text-right text-white/80 font-medium text-sm leading-5">+€{selectedBoat.pricingDetails.skipperFullDay}</div>
                                  </>
                                )}
                              </div>
                              
                              {/* Fuel Cost */}
                              <div className="grid grid-cols-3 px-4 sm:px-6 py-5 items-center group hover:bg-white/[0.02] transition-colors">
                                <div className="col-span-1">
                                  <div className="flex items-center gap-2">
                                    <Fuel className="w-4 h-4 text-[#D6BB8A]" strokeWidth={2} />
                                    <span className="block text-[#D6BB8A] font-medium text-sm md:text-base">Fuel</span>
                                  </div>
                                  <span className="block text-white/50 text-[11px] sm:text-xs mt-1">
                                    {selectedBoat.pricingDetails.fuelIncluded ? "Fully covered" : "Pay per use"}
                                  </span>
                                </div>
                                <div className="col-span-2 text-right">
                                  {selectedBoat.pricingDetails.fuelIncluded ? (
                                    <span className="inline-flex items-center rounded-full border border-[#D6BB8A]/20 bg-[#D6BB8A]/10 px-3 py-1 text-[10px] sm:text-[11px] font-bold text-[#D6BB8A] tracking-wide uppercase">
                                      Included
                                    </span>
                                  ) : (
                                    <span className="inline-flex items-center rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1 text-[10px] sm:text-[11px] font-bold text-red-400 tracking-wide uppercase">
                                      Not Included
                                    </span>
                                  )}
                                </div>
                              </div>
                            </>
                          )}`;

let startIdx = code.indexOf(`{selectedBoat.pricingDetails.hourly ? (`);

if (startIdx === -1) {
  startIdx = code.indexOf(`                         {/* Table Header */}`);
}

let endIdx = code.indexOf(`</div>`, code.indexOf(`Not Included`)) + 6;
if(startIdx !== -1) {
  let replacedCode = code.slice(0, startIdx) + replacement + code.slice(endIdx);
  fs.writeFileSync('src/components/FleetSection.tsx', replacedCode);
}
