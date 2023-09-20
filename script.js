let boxes = document.querySelectorAll(".box");

boxes.forEach(function (box) {
  box.addEventListener("click", function () {
    let xo = this.querySelector(".xo");
    xo.textContent = "x";
  });
});
