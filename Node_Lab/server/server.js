const { join } = require("path")
const { writeFile } = require("fs");

// Create chirp objects
/*
{
    author: "David",
    content: "this is my chirp",
    date: new Date().toString
}
*/
let chirps = [
    {
        author: "David",
        content: "this is my chirp",
        date: new Date().toString(),
    },
    {
        author: "Bavid",
        content: "this is my chirp",
        date: new Date().toString(),
    },
    {
        author: "Gavid",
        content: "this is my chirp",
        date: new Date().toString(),
    },
    {
        author: "Havid",
        content: "this is my chirp",
        date: new Date().toString(),
    },
    {
        author: "Javid",
        content: "this is my chirp",
        date: new Date().toString(),
    }
];

// Write the chirp data to a file called chirps.json
writeFile(
    join(__dirname, "../chirps.json"), // file path
    JSON.stringify({ chirps, count: chirps.length, title: "Chirps" }), // data
    (err) => { // callback after success/failure
        if (err) return console.error(err);
    
    console.log("Successfully wrote chirps to json file")
})