rsetTimeout(()=>{
    console.log("Database connected")
},20000)

Promise.withResolvers().then(()=>{
console.log("promise resolved")



})