// IIFE

(function () {
  // Targeting

  let screen = document.querySelector(".screen");
  let buttons = document.querySelectorAll(".btn");
  let clear = document.querySelector("btn-clear");
  let equal = doucment.querySelector(".btn-equal");

  // first Functionality

  // buttons.forEach(function())
  buttons.forEach(fuction(button){
    button.addEventListern('click', function(e) {
      let userInput = e.target.dataset.num;
      screen.value += userInput;
    })
  })
})();
