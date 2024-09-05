const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(document.body.style.backgroundColor = color)
      }, delay);
    });
  };
   
  const rainbow = async () => {
    await delayedColorChange("red", 5000);
    await delayedColorChange("orange", 1000);
    await delayedColorChange("yellow", 1000);
    await delayedColorChange("green", 1000);
    await delayedColorChange("blue", 1000);
    await delayedColorChange("indigo", 1000);
    await delayedColorChange("violet", 1000);
    await delayedColorChange("pink", 1000);
    return "ALL DONE";
  };
   
  rainbow()
  
  .then((data) => console.log("End of rainbow" , data));

// let stocks = {
//     Fruits:['strawberry', 'grapes', 'bananas', 'apples'],
//     liquid:['water', 'coke', 'sprite', 'apple juice'],
//     holder:['melon', 'cone', 'cup', 'stick'],
//     toppings:['chocolate', 'cream', 'peanutbutter', 'almonds'],
// }


// let is_shop_open = true


// function time(ms){
//     return new Promise((resolve, reject)=>{
//         if (is_shop_open){

//             setTimeout(resolve,ms)
            
//         }
//         else {
//             reject(console.log("shop closed"))
//         }
//     })
// }

// async function kitchen (){
//     try{

//         await time(2000)
//         console.log(`${stocks.Fruits[1]} picked`)

//         await time(2000)
//         console.log(`Start the Production`)
//         await time(2000)
//         console.log(`Cut the fruits`)
//         await time(2000)
//         console.log(`Water and ice added`)
//         await time(2000)
//         console.log('start the machine')
//         await time(2000)
//         console.log(`served icecream`)
//     }
//     catch(error){
//         console.log('customer left', error)
//     }
//     finally{
//         console.log('shope closed')
//     }
// }

// kitchen()

// let toppings_choice = () => {

//     return new Promise((resolve, reject)=>{

//         setTimeout(()=>{
//             resolve(console.log("which topping would you like?"))
//         },3000)
//     })


// }

// async function kitchen (){
//     console.log("A")
//     console.log("B")
//     console.log("C")

//     await toppings_choice()

//     console.log("D")
//     console.log("E")

// }

// kitchen()

// console.log("doing the dishes")
// console.log("cleaning the table")
// console.log("take others order")



// let order = () => {

//     return new Promise((resolve, reject)=>{
//         if(true){
//             resolve()
//         }
//         else{
//             reject()
//         }
//     })
// }

// order()
// .then()
// .then()
// .then()
// .catch()
// .finally()

// async function order (){
//     try{
//         await abc
//     }

//     catch(error){
//         console.log(`abc doesnt exist`, error)
//     }

//     finally{
//         console.log(`run code anyways`)
//     }
// }


// order()
// .then(()=>{
//     console.log('code running')
// })

// let order = (time, work) => {
//     return new Promise((resolve, reject)=>{
//         if(is_shop_open){
//             setTimeout(()=>{
//                 resolve(work())
//             },time)       
//         }
//         else {
//             reject(console.log('shop is closed'))
//         }
//     })
// }

// order(1000, ()=>console.log(`${stocks.Fruits[0]} was selected`))

// .then(()=>{
//     return(order(0, ()=>console.log(`Production has started`)))
// })
// .then(()=>{
//     return(order(2000, ()=>console.log(`The Fruit was chopped`)))
// })
// .then(()=>{
//     return(order(1000, ()=>console.log(`Water and ice added`)))
// })
// .then(()=>{
//     return order(1000, ()=>console.log('start the machine'))
// })
// .then(()=>{
//     return order(2000, ()=>console.log(`icecream was placed on ${stocks.holder[1]}`))
// })


// .catch(()=>{
//     console.log('customer left')
// })

// .finally(function(){
//     console.log('day ended, shop is closed')
// })

// let order = (stock_name, productionFn) => {
//     setTimeout(()=>{
//      let r = Math.floor(Math.random()*stocks[stock_name].length)   
//         console.log(`${stocks[stock_name][r]} was selected`)

//         productionFn()
//     },2000)


// }
// let production = () => {
//     setTimeout(()=>{
//         console.log('production has started')

//         setTimeout(()=>{
//             console.log('The fruit has been chopped')

//             setTimeout(()=>{
//                 console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} is added`)

//                 setTimeout(()=>{
//                     console.log(`The Machine was started`)

//                     setTimeout(()=>{
//                         console.log(`${stocks.holder[1]} and ${stocks.liquid[1]} was selected`)
    
//                         setTimeout(()=>{
//                             console.log(`${stocks.toppings[1]}, ${stocks.toppings[3]} was added`)
        
//                             setTimeout(()=>{
//                                 console.log(`served icecream`)
            
                                
//                             },3000)  
//                         },2000)  
//                     },1000)  
//                 },1000)
//             },1000)
//         }, 2000)
//     }, 0) 
// }





// order('Fruits',production)

