const fs = require('fs');
const tsCode = fs.readFileSync('src/data.ts', 'utf8');

const regex = /included:\s*\[([\s\S]*?)\]/g;
let match;
const allItems = new Set();
while ((match = regex.exec(tsCode)) !== null) {
  const arrStr = `[${match[1]}]`;
  // safely evaluate this inner array
  try {
    const list = eval(arrStr);
    list.forEach(i => allItems.add(i));
  } catch (e) {
    console.log("error evaluating", arrStr);
  }
}

const uniqueItems = Array.from(allItems);
console.log(JSON.stringify(uniqueItems));
