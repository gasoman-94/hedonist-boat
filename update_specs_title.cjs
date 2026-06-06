const fs = require('fs');
const mapLang = { en: 'Specs', de: 'Spezifikationen', hr: 'Specifikacije', it: 'Specifiche', nl: 'Specificaties', sl: 'Specifikacije' };
Object.entries(mapLang).forEach(([lang, val]) => {
  const file = 'src/locales/' + lang + 'UI.ts';
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/specs:\s*"[^"]+",/, 'specs_title: "' + val + '",');
  fs.writeFileSync(file, content);
});
console.log('Done');
