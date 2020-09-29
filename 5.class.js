var Student = /** @class */ (function () {
    function Student(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        console.log('Student created : ' + this.name);
    }
    return Student;
}());
var stuObj = new Student('Adam', 'adam@us.com', 40);
console.log(stuObj);
console.log(stuObj.name);
console.log(stuObj.email);
console.log(stuObj.age);
var User = /** @class */ (function () {
    // class that inherits from this
    function User(Id, name, grade) {
        this.Id = Id;
        this.name = name;
        this.grade = grade;
    }
    User.prototype.register = function () {
        return ' User ' + this.name + ' is now registered';
    };
    return User;
}());
var userObj = new User(1, 'Uma', 'A+');
console.log(userObj);
// console.log(userObj.Id)
// console.log(userObj.name)
// console.log(userObj.grade)
console.log(userObj.register());
