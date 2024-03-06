var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Making An Array Of Countries And Print Its Original Order
var countriesToVisit = ["China", "Denmark", "Brazil", "Argentina"];
console.log("Original Order:", countriesToVisit);
// Print The Array In Alphabatical Order Without Modifying The Actual Array List
console.log("Alphabetical Order:", __spreadArray([], countriesToVisit, true).sort());
// Show That The Array Is Still In Its Original Order
console.log("Still in Original Oder:", countriesToVisit);
// Print The Array In Reverse Order Without Modifying The Actual Array List
console.log("Reverse Order:", __spreadArray([], countriesToVisit, true).reverse());
// Show That The Array Is Still In Its Original Order
console.log("Still in Original Oder:", countriesToVisit);
// We Have Changed The Original Array Order Now
console.log("Original Array Reversed:", countriesToVisit.reverse());
// Print The Array To Show That Its Back To Its Original Order
console.log("Back to Original Order:", countriesToVisit.reverse());
// Print The Array To Show That Its Original Order Has Been Changed In Alphabatical Order
console.log("Sorted In Alphabatical Order:", countriesToVisit.sort());
// We Have Changed Again The Original Array Order Now In Reverse Again
console.log("Original Array Reversed:", countriesToVisit.reverse());
