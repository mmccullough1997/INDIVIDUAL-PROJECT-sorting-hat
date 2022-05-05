import { renderToDom } from "../renderToDom.js";
import {students,deadArmy} from "../data.js";


  //function to add cards
  const cardsOnDomContainer2a = (array) => {
    let domTargetCards = "";
    for(const item of array) {
      domTargetCards += 
      `<div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-3">
            <div class="${item.house} img-fluid rounded-start"></div>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title name">${item.name}</h5>
              <p class="card-text">${item.house.slice(0,1).toUpperCase()+item.house.slice(1)}</p>
              
              <!--expel button-->
              <div>
              <button class="btn btn-danger expelButton" id="delete--${item.id}">Expel</button>
              </div>

            </div>
          </div>
        </div>
    </div>
      `;
    }
    renderToDom('#container2aCards',domTargetCards);
  };

export {cardsOnDomContainer2a};
