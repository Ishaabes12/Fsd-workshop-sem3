import fs from 'fs'

fs.watch("notes.text",(prev ,curr) => {
    console.log("previous",prev);
    console.log("current",curr);
    
});

setTimeout(() => {
    watcher.close()
    console.log("file watcher closed")


}, 5000)