const fs = require('fs');

const data = {
  en: {
    specs: {
      "Length": "Length", "Width": "Width", "Engine": "Engine", "Fuel Tank": "Fuel Tank", "Water Tank": "Water Tank", "Beds / Cabins": "Beds / Cabins"
    },
    premium_amenities: "Premium Amenities", image_gallery: "Image Gallery", rates_fees: "Rates & Fees", show_fewer_amenities: "Show fewer amenities", read_all_amenities: "Read all amenities",
    service: "Service", rate: "Rate", base_prices: "Base Prices", duration: "Duration", type: "Type", price: "Price", options: "Options", close: "Close", guests_word: "Guests", half_day: "Half Day", full_day: "Full Day", boat_rental: "Boat Rental", base_rate: "Base rate", skipper: "Skipper", required: "Required", optional: "Optional", professional_captain: "Professional captain", included_in_price: "Included in price", sailor_guide: "Sailor / Tour Guide", included: "Included", experienced_sailor: "Experienced sailor & guide", fuel: "Fuel", fully_covered: "Fully covered", pay_per_use: "Pay per use", not_included: "Not Included", fuel_notice: "The boat is provided with a full tank and must be returned full.", overview: "Overview",
    boats: {
      "master-660": { description: "The Master 660 Open is a premier center-console RIB that blends exhilarating sports performance with uncompromising comfort on the open water. Tailored for family outings, coastal exploration, or adventurous day trips, this versatile vessel boasts exceptional agility and a spacious deck layout. With modern navigation amenities and superior sea-keeping capabilities, the Master 660 ensures an unforgettable nautical experience, making it the perfect choice for discovering hidden bays and pristine waters along the stunning Adriatic coastline." },
      "gaia-22": { description: "The Gaia 22 is a luxurious and spacious open-style boat tailored for maximum comfort and pure enjoyment. Designed with a deep V-hull, it provides a remarkably smooth and stable ride even in choppy conditions, keeping you and your guests completely dry. The expansive sundeck at the bow is perfect for soaking up the sun, while the generous stern area offers comfortable seating around a versatile foldable table. Whether you're planning a relaxed family picnic on the water, a romantic sunset cruise, or exploring secluded coves, the Gaia 22 delivers an elegant, high-end cruising experience." },
      "carnevali-36s": { description: "The Carnevali 36 is the pinnacle of absolute luxury, a magnificent 11-meter mega-yacht crafted for those who demand the highest standards at sea. Step aboard to discover a beautifully appointed, air-conditioned interior salon featuring plush seating and elegant wood finishes, perfectly complementing the fully equipped galley. Above deck, the expansive flybridge offers panoramic views of the Adriatic, while the massive bow sundeck and shaded stern dining area provide unparalleled spaces for relaxation and entertainment. Whether hosting a lavish private party, a bespoke anniversary celebration, or simply indulging in a premium day cruise, the Carnevali 36 is your ultimate floating sanctuary." }
    }
  },
  de: {
    specs: { "Length": "Länge", "Width": "Breite", "Engine": "Motor", "Fuel Tank": "Kraftstofftank", "Water Tank": "Wassertank", "Beds / Cabins": "Betten / Kabinen" },
    premium_amenities: "Premium Annehmlichkeiten", image_gallery: "Bildergalerie", rates_fees: "Preise & Gebühren", show_fewer_amenities: "Weniger anzeigen", read_all_amenities: "Alle Annehmlichkeiten",
    service: "Service", rate: "Tarif", base_prices: "Grundpreise", duration: "Dauer", type: "Typ", price: "Preis", options: "Optionen", close: "Schließen", guests_word: "Gäste", half_day: "Halbtags", full_day: "Ganztags", boat_rental: "Bootsmiete", base_rate: "Grundtarif", skipper: "Skipper", required: "Erforderlich", optional: "Optional", professional_captain: "Professioneller Kapitän", included_in_price: "Im Preis inbegriffen", sailor_guide: "Matrose / Reiseleiter", included: "Inklusive", experienced_sailor: "Erfahrener Matrose", fuel: "Kraftstoff", fully_covered: "Voll abgedeckt", pay_per_use: "Nach Verbrauch", not_included: "Nicht inbegriffen", fuel_notice: "Das Boot wird vollgetankt übergeben und muss voll zurückgegeben werden.", overview: "Übersicht",
    boats: {
      "master-660": { description: "Das Master 660 Open ist ein erstklassiges Mittelkonsolen-RIB, das aufregende sportliche Leistung mit kompromisslosem Komfort verbindet." },
      "gaia-22": { description: "Die Gaia 22 ist ein luxuriöses, geräumiges Boot im offenen Stil, das auf maximalen Komfort und puren Genuss zugeschnitten ist." },
      "carnevali-36s": { description: "Die Carnevali 36 ist der Inbegriff absoluten Luxus, eine beeindruckende 11-Meter-Megayacht." }
    }
  },
  hr: {
    specs: { "Length": "Dužina", "Width": "Širina", "Engine": "Motor", "Fuel Tank": "Spremnik goriva", "Water Tank": "Spremnik vode", "Beds / Cabins": "Kreveti / Kabine" },
    premium_amenities: "Premium Sadržaji", image_gallery: "Galerija", rates_fees: "Cijene i naknade", show_fewer_amenities: "Prikaži manje", read_all_amenities: "Svi sadržaji",
    service: "Usluga", rate: "Tarifa", base_prices: "Osnovne cijene", duration: "Trajanje", type: "Tip", price: "Cena", options: "Opcije", close: "Zatvori", guests_word: "Gostiju", half_day: "Pola dana", full_day: "Cijeli dan", boat_rental: "Najam broda", base_rate: "Osnovna tarifa", skipper: "Skipper", required: "Obavezno", optional: "Opcijonalno", professional_captain: "Profesionalni kapetan", included_in_price: "Uključeno u cijenu", sailor_guide: "Mornar / Vodič", included: "Uključeno", experienced_sailor: "Iskusni mornar", fuel: "Gorivo", fully_covered: "Potpuno pokriveno", pay_per_use: "Po potrošnji", not_included: "Nije uključeno", fuel_notice: "Brod se isporučuje s punim spremnikom i mora se vratiti pun.", overview: "Pregled",
    boats: {
      "master-660": { description: "Master 660 Open je vrhunski gumenjak sa središnjom konzolom koji spaja uzbudljive sportske performanse s komforom." },
      "gaia-22": { description: "Gaia 22 je luksuzan prostran brod otvorenog tipa prilagođen za maksimalnu udobnost i uživanje." },
      "carnevali-36s": { description: "Carnevali 36 je vrhunac apsolutnog luksuza, veličanstvena mega-jahta od 11 metara." }
    }
  },
  it: {
    specs: { "Length": "Lunghezza", "Width": "Larghezza", "Engine": "Motore", "Fuel Tank": "Serbatoio carburante", "Water Tank": "Serbatoio acqua", "Beds / Cabins": "Letti / Cabine" },
    premium_amenities: "Servizi Premium", image_gallery: "Galleria", rates_fees: "Tariffe e commissioni", show_fewer_amenities: "Mostra meno", read_all_amenities: "Tutti i servizi",
    service: "Servizio", rate: "Tariffa", base_prices: "Prezzi base", duration: "Durata", type: "Tipo", price: "Prezzo", options: "Opzioni", close: "Chiudi", guests_word: "Ospiti", half_day: "Mezza giornata", full_day: "Giornata intera", boat_rental: "Noleggio", base_rate: "Tariffa base", skipper: "Skipper", required: "Obbligatorio", optional: "Opzionale", professional_captain: "Capitano professionista", included_in_price: "Incluso nel prezzo", sailor_guide: "Marinaio / Guida", included: "Incluso", experienced_sailor: "Marinaio esperto", fuel: "Carburante", fully_covered: "Coperto", pay_per_use: "A consumo", not_included: "Non incluso", fuel_notice: "La barca viene fornita con il serbatoio pieno e deve essere restituita con il pieno.", overview: "Panoramica",
    boats: {
      "master-660": { description: "Il Master 660 Open è un RIB di prima classe con console centrale che unisce prestazioni sportive e comfort." },
      "gaia-22": { description: "La Gaia 22 è una lussuosa e spaziosa barca open progettata per il massimo comfort." },
      "carnevali-36s": { description: "Il Carnevali 36 è l'apice del lusso assoluto, un magnifico mega-yacht di 11 metri." }
    }
  },
  nl: {
    specs: { "Length": "Lengte", "Width": "Breedte", "Engine": "Motor", "Fuel Tank": "Brandstoftank", "Water Tank": "Watertank", "Beds / Cabins": "Bedden / Cabines" },
    premium_amenities: "Premium Voorzieningen", image_gallery: "Fotogalerij", rates_fees: "Tarieven en kosten", show_fewer_amenities: "Toon minder", read_all_amenities: "Alle voorzieningen",
    service: "Dienst", rate: "Tarief", base_prices: "Basisprijzen", duration: "Duur", type: "Type", price: "Prijs", options: "Opties", close: "Sluiten", guests_word: "Gasten", half_day: "Halve dag", full_day: "Hele dag", boat_rental: "Boot verhuur", base_rate: "Basistarief", skipper: "Schipper", required: "Verplicht", optional: "Optioneel", professional_captain: "Professionele kapitein", included_in_price: "Inbegrepen in de prijs", sailor_guide: "Zeeman / Gids", included: "Inbegrepen", experienced_sailor: "Ervaren zeeman", fuel: "Brandstof", fully_covered: "Inbegrepen", pay_per_use: "Naar verbruik", not_included: "Niet inbegrepen", fuel_notice: "De boot wordt met een volle tank geleverd en dient vol te worden geretourneerd.", overview: "Overzicht",
    boats: {
      "master-660": { description: "De Master 660 Open is een eersteklas RIB met middenconsole." },
      "gaia-22": { description: "De Gaia 22 is een luxe en ruime open boot op maat gemaakt voor maximaal comfort." },
      "carnevali-36s": { description: "De Carnevali 36 is het toppunt van pure luxe, een magnifiek 11-meter mega-jacht." }
    }
  },
  sl: {
    specs: { "Length": "Dolžina", "Width": "Širina", "Engine": "Motor", "Fuel Tank": "Rezervoar za gorivo", "Water Tank": "Rezervoar za vodo", "Beds / Cabins": "Postelje / Kabine" },
    premium_amenities: "Premium Ugodnosti", image_gallery: "Galerija", rates_fees: "Cenik", show_fewer_amenities: "Prikaži manj", read_all_amenities: "Vse ugodnosti",
    service: "Storitev", rate: "Tarifa", base_prices: "Osnovne cene", duration: "Trajanje", type: "Vrsta", price: "Cena", options: "Opcije", close: "Zapri", guests_word: "Gostov", half_day: "Poldnevni", full_day: "Celodnevni", boat_rental: "Najem plovila", base_rate: "Osnovna tarifa", skipper: "Skiper", required: "Obvezno", optional: "Opcijsko", professional_captain: "Profesionalni kapitan", included_in_price: "Vključeno v ceno", sailor_guide: "Mornar / Vodič", included: "Vključeno", experienced_sailor: "Izkušen mornar", fuel: "Gorivo", fully_covered: "Vključeno", pay_per_use: "Po porabi", not_included: "Ni vključeno", fuel_notice: "Plovilo se preda s polnim rezervoarjem in se mora vrniti polnega.", overview: "Pregled",
    boats: {
      "master-660": { description: "Master 660 Open je vrhunski gumenjak s sredinsko konzolo." },
      "gaia-22": { description: "Gaia 22 je luksuzno prostorno plovilo odprtega tipa." },
      "carnevali-36s": { description: "Carnevali 36 je vrhunec absolutnega luksuza, čudovita 11-metrska jahta." }
    }
  }
};

const mapLang = { en: "en", hr: "hr", de: "de", it: "it", nl: "nl", sl: "sl" };

Object.entries(mapLang).forEach(([lang, fileCode]) => {
  const file = `src/locales/${fileCode}UI.ts`;
  let content = fs.readFileSync(file, 'utf8');
  let langData = data[lang];
  let jsonString = JSON.stringify(langData).slice(1, -1); // remove outer {}
  // find fleet: { ... } and append
  let replaceTarget = content.match(/read_more:\s*".*?",?\n\s*\}/)[0];
  content = content.replace(replaceTarget, `read_more: "READ MORE",\n    ${jsonString}\n  }`);
  fs.writeFileSync(file, content);
});
console.log('done');
