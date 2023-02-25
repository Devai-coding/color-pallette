document.addEventListener("DOMContentLoaded", function () {
  const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  const btnGenerate = document.getElementById("btn");
  const hexValues = document.querySelectorAll(".hexValue");
  const rectBoxes = document.querySelectorAll(".rect-box");

  btnGenerate.addEventListener("click", function () {
    rectBoxes.forEach((rectBox) => {
      let randomColor = getRandomNumber();
      rectBox.style.backgroundColor = randomColor;
      rectBox.nextElementSibling.textContent = randomColor;
    });
  });

  function getRandomNumber() {
    let randomNumber = "#";
    for (let i = 0; i < 6; i++) {
      randomNumber += hex[Math.floor(Math.random() * hex.length)];
    }
    return randomNumber;
  }
});
