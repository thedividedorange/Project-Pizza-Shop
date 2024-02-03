
/**********/
/*Roll die*/
/**********/
// let userInput;
// let dieMultiplier;

// function rollDice(dieMultiplier) {
//     let dice = Math.floor(Math.random() * dieMultiplier) + 1;
//     return dice;
// }


// function game(){    
//     userInput = parseInt(prompt("Enter your dice range:"));
//     dieMultiplier = userInput;
    
//     for(let i=0;i<=10;i++) {
//     console.log(rollDice(dieMultiplier));
//     }
// }


// game();

/*******************************************/
/*Arguments - fuctions that accepts inputs*/
/*******************************************/

// let input;

// function acceptInput(input){
//     let userMessage = `Hello ${input}`;
//     return userMessage;
// } 

// function print(){
//     let name = prompt("Enter your name");
//     input = name;
//     console.log(`${acceptInput(input)}`);
// }

// print();

/*******************************************/
/*Multiple Arguments - fuctions that accepts inputs*/
/*******************************************/

// let fName;
// let lName;

// function acceptInput(fName, lName){
//     let userMessage = `Hello ${fName} ${lName}`;
//     return userMessage;
// } 

// function print(){
//     fName  = prompt("Enter your first name");
//     lName  = prompt("Enter your last name");
//     console.log(`${acceptInput(fName, lName)}`);
// }

// print();

// /***************/
// /*Return values*/
// /***************/

// Use return xxx // for single value
// use return [xxx,xxx,xxx] // for multiple values


// /*********************************/
// /*Return first letter capitilised*/
// /*********************************/

// let firstLetter;

// function capitalize(firstLetter){
//     let capitilised  = firstLetter.replace(firstLetter[0], firstLetter[0].toUpperCase());
//     console.log(capitilised);
//     return firstLetter;

// // /*********************************/
// // /*Sum of numbers in an array*/
// // /*********************************/

// let userArray;
// let arraySplit;
// let userPrompt;

// function newArray(userArray){
//     arraySplit = userArray.split(",");
//     return arraySplit;
// }

// let sum = 0;
// function sumOfNumbers(sum) {
//     userPrompt = prompt("Enter array numbers seperated by a comma(,)");
//     arraySplit = newArray(userPrompt);

//     console.log(arraySplit);

//     for (i = 0; i < arraySplit.length; i++){

//         sum += parseInt(arraySplit[i]); 
//     }
    
//     return console.log(sum);

// }


// let userInput;

// function returnDay(userInput)
// {
//     while(userInput < 1 || userInput > 7){
//         return null
//     }

//     switch (userInput){
//         case 1:
//             return "Monday";
            
//         case 2:
//             return "Tuesday";
                 
//         case 3:
//             return "Wednesday";
            
//         case 4:
//             return "Thursday";
            
//         case 5:
//             return "Friday";
            
//         case 6:
//             return "Saturday";
            
//         case 7:
//             return "Sunday";           
//     }
// }



