class Student {
    name: string;
    email: string;
    age: Number;

    constructor(name: string, email: string, age:number){
        this.name = name;
        this.email = email;
        this.age = age;

        console.log('Student created : ' + this.name)
    }
}

let stuObj = new Student('Adam', 'adam@us.com', 40);

console.log(stuObj)
console.log(stuObj.name)
console.log(stuObj.email)
console.log(stuObj.age)


class User {
    private Id: number;
    private name: string;
    private grade: string;
    protected city: string // we can access from this class and any 
                           // class that inherits from this

    constructor(Id: number, name: string, grade: string){
        this.Id = Id;
        this.name = name;
        this.grade = grade;
    }

    private register(){
        return ' User ' + this.name + ' is now registered';
    }

}

let userObj = new User(1, 'Uma', 'A+');
console.log(userObj)
// console.log(userObj.Id)
// console.log(userObj.name)
// console.log(userObj.grade)
console.log(userObj.register())