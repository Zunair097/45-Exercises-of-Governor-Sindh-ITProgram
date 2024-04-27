// Defining A Function To Print Each Magician Name From An Array
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// Define An Array Containing Magicians Names
var magicians_names = ["Harry Potter", "Andrew", "Olivia"];
// Calling The Function To Print Each Magician Name
show_magicians(magicians_names);
