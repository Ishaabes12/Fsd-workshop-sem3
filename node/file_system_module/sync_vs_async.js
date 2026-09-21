console.log("start");
for(let i=1; i<=10; i++){
    console.log(i);
}
console.log("=== Synchronus Start ===");
console.log("=== Synchronus end ===");
setTimeout(function(()=>{
    console.log("Hello World")
},2000)
console.log("=== Asynchronus end ===");

