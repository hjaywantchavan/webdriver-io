//const Persons = require('./classes')
function add(num1, num2){
    return num1+num2
}

console.log(add(5,5))

// Anonymous functions -> Functions which does not have any names

let sumOfNumbers = function (num1, num2) {
    return num1+num2
}
console.log(sumOfNumbers(5,5))

let sumOfIntegers = (num1, num2) => num1-num2 // doubt-> where the scope ends in this type of declaration?
console.log(sumOfIntegers(5,5))


//check var

/**
 * var keyword -> Global level and function level
 * let keyword -> Global level and block level
 * const keyword -> cannot be reinitialised
 */
var stringMessage = "Global String"
function checkScope(){
    var stringMessage = "Local String"
    console.log(stringMessage)
}
checkScope()


let person = new Persons("John","Doe")
console.log(person.fullName())