let userInput = prompt("What would you like to do? (New, List, Delete, Quit)").toLowerCase();

while(!userInput || (userInput !== "new" && userInput != "list" && userInput !== "delete" && userInput !== "quit")){
    userInput = prompt("Invalid Input, try new, list, delete, quit").toLowerCase();
}

let toDoList = ["Welcome", "world"];


while(userInput){


    if(userInput === "new"){
        userInput = prompt("Enter new todo").toLowerCase();

        while(!userInput){
            userInput = prompt("Enter a valid todo item").toLowerCase();
        }

        toDoList.push(userInput);

        console.log("Your list is updated.")

        }
        else if (userInput === "list"){
            console.log(`--------------\nNo  | ListItem\n--------------`)
        
            for (let i=0;i<toDoList.length;i++){
                console.log(`${i}:    ${toDoList[i]}`);
            }

            console.log(`--------------`)

            }
            else if (userInput === "delete"){
                userInput = parseInt(prompt("What is the number of the item you wish to delete?"));

                while(!Number.isInteger(userInput) || (userInput < 0 || userInput > toDoList.length) ){
                    userInput = parseInt(prompt("Enter a valid item number to delete"));
                }

                toDoList.splice(userInput, 1);

                console.log("Item Deleted")
                console.log(`--------------\nNo  | ListItem\n--------------`)

                for (let j=0;j<toDoList.length;j++){
                console.log(`${j}:    ${toDoList[j]}`);
                }

                console.log(`--------------`)

                }
                else if (userInput === "quit"){
                    console.log("Ok have a good day!");

                    break;
                }

                userInput = prompt("What would you like to do? (New, List, Delete, Quit)").toLowerCase(); 
                
                while(!userInput || (userInput !== "new" && userInput != "list" && userInput !== "delete" && userInput !== "quit")){
                    userInput = prompt("Invalid Input, try new, list, delete, quit").toLowerCase();
                }      

        }