
//conditional statements
    /*1. if statements just like any other programming language
    
    */

// looping statements
let element = 0
do{
    console.log(element)
    element +=1
}
while(element<=10);
console.log("out of loop");


//prime number
let num = 20
if(num<=1){
    console.log("Not a Prime Number")
}
else if(num==2){
    console.log("Prime Numer")
}
else{
    let flag=false
    for(i=3;i<num;i++){
        if(num%i==0){
            flag=true
        }
    }
    if(!flag){
        console.log("Prime Numer")
    }
    else{
        console.log("Not a Prime Number")
    }
}