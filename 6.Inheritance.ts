class Invoice {
    name: string;
    email: string;
    age: number
    
    constructor(name: string, email: string, age: number){
        this.name = name;
        this.email= email;
        this.age = age;
        console.log('Invoice Class constructor')
    }

    payInvoice(){
        return'Invoice paid completely !!!';
    }
}
class Member extends Invoice {
    id: number;

    constructor(id:number, name: string, email: string, age: number){
        console.log('Memeber class constructor')
        super(name, email, age)
        this.id= id;
    }

    payInvoice(){
        return super.payInvoice();
    }
}

let memberObj = new Member(1,'Johngalt', 'john@galt.com',38)
console.log(memberObj.payInvoice())


class Product {

    constructor(){
        console.log('Pruct Class Constructor')
    }
}

class Order extends Product {
    constructor(){
        super()
    }
}
