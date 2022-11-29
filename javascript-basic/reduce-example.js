
// Array functions
// reduce
marks = [5,5,5,5,5]
let answer = marks.reduce((answer, individualMarks)=> answer+individualMarks, 0)
console.log("Total of all marks = "+answer)


//print even numbers in array with filter
let scores = [1,2,3,4,5,6,7,8,9,10]
let newEvenScores = scores.filter(score=> score%2==0)
console.log(newEvenScores)


//maps
let mapActionArray = newEvenScores.map(score => score*3)
console.log(mapActionArray)

let sumOfMapAction = mapActionArray.reduce((sum, i) => sum+i,0)
console.log("Sum of Mapped action Array = "+sumOfMapAction)


//methods chaining
//Q1 = filter even number, multiple by 2 and sum all those number
let newArray = [4,6,2,8,0,1,5,7,10,33]
let allActionTotal = newArray.filter(score => score%2).map(score => score * 2).reduce((sum,i)=> sum+i,0)
console.log(allActionTotal)