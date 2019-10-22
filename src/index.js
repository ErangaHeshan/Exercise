const { getRandomWordSync, getRandomWord } = require('word-maker');

console.log('It works!');

// YOUR CODE HERE
const promises = [];

for (let i = 1; i < 101; i++) {
    promises.push(new Promise(resolve => getRandomWord().then(word => resolve(`${i}: ${word}`))));
}

Promise.all(promises).then(response => {
    response.forEach(line => {
        console.log(line);
    })
});
