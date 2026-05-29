const fs = require('fs');
fs.readdirSync(__dirname).forEach(file => {
  if (file.includes('hero_video_nuni')) {
    console.log("Found:", file, fs.statSync(file).size);
  }
});
