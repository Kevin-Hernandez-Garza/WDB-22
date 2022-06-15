// let count = 0;
// while (count < 10) {
//     count++;
//     console.log(count)
// }

// const SECRET = "BabyHippo";

// let guess = prompt("enter the secret code...");
// while (guess !== SECRET) {
//     guess = prompt("enter the secret code...");
// }
// console.log("CONGRATS YOU GOT THE SECRET!!!")

// let input = prompt("Hey, say something!")
// while (true) {
//     input = prompt(input);
//     if (input.toLowerCase() === "stop copying me") break;
// }
// console.log("OK YOU WIN!")

// for (let i = 0; i < 1000; i++) {
//     console.log(i);
//     if (i === 100) break;
// }

// let maximum = parseInt(prompt("Enter the maximum number!"));
// while (!maximum) {
//     maximum = parseInt(prompt("Enter a valid number!"));
// }

// const targetNum = Math.floor(Math.random() * maximum) + 1;

// let guess = parseInt(prompt("Enter your first guess!"));
// let attempts = 1;

// while (parseInt(guess) !== targetNum) {
//     if (guess === 'q') break;
//     attempts++;
//     if (guess > targetNum) {
//         guess = prompt("Too high! Enter a new guess:");
//     } else {
//         guess = prompt("Too low! Enter a new guess:");
//     }
// }

// if (guess === 'q') {
//     console.log("OK, YOU QUIT!")
// } else {
//     console.log("CONGRATS YOU WIN!")
//     console.log(`You got it! It took you ${attempts} guesses`)
// }



// OWN WORK
let count = 0;
// while count is less than 10
while ( count < 10) {
    // add 1
    count++;
    console.log(`count is ${count}`);
}

// keep asking the same question until the condition is true
const SECRET = "chelsea";

let guess = prompt("What is my favorite football team's name?");
// while guess is not equal to SECRET
while(guess !== SECRET) {
    guess = prompt("Guess AGAIN! What is my favorite team??");
}
console.log("You know me so well!");

// break keyword (stops the execution of the loop)
let userInput = prompt("say something") 

while (true) {
    userInput = prompt(userInput);
    // if the user inputs the bottom string then we use the break keyword to stop the loop
    if (userInput.toLowerCase() === "quit") {
    break;
    }
}
console.log("okay, i'll leave you alone!");
