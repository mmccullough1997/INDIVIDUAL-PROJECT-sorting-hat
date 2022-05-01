import {renderToDom} from "../renderToDom.js";

const container1b1OnDom = () => {
  //initialize variable domString
  let domString="";
  domString =
  `<h2>Enter first year's name below:</h2>

  <!--Bootstrap-->
  <div class="inputForm">
    <div class="row g-3 align-items-center">
      <div class="col-auto">
        <label for="inputname" class="col-form-label">Input First Year Name</label>
      </div>
      <div class="col-auto">
        <input type="name" id="name" class="form-control" aria-describedby="name">
      </div>
      <div class="col-auto">
        <span id="name" class="form-text">
          Must be 8-20 characters long.
        </span>
      </div>
    </div>
  </div>
  `;

  renderToDom('#container1b1',domString)
}

export {container1b1OnDom}
