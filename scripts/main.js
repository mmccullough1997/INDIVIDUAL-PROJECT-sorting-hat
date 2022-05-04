import {students,deadArmy} from "./data.js";
import {renderToDom} from "./renderToDom.js";
import container1aOnDom from "./container1/container1aOnDom.js";
import {container1bOnDom} from "./container1/container1bOnDom.js";
import {cardsOnDomContainer2a} from "./container2/container2aOnDom.js";
import {cardsOnDomContainer2b} from "./container2/container2bOnDom.js";
import {eventListeners} from "./eventListeners.js"

// console.log(students);
// console.log(deadArmy);



//startup function
const startUp = () => {
  eventListeners();

  // container1aOnDom();
  // container1bOnDom();
  // container2aOnDom();
  // container2bOnDom();
}

startUp();
