const request = require("request");
const args = process.argv.slice(2);
const webAddress = `https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`;

request(webAddress, (error, response, body) => {
  if (error) {
    console.log('There was an error with the request.', error);
  } else {
    const data = JSON.parse(body)[0];
    if (typeof data === "undefined") {
      console.log("Unable to find that breed.");
    } else {
      console.log("description: ", data.description);
    }
  }
});
