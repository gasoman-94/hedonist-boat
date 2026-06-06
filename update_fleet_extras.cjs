const fs = require('fs');

const labels = {
  en: { full_description: "Full description", what_to_bring: "What to bring", know_before_you_go: "Know before you go", highlights: "Highlights", hourly_charter: "Hourly Charter", base_rate_per_hour: "Base rate per hour", read_more: "Read more" },
  de: { full_description: "Vollständige Beschreibung", what_to_bring: "Mitzubringen", know_before_you_go: "Gut zu wissen", highlights: "Höhepunkte", hourly_charter: "Stundencharter", base_rate_per_hour: "Grundpreis pro Stunde", read_more: "Mehr Info" },
  hr: { full_description: "Potpuni opis", what_to_bring: "Što ponijeti", know_before_you_go: "Korisne informacije", highlights: "Izdvojeno", hourly_charter: "Najam po satu", base_rate_per_hour: "Osnovna cijena po satu", read_more: "Pročitaj više" },
  it: { full_description: "Descrizione completa", what_to_bring: "Cosa portare", know_before_you_go: "Da sapere prima", highlights: "In evidenza", hourly_charter: "Noleggio orario", base_rate_per_hour: "Tariffa base all'ora", read_more: "Scopri di più" },
  nl: { full_description: "Volledige beschrijving", what_to_bring: "Meenemen", know_before_you_go: "Goed om te weten", highlights: "Hoogtepunten", hourly_charter: "Uurcharter", base_rate_per_hour: "Basistarief per uur", read_more: "Lees meer" },
  sl: { full_description: "Celoten opis", what_to_bring: "Kaj prinesti", know_before_you_go: "Dobro je vedeti", highlights: "Poudarki", hourly_charter: "Urni najem", base_rate_per_hour: "Osnovna cena na uro", read_more: "Preberi več" }
};

const mapLang = { en: "en", hr: "hr", de: "de", it: "it", nl: "nl", sl: "sl" };

Object.entries(mapLang).forEach(([lang, fileCode]) => {
  const file = `src/locales/${fileCode}UI.ts`;
  let content = fs.readFileSync(file, 'utf8');
  
  const trans = labels[lang];
  // Replace fleet: {
  // with fleet: { filter_trips: "...", all_trips: "...",
  const replaceRegex = /fleet:\s*\{/;
  content = content.replace(replaceRegex, `fleet: {\n    full_description: "${trans.full_description}",\n    what_to_bring: "${trans.what_to_bring}",\n    know_before_you_go: "${trans.know_before_you_go}",\n    highlights: "${trans.highlights}",\n    hourly_charter: "${trans.hourly_charter}",\n    base_rate_per_hour: "${trans.base_rate_per_hour}",\n    read_more: "${trans.read_more}",`);
  
  fs.writeFileSync(file, content);
});
console.log('done fleet extras');
