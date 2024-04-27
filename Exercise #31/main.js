// Creating An Array
var userName = ["Maaz", "Qasim", "Abdullah", "Admin", "Haris"];
userName = [];
if (userName.length === 0) {
    console.log("Your array is empty, We need to find some users.");
}
else {
    // Usimg ForEach Loop In Array
    userName.forEach(function (oneUser) {
        if (oneUser === "Admin") {
            console.log("Hello ".concat(oneUser, ", would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(oneUser, ", thank you for logging in again."));
        }
    });
}
