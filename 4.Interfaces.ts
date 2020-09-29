var obj = {name: "uma", city:"boston"}


function ShowName(user: {firstName: string, lastName: string}){
    console.log(user.firstName + " " + user.lastName)
}

let user = {firstName: 'Scott', lastName: 'Desatnick'}

ShowName(user)

// Interface Declaration

interface User {
    firstName: string,
    lastName: string,
    City: string
}

function ShowUserDetails(user: User){
    console.log(user.firstName + " " + user.lastName)
}

let userDetails = {firstName: 'Scott', lastName: 'Desatnick', City:'Boston'}

ShowUserDetails(userDetails)


interface UserInterface {
    name: string;
    email: string;
    age: number;
    register();
    payInvoice();
}

class Owner implements UserInterface {
    name: string;
    email: string;
    age: number;

    constructor(){
        this.name= "Uma";
        this.email ="uma@mahesh.com";
        this.age = 38
    }

    register(){
        return 'invoked register method';
    }

    payInvoice(){
        return 'called payinvoice method';
    }
}

let ownerObj = new Owner();

console.log(ownerObj)
console.log(ownerObj.register())
console.log(ownerObj.payInvoice())