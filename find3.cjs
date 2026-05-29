const fs = require('fs');
console.log("Root:");
fs.readdirSync(__dirname).forEach(f => { if(f.includes('hero_video_nuni')) console.log(f) });
console.log("Public:");
fs.readdirSync(__dirname + '/public').forEach(f => { if(f.includes('hero_video_nuni')) console.log(f) });
console.log("Images:");
fs.readdirSync(__dirname + '/public/images').forEach(f => { if(f.includes('hero_video_nuni')) console.log(f) });
