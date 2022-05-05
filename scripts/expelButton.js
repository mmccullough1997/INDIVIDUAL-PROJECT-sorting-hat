import { cardsOnDomContainer2a } from "./container2/container2aOnDom.js";
import {students,deadArmy} from "./data.js";
import { cardsOnDomContainer2b } from "./container2/container2bOnDom.js";

const expelButton = () => {
  document.querySelector('#container2aCards').addEventListener('click', (event) => {
    if(event.target.id) {
      const [method, id] = event.target.id.split('--');
      // console.log(id, 'this is the id');
      let index = students.findIndex((taco) => taco.id === parseInt(id))
      console.log(index, 'this is the index');

      if(event.target.id.includes('delete')) {
        // console.log('Hell yeah you pressed delete!');

        // let deaderArmy =[];
        deadArmy.push(students[index])

        for(const item of deadArmy){
          item.house = 'veryBad'
        }

        students.splice(index,1)
        cardsOnDomContainer2a(students);
        cardsOnDomContainer2b(deadArmy);

        // deadArmy.push(students.slice(index,index+1).map((student,index) => ({name: student.name, house: 'darkArmy', expelled: true})))
        // for( const item of deadArmy) {
        //   deaderArmy.push(deadArmy[item][0])
        // }
        
      //   //expel the student to darkArmy array
      //   // let darker = students.slice(index,index+1)
      //   // deadArmy.push(darker);
      //   // let darkArmy = students.map((student) => ({name: student.name, house: 'darkArmy', expelled: true})
      //   // )
      //   // console.log(students, 'this is students');
        console.log(deadArmy, 'this is dead');
      }
    }
  })
}

export {expelButton};
