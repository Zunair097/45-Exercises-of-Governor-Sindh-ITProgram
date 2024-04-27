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

// Making A Copy of Original Array Through .Slice Function
let copy_magician_names = magician_names.slice()

// Modifying The Copied Array To Include "The Great" With Thier Names
let copy_great_magicians = make_great(copy_magician_names);

// Show The Arrays Original And Copied

// Original
console.log("Original Array\n")
show_magicians(magician_names);

// Copied
console.log("\nCopied Array\n")
show_magicians(copy_great_magicians);