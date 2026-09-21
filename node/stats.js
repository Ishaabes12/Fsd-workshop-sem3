import fs from 'fs';

fs.stat("notes.txt", (err, stats) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log("Information of [notes.txt]:", stats);
    console.log("Size of the file:", stats.size);
    console.log("Creation time of the file:", stats.birthtime.toISOString());
    console.log("Last modification time of the file:", stats.mtime.toISOString());
    console.log("Access time of the file:", stats.atime.toISOString());
    console.log("Change time of the file:", stats.ctime.toISOString());
    console.log("Is this a file:", stats.isFile());
});