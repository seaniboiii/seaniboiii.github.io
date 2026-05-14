// HP
let playerHP = 100;
let enemyHP = 100;

let current = 0;
let selectedCharacter = null;

setBackground("background.png");

window.onload = function () {

  loadQuestion();

  document
    .getElementById("playBtn")
    .addEventListener("click", startGame);

  document
    .getElementById("howBtn")
    .addEventListener("click", showHow);

  document
    .getElementById("backBtn")
    .addEventListener("click", backToMenu);

  document
    .getElementById("backBtn2")
    .addEventListener("click", backToMenu);

  document
    .getElementById("confirm")
    .addEventListener("click", confirm);

};


document.querySelectorAll(".character").forEach(char => {

  char.addEventListener("click", function () {

    document
      .querySelectorAll(".character")
      .forEach(c => {

        c.classList.remove("selected");

      });

    this.classList.add("selected");

    selectedCharacter = this.dataset.char;

    console.log(
      "Selected:",
      selectedCharacter
    );

  });

});


function startGame() {

  setBackground("characterbg.png");

  document
    .getElementById("start-screen")
    .style.display = "none";

  document
    .getElementById("character-screen")
    .style.display = "flex";

}


function showHow() {

  document
    .getElementById("start-screen")
    .style.display = "none";

  document
    .getElementById("how-screen")
    .style.display = "flex";

}


function backToMenu() {

  setBackground("background.png");

  document
    .getElementById("how-screen")
    .style.display = "none";

  document
    .getElementById("character-screen")
    .style.display = "none";

  document
    .getElementById("game")
    .style.display = "none";

  document
    .getElementById("start-screen")
    .style.display = "flex";

}


function confirm() {

  if (selectedCharacter === null) {

    alert(
      "Choose a character first!"
    );

    return;
  }

  setBackground("swampbattle.png");

  document
    .getElementById("character-screen")
    .style.display = "none";

  document
    .getElementById("game")
    .style.display = "block";

}


function loadQuestion() {

  let q = questions[current];

  document
    .getElementById("enemyName")
    .innerText = q.enemy;

  document
    .getElementById("quote")
    .innerText = q.quote;

  document
    .getElementById("question")
    .innerText = q.text;

  document
    .getElementById("btnA")
    .innerText = q.choices[0];

  document
    .getElementById("btnB")
    .innerText = q.choices[1];

  document
    .getElementById("btnC")
    .innerText = q.choices[2];

}


function answer(choice) {

  let q = questions[current];

  if (choice === q.correct) {

    enemyHP -= 25;

    document
      .getElementById("result")
      .innerText =
      "Correct! " + q.explanation;

  }

  else {

    playerHP -= 20;

    document
      .getElementById("result")
      .innerText =
      "Wrong! " + q.explanation;

  }

  updateHP();

  current++;

  if (current >= questions.length) {

    current = 0;

  }

  loadQuestion();

}


function updateHP() {

  document
    .getElementById("playerHP")
    .innerText = playerHP;

  document
    .getElementById("enemyHP")
    .innerText = enemyHP;

}


function setBackground(bg) {

  document.body.style.backgroundImage =
    `url("assets/backgrounds/${bg}")`;

}