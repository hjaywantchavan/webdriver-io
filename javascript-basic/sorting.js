// let stringArray = ["hello", "I", "am","batman", "thor", "ironman", "spiderman", "loki"]
// stringArray.sort()   //can only sort strings, will not work for numbers
// console.log(stringArray)

let numberArray = [9,8,7,002, 11,14,19,45,0010]

//custom logic
numberArray.sort(function(a,b){
    console.log(numberArray)
    // console.log("Value for a = "+a)
    // console.log("Value for b = "+b)
    // console.log("Returned value = "+(a-b))
    return a-b
})

console.log("Sorted Array")
console.log(numberArray.reverse())
