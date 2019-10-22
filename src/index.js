const { getRandomWordSync, getRandomWord } = require('word-maker');
const { appendFile } = require('fs');

console.log('It works!');

// YOUR CODE HERE
let text = "";

for (let i = 1; i < 101; i++) {
    if (i % 3 === 0 && i % 5 == 0) {
        text += `${i}: FizzBuzz`;
    } else if(i % 3 === 0){
        text += `${i}: Fizz`;
    } else if(i % 5 === 0){
        text += `${i}: Buzz`;
    } else {
        try {
            text += `${i}: ${getRandomWordSync({
                withErrors: true 
            })}`;
        } catch (error) {
            text += `${i}: It shouldn't break anything!`;
        }
    }
    text += '\r\n';
}

appendFile('result.txt', text, error => {
    if (error) {
        console.log('An error occurred! ', error.message);
    }
});
