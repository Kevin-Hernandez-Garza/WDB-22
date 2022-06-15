// ======================================
// WITHOUT ANY LOOPS...LOTS OF REPETITION
// ======================================
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
// console.log(10)

// ======================================
// OUR FIRST FOR LOOP
// ======================================

for (let num = 1; num <= 10; num += 1) {
    console.log(num);
}

// ======================================
// MORE EXAMPLES OF FOR LOOPS!
// ======================================

// for (let i = 1; i <= 20; i += 2) {
//     console.log(i)
// }

// for (let i = 100; i >= 0; i -= 10) {
//     console.log(i);
// }

// for (let i = 10; i <= 1000; i *= 10) {
//     console.log(i);
// }

// DO NOT RUN THIS LOOP
// INFINITE LOOP!! BAD!!
// ================================
// It never reaches 0 so it will run forever and waste your Computer memory!
// Your computer will hate you!!
// ================================
// for (let i = 20; i >= 0; i++) {
//     console.log(i)
// }
// ================================
// ================================




// =========================
// my work on Loops
// =========================

// for loop
// for (initialExp, condition, incrementExp) {}
// (start at 0, stop at 10, add 1 each time)
for (let i = 0; i <= 10; i++) {
    console.log("we're here!")
};

// increments by 2
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

// decrement by 10
for (let i = 100; i >= 0; i -= 10) {
    console.log(i);
}


// iterating over an array 
const family = ['dog', 'son', 'daughter', 'mom', 'dad'];
for (let i = 0; i < family.length; i++) {
    console.log(i, family[i]);
}

// going the other way on iterating an array
for (let i = family.length - 1; i >= 0; i-- ) {
    console.log(i, family[i]);
}

const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];
// it returns uppercase strings
for (let i = 0; i < people.length; i++) {
    console.log(people[i].toUpperCase())
}

// nested for loops

// runs 8 times
for (let i = 1; i <= 8; i ++) {
    console.log(`Outer is: ${i}`)
    // runs 3 times since we start at 1
    for (let j = 1; j < 4; j++) {
        console.log(`   Inner is: ${j}`)
    }
}

// nested arrays
const seatingChart = [
    ['abby', 'kevin', 'chrystal', 'jessica'],
    ['tom', 'cat', 'mouse', 'dog'],
    ['jack', 'karen']
]

for (let i = 0; i < seatingChart.length; i++) {
    const row = seatingChart[i];
    console.log(`Row #${i + 1}`)
    for (let j = 0; j < row.length; j++) {
        console.log(row[j]);
    }
}