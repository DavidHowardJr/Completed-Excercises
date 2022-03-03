const path = require("path");
const fs = require("fs");

function updateContactFile(contact) {
    let filePath = path.join(__dirname, "../misc/contacts.csv");
    let newLine = `${contact.name},${contact.message},${new Date().toString()}\n`;

    if (!fs.existsSync(filePath)) {
        newLine = "name,message,_created\n" + newLine;
    }

    fs.appendFile(filePath, newLine, (err) => {
        if (err) console.error(err);

        console.log("Successfully updated contacts");
    });
}

const routes = {
    "GET/": {
        statusCode: 200, 
        filePat: path.join(__dirname, "./public/index.html"),
        contentType: "text/html",
    
    },
    "GET/about": {
        statusCode: 200, 
        filePath: path.join(__dirname, "./public/about.html"),
        contentType: "text/html",
    },
    "GET/contact": {
        statusCode: 200, 
        filePat: path.join(__dirname, "./public/Contact.html"),
        contentType: "text/html",
    },
    "POST/contact": {
        statusCode: 200,
        filePath: null,
        contentType: "application/json",
        response(reqBody) {
            updateContactFile(reqBody);
            return JSON.stringify({
                message: `Thank you for the message, ${reqBody.name}. We'll be in contact soon!`,
            });
        },
    },
    "*": {
        statusCode: 200, 
        filePat: path.join(__dirname, "./public/notfound.html"),
        contentType: "text/html",
    
    },
};

module.exports = routes;
// same as 
// export default routes;