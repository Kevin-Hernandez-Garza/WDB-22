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

let mailAddress = `${home.address}, ${home.city}, ${home.state}, ${home.zipcode}`;
console.log(mailAddress); //FORMAT (address, city, state, zip-code)