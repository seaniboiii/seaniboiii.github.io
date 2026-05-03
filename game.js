// HP
let playerHP = 100;
let enemyHP = 100;

let questions = [
  {
    text: "What is the connotation of 'stubborn'?",
    correct: "B"
  },
  {
    text: "What is the connotation of 'slim'?",
    correct: "A"
  }
];

let current = 0;

window.onload = function () {
  loadQuestion();

  document.getElementById("playBtn").addEventListener("click", startGame);
  document.getElementById("howBtn").addEventListener("click", showHow);
  document.getElementById("backBtn").addEventListener("click", backToMenu);
  document.getElementById("backBtn2").addEventListener("click", backToMenu);
};

let selectedCharacter = null;

// Select character
document.querySelectorAll(".character").forEach(char => {
  char.addEventListener("click", function () {

    // Remove old selection
    document.querySelectorAll(".character").forEach(c => {
      c.classList.remove("selected");
    });

    // Add highlight
    this.classList.add("selected");

    // Save selection
    selectedCharacter = this.dataset.char;

    console.log("Selected:", selectedCharacter);
  });
});

function startGame() {
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("character-screen").style.display = "block";
}

function showHow() {
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("how-screen").style.display = "block";
}

function backToMenu() {
  document.getElementById("how-screen").style.display = "none";
  document.getElementById("character-screen").style.display = "none";
  document.getElementById("start-screen").style.display = "block";
}

function loadQuestion() {
  document.getElementById("question").innerText = questions[current].text;
}

function answer(choice) {
  if (choice === questions[current].correct) {
    enemyHP -= 25;
    document.getElementById("result").innerText = "Correct!";
  } else {
    playerHP -= 20;
    document.getElementById("result").innerText = "Wrong!";
  }

  updateHP();

  current++;

  if (enemyHP <= 0) {
    alert("You win!");
  } else if (playerHP <= 0) {
    alert("Game Over!");
  } else {
    loadQuestion();
  }
}

function updateHP() {
  document.getElementById("playerHP").innerText = playerHP;
  document.getElementById("enemyHP").innerText = enemyHP;
}