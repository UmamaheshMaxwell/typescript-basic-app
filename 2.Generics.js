// function add(var1, var2){
//     return var1 + var2
// }
// console.log(add(1,2))
function addNum(var1, var2) {
    return var1 + var2;
}
console.log(addNum(1, 2));
function addString(var1, var2) {
    return var1 + var2;
}
console.log(addString("Uma ", "Mahesh"));
function addAny(var1, var2) {
    return var1 + var2;
}
console.log(addAny(1, "Mahesh"));
function add(var1, var2) {
    return var1 + var2;
}
var Week;
(function (Week) {
    Week["Monday"] = "Monday";
    Week["Tuesday"] = "Tuesday";
    Week["Wednesday"] = "Wednesday";
    Week["Thursday"] = "Thursday";
    Week["Friday"] = "Friday";
    Week["Saturday"] = "Saturday";
    Week["Sunday"] = "Sunday";
})(Week || (Week = {}));
console.log(addNum(1, 2));
console.log(addString("Uma", "mahesh"));
//console.log(add<number>(Week.Monday, Week.Friday));p
