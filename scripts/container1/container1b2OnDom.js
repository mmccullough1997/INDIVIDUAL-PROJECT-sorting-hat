import {renderToDom} from "../renderToDom.js";

const container1b2OnDom = () => {
 //initialize variable domString
 let domString="";
 domString = 
 `<p class="filterText">filter students below or whatever</p>
 
 <div id="myButtons" class="topButtons">
    <button type="button" class="btn btn-primary btn-lg allButton" id="all">Show all</button>
    <button type="button" class="btn btn-primary btn-lg gryffindorButton" id="gryffindor">Gryffindor</button>
    <button type="button" class="btn btn-primary btn-lg hufflepuffButton" id="hufflepuff">Hufflepuff</button>
    <button type="button" class="btn btn-primary btn-lg ravenclawButton" id="ravenclaw">Ravenclaw</button>
    <button type="button" class="btn btn-primary btn-lg slytherinButton" id="slytherin">Slytherin</button>
  </div>
 
 `
renderToDom('#container1b2',domString);
}

export {container1b2OnDom}
