let boxes = document.querySelectorAll(".box");

function getComputerChoice(boxes) {
  let availableBoxes = Array.from(boxes).filter(
    (box) => box.querySelector(".xo").textContent === ""
  );
  return availableBoxes[Math.floor(Math.random() * availableBoxes.length)];
}

boxes.forEach(function (box) {
  box.addEventListener("click", function () {
    let xo = this.querySelector(".xo");
    if (xo.textContent === "") {
      xo.textContent = "X";

      let computerBox = getComputerChoice(boxes);
      if (computerBox) {
        let computerXO = computerBox.querySelector(".xo");
        computerXO.textContent = "o";
      }
    }
  });
});
