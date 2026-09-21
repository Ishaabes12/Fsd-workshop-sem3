
import fs from 'fs';

function createFile(content) {
    fs.writeFile("notes.txt", content, (err) => {
        if (err) {
            console.log("Error creating file:", err);
            return;
        }

        console.log("File created successfully!");

        // Check file size
        fs.stat("notes.txt", (err, stats) => {
            if (err) {
                console.log(err);
                return;
            }

            console.log("File size:", stats.size, "bytes");
        });
    });
}

createFile("Transformer Architecture");