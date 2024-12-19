const prompt = require("prompt-sync")({signint:true});
let groceryStack = [];

function peek() {
  if (groceryStack.length === 0) {
    console.log("The stack is empty.");
    return null;  
  } else {
    console.log("Top item in the stack: " + groceryStack[groceryStack.length - 1]);
    return groceryStack[groceryStack.length - 1];
  }
}


function push(item) {
  groceryStack.push(item);  
  console.log("Updated Stack after pushing: " + groceryStack);
}


function pop() {
  if (groceryStack.length === 0) {
    console.log("The stack is empty. Nothing to pop.");
  } else {
    let removedItem = groceryStack.pop();  
    console.log("Removed item: " + removedItem);
    console.log("Updated Stack after popping: " + groceryStack);
  }
}


for (let i = 0; i < 5; i++) {
  let item = prompt("Enter grocery item " + (i + 1) + ":");
  push(item);  
  peek();  
}


pop();  
pop();  
