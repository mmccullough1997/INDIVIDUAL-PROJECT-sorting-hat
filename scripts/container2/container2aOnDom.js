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
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
    </div>
      `;
    }
    renderToDom('#container2aCards',domTargetCards);
  };





// const container2aOnDom = () => {

  
//   //initialize variable domString
//   // let domString =""
//   // domString =
//   // `<!--title-->
//   // <p class='container2aTitle'>First Year Students:</p>`;
//   // renderToDom('#container2a',domString);



//   //function to add cards
//   const cardsOnDomContainer2a = (array) => {
//     let domTargetCards = "";
//     for(const item of array) {
//       domTargetCards += 
//       `<div class="card mb-3" style="max-width: 540px;">
//         <div class="row g-0">
//           <div class="col-md-3">
//             <div class="${item.house} img-fluid rounded-start"></div>
//           </div>
//           <div class="col-md-8">
//             <div class="card-body">
//               <h5 class="card-title name">${item.name}</h5>
//               <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//               <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
//             </div>
//           </div>
//         </div>
//     </div>
//       `;
//     }
//     renderToDom('#container2aCards',domTargetCards);
//   };
//   cardsOnDomContainer2a(students);
// }

// const cardsOnDom = (array) => {
//   let domTargetCards = "";
//   for(const item of array) {
//     domTargetCards += 
//     `<div class="card" style="width: 18rem;">
//     <header class="name" "justify-content:center" >${item.name}</header>
//     <img src="${item.image}" class="card-img-top" alt="...">
//     <div class="card-body" class="mainText">
//     <h5 class="card-title">${item.color}</h5>
//     <p class="card-text">${item.specialSkill}</p>
//     <div class="${item.typeOfPet} mt-auto" id="card-type">${item.typeOfPet.slice(0,1).toUpperCase() + item.typeOfPet.slice(1)}</div>
//     </div>
//     <div id='delete'>
//     <button class="btn btn-danger" id="delete--${item.id}">X</button>
//     </div>
//     </div>`;
//   }




export {cardsOnDomContainer2a};
