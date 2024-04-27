// Defining A Variable To Craete A Car Object With Optional Option...
function create_car(manufacturer, model, ... options){
    // Initialize A Car Object With Manufacturer And Model
    let car = {
        manufacturer: manufacturer,
        model: model,
    };

    // Add Additional Options To The Car Object
    options.forEach(options => {
        let [key, value] = options.split(":");
        car[key.trim()] = value.trim();
    })

    return car;
}

// Call The Function To Create A Car Object
let my_car = create_car("Mercedes Benz", "S200", "Color: Black", "Sunroof: True", "Year: 2024");

// Print The Variable To Ensure All The Information Is Stored Correctly In The Car Object
console.log(my_car);
