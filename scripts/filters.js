import { cardsOnDomContainer2a } from "./container2/container2aOnDom.js";
import {students,deadArmy} from "./data.js";

const addFilter = () => {
  document.querySelector('#myButtons').addEventListener('click', (event) => {
    //filters
    if(event.target.id === 'all') {
      cardsOnDomContainer2a(students)
    } else if (event.target.id){
      const house = students.filter(taco => taco.house === event.target.id);
      // console.log(house);
      cardsOnDomContainer2a(house);
    }
  })
}
export {addFilter};
