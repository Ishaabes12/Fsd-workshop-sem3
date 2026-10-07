console.log("Program Started");

setTimeout(() => {
    console.log("Timer is Running");

    Promise.resolve().then(() => {
        console.log("Promise is Running");

        process.nextTick(() => {
            console.log("Next Tick Executed");
        });
    });

}, 0);

console.log("Program Ended");