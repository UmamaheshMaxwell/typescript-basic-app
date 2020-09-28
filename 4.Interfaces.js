var obj = { name: "uma", city: "boston" };
function ShowName(user) {
    console.log(user.firstName + " " + user.lastName);
}
var user = { firstName: 'Scott', lastName: 'Desatnick' };
ShowName(user);
function ShowUserDetails(user) {
    console.log(user.firstName + " " + user.lastName);
}
var userDetails = { firstName: 'Scott', lastName: 'Desatnick', City: 'Boston' };
ShowUserDetails(userDetails);
