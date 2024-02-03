/**************/
/*Function scope
/**************/

// let totalEggs = 0;

// function collectEggs() {
//    totalEggs = 6;
// }

// collectEggs();
// console.log(totalEggs)


/*If two varibles are same name outside and inside, the console.log will executre the one inside the function first


/*************/
/*Block scope
/*************/

// for (let i = 0;i <= 10;i++){
//     let dog = "hi";

// }

// console.log(dog); // wont work as dog is inside block (loop


/***************/
/*Lexical Scope*/
/***************/


/**********************/
/*Function Expressions*/
/**********************/

/*example*/

// function add(x,y) {
//     return x+y;
// }

// // Can be written as

// const add = function (x,y) {
//     return x+y;
// }


/**********************/
/*Example: Calculator*/
/**********************/

//we take two input for two numbers from user
//we ask the user if he wants to add, substract or divide the number
//we provide the output for the user

// function addNumber(number1, number2){
//     let addition = number1+number2;
//     return addition;
// }

// function divideNumber(number1, number2){
//     let division = number1 / number2;
//     return division;    
// }

// function substractNumber(number1, number2){
//     let subNumber = number1 - number2;
//     return subNumber;
// }

// function calculator(){

//     let numberOne = parseInt(prompt("Enter your first Number:"));
//     let numberTwo = parseInt(prompt("Enter your Second Number:"));

//     let number1 = numberOne;
//     let number2 = numberTwo;

//     let result;

//     let userChoice = prompt("add, sub, divide").toLowerCase();
    
//     switch (userChoice) {
//         case "add":
//             result = addNumber(number1,number2);
//             break;
//         case "sub":
//             result = substractNumber(number1,number2);
//             break;
//         case "divide":
//             result = divideNumber(number1,number2);
//             break;
//     }
//     console.log(result);

// }


// calculator();


/*******************************/
// Passing functions as arguments 
/*******************************/

// function callTenTimes(otherFunction) {
//     for (let i=0;i<10;i++) {
//         otherFunction();
//     }
// }

// function name(){
//     console.log("hello world")
// }

/*******************************/
// Return functions
/*******************************/

// function betweenNumbers(min, max){
//     return function(num){
//         return num >= min && num <= max;
//     }
// }


/*******************************************************/
// Methods - adding functions as properties to objects
/*******************************************************/

// const math = {
//     add: function (x, y) {
//         return x+y;
//     },
//     substract: function (x,y) {
//         return x-y;
//     },
//     division: function (x,y){
//         return x/y;
//     },
// }

// const result = math.add(10,3);
// console.log(result);

// Example

// const square = {
//     area: function (side){
//         return side * side;
//     },
//     perimeter: function (side){
//         return side * 4;
//     }
// }

// var result = square.area(5);
// console.log(result);


/*******************************************************/
// This Keyword
/*******************************************************/
// used mainly inside an object in a method
//'this' references the object that is executing the current function" 

// const hen = {
//     name: "Helen",
//     eggCount: 0,
//     layAnEgg: function(){
//         this.eggCount++;
//         return this.name;
//     }
// }

/****************/
// Try & catch
/****************/

// try {
// hello.world()
// } catch {
//     console.log("error")
// }