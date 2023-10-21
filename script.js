let start = document.querySelector(".start");
let main = document.querySelector(".main");
let intro = document.querySelector(".intro");
let newGame = document.querySelector(".newGame");
let cover = document.querySelector(".cover");

// Player Factory
const Player = (player1, player2) => {
  let playerO = document.querySelector(".player-o .name");
  let firstName = document.querySelector(".firstName");
  let playerX = document.querySelector(".player-x .name");
  let secondName = document.querySelector(".secondName");

  const assignNames = () => {
    (playerX.textContent = firstName.value),
      (playerO.textContent = secondName.value);
  };

  return {
    assignNames,
  };
};

const Game = () => {
  let boxes = document.querySelectorAll(".box");
  let board = Array(9).fill(null);
  let currentPlayer = "X";

  //controls turns for the players
  const playTurn = () => {
    boxes.forEach((box, index) => {
      let xo = box.querySelector(".xo");
      box.addEventListener("click", function () {
        if (board[index] === null) {
          xo.textContent = currentPlayer;
          board[index] = currentPlayer;

          // Switch the current player
          currentPlayer = currentPlayer === "X" ? "O" : "X";
          checkcolumns(board[index]);
          checkrow(board[index]);
          checkdiagonal(board[index]);
        }
      });
    });
  };

  const clearBoard = () => {
    let boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {
      let xo = box.querySelector(".xo");
      xo.textContent = "";
    });
  };

  const checkcolumns = (getsign) => {
    for (let i = 0; i < 3; i++) {
      if (
        (board[0] == getsign && board[1] == getsign && board[2] == getsign) ||
        (board[3] == getsign && board[4] == getsign && board[5] == getsign) ||
        (board[6] == getsign && board[7] == getsign && board[8] == getsign)
      ) {
        let container = document.querySelector(".container");
        container.classList.add("blur");
        restart(getsign);
      }
    }
  };

  const checkrow = (getSign) => {
    for (let i = 0; i < 3; i++) {
      if (
        (board[0] == getSign && board[3] == getSign && board[6] == getSign) ||
        (board[1] == getSign && board[4] == getSign && board[7] == getSign) ||
        (board[5] == getSign && board[2] == getSign && board[8] == getSign)
      ) {
        let container = document.querySelector(".container");
        container.classList.add("blur");
        restart(getSign);
      }
    }
  };

  const checkdiagonal = (getSign) => {
    for (let i = 0; i < 3; i++) {
      if (
        (board[0] == getSign && board[4] == getSign && board[8] == getSign) ||
        (board[2] == getSign && board[4] == getSign && board[6] == getSign)
      ) {
        let container = document.querySelector(".container");
        container.classList.add("blur");
        restart(getSign);
      }
    }
  };

  const restart = (winnersign) => {
    let restart = document.querySelector(".restart");
    let victory = document.querySelector(".winner");

    restart.style.display = "block";
    restart.textContent = "RESTART";
    let boxes = document.querySelectorAll(".box");

    restart.addEventListener("click", function () {
      boxes.forEach(function (box) {
        clearBoard();
      });
      board = Array(9).fill(null);
      currentPlayer = "X";
      victory.textContent = "";
      let container = document.querySelector(".container");
      container.classList.remove("blur");
      restart.style.display = "none";
    });
    victory.textContent = winnersign + " won";
  };

  return { checkcolumns, playTurn };
};

newGame.addEventListener("click", function () {
  intro.style.display = "flex";
  cover.style.display = "none";
});

start.addEventListener("click", function () {
  let player = Player();
  main.style.display = "flex";
  intro.style.display = "none";
  player.assignNames();
});

// function getComputerChoice(boxes) {
//   let availableBoxes = Array.from(boxes).filter(
//     (box) => box.querySelector(".xo").textContent === ""
//   );
//   return availableBoxes[Math.floor(Math.random() * availableBoxes.length)];
// }

let gameboard = Game();
gameboard.playTurn();
