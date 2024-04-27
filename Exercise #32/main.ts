// Creating An Array Of Current Users
let current_users = ["Areeba", "Ali", "Areeba", "Zina", "Osama"];

// Creating An Array Of new users
let new_users = ["Hamza", "Ayesha", "Ali", "Mahad", "Areeba"];

// Loop Through New_Users To Check The Availability Of User Names
new_users.forEach(new_one_user => {
    
    // Making A Condition For Already Existing Username And Saving In Our_Condition Array 
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())
    
    // Print Different Messages Using If-Else Statements
    if(our_condition){
        console.log(`Sorry ${new_one_user} is already taken!`);
    }else{
        console.log(`This Username ${new_one_user} is available`)
    }
})























