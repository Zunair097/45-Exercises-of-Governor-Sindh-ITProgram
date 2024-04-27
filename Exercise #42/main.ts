// Defining The Function To Show The Magicians Names
function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

// Function To Make Magicians Great Through .map(), It Will Modify Array
function make_great(magicians: string[]){
    return magicians.map(name => `The Great ${name}`);
}

// Define An Array Of Magicians Names
let magician_names = ["Harry Potter", "Andrew", "Olivia"]

// Calling The make_great Function To Modify Magicians Names
let great_magicians = make_great(magician_names);
// Call show_magicians That Show Modified List Of Magicians 
show_magicians(great_magicians);