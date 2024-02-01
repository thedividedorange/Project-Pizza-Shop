//We take the max number from the user
//we pick a random number from 0 to max number
//the user must guess this number
// display too far, far, hot, cold as the distance from the number, maximum 5 guesses

let maxNumber = parseInt(prompt("Enter you maximum number"));

while(!maxNumber){
    maxNumber = parseInt(prompt("Enter a valid number below"));
}

let randomNumber = Math.floor(Math.random() * maxNumber) + 1;

let distance = randomNumber/2;

// we can remove the line below 
console.log(`The random number is ${randomNumber}`);

let turns = 1;
let guess = prompt(`Guess the number between 1 to ${maxNumber}. Maximum 5 tries.`);

while(turns <= 5){

    if (guess === "q" || guess === "Q"){
        console.log("All right goodbye")
        break;
    }

    if (parseInt(guess) !== randomNumber){
        if (guess > randomNumber){
            guess = prompt("You are outside range.");
     
        }
        else if (guess < distance ){
            guess = prompt("Thats cold! Try again"); 
      
        }
        else if (guess > distance && guess < randomNumber) {
            guess = prompt("Great Job You are close!");
        }
    }
    else { 
        console.log("You Win!!")
        break;
    } 
    
    turns++;
}
