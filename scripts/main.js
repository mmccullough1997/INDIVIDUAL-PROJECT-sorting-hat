import students from "./data.js";
import {renderToDom} from "./renderToDom.js";
import container1aOnDom from "./container1/container1aOnDom.js";
import {container1bOnDom} from "./container1/container1bOnDom.js"

console.log(students);



//startup function
const startUp = () => {
  container1aOnDom();
  container1bOnDom();
}

startUp();
