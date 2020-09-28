var obj = {name: "uma", city:"boston"}


function ShowName(user: {firstName: string, lastName: string}){
    console.log(user.firstName + " " + user.lastName)
}

let user = {firstName: 'Scott', lastName: 'Desatnick'}

ShowName(user)


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