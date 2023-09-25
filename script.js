let boxes = document.querySelectorAll(".box");
let restart = document.querySelector(".restart");

function getComputerChoice(boxes) {
  let availableBoxes = Array.from(boxes).filter(
    (box) => box.querySelector(".xo").textContent === ""
  );
  return availableBoxes[Math.floor(Math.random() * availableBoxes.length)];
}

function checkWinner() {
  let box1 = document.querySelector(".box1").textContent;
  let box2 = document.querySelector(".box2").textContent;
  let box3 = document.querySelector(".box3").textContent;
  let box4 = document.querySelector(".box4").textContent;
  let box5 = document.querySelector(".box5").textContent;
  let box6 = document.querySelector(".box6").textContent;
  let box7 = document.querySelector(".box7").textContent;
  let box8 = document.querySelector(".box8").textContent;
  let box9 = document.querySelector(".box9").textContent;

  if (
    (box1 !== "" && box1 === box2 && box2 === box3) ||
    (box1 !== "" && box1 === box4 && box4 === box7) ||
    (box1 !== "" && box1 === box5 && box5 === box9)
  ) {
    return box1;
  }

  if (box2 !== "" && box2 === box5 && box5 === box8) {
    return box2;
  }

  if (
    (box3 !== "" && box3 === box5 && box5 === box7) ||
    (box3 !== "" && box3 === box6 && box6 === box9)
  ) {
    return box3;
  }

  if (box4 !== "" && box4 === box5 && box5 === box6) {
    return box4;
  }

  if (box7 !== "" && box7 === box8 && box8 === box9) {
    return box7;
  }

  return null;
}

restart.addEventListener("click", function () {
  boxes.forEach(function (box) {
    let xo = box.querySelector(".xo");
    xo.textContent = "";
  });
});

boxes.forEach(function (box) {
  box.addEventListener("click", function () {
    let xo = this.querySelector(".xo");
    if (xo.textContent === "") {
      xo.textContent = "X";

      let computerBox = getComputerChoice(boxes);
      if (computerBox) {
        let computerXO = computerBox.querySelector(".xo");
        computerXO.textContent = "O";
      }

      let winner = checkWinner();
      if (winner) {
        let victory = document.querySelector(".winner");
        let container = document.querySelector(".container");
        container.classList.add("blur");
        victory.textContent = `${winner} won`;
        restart.style.display = "block";
        restart.textContent = "RESTART";
        clearBoxes();
      }
    }
  });
});
