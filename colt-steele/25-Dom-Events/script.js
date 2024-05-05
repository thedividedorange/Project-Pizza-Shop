// const button = document.querySelector(".button2")

// button.addEventListener("click", () =>{
//     button.setAttribute("onclick", "console.log(`hello world`)")
// })

// button.setAttribute("onmouseover", "console.log(`AHHHHHHH`)")


/************************************ */
/**Random Background color from button
/************************************ */

// const selectLabel = document.getElementById("colorLabel")
// const colorButton = document.querySelector(".button3")

// function random(){
//     let number = Math.floor((Math.random() * 255)) + 1
//     return number
// }

// function setBackground(){
//     const r = random()
//     const g = random()
//     const b = random()
//     document.body.bgColor = `rgb(${r},${g},${b})`
//     selectLabel.style.color = "#ffff"
//     selectLabel.textContent = `${document.body.bgColor}`
// }

// colorButton.addEventListener("click", () => {
//     setBackground()
// })


/************************************ */
// Random color button with THIS keyword
/************************************ */

// function random(){
//     const r = Math.floor((Math.random() * 255)) + 1
//     const g = Math.floor((Math.random() * 255)) + 1
//     const b = Math.floor((Math.random() * 255)) + 1
//     let color = `rgb(${r},${g},${b})`
//     return color
// }

// const selectAll = document.querySelectorAll("button")

// for (let button of selectAll){
//     button.addEventListener("click", colorize)
// }

// function colorize() {
//     this.style.backgroundColor = random()
//     this.style.borderColor = random()
//     this.style.fontSize = "28px"
// }

// 
/***********************/
// Events and event object
/*********************** */

// document.querySelector("button").addEventListener('click', function (evt){
//     console.log(evt)
// }) 

// const input = document.getElementById("inputbox")
// input.addEventListener("keydown", (e)=>{
//     console.log(e)
//     console.log(e.key) //listen to key or key code
//     console.log(e.code)
// })

// window.addEventListener('keydown', (event)=>{
//     console.log(event)
// })


/***************************** */
/*Form Events and PreventDefault
/***************************** */

const selectForm = document.querySelector("#formOne")
const newLabel = document.createElement("label")

selectForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const label = document.getElementById("formInput")

    newLabel.textContent = label.value
    newLabel.setAttribute("style", "display:block;")
    selectForm.appendChild(newLabel)

    label.setAttribute("value", "")
    label.setAttribute("defaultValue", "")
    console.log("form submitted")
})