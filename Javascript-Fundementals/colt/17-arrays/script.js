// let colors = ['ab', 'bc', 'cd']
// let len = colors.length
// console.log(len)
// console.log(colors[1])

/*-----------------*/
/* Push and Pop*/
/* add or remove from end of array*/
/*-----------------*/

// let names = ["bob", "marley"]
// names.push("tom")
// console.log(names)

// let namess = ["dog", "cat"]
// namess.pop()

// console.log(namess)


/*-----------------*/
/* shift and unshift*/
/* add or remove from beginning of array*/
/*-----------------*/

// let movie = ['titanic', 'beethoven', 'starwars']

// movie.shift()
// console.log(movie)

// movie.unshift("doggyworld")
// console.log(movie)


/*-----------------*/
/* Array Concat*/
/* Join two arrays*/
/*-----------------*/

// let array1 = ['hello', 'world'];
// let array2 = ['how', 'are', 'you']

// let join = array1.concat(array2)

// console.log(join)


/*----------------------*/
/* Array includes*/
/* Returns true or false*/
/*----------------------*/

// let array1 = ['hello', 'world']

// console.log(array1.includes('world'))


/*-------------------------------------*/
/* Array indexOf*/
/* Returns position of element in array*/
/*-------------------------------------*/

// let array1 = ['hello', 'world']

// console.log(array1.indexOf("world"))


/*-----------------*/
/* Array reverse*/
/* reverse array*/
/*-----------------*/

// let array1 = ['hello', 'world']

// console.log(array1.reverse())


/*-----------------------------*/
/* Array slice nd splice*/
/* get range of data from array*/
/*-----------------------------*/

// let array1 = ['hello', 'world', 'whatsup', 'hi', 'no']

// console.log(array1.slice(1,3))

// //Splice - remove / add in between array
// let colors1 = array1.splice(1,3) //remove some part from array
// console.log(array1)
// console.log(colors1)

// // Splice - add item between array values
// let colorsadd = array1.splice(1, 0, 'forest-green', 'blue green')
// console.log(array1)


// /*-----------------*/
// /* Const with arrays*/
// /*-----------------*/

// const nums = [1, 2, 3]
// nums.push(4)

// console.log(nums)

// /*----------------------*/
/* Multi Dimensional Arrays*/
// /*----------------------*/

// let game = [['rock', 'rock'], ['rock', 'paper'], ['rock', 'scissors'],
//            ['paper', 'rock'], ['paper', 'paper'], ['paper', 'scissors'],
//            ['scissors', 'rock'], ['scissors', 'paper'], ['scissors', 'scissors']
//            ]

// console.log(game[2])
// console.log(game[2][1]) //print value within array