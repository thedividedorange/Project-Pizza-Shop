/*Default Parameters , with = sign*/
/******************************** */

// function rollDie(numSides = 6){
//   return Math.floor(Math.random() * numSides) + 1;
// }

// console.log(rollDie(2));


/***************************/
/*Spread in Functions calls*/
/***************************/
// Seperate arguments


// Spread in arrays

// const cats = ["daisy", "toodles", "jamie"];

// console.log(... cats) 

// // Spread in objects

// const cats = { name: "feline", age: 3, color: "black"};
// const newArray = {...cats}
// console.log(newArray)


/* REST * - does not work in arrow functions/


// function sum(){
//   console.log(arguments)
// }

function sum(...nums){
  console.log(nums);
}

console.log(sum(1,2,3,4,5,6))


/********************/
/*Destructing arrays*/
// /****************** */

// const scores = [982, 72873, 8799 , 973989, 8939938]

// const [lowScore, mediumScore] = scores;

// console.log(lowScore, mediumScore)

function lastLetter(name){
  return name[name.length-1]
}

console.log(lastLetter("leonard"))