// Defining A Function To Print Each Magician Name From An Array
function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

// Define An Array Containing Magicians Names
let magicians_names = ["Harry Potter", "Andrew", "Olivia"]

// Calling The Function To Print Each Magician Name
show_magicians(magicians_names);