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
var Owner = /** @class */ (function () {
    function Owner() {
        this.name = "Uma";
        this.email = "uma@mahesh.com";
        this.age = 38;
    }
    Owner.prototype.register = function () {
        return 'invoked register method';
    };
    Owner.prototype.payInvoice = function () {
        return 'called payinvoice method';
    };
    return Owner;
}());
var ownerObj = new Owner();
console.log(ownerObj);
console.log(ownerObj.register());
console.log(ownerObj.payInvoice());
