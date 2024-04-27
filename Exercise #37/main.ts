// Making A Function
function make_shirt (size: string = "Lrarge", printMessage: string = "I Love TypeScript"){
    console.log(`Creating A ${size} shirt with the ${printMessage} prints on shirt.`);
}

// Calling A Function With By Default Values
make_shirt();

// Calling A Function, Now With Medium Size And Default Message
make_shirt("Medium")

// Calling A Function, Now With Small Size And Different Print Message
make_shirt("Small", "I Love javaScript")
