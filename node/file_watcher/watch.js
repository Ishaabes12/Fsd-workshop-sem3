const fs = require("fs");
const watcher = fs.watch('intro.txt', (eventType, filename) => {
  console.log(`Event: ${eventType}`);
  console.log(`Filename: ${filename}`);
});

setTimeout(() => {
  watcher.close();
  console.log('Stopped watching the file.');
}, 5000);
