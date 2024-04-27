// Creating An Array Of Current Users
var current_users = ["Areeba", "Ali", "Areeba", "Zina", "Osama"];
// Creating An Array Of new users
var new_users = ["Hamza", "Ayesha", "Ali", "Mahad", "Areeba"];
// Loop Through New_Users To Check The Availability Of User Names
new_users.forEach(function (new_one_user) {
    // Making A Condition For Already Existing Username And Saving In Our_Condition Array 
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    // Print Different Messages Using If-Else Statements
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("This Username ".concat(new_one_user, " is available"));
    }
});
