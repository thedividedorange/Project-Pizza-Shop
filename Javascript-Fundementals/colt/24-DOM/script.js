// Document Object Model = DOM


/************** */
// Log the output
/************** */
// console.dir(document.querySelector('p'))


/************** */
// getElementById
/************** */
// const banner = document.getElementById('banner');
// console.log(banner)


/******************** */
// getElementByTagName
/******************** */
// const imgs = document.getElementsByTagName("img");
// console.log(imgs)

//We can loop through it
// for(let i of imgs){
//     i.src = ""
// }


/******************** */
// querySelector
/******************* */
// Selects one element
// document.querySelector('p');


/******************** */
// querySelectorAll
/******************** */

// Selects all elements
// document.querySelectorAll('p'); //Selects all

// document.querySelectorAll('p')[1]; //Selects First only
 

/********** */
// innerText
/********** */
// document.querySelector('p').innerText


/********** */
// textContent
/********** */
// document.querySelector('p').textContent // returns hidden text


/********** */
// innerHTML
/********** */
// document.querySelector('p').innerHTML // change html


//********* */
// Attributes
//********* */
// console.dir(document.querySelector('p')) // access attributes

// or 
// const a = document.querySelector('p')

// a.href , a.id 


//************************** */
// getAttribute and setAttribute
/*************************** */
// document.querySelector('p').getAttribute('href')

// document.querySelector('p').setAttribute('href', 'https://xxx.com')


/****************/
/* Style - inline
/**************** */
// document.querySelector('h1').style.color = "green"
// //or
// document.querySelector('h1').setAttribute("style", "color: green")


/******************************* */
/* Get current style of any element
/******************************* */
// window.getComputedStyle(h1).color


/***** ** */
/* Classlist
/******** */ 

// document.querySelector('h1').classList.add
// document.querySelector('h1').classList.toggle
// document.querySelector('h1').classList.remove


/************************************** */ 
/* ParentElement - Access Parent of child
/************************************** */ 
// const firstBold = document.querySelector('b')
// firstBold.ParentElement


/************************************** */ 
/* children - Access children of parent
/************************************** */ 
// const firstBold = document.querySelector('p')
// firstBold.children[0]


/************************************** */ 
/* nextSibiling , previousSibling - returns text nodes of dom
/************************************** */ 
// firstBold.nextSibling
// firstBold.previousSibling

// Next element SIbling - returns next element
// firstBold.nextElementSibling
// firstBold.previousElementSibling


/*************** */ 
/* createElement
/*************** */ 
// const newImg = document.createElement('img')
// newImg.src = "https://devsprouthosting.com/images/egg.jpg";
// newImg.classList.add('square')

// //Append
/******** */ 
// document.body.appendChild(newImg) // appends to last child 


// newImg.append("xxxx"); //appends to inside
// newImg.prepend("xxx") // insert to first child

// // Insert Adjacent element
/****************************/ 
// const h2 = document.createElement('h2')
// h2.append("hello justin")
// const h1 = document.querySelector('h1')
// h1.insertAdjacentElement('afterend', h2)

// // After
/***********/ 
// const h3 = document.createElement('h3')
// h3.textContent = "I am h3"
// h1.after(h3)


/************* */ 
/* Remove Child
/************* */ 
//We need to select parent element to remove the child

// const list = document.getElementById("myList");
// list.removeChild(list.firstElementChild);


// better to remove();
// const list = document.getElementById("myList").remove();