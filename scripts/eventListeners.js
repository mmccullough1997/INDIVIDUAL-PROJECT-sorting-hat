import { renderToDom } from "./renderToDom.js";
import {students,deadArmy} from "./data.js";
import container1aOnDom from "./container1/container1aOnDom.js";
import { container1bOnDom } from "./container1/container1bOnDom.js";
import { cardsOnDomContainer2a } from "./container2/container2aOnDom.js";
import { cardsOnDomContainer2b } from "./container2/container2bOnDom.js";
import { addFilter } from "./filters.js";
import { expelButton } from "./expelButton.js";


//event listeners
const eventListeners = () => {

  //introduction card
  const introCardOnDom = () => {
    let domString ="";
    domString = `
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">I am the Sorting Hat Thing!</h5>
        <a id="clickStart" class="btn btn-primary">Click me to get started</a>
      </div>
    </div>
    <img class="wizardImage" src="./images/wizard.jpg">
    `
    //render introduction card to dom
    renderToDom('#introCard',domString);
  }
  //call function
  introCardOnDom();
  
  //create click event on intro card
  document.querySelector('#introCard').addEventListener('click',(event) => {
    //if there is a click event, summon container 1a and 1b to DOM
    if(event.target.id){
        container1aOnDom();
        container1bOnDom();
        //hide intro card
        document.querySelector('#introCard').style.visibility = 'hidden';

        //input student name function
        const inputStudentName = () => {

          //selecting form where name is input and adding event listener to listen for a submit
          const inputName = document.querySelector('form');
          inputName.addEventListener('submit', (event) => {
            event.preventDefault();


            //random house designation
            let randNums = [1,5,7,8];
            let randomHouse = randNums[Math.floor(Math.random()*randNums.length)];
            // console.log(randomHouse);
            
            //add input name to new student object and property of expelled set to false
            const newStudentObj = {
              name: document.querySelector('#name').value,
              // expelled: false
            };

            //based on random number, assign corresponding random house to new student object
            if (randomHouse === 1){
              newStudentObj.house = 'gryffindor';
            } else if (randomHouse === 5) {
              newStudentObj.house = 'hufflepuff';
            } else if (randomHouse === 7) {
              newStudentObj.house = 'ravenclaw';
            } else if (randomHouse === 8) {
              newStudentObj.house = 'slytherin';
            }
          
            // console.log(randomHouse);
            // console.log(newStudentObj);

            //push new student object to student array
            students.push(newStudentObj);
            inputName.reset();

            //assign indices
            students.forEach((num, i) => {
              num.id = (i-1) + 1;
            })
            // console.log(students, 'this is students');
            cardsOnDomContainer2a(students);
            // container2bOnDom();
          })
        }
        inputStudentName();
        addFilter();
        expelButton();
      
    } 
  })

}

export {eventListeners};
