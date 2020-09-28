function getSumOld(num1, num2) {
    return num1 + num2;
}
console.log(getSumOld(1, 4));
function getSum(num1, num2) {
    return num1 + num2;
}
console.log(getSum(5, 6));
var mySum = function (num1, num2) {
    return num1 + num2;
};
console.log(mySum(3, 4));
var mySumUsingType = function (num1, num2) {
    return num1 + num2;
};
console.log(mySumUsingType(5, 4));
var mySumUsingAny = function (num1, num2) {
    if (typeof num1 == "string") {
        num1 = parseInt(num1);
    }
    if (typeof num2 == "string") {
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
console.log(mySumUsingAny(5, 4));
function getName(firstName, lastName) {
    return firstName + " " + lastName;
}
console.log(getName("Uma", "Mahesh"));
function mySaveVoid(num1, num2) {
    console.log('num1 is ' + num1, 'num2 is ' + num2);
}
mySaveVoid(1, 2);
