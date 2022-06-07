// =====================
// LOGICAL AND OPERATOR
// =====================
const password = prompt("Enter your password");
if (password.length >= 6 && password.indexOf(' ') === -1) {
    console.log("VALID PASSWORD!")
} else {
    console.log("INCORRECT FORMAT FOR PASSWORD!")
}

// =====================
// REVISITING AGE EXAMPLE
// =====================

// 0-5 free 
// 5-10 $10 
// 10-65 $20
// 65+ free

// the && operator has precedence over the || operator
const ages = 100;
// greater than or equal to 0 and less than 5 or age is greater or equal to 65 than it's free
if ((ages >= 0 && ages < 5) || ages >= 65) {
    console.log("FREE");
// else if ages is greater than or equal to 5 and ages is less than 10 then it's $10
} else if (ages >= 5 && ages < 10) {
    console.log("$10")
// else if ages is greater than or equal to 10 and ages is less than 65 then it's $20
} else if (ages >= 10 && ages < 65) {
    console.log("$20")
// anything else is an invalid age
} else {
    console.log("INVALID AGE!")
};

// let firstName = prompt("enter your first name");
// if (!firstName) {
//     firstName = prompt("TRY AGAIN!!!");
// }

// =====================
// COMBINING && and ||
// =====================
const age = 8;
if (!(age >= 0 && age < 5 || age >= 65)) {
    console.log("YOU ARE NOT A BABY OR A SENIOR!")
}



