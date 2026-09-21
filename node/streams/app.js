import fs from "fs";
//Readable Streams
const readStream=fs.createReadStream("input.txt",{encoding:"utf-8"});
readStream.on("data",(chunk)=>{
    console.log("Data Received");
    console.log("Data:",chunk);
})
readStream.on("end",()=>{
    console.log("END");
})
readStream.on("error",(err)=>{
    console.log("Error:",err.message);
})
const writeStream=fs.createWriteStream("output.txt");
writeStream.write("Hello World\n");
writeStream.on("finish",()=>{
    console.log("Data Written");
})
writeStream.on("error",(err)=>{
    console.log("Error:",err.message);
})
readStream.pipe(writeStream);