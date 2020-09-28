function getSumOld(num1, num2){
    return num1 + num2;
}

console.log(getSumOld(1,4))

function getSum(num1: number, num2: number) : number {
    return num1 + num2;
}


console.log(getSum(5,6))

let mySum = function(num1, num2){
    return num1 + num2;
}

console.log(mySum(3,4))

let mySumUsingType = function(num1:number, num2:number):number{
    return num1 + num2;
}

console.log(mySumUsingType(5,4))


let mySumUsingAny = function(num1:any, num2:any):any{

    if(typeof num1 == "string"){
        num1 = parseInt(num1);
    }
    if(typeof num2 == "string"){
        num2 = parseInt(num2);
    }

    return num1 + num2;
}

console.log(mySumUsingAny(5,4))


function getName (firstName: string, lastName: string): string{
    return firstName + " " + lastName;
}

console.log(getName("Uma", "Mahesh"))


function mySaveVoid(num1:number, num2:number): void {
    console.log('num1 is ' + num1, 'num2 is ' + num2)
}

mySaveVoid(1,2)