import { renderToDom } from "../renderToDom.js";
import {students,deadArmy} from "../data.js";

  //function to add cards
  const cardsOnDomContainer2b = (array) => {
    let domTargetCards = "";
    for(const item of array) {
      domTargetCards += 
      `<div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0 insideOfContainer2b">
          <div class="col-md-3">
            <div class="${item.house} img-fluid rounded-start"></div>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title name">${item.name}</h5>
              <p class="card-text">Very Bad Person (VBP)</p>
              <img class="spiderman" src="./images/spiderman.png">
              
            </div>
          </div>
        </div>
    </div>
      `;
    }
    renderToDom('#container2bCards',domTargetCards);
  };

  export {cardsOnDomContainer2b};
