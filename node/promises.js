function promise2(id, username, email, location) {
    return new Promise((resolve, reject) => {
        if (id && username && email && location) {
            resolve({
                id,
                username,
                email,
                location
            });
        } else {
            reject("All fields are required!");
        }
    });
}


const promise1 = new Promise((resolve) => {
   
    setTimeout(() => {
        resolve({
            id: 2503203100062,
            username: "isha",
            email: "isha@example.com",
            location: "hathras"
        });
    }, 500);
});

const promise2Promise = promise2(2503203100062, "isha", "isha@example.com", "hathras");

promise2Promise
    .then(user => {
        console.log("ID:", user.id);
        console.log("Username:", user.username);
        console.log("Email:", user.email);
        console.log("Location:", user.location);
    })
    .catch(error => {
        console.error(error);
    });
Promise.any([promise1, promise2Promise])
    .then((response) => {
        console.log("Promise.any resolved with:", response);
    })
    .catch((error) => {
        console.error(error);
    });

Promise.all([promise1, promise2Promise])
    .then((responses) => {
        console.log("All promises resolved:");
        responses.forEach((response) => {
            console.log(response);
        });
    })
    .catch((error) => {
        console.error(error);
    });

async function fetchUserData() {
    try {
        const user = await promise1;
        const profile = await promise2(user.id, user.username, user.email, user.location);
        console.log("User:", user);
        console.log("Profile:", profile);
    } catch (error) {
        console.error(error);
    }
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("User data fetched");
            resolve({ id: 1, name: "John Doe" });
        }, 1000);
    });
}

async function getUser() {
    const user = await promise1;
    const profile = await promise2(user.id, user.username, user.email, user.location);
    return { user, profile };
}
getUser()
    .then((result) => {
        console.log("User:", result.user);
        console.log("Profile:", result.profile);
    })
    .catch((error) => {
            console.error(error);
    }); 