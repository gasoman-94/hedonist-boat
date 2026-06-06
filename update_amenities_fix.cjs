const fs = require('fs');

const mapLang = { en: "en", hr: "hr", de: "de", it: "it", nl: "nl", sl: "sl" };

Object.entries(mapLang).forEach(([lang, fileCode]) => {
  const file = `src/locales/${fileCode}UI.ts`;
  let content = fs.readFileSync(file, 'utf8');

  // Extract amenities block
  const match = content.match(/amenities:\s*\{[\s\S]*?\},/);
  if (match) {
    const amenitiesBlock = match[0];
    // Remove it from its current position
    content = content.replace(amenitiesBlock, '');
    
    // Insert it before 'boats: {'
    // We need to exactly match 'boats: {' inside the fleet block.
    // Let's match 'overview: "...",' and add amenities after it.
    // wait, different languages have different translations for overview!
    // We can confidently match 'boats: {' with a specific shape.
    const boatsObjMatch = content.match(/boats:\s*\{\s*"master-660":/);
    if (boatsObjMatch) {
       content = content.replace(boatsObjMatch[0], amenitiesBlock + "\n    " + boatsObjMatch[0]);
    } else {
       console.log('could NOT find boats: { master-660 ... for lang ' + lang);
    }
  }

  // now fix the "boats:" string that was broken.
  // We replaced `boats: ...` with `amenities... boats:`. So maybe `boats: "Boote"` became `amenities: {...}, boats: "Boote"`
  // If we removed amenitiesBlock, it should be back to `boats:`
  
  fs.writeFileSync(file, content);
});
console.log('done');
