import {renderToDom} from "./renderToDom.js";

const container1b2OnDom = () => {
 //initialize variable domString
 let domString="";
 domString = 
 `<p>filter students below or whatever</p>
 
 <div id="myButtons" class="topButtons">
    <button type="button" class="btn btn-primary btn-lg" id="all">Show all</button>
    <button type="button" class="btn btn-primary btn-lg" id="gryffindor">Gryffindor</button>
    <button type="button" class="btn btn-primary btn-lg" id="hufflepuff">Hufflepuff</button>
    <button type="button" class="btn btn-primary btn-lg" id="ravenclaw">Ravenclaw</button>
    <button type="button" class="btn btn-primary btn-lg" id="slytherin">Slytherin</button>
  </div>
 
 `
renderToDom('#container1b2',domString);
}

export {container1b2OnDom}
