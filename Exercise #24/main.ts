// Defining Variables
let apple = "apple";
let upperCaseApple = "APPLE"
let ten = 10;
let twenty = 20;
let fruits = ["Orange", "Banana", "Apple"];

// Test Fir Equality and Unequality With Strings
console.log("Is apple equalto apple?");
console.log(apple == "apple");

console.log("\nIs apple is not equal to apple?");
console.log(apple != "apple");

// Tests Using Lower Case Function
console.log("\nIs APPLE is equal to apple after converting into lowercase?");
console.log(upperCaseApple.toLowerCase() == "apple");

console.log("\nIs APPLE is not equal to apple after converting into lowercase?");
console.log(upperCaseApple.toLowerCase() != "apple");

// Numerical Tests
 console.log("\nIs ten is equal to twenty?");
 console.log(ten == twenty);

// Not Equal To
 console.log("\nIs ten is not equal to twenty?");
console.log(ten != twenty);

// Greater Than
console.log("\nIs ten is greater than zero?");
console.log(ten > 0);

// Smaller Than/Less Than
console.log("\nIs twenty is less then 10?");
console.log(20 < 10);

// Greater Than Or Equal To
console.log("\nIs ten is greater than or equal to 5?");
console.log(ten >= 5);

// Smaller Than Or Equals To
console.log("\nIs twenty is less than or equal to 10?");
console.log(20 <= 10);

// Tests using "And" & "Or" Operators

// Using && 
console.log("\nTwenty is not equalsto 10 and twenty is greater than 10?");
console.log(twenty != 10 && twenty > 10);

console.log("\nTwenty is not equalsto 10 and twenty is greater than 30?");
console.log(twenty != 10 && twenty > 30);

// Using || (OR) 
console.log("\nTwenty is greater than 50 OR 20 is equal to to 20");
console.log(20 > 50 || 20 == 20);

console.log("\nTwenty is greater than 50 OR 20 is not equal to to 20");
console.log(20 > 50 || 20 != 20);

// Tests Whether An Item Is Include In Array
console.log("\nIs Orange included in my fruits array");
console.log(fruits.includes("Orange"));

// Not Include
console.log("\nIs Orange not included in my fruits array");
console.log(!fruits.includes("Orange"));














