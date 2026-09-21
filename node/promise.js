const fetchUserData = new Promise((resolve, reject) => {
    let success = true;

    setTimeout(() => {
        if (success) {
            resolve({ id: 101, username: "ivymad" });
        } else {
            reject("Failed to fetch the user data");
        }
    }, 1000);
});

fetchUserData.then((usr) =>{
    console.log(user);
})
.catch((err)=>{
    console .log(err);

})