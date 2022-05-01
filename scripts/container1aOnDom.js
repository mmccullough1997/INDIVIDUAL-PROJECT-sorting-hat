import {renderToDom} from "./renderToDom.js";

const container1aOnDom = () => {
  //initialize variable domString
  let domString =""
  domString =
  `<!--title-->
  <h1 class='container1aTitle'>Welcome to the Hat Sorting Thingy!</h1>
  <!--text-->
  <p class='container1aText'>Please have a seat lol this is like part of everything haha just dont worry at all lmao</p>
  `;
  renderToDom('#container1a',domString);
}

export default container1aOnDom;
