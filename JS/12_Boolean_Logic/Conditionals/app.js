// =====================
// BASIC IF/ELSE
// =====================
let random = Math.random();
if (random < 0.5) {
    console.log("YOUR NUMBER IS LESS THAN 0.5!!!")
} else {
    console.log("YOUR NUMBER IS GREATER (OR EQUAL) THAN 0.5!!!")
}
console.log(random);

// =====================
// PROMPT EXAMPLE
// =====================

// lowercase the input from the user just in case they uppercase the text
const dayOfWeek = prompt('ENTER A DAY').toLowerCase();

if (dayOfWeek === 'monday') {
    console.log("UGHHH I HATE MONDAYS!")
} else if (dayOfWeek === 'saturday') {
    console.log("YAY I LOVE SATURDAYS!")
} else if (dayOfWeek === 'friday') {
    console.log("FRIDAYS ARE DECENT, ESPECIALLY AFTER WORK!")
} else if (dayOfWeek === 'sunday') {
    console.log("No, tomorrow is Monday!!")
}
 else {
    console.log("MEH")
}



// =====================
// TICKET PRICE EXAMPLE
// =====================

// 0-5 - FREE
// 5 - 10 CHILD $10 
// 10 - 65 ADULT $20 
// 65+ SENIOR $10

const age = 890;

if (age < 5) {
    console.log("You are a baby.  You get in for free!")
} else if (age < 10) {
    console.log("You are a child.  You pay $10")
} else if (age < 65) {
    console.log("You are an adult. You pay $20")
} else {
    console.log("You are a senior. You pay $10")
}


// =====================
// NESTING CONDITIONALS
// =====================

const password = prompt("please enter a new password");

// Password must be 6+ characters
if (password.length >= 6) {
    // Password cannot include space
    if (password.indexOf(' ') === -1) {
        console.log("Valid Password!");
    } else {
        console.log("Password cannot contain spaces!")
    }
} else {
    console.log("PASSWORD TOO SHORT! Must be 6+ characters")
}



// conditional 
const num = 102; // THIS IS THE ONLY LINE YOU SHOULD CHANGE :) 

// DO NOT TOUCH ANYTHING BELOW (please) 
if(num <= 100) {
    if(num >= 50) {
        console.log("HEY!");
    }
} else {
    if (num < 103) {
        if(num % 2 === 0){
            console.log("YOU GOT ME!");
        }
    }
}



