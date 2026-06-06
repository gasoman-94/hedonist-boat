import fs from 'fs';
import { BOATS } from './src/data.ts';

const langs = { en: 'en', de: 'de', hr: 'hr', it: 'it', nl: 'nl', sl: 'sl' };

const allTrips = BOATS.flatMap(b => b.services.filter(s => s.type !== 'rental' && s.type !== 'taxi'));

let tripsObjStr = "  trips: {\n";
for (let trip of allTrips) {
  tripsObjStr += `    "${trip.id}": {\n`;
  tripsObjStr += `      title: ${JSON.stringify(trip.title)},\n`;
  tripsObjStr += `      description: ${JSON.stringify(trip.description)},\n`;
  if (trip.fullDescription) tripsObjStr += `      fullDescription: ${JSON.stringify(trip.fullDescription)},\n`;
  if (trip.highlights) tripsObjStr += `      highlights: ${JSON.stringify(trip.highlights)},\n`;
  if (trip.includes) tripsObjStr += `      includes: ${JSON.stringify(trip.includes)},\n`;
  if (trip.whatToBring) tripsObjStr += `      whatToBring: ${JSON.stringify(trip.whatToBring)},\n`;
  if (trip.knowBeforeYouGo) tripsObjStr += `      knowBeforeYouGo: ${JSON.stringify(trip.knowBeforeYouGo)},\n`;
  if (trip.hourlyPackages) {
    tripsObjStr += `      packages: [\n`;
    for (let pkg of trip.hourlyPackages) {
      tripsObjStr += `        { locations: ${JSON.stringify(pkg.locations)}, inclusions: ${JSON.stringify(pkg.inclusions)} },\n`;
    }
    tripsObjStr += `      ]\n`;
  }
  tripsObjStr += `    },\n`;
}
tripsObjStr += "  }\n";

for (let [lang, code] of Object.entries(langs)) {
  const file = `src/locales/${code}UI.ts`;
  let content = fs.readFileSync(file, 'utf8');
  if (!content.includes('trips: {')) {
     content = content.replace(/};\s*$/, tripsObjStr + "};\n");
     fs.writeFileSync(file, content);
  }
}
console.log('done english fill');
