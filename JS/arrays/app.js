/*

// is type is an object

// array of strings
let animals = ['lion', 'crocodile', 'whale', 'bobcat', 'giraffe', 'snake'];
console.log(animals.length); // 6

// empty array 
let emptyArray = [];

// array of numbers 
let bingo = [9, 34, 21, 3, 11];
console.log(bingo.indexOf(11)); // 4
 
// indexing [0, 1, 2, 3] 
let array = ['texas', 'california', 'oregon', 'new york']; 
console.log(array.length); //4
console.log(array[2]); //oregon

// adding value to array
array[4] = 'north carolina';
console.log(array);

==============
Array Methods
==============

push - add to end 
pop - remove from end 
shift - remove from start
unshift - add to start
concat - merge arrays, returns a new array
includes - look for a value, returns a boolean value
indexOf - just like string.indexOf
join - creates a string from an array
reverse - reverses an array, changing the original array
slice - copies a portion on an array
splice - removes/replaces elements 
sort - sorts an array

*/

/* 
let arrayMethods = ['road', 'houses'];

arrayMethods.push('cars', 'trees'); // ['road', 'houses', 'cars'];
console.log(arrayMethods);

// removes the last element from the array ** No argument needed **
arrayMethods.pop(); 
console.log(arrayMethods);

// if you try to remove a element from an empty array you get undefined
arrayMethods.shift(); //removes 'road'
console.log(arrayMethods);

arrayMethods.unshift('roads');
console.log(arrayMethods);

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);
console.log(array3); // ['a', 'b', 'c', 'd', 'e', 'f']

console.log(array3.includes('g')); //false
console.log(array3.includes('e')); //true

console.log(array3.indexOf('b')); //1 
console.log(array3.indexOf('z')); //-1 (not found)

console.log(array3.reverse()); // ['f', 'e', 'd', 'c', 'b', 'a']

console.log(array3.join()); // "f,e,d,c,b,a"
console.log(arrayMethods.join()); // "roads,houses,cars"


let numbers = [1, 2, 4, 5, 7, 13, 2, 12, 56, 32, 27];

console.log(numbers.slice(4)); // [7, 13, 2, 12, 56, 32, 27]
console.log(numbers.slice(4, 6)); // [7, 13] doesn't include the last element
console.log(numbers.slice()); // returns a copy of the array
console.log(numbers.slice(-2)); // returns the last 2 of the array

// splice methods array.splice(insert at index, delete, what are we adding?)
numbers.splice(3, 0, 23); //adds 23 on index 3
numbers.splice(6, 1); //removes 13 
console.log(numbers);


// converts the array into string elements and determines sort based on their UTF-16 unit values
console.log(numbers.sort());

// nested arrays
let gameBoard = [['o', 'x', null], ['x', 'o', 'x'], ['x', null, 'o']];
console.log(gameBoard[2][2]); // 'o' accessing the third array and index 2 from that array

*/