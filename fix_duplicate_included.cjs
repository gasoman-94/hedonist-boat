const fs = require('fs');

const mapLang = { en: "en", hr: "hr", de: "de", it: "it", nl: "nl", sl: "sl" };

Object.entries(mapLang).forEach(([lang, fileCode]) => {
  const file = `src/locales/${fileCode}UI.ts`;
  let content = fs.readFileSync(file, 'utf8');
  
  // They all have `specs_title: "...",\n    included: "...",\n    capacity:`
  // For each one, replace `included: "...",` right after `specs_title:`
  const replaceRegex = /(specs_title:.*?\n\s*)included:\s*".*?",?\n/;
  content = content.replace(replaceRegex, '$1');
  
  fs.writeFileSync(file, content);
});
console.log('done');
