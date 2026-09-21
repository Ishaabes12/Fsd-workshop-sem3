import fs from 'fs';

function createFile(content) {
    fs.writeFile("notes.txt", content, (err) => {
        if (err) {
            console.log("Error creating file:", err);
            return;
        }

        console.log("File created successfully!");
    });
}
