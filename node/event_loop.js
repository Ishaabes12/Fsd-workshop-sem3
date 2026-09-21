import fs from 'fs'
import process from 'process'
//  setTimeout(() => {
//     console.log("SetTime out");
// })
fs.readFile("intro.txt", "utf8", (err, data) => {
    setTimeout(()=>{
        console.log("setTimeout inside fs");
    } ,0)
    console.log("file data read completed");

})


 fs.readFile("intro.txt", "utf8", (err, data) => {
    console.log("file data read completed");
})
setInterval(() => {
     console.log("Set Interval");
 }, 1000)
  setImmediate(() => {
     console.log("Set Immediate");
})
 process.nextTick(()=>{
    console.log("Next Tick");
})