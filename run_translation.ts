import fs from 'fs';
import translate from 'translate';
import { BOATS } from './src/data.ts';

translate.engine = 'google';

const allTrips = BOATS.flatMap(b => b.services.filter(s => s.type !== 'rental' && s.type !== 'taxi'));

const delay = (ms) => new Promise(res => setTimeout(res, ms));

async function translateLang(lang, code) {
  console.log('Translating to ' + lang);
  let tripsObjStr = "  trips: {\n";
  
  for (let trip of allTrips) {
    tripsObjStr += `    "${trip.id}": {\n`;
    const title = await translate(trip.title, lang);
    tripsObjStr += `      title: ${JSON.stringify(title)},\n`;
    
    const desc = await translate(trip.description, lang);
    tripsObjStr += `      description: ${JSON.stringify(desc)},\n`;
    
    if (trip.fullDescription) {
       const fd = await translate(trip.fullDescription, lang);
       tripsObjStr += `      fullDescription: ${JSON.stringify(fd)},\n`;
    }
    
    if (trip.highlights) {
      tripsObjStr += `      highlights: [\n`;
      for (let h of trip.highlights) {
        const th = await translate(h, lang);
        tripsObjStr += `        ${JSON.stringify(th)},\n`;
      }
      tripsObjStr += `      ],\n`;
    }
    if (trip.includes) {
      tripsObjStr += `      includes: [\n`;
      for (let h of trip.includes) {
        const th = await translate(h, lang);
        tripsObjStr += `        ${JSON.stringify(th)},\n`;
      }
      tripsObjStr += `      ],\n`;
    }
    if (trip.whatToBring) {
      tripsObjStr += `      whatToBring: [\n`;
      for (let h of trip.whatToBring) {
        const th = await translate(h, lang);
        tripsObjStr += `        ${JSON.stringify(th)},\n`;
      }
      tripsObjStr += `      ],\n`;
    }
    if (trip.knowBeforeYouGo) {
      tripsObjStr += `      knowBeforeYouGo: [\n`;
      for (let h of trip.knowBeforeYouGo) {
        const th = await translate(h, lang);
        tripsObjStr += `        ${JSON.stringify(th)},\n`;
      }
      tripsObjStr += `      ],\n`;
    }
    if (trip.hourlyPackages && trip.hourlyPackages.length > 0) {
      tripsObjStr += `      packages: [\n`;
      for (let pkg of trip.hourlyPackages) {
         let theLocs = undefined;
         if (pkg.locations) {
             theLocs = await translate(pkg.locations, lang);
         }
         tripsObjStr += `        { locations: ${JSON.stringify(theLocs)}`;
         if (pkg.inclusions) {
            tripsObjStr += `, inclusions: [\n`;
            for (let inc of pkg.inclusions) {
               const tinc = await translate(inc, lang);
               tripsObjStr += `          ${JSON.stringify(tinc)},\n`;
            }
            tripsObjStr += `        ]`;
         }
         tripsObjStr += ` },\n`;
      }
      tripsObjStr += `      ],\n`;
    }
    
    tripsObjStr += `    },\n`;
  }
  tripsObjStr += "  }\n";
  
  const file = `src/locales/${code}UI.ts`;
  let content = fs.readFileSync(file, 'utf8');
  
  let idx = content.indexOf('  trips: {');
  if (idx !== -1) {
      content = content.substring(0, idx) + tripsObjStr + "};\n";
  } else {
      let endIdx = content.lastIndexOf('};\n');
      if (endIdx !== -1) {
          content = content.substring(0, endIdx) + ",\n" + tripsObjStr + "};\n";
      } else {
          content = content.replace(/};\s*$/, tripsObjStr + "};\n");
      }
  }
  fs.writeFileSync(file, content);
  console.log('Finished ' + lang);
}

async function run() {
    await translateLang('de', 'de');
    await translateLang('hr', 'hr');
    await translateLang('it', 'it');
    await translateLang('nl', 'nl');
    await translateLang('sl', 'sl');
}

run().catch(e => { console.error(e); process.exit(1); });
