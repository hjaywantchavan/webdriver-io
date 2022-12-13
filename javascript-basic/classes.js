module.exports = class Person{
    firstName
    lastName
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
    }

    fullName = ()=>{
        return this.firstName + " " + this.lastName
    }
}

// let person = new Person("Harshal", "Chavan")
// console.log(person.firstName);
// console.log(person.fullName());