var guestList = ["Hamza", "Mustafa", "Ali", "Abdul Aziz"];
var dontCome = guestList[0];
console.log(dontCome, "Nai AA Sakta");
guestList.splice(0, 1, "Amir");
guestList.forEach(function (guest) { return console.log("Salam ".concat(guest, ", would you like to dinner with me?")); });
