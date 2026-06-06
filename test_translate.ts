import fs from 'fs';
import translate from 'translate';

translate.engine = 'google';

const langs = { de: 'de', hr: 'hr', it: 'it', nl: 'nl', sl: 'sl' }; 

async function testT() {
  const t = await translate("Hello world", "de");
  console.log(t);
}

testT().catch(console.error);
