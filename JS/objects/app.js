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


// accessing data from an array ** BRACKET NOTATION **
console.log(data["isFat"]); //true
console.log(data["qualities"]); //["chubby", "old", "skinny-legs"]

// better ** DOT NOTATION **
console.log(data.isFunny); //false
console.log(data.name); //"Kevin Hernandez"

// object exercise
const home = {
    name: "Kevin H",
    address: `${Math.floor(Math.random() * 1000) + 1} Main Street`, 
    city: "Round Rock",
    state: "TX",
    zipcode: "78681"
};

// object literal
let mailAddress = `${home.address}, ${home.city}, ${home.state}, ${home.zipcode}`;
console.log(mailAddress); //FORMAT (address, city, state, zip-code)


// changing the values of an object's property 
let soccer = {
    champ: "USA",
    runnerUp: "France",
    loser: "Russia"
};

soccer.runnerUp = "Canada";
console.log(soccer.runnerUp); // Canada

// adding more properties to an object
soccer.allTimeGreat = "China";
console.log(soccer); // array with added property of "allTimeGreat"


// Array of Objects
const comment = [
    {
        name: "Spencer",
        age: "29"
    },
    {
        name: "Lisa",
        age: "34"
    },
    {
        name: "Ly",
        age: "101"
    }
];

// access the array of objects
console.log(comment[0].name); // Spencer??