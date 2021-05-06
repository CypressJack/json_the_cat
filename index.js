const fetchBreedDescription = require("./breedFetcher");
const args = process.argv;
const breed = args[2];


fetchBreedDescription(breed, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(`'${desc}'`);
  }
});
