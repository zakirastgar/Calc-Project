// IIFE

(function () {
  // Targeting

  let screen = document.querySelector(".screen");
  let buttons = document.querySelectorAll(".btn");
  let clear = document.querySelector(".btn-clear");
  let equal = document.querySelector(".btn-equal");

  // first Functionality

  // buttons.forEach(function())
  buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
      let userInput = e.target.dataset.num;
      screen.value += userInput;
    });
  });
  // Scond Functionality: equal button
  equal.addEventListener("click", function (e) {
    if (screen.value === "") {
      screen.value = "";
    } else {
      let answer = eval(screen.value);
      screen.value = answer;
    }
  });
  //Third Functionallity : Clear Screen
  clear.addEventListener("click", function (e) {
    screen.value = "";
  });
})();
