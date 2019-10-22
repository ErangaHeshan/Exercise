const {getRandomWordSync, getRandomWord} = require('word-maker');
const { appendFile } = require('fs');

console.log('It works!');

// YOUR CODE HERE
const promises = [];

for (let i = 1; i < 101; i++) {
    promises.push(new Promise(resolve => {
        if (i % 3 === 0 && i % 5 === 0) {
            resolve(`${i}: FizzBuzz`);
        } else if (i % 3 === 0) {
            resolve(`${i}: Fizz`);
        } else if (i % 5 === 0) {
            resolve(`${i}: Buzz`);
        } else {
            getRandomWord({
                withErrors: true
            }).then(word => resolve(`${i}: ${word}`))
                .catch(() => resolve(`${i}: It shouldn't break anything!`));
        }
    }));
}

Promise.all(promises).then(response => {
    let text = "";
    response.forEach(line => {
        text += line + '\r\n';
    });
    appendFile('result.txt', text, error => {
        if (error) {
            console.log('An error occurred! ', error.message);
        }
    });
});
