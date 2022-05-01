import students from "./data.js";
import container1aOnDom from "./container1aOnDom.js";


//utility function
const renderToDom = (divId,textToRender) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML = textToRender;
}


export {renderToDom}
