const fs = require('fs');

const translations = {
  en: { filter_trips: "Filter trips by boat", all_trips: "All Trips" },
  de: { filter_trips: "Ausflüge nach Boot filtern", all_trips: "Alle Ausflüge" },
  hr: { filter_trips: "Filtriraj izlete po brodu", all_trips: "Svi izleti" },
  it: { filter_trips: "Filtra i viaggi per barca", all_trips: "Tutti i viaggi" },
  nl: { filter_trips: "Filter ritten op boot", all_trips: "Alle trips" },
  sl: { filter_trips: "Filtriraj izlete po plovilu", all_trips: "Vsi izleti" }
};

const mapLang = { en: "en", hr: "hr", de: "de", it: "it", nl: "nl", sl: "sl" };

Object.entries(mapLang).forEach(([lang, fileCode]) => {
  const file = `src/locales/${fileCode}UI.ts`;
  let content = fs.readFileSync(file, 'utf8');
  
  const trans = translations[lang];
  // Replace excursions: {
  // with excursions: { filter_trips: "...", all_trips: "...",
  const replaceRegex = /excursions:\s*\{/;
  content = content.replace(replaceRegex, `excursions: {\n    filter_trips: "${trans.filter_trips}",\n    all_trips: "${trans.all_trips}",`);
  
  fs.writeFileSync(file, content);
});
console.log('done');
