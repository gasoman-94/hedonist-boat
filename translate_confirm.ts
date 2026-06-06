import fs from "fs";
import translate from "translate";

translate.engine = "google";

const langs = { de: "de", hr: "hr", it: "it", nl: "nl", sl: "sl" };

const strings = {
  confirm_date: "Confirm Date"
};

async function run() {
  // First update English
  let enContent = fs.readFileSync("src/locales/enUI.ts", "utf8");
  enContent = enContent.replace(/(booking:\s*\{)/, `$1\n    confirm_date: ${JSON.stringify(strings.confirm_date)},`);
  fs.writeFileSync("src/locales/enUI.ts", enContent);

  for (const [lang, code] of Object.entries(langs)) {
    console.log("Translating to", lang);
    let strObj = "";
    for (const [key, val] of Object.entries(strings)) {
      const translated = await translate(val, lang);
      strObj += `    ${key}: ${JSON.stringify(translated)},\n`;
    }
    
    const file = `src/locales/${code}UI.ts`;
    let content = fs.readFileSync(file, "utf8");
    content = content.replace(/(booking:\s*\{)/, `$1\n${strObj}`);
    fs.writeFileSync(file, content);
    console.log('done ' + lang);
  }
}

run().catch(console.error);
