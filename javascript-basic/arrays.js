// definition
let marks = Array(6)
marks = new Array(1,2,3,4,5,6,7)
marks = [1,2,3,4,7,6,7,7]

//access
console.log(marks[4])
console.log(marks)
console.log(marks.length)

//increase and decrease size of array
marks.push(8)
console.log(marks)
marks.pop()
console.log(marks)


marks.unshift(20) // add element at the beginning of array
console.log(marks)


//check index of existing element in array
console.log("Index for 7 found at "+marks.indexOf(7)) // -1 if not found, provides first occuring index


// check element is available in array
console.log(marks.includes(7))