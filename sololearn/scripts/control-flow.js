/*
Iteration involves looping
*/

let age = 18;
let isAdult = true;

/*
Note: 
-you can say if(isAdult === true) or if(isAdult) to be more concise
-checkboxes are booleans
-
*/

if (age > 18) {
  console.log("Regular price");
}
else {
  console.log("Discount");
}
console.log()
//let speed = 120;
let speed = 70;
if(speed<100){
    console.log("No Ticket");
}else{
    console.log("Traffic Ticket")
}
console.log("Drive with care")

console.log()
age = 17;
let isStudent = false;
if (age < 18) {
    //execute if age is less than 18
    if (isStudent) {
    //execute if under 18 and also a student
    console.log("20% discount");
    }
    else {
    //execute if under 18 and not a student
    console.log("10% discount");
    }
}    
else {
    //execute this code customer 18 or over
    console.log("Regular price");
}

console.log()
let counter = 0; //1. Initialization

while (counter < 4) {//2. Condition
  console.log("Message");
  counter = counter + 1; //3. Counter keeping track of iterations
}

for (let i = 1; i<6; i=i+1) {
    console.log("Hi");
}

let items = 5;
let isCartEmpty = items > 0;
console.log(isCartEmpty);