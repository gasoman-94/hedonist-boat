const fs = require('fs');

const labels = {
  en: { 
    on_demand: "On-Demand Transfers",
    on_demand_desc: "Our boat transfer services are strictly on demand. Simply choose your destination from the available options and reach out to us on WhatsApp anytime to arrange your ride.",
    operated_by: "Operated by",
    build_ride: "BUILD RIDE",
    passengers: "Passengers",
    total: "Total",
    per_person: "per person",
    min: "Min.",
    request_whatsapp: "Request a ride via WhatsApp"
  },
  de: { 
    on_demand: "On-Demand-Transfers",
    on_demand_desc: "Unsere Boottransfer-Dienste erfolgen streng auf Anfrage. Wählen Sie einfach Ihr Ziel aus den verfügbaren Optionen und kontaktieren Sie uns jederzeit über WhatsApp, um Ihre Fahrt zu organisieren.",
    operated_by: "Durchgeführt von",
    build_ride: "FAHRT ERSTELLEN",
    passengers: "Passagiere",
    total: "Gesamt",
    per_person: "pro Person",
    min: "Min.",
    request_whatsapp: "Fahrt über WhatsApp anfragen"
  },
  hr: { 
    on_demand: "Transferi na zahtjev",
    on_demand_desc: "Naše usluge prijevoza brodom su isključivo na zahtjev. Jednostavno odaberite odredište iz dostupnih opcija i obratite nam se na WhatsApp kako biste organizirali svoju vožnjo.",
    operated_by: "Upravlja",
    build_ride: "NAPRAVI VOŽNJU",
    passengers: "Putnici",
    total: "Ukupno",
    per_person: "po osobi",
    min: "Min.",
    request_whatsapp: "Zatraži vožnju putem WhatsApp-a"
  },
  it: { 
    on_demand: "Trasferimenti su richiesta",
    on_demand_desc: "I nostri servizi di trasferimento in barca sono rigorosamente su richiesta. Scegli semplicemente la tua destinazione dalle opzioni disponibili e contattaci su WhatsApp in qualsiasi momento per organizzare il tuo viaggio.",
    operated_by: "Gestito da",
    build_ride: "CREA VIAGGIO",
    passengers: "Passeggeri",
    total: "Totale",
    per_person: "a persona",
    min: "Min.",
    request_whatsapp: "Richiedi un passaggio via WhatsApp"
  },
  nl: { 
    on_demand: "Transfers op aanvraag",
    on_demand_desc: "Onze boottransferdiensten zijn strikt op aanvraag. Kies eenvoudig uw bestemming uit de beschikbare opties en neem op elk moment contact met ons op via WhatsApp om uw rit te regelen.",
    operated_by: "Uitgevoerd door",
    build_ride: "RIT MAKEN",
    passengers: "Passagiers",
    total: "Totaal",
    per_person: "per persoon",
    min: "Min.",
    request_whatsapp: "Vraag een rit aan via WhatsApp"
  },
  sl: { 
    on_demand: "Prevozi na zahtevo",
    on_demand_desc: "Naše storitve prevoza s čolni so izključno na zahtevo. Izberite cilj med ponujenimi možnostmi in se kadar koli obrnite na nas prek storitve WhatsApp, da organizirate svojo vožnjo.",
    operated_by: "Upravlja",
    build_ride: "USTVARI VOŽNJO",
    passengers: "Potniki",
    total: "Skupaj",
    per_person: "na osebo",
    min: "Min.",
    request_whatsapp: "Zahtevaj vožnjo prek WhatsApp-a"
  }
};

const mapLang = { en: "en", hr: "hr", de: "de", it: "it", nl: "nl", sl: "sl" };

Object.entries(mapLang).forEach(([lang, fileCode]) => {
  const file = `src/locales/${fileCode}UI.ts`;
  let content = fs.readFileSync(file, 'utf8');
  
  const trans = labels[lang];
  // Replace taxi: {
  // with taxi: { on_demand: "...", etc.
  const replaceRegex = /taxi:\s*\{/;
  content = content.replace(replaceRegex, `taxi: {\n    on_demand: "${trans.on_demand}",\n    on_demand_desc: "${trans.on_demand_desc}",\n    operated_by: "${trans.operated_by}",\n    build_ride: "${trans.build_ride}",\n    passengers: "${trans.passengers}",\n    total: "${trans.total}",\n    per_person: "${trans.per_person}",\n    min: "${trans.min}",\n    request_whatsapp: "${trans.request_whatsapp}",`);
  
  fs.writeFileSync(file, content);
});
console.log('done taxi extras');
