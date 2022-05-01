import students from "./data.js";


//utility function
const renderToDom = (divId,textToRender) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML = textToRender;
}


export {renderToDom}
