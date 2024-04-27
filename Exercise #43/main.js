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
// Making A Copy of Original Array Through .Slice Function
var copy_magician_names = magician_names.slice();
// Modifying The Copied Array To Include "The Great" With Thier Names
var copy_great_magicians = make_great(copy_magician_names);
// Show The Arrays Original And Copied
// Original
console.log("Original Array\n");
show_magicians(magician_names);
// Copied
console.log("\nCopied Array\n");
show_magicians(copy_great_magicians);
