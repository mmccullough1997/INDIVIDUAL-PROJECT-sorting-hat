import {renderToDom} from "../renderToDom.js";
import {container1b1OnDom} from "./container1b1OnDom.js";
import { container1b2OnDom } from "./container1b2OnDom.js";

const container1bOnDom = () => {
  //initialize variable domString
  let domString ="";
  domString = 
  `<p>There's more text here! haha you should look at this text it's like super duper cool haha</p>
  `;
  container1b1OnDom();
  container1b2OnDom();
  renderToDom('#container1b',domString);
}

export {container1bOnDom}
