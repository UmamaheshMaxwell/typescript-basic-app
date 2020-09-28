// function add(var1, var2){
//     return var1 + var2
// }

// console.log(add(1,2))

function addNum(var1:number, var2:number):number{
    return var1 + var2;
}

console.log(addNum(1,2))

function addString(var1:string, var2:string):string{
    return var1 +  var2;
}

console.log(addString("Uma ","Mahesh"))

function addAny(var1:any, var2:any):any{
    return var1 +  var2;
}


console.log(addAny(1,"Mahesh"))

function add<T extends number>(var1:T, var2:T): number {

    return var1 + var2

}

enum Week {
    Monday = "Monday",
    Tuesday = "Tuesday",
    Wednesday = "Wednesday",
    Thursday = "Thursday",
    Friday = "Friday",
    Saturday = "Saturday",
    Sunday = "Sunday"
}

console.log(addNum(1,2))
console.log(addString("Uma", "mahesh"))
//console.log(add<number>(Week.Monday, Week.Friday));p