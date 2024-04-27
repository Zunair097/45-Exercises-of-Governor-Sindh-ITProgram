// Define A Function Wih The Rest Parameter That Accept Items Arguements Representing Our Sandwich
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking A Sandwich With The Following Items: \n");
    items.forEach(function (singleItem) { return console.log("-" + singleItem); });
    console.log("\nNow Enjoy The Sandwich");
}
// Call The Function 3 Times With Different Number Of Number Of Arguements
makeSandwich("Chicken", "Cheese", "Mayo", "Egg");
makeSandwich("Bread", "Butter");
makeSandwich("Bread", "butter", "Mayo", "Egg", "Cheese", "Chicken", "Lettuce", "Tomato");
