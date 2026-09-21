//function signup(){
  //  console.log("Welcome")
    //sendConfimationEmail()
    //sendNotification()
//}

//function sendConfimationEmail(){
  //  console.log("Email send");
//}
//function sendNotification(){
  //  console.log("Send notification")
//}
//signup()

import EventEmitter from "node:events";


// create EventEmitter class instance
const emitter = new EventEmitter()

//event registration


emitter.on("orderPlaced",()=>{
    console.log("order placed")
})
emitter.on("orderPlaced",()=>{
    console.log("confirmation detail send")
})
emitter.on("orderPlaced",()=>{
    console.log("Inventroy updated")
})
emitter.emit("orderPlaced")