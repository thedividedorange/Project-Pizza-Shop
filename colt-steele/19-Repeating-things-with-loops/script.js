/*-------------*/
/* For loop*/
/*-------------*/

// for(i=1;i<=10;i++) {
//     console.log(i)
// }

/*-------------*/
/* For loop*/
/* Print even Numbers*/
/*-------------*/

// for(i=1;i<=10;i=i+2) {
//     console.log(i)
// }


/*--------------------------*/
/* For loop*/
/* Iterating through a array*/
/*---------------------------*/

// let array1 = ["dog", "cat", "rabbit"]

// for(i=0;i<array1.length;i++){
//     console.log(array1[i])
// }


/*-------------*/
/* Nested Loops*/
/*-------------*/

// for (let i=1;i<=5;i++) {
//     console.log(`the number is ${i}`);
//     for (let j=1;j<=5;j++) {
//         console.log(j);
//     }
// }

// Example 2 - Iterate through an array

// const array1 = [["dog", "cat", "rabbit"],
//                ["mice", "rat", "ant"],
//                ["god", "hocrux", "people"]

// ]

// for(let i=0;i<=array1.length-1;i++){
//     let row = array1[i];
//     for(let j=0;j<=row.length-1;j++){
//         console.log(array1[i][j]);
//     }
// }

/*-------------*/
/* WHILE Loops*/
/*-------------*/

// let count = 0
// while (count < 10) {
//     console.log(count)
//     count++;
// }

// Example 2

// const SECRETCODE = "LEONARD";
// let message = prompt("Enter the password:");

// while(message !== SECRETCODE){
//     message = prompt("Your Password is Incorrect! Try again: ")
// }
// console.log("Congrats! you did it right!")


/*-------------*/
/* FOR OF Loops*/
/*-------------*/

// let namesList = ["david", "john", "carl"]

// for (let names of namesList){
//     console.log(names)
//     names++
// }


/*-------------------*/
/* Iterating Objects*/
/*------------------*/

// const userInfo = {
//     Name : "Leonardd",
//     age : 15,
//     sex : "Male",
//     place : "Jaipur"
// };


// for(let details in userInfo){

//     console.log(`The ${details} of the person is ${userInfo[details]}`);
//     details++
// }

// console.log(Object.keys(userInfo)) 
// console.log(Object.values(userInfo))