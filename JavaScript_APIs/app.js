console.log("Hello World!");

let title = document.getElementById("result");
let img = document.getElementById("img");
let form = document.querySelector("form");
let query = document.getElementById("query");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let searchTerm = query.value;

    // In a url, anything after ? is a query parameter
    // in the format of name=vale
    // q 
    // Query parameters are seperated by &
    // appid
    let GIPHY_URL = `https://api.giphy.com/v1/gifs/translate?s=${searchTerm}&api_key=cvLLjSh61xqP3inCLSNIANCnOnZasJhV`;
        
        // Fetch returns a promise
        fetch(GIPHY_URL)
            .then((response) => {
                // .json Parses the response body to JSON, JavaScript object Notation 
                return response.json();
            })
            .then((result) => {
                console.log(result);
                title.textContent = result.data.title;
                img.src = result.data.images.original.url;
            })
            .catch((err) => {
                console.error(err);
                result.textContent = err.message;
            });
});

