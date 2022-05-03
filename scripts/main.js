import students from "./data.js";
import {renderToDom} from "./renderToDom.js";
import container1aOnDom from "./container1/container1aOnDom.js";
import {container1bOnDom} from "./container1/container1bOnDom.js";
import {container2aOnDom} from "./container2/container2aOnDom.js";
import {container2bOnDom} from "./container2/container2bOnDom.js";
import {eventListeners} from "./eventListeners.js"

console.log(students);



//startup function
const startUp = () => {
  eventListeners();

  // container1aOnDom();
  // container1bOnDom();
  // container2aOnDom();
  // container2bOnDom();
}

startUp();
