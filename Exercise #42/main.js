// Defining The Function To Show The Magicians Names
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// Function To Make Magicians Great Through .map(), It Will Modify Array
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
// Define An Array Of Magicians Names
var magician_names = ["Harry Potter", "Andrew", "Olivia"];
// Calling The make_great Function To Modify Magicians Names
var great_magicians = make_great(magician_names);
// Call show_magicians That Show Modified List Of Magicians 
show_magicians(great_magicians);
