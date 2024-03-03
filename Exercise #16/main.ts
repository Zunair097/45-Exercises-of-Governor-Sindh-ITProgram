// creating a Guest List array
let guestlist = ["Umer", "Asif", "Ammar", "Kamran"];

// making variable for those guest who cant come 
let dontCome = guestlist[0];

// Print the name of guest who cant come 
console.log(dontCome, "Nahi AA Sakte Han");

// Add or remove values from guest list array
guestlist.splice(0, 1, "Amir");

// message print for bigger table
console.log("Good News ! We have Found a Bigger Table For Dinner.");

// Adding a new value at starting index of array
guestlist.unshift("Ali");

// Adding a new value at the ending index od array
guestlist.push("Zain");

// Get a middle index of our guest list array
let middleIndex: number = Math.floor(guestlist.length / 2);

// Adding a new guest to middle index of array
guestlist.splice(middleIndex, 0, "Osama");

// Print Message of Updated List
console.log("Updated List of our Guests");

// Sending a invitation message to our guests one by one with thier names
guestlist.forEach(oneGuest => console.log(`Salam ${oneGuest}, would you like to dinner with me?`));






