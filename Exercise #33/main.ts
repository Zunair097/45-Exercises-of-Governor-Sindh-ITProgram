// Creating An Array
let numbers = [1, 2, 3,4, 5, 6, 7, 8, 9];

// Using For-Loop
for(let oneNumber of numbers){
    let ordinalNumber: string;

    if(oneNumber === 1){
        ordinalNumber = "st"
    }
    else if(oneNumber === 2){
        ordinalNumber = "nd"
    }
    else if(oneNumber === 3){
        ordinalNumber = "rd"
    }
    else{
        ordinalNumber ="th"
    }

    console.log(`${oneNumber}${ordinalNumber}`);

}





























