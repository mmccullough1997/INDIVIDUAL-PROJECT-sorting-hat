import { renderToDom } from "../renderToDom.js";
import students from "../data.js";

const container2bOnDom = () => {

  
  // //initialize variable domString
  // let domString =""
  // domString =
  // `<!--title-->
  // <h3 class='container2bTitle'>The Dungeon of the Doomed:</h3>`;
  // renderToDom('#container2b',domString);




  //function to add cards
  const cardsOnDomContainer2b = (array) => {
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
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
    </div>
      `;
    }
    renderToDom('#container2bCards',domTargetCards);
  };
  cardsOnDomContainer2b(students);
}

export {container2bOnDom};
