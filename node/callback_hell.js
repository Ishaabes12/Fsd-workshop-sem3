const promise1 = new Promise((resolve, reject) => {
    let success = false; // Change this to false to test rejection
    if (success) {
        resolve({
            id: 124589,
            username :"Zishan"
            
        })
    } else {
        reject (new Error("data not fetched"))
    }

})
promise1
.then((response) => {
    console.log(response);
})
.catch((error) => {
    console.log(error.message);
});
function getUser(id, callback) {
    setTimeout(() => {
        console.log("User fetched");

        const user = {
            id: 1,
            username: "john doe"
        };

        callback(null, user);
    }, 1000);
}

function getProfile(userid, callback) {
    setTimeout(() => {
        console.log("Profile fetched");

        const profile = {
            username: "john doe"
        };

        callback(null, profile);
    }, 1000);
}

function getPost(username, callback) {
    setTimeout(() => {
        console.log("Post fetched");

        const posts = ["post1", "post2", "post3"];

        callback(null, posts);
    }, 1000);
}

getUser(1, function (error, user) {
    if (error) {
        console.error(error);
        return;
    }

    getProfile(user.id, function (error, profile) {
        if (error) {
            console.error(error);
            return;
        }

        getPost(profile.username, function (error, posts) {
            if (error) {
                console.error(error);
                return;
            }

            console.log(`Posts: ${posts}`);
        });
    });
});