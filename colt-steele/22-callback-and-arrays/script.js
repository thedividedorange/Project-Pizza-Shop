/***************************************************************************************/
/*forEach , alternate to for xxx in array - does not retun new array - just for iterating
/***************************************************************************************/

// const array = ["hello", "david", "sam", "justin"]

// array.forEach(function(print){
//     console.log(print);
// })


/******************* */
/* Loop through Object
/******************* */

// const dataSet = [
//     {name: "bob",
//      age: 18,
//      sex: "male"
//     },
//     {name: "charles",
//      age: 27,
//      sex:"male"
//     },
//     {name:"jamie",
//     age: 66
//     }
// ]

// dataSet.forEach(function(details){
//     // console.log(details.name)
//     console.log(details)
// })

// Example with Newer Gen method
// for (details in dataSet){
//     console.log(dataSet[details]);
// }


/*********************************************************************************************************/
/*MAP Function - Ceates a new array with the results of calling a callback on every element in the array
/*********************************************************************************************************/

// const dataSet = [
//     {name: "bob",
//      age: 18,
//      sex: "male"
//     },
//     {name: "charles",
//      age: 27,
//      sex:"male"
//     },
//     {name:"jamie",
//     age: 66,
//     sex: "male"
//     }
// ]

// const names = dataSet.map(function(printName){

//     return printName.name;
// })

// console.log(names);



/******************* */
/* Arrow function
/******************* */

// const name3 = (c,d) => {
//     console.log("hello arrow!")
// }

// name3();

// // Function Expression

// const name = function(x,y) {
//     console.log("hello Expression")
// }

// name();

// // Regular syntax

// function name1(a,b){
//     console.log("hello world")
// }

// name1();


/************************** */
/* Arrow function with forEach
/************************** */

// const array = ["hello", "david", "sam", "justin"]

// // Normal way for writing
// array.forEach(function(name){
//     console.log(name)
// })

// // with arrow Function
// array.forEach((name) => {console.log(name))

// // or

// array.forEach((name) => {
//     console.log(name)
// })


/********************** */
/* Arrow function with map
/********************** */

// const dataSet = [
//     {name: "bob",
//      age: 18,
//      sex: "male"
//     },
//     {name: "charles",
//      age: 27,
//      sex:"male"
//     },
//     {name:"jamie",
//     age: 66,
//     sex: "male"
//     }
// ]

// // Normal way for writing
// const age = dataSet.map(function(getAge){
//     console.log(getAge.age)
// })

// // // Arrow function
// // const age = dataSet.map((getAge) => console.log(getAge.age))

// // // or

// const age = dataSet.map((getAge) => {
//     console.log(getAge.age)
// })

/******************* */
/* SetTimeout function
/******************* */

// setTimeout(() => {
//     console.log("world")
// }, 6000)

// setTimeout(function () {
//     console.log("hello world");
// }, 10000
// )

/******************* */
/* SetInterval
/******************* */

// setInterval(() => {
//     console.log(Math.random())
// }, 3000)


/*****************************************************************************/
/*FILTER - Callback function that filters an array after checking a condition - 
  Returns a new array with values*/
/*************************************************************************** */

// const numberSet = [1,2,3,4,5,6,7,8,9,10];

// const evenNumbers = numberSet.filter((number) => !(number % 2))

// // or
// // const evenNumbers = numberSet.filter(function (numbers){
// //     return !(numbers % 2);
// // })

// console.log(evenNumbers) 

/* Example Take input as array and print < 10 */

// const validUserNames = (userNames) => {
//     userNames = userNames.split(",")
//     return userNames.filter((uName) => {
//         return uName.length < 10;
//     })   
// }

// output = validUserNames("john,david,michael,pokemongoisfun");
// console.log(output)

/************************* */
/*Every and some - callback*/
/************************* */

// const userData = [
//     {name: "john",
//     age: 18,
//     sex: "male"
//     },
//     {name: "avid",
//     age: 38,
//     sex: "male"
//     },
//     {name: "soumya",
//     age: 19,
//     sex: "femle"
//     },
//     {name: "victor",
//     age: 45,
//     sex: "male"
//     }
// ]

// const evenAge = userData.every((even) => {
//     return even.age % 2 === 0;
// })

// console.log(evenAge)


// const someAge = userData.some((some) => {
//     return some.age > 38;
// })

// console.log(someAge)

/********************************** */
/* REDUCE - Reduce to a single value*/
/********************************** */

// const array = [1,2,3,4,5,6]

// const num = array.reduce((total, price) =>{
//     return total + price;
// })

// console.log(num)

