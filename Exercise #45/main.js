// Defining A Variable To Craete A Car Object With Optional Option...
function create_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    // Initialize A Car Object With Manufacturer And Model
    var car = {
        manufacturer: manufacturer,
        model: model,
    };
    // Add Additional Options To The Car Object
    options.forEach(function (options) {
        var _a = options.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
// Call The Function To Create A Car Object
var my_car = create_car("Mercedes Benz", "S200", "Color: Black", "Sunroof: True", "Year: 2024");
// Print The Variable To Ensure All The Information Is Stored Correctly In The Car Object
console.log(my_car);
