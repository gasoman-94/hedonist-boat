const fs = require('fs');

const translations = {
  en: {
    subtitle: "Curated Marine Experiences",
    description: "Let us take the helm while you simply sit back and enjoy. From intimate sunset cruises to exhilarating island-hopping adventures, our bespoke, predefined tours with seasoned skippers are tailored for those who want to discover the Adriatic in pure relaxation."
  },
  de: {
    subtitle: "Ausgesuchte Meereserlebnisse",
    description: "Überlassen Sie uns das Steuer, während Sie sich einfach zurücklehnen und genießen. Von intimen Fahrten in den Sonnenuntergang bis hin zu aufregenden Inselhopping-Abenteuern – unsere maßgeschneiderten, vordefinierten Touren mit erfahrenen Skippern sind perfekt für alle, die die Adria in purer Entspannung entdecken möchten."
  },
  hr: {
    subtitle: "Odabrani morski doživljaji",
    description: "Prepustite nam kormilo dok se vi jednostavno opuštate i uživate. Od intimnih krstarenja uz zalazak sunca do uzbudljivih avantura po otocima, naše prilagođene, unaprijed osmišljene ture s iskusnim skiperima stvorene su za one koji žele otkriti Jadran u potpunom opuštanju."
  },
  it: {
    subtitle: "Esperienze marine selezionate",
    description: "Lasciaci il timone mentre ti siedi e ti diverti. Dai viaggi intimi al tramonto alle esaltanti avventure tra le isole, i nostri tour su misura e predefiniti con skipper esperti sono creati per chi vuole esplorare l'Adriatico nel puro relax."
  },
  nl: {
    subtitle: "Geselecteerde maritieme ervaringen",
    description: "Laat ons het roer overnemen terwijl u eenvoudigweg achterover leunt en geniet. Van intieme zonsondergangcruises tot spannende eilandhoppenavonturen, onze op maat gemaakte, vooraf bepaalde tours met ervaren schippers zijn ontworpen voor degenen die de Adriatische Zee in pure ontspanning willen ontdekken."
  },
  sl: {
    subtitle: "Izbrana morska doživetja",
    description: "Prepustite nam krmilo, medtem ko se vi preprosto sprostite in uživate. Od intimnih križarjenj ob sončnem zahodu do razburljivih pustolovščin po otokih – naše prilagojene, vnaprej določene ture z izkušenimi skiperji so ustvarjene za tiste, ki želijo odkrivati Jadran v popolni sprostitvi."
  }
};

const mapLang = { en: "en", hr: "hr", de: "de", it: "it", nl: "nl", sl: "sl" };

Object.entries(mapLang).forEach(([lang, fileCode]) => {
  const file = `src/locales/${fileCode}UI.ts`;
  let content = fs.readFileSync(file, 'utf8');
  
  const trans = translations[lang];
  const replaceRegex = /excursions:\s*\{/;
  content = content.replace(replaceRegex, `excursions: {\n    subtitle: "${trans.subtitle}",\n    description: "${trans.description}",`);
  
  fs.writeFileSync(file, content);
});
console.log('done');
