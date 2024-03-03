let guestList = ["Hamza", "Mustafa", "Ali", "Abdul Aziz"];

let dontCome = guestList[0];

console.log(dontCome, "Nai AA Sakta");

guestList.splice(0, 1, "Amir");

guestList.forEach(guest => console.log(`Salam ${guest}, would you like to dinner with me?`))