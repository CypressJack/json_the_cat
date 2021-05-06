const request = require("request");

const fetchBreedDescription = function (breedName, callback) {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    (error, response, body) => {
      const data = JSON.parse(body)[0];
      if (!error && typeof data === "undefined") {
        callback(error, data);
      } else {
        callback(error, data.description);
      }
    }
  );
};

module.exports = fetchBreedDescription;
