const { getRandomWordSync, getRandomWord } = require('word-maker');

console.log('It works!');

// YOUR CODE HERE
for(let i=1; i<101; i++){
    console.log(`${i}: ${getRandomWordSync()}`);
}
