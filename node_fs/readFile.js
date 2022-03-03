console.log('Running readFile.js');

const fs = require("fs");

fs.readFile("helloworld.txt", (err, contents) => {
    if (err) {
        return console.erre(err);
    }

    let parsedText = contents.toString();
    
    console.log(contents.toString());
    console.log("/nSuccessfully read contents");
})