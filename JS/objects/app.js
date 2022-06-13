//  object
const data = {
    // there is three properties in this object
    // there are separated by ( key : "value", )
    name: "Kevin Hernandez",
    birthday: 02/04/1995, 
    birth_place: "Austin, Texas",
    isFat: true,
    isFunny: false,
    qualities: ["chubby", "old", "skinny-legs"]
};

console.log(typeof(data)); //object


// accessing data from an array
console.log(data["isFat"]); //true
console.log(data["qualities"]); //["chubby", "old", "skinny-legs"]

// better
console.log(data.isFunny); //false
console.log(data.name); //"Kevin Hernandez"