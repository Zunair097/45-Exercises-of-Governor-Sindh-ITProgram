// Store the person's name in a variable
let personName: string = "Muhammad Zunair";

// Print the person's name in lowercase
console.log("Lowercase:", personName.toLowerCase());

// Print the person's name in uppercase
console.log("Uppercase:", personName.toUpperCase());

// Print the person's name in titlecase
console.log("Titlecase:", titleCase(personName));

// Function to convert a string to titlecase
function titleCase(str: string): string {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());