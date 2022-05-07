import {eventListeners} from "./eventListeners.js"

// console.log(students);
// console.log(deadArmy);

//startup function runs eventlisteners
const startUp = () => {
  eventListeners();
}

//call startup function
startUp();
