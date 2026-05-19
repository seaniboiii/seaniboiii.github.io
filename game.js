// ---- HP ----
let playerHP = 100;
let enemyHP = 100;

// ---- CHARACTER ----
let selectedCharacter = null;

// ---- QUESTIONS ----
let questionDeck = [];
let currentQuestion = null;

// ---- ENEMIES ----
let enemyPool = {
  swamp: [
    { name: "Centipede",     sprite: "Centipede",     attackFrames: 6, hurtFrames: 2, deathFrames: 4 },
    { name: "Battle_turtle", sprite: "Battle_turtle", attackFrames: 4, hurtFrames: 2, deathFrames: 4 },
    { name: "Big_bloated",   sprite: "Big_bloated",   attackFrames: 6, hurtFrames: 2, deathFrames: 4 },
  ],
  desert: [
    { name: "Deceased", sprite: "Deceased", attackFrames: 4, hurtFrames: 2, deathFrames: 6 },
    { name: "Hyena",    sprite: "Hyena",    attackFrames: 6, hurtFrames: 2, deathFrames: 6 },
    { name: "Mummy",    sprite: "Mummy",    attackFrames: 6, hurtFrames: 2, deathFrames: 6 },
    { name: "Scorpio",  sprite: "Scorpio",  attackFrames: 4, hurtFrames: 2, deathFrames: 4 },
    { name: "Snake",    sprite: "Snake",    attackFrames: 6, hurtFrames: 2, deathFrames: 4 },
    { name: "Vulture",  sprite: "Vulture",  attackFrames: 4, hurtFrames: 2, deathFrames: 4 },
  ],
  forest: []
};

let enemySequence = [];
let currentEnemyIndex = 0;

// ---- PLAYERS ----
let players = {
  Woodcutter:  { attackFrames: 6, hurtFrames: 3, deathFrames: 6 },
  GraveRobber: { attackFrames: 6, hurtFrames: 3, deathFrames: 6 },
  SteamMan:    { attackFrames: 6, hurtFrames: 3, deathFrames: 6 },
};

// ---- BIOMES ----
let currentBiomeIndex = 0;
let biomes = [
  { name: "swamp",  background: "swamp.png",  enemyFrameSize: 72, enemies: enemyPool.swamp  },
  { name: "desert", background: "desert.png", enemyFrameSize: 48, enemies: enemyPool.desert },
  { name: "forest", background: "forest.png", enemyFrameSize: 0,  enemies: enemyPool.forest },
];

// ---- INIT ----
setBackground("background.png");

window.onload = function () {

  document.getElementById("playBtn").addEventListener("click", startGame);
  document.getElementById("howBtn").addEventListener("click", showHow);
  document.getElementById("backBtn2").addEventListener("click", backToMenu);
  document.getElementById("confirm").addEventListener("click", confirm);
  document.getElementById("submitText").addEventListener("click", gradeWrittenAnswer);

  document.getElementById("closeHow").addEventListener("click", () => {
    document.getElementById("how-popup").classList.add("hidden");
  });

  document.querySelectorAll(".character").forEach(char => {
    char.addEventListener("click", function () {
      document.querySelectorAll(".character").forEach(c => c.classList.remove("selected"));
      this.classList.add("selected");
      selectedCharacter = this.dataset.char;
    });
  });

  initTextbox();

};

// ---- SHUFFLE ----
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// ---- ENEMY SEQUENCE ----
function buildEnemySequence() {
  let currentBiome = biomes[currentBiomeIndex];
  enemySequence = [...currentBiome.enemies];
  shuffle(enemySequence);
  currentEnemyIndex = 0;
}

function getCurrentEnemy() {
  return enemySequence[currentEnemyIndex];
}

// ---- DECK ----
function refillDeck() {
  let enemy = getCurrentEnemy();
  let allQuestions = currentBiomeIndex === 0 ? swampQuestions : desertQuestions;
  let pool = allQuestions.filter(q => q.enemy === enemy.name);

  if (pool.length === 0) {
    console.warn("No questions found for: " + enemy.name + ". Using all questions.");
    pool = [...allQuestions];
  }

  questionDeck = [...pool];
  shuffle(questionDeck);
}

// ---- LOAD QUESTION ----
function loadQuestion() {

  if (questionDeck.length === 0) {
    refillDeck();
  }

  currentQuestion = questionDeck.pop();
  let q = currentQuestion;

  document.getElementById("enemyName").innerText = q.enemy;
  document.getElementById("quote").innerText = q.quote;
  document.getElementById("question").innerText = q.text;

  let textBox = document.getElementById("textAnswer");
  let submitBtn = document.getElementById("submitText");
  let answers = document.getElementById("answers");

  if (q.type === "written") {
    textBox.style.display = "inline-block";
    submitBtn.style.display = "inline-block";
    answers.style.display = "none";
    textBox.value = "";
  } else {
    textBox.style.display = "none";
    submitBtn.style.display = "none";
    answers.style.display = "block";

    document.getElementById("btnA").innerText = q.choices[0];
    document.getElementById("btnB").innerText = q.choices[1];
    document.getElementById("btnC").innerText = q.choices[2];
    document.getElementById("btnD").innerText = q.choices[3];
  }

  // always reset player to static when a new question loads
  setPlayerAnimation("static");
  unlockAnswers();
}

// ---- ANSWER ----
function answer(choice) {
  lockAnswers();
  let q = currentQuestion;

  if (choice === q.correct) {
    enemyHP -= 20;
    updateHP();
    document.getElementById("result").innerText = "Correct! " + q.explanation;

    setPlayerAnimation("attack");

    if (enemyHP <= 0) {
      // play death then move to next enemy
      setTimeout(() => {
        setEnemyAnimation("death");
        let deathDuration = getCurrentEnemy().deathFrames * 100;
        setTimeout(() => nextEnemy(), deathDuration);
      }, 600);
    } else {
      // play hurt then return to static and load next question
      setTimeout(() => {
        setEnemyAnimation("hurt");
        let hurtDuration = getCurrentEnemy().hurtFrames * 100;
        setTimeout(() => {
          setEnemyAnimation("static");
          loadQuestion();
        }, hurtDuration);
      }, 600);
    }

  } else {
    playerHP -= 25;
    updateHP();
    document.getElementById("result").innerText = "Wrong! " + q.explanation;

    setEnemyAnimation("attack");
    let attackDuration = getCurrentEnemy().attackFrames * 100;

    setTimeout(() => {
      setEnemyAnimation("static");
      if (playerHP <= 0) {
        setPlayerAnimation("death");
        let deathDuration = players[selectedCharacter].deathFrames * 100;
        setTimeout(() => gameOver(), deathDuration);
      } else {
        setPlayerAnimation("hurt");
        let hurtDuration = players[selectedCharacter].hurtFrames * 100;
        setTimeout(() => loadQuestion(), hurtDuration);
      }
    }, attackDuration);
  }
}

// ---- GRADE WRITTEN ----
async function gradeWrittenAnswer() {
  lockAnswers();
  let studentAnswer = document.getElementById("textAnswer").value;
  let q = currentQuestion;

  let response = await fetch("/.netlify/functions/grade", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      question: q.text,
      quote: q.quote,
      answer: studentAnswer
    })
  });

  let data = await response.json();
  document.getElementById("result").innerText = data.result;

  if (data.correct) {
    enemyHP -= 25;
    updateHP();
    setPlayerAnimation("attack");

    if (enemyHP <= 0) {
      setTimeout(() => {
        setEnemyAnimation("death");
        let deathDuration = getCurrentEnemy().deathFrames * 100;
        setTimeout(() => nextEnemy(), deathDuration);
      }, 600);
    } else {
      setTimeout(() => {
        setEnemyAnimation("hurt");
        let hurtDuration = getCurrentEnemy().hurtFrames * 100;
        setTimeout(() => {
          setEnemyAnimation("static");
          loadQuestion();
        }, hurtDuration);
      }, 600);
    }

  } else {
    playerHP -= 20;
    updateHP();
    setEnemyAnimation("attack");
    let attackDuration = getCurrentEnemy().attackFrames * 100;

    setTimeout(() => {
      setEnemyAnimation("static");
      if (playerHP <= 0) {
        setPlayerAnimation("death");
        let deathDuration = players[selectedCharacter].deathFrames * 100;
        setTimeout(() => gameOver(), deathDuration);
      } else {
        setPlayerAnimation("hurt");
        let hurtDuration = players[selectedCharacter].hurtFrames * 100;
        setTimeout(() => loadQuestion(), hurtDuration);
      }
    }, attackDuration);
  }
}

// ---- NEXT ENEMY ----
function nextEnemy() {
  currentEnemyIndex++;

  if (currentEnemyIndex >= enemySequence.length) {
    nextBiome();
    return;
  }

  enemyHP = 100;
  updateHP();
  loadEnemySprite();
  refillDeck();
  loadQuestion();

  document.getElementById("result").innerText = "Enemy defeated! Next enemy approaches...";
}

// ---- NEXT BIOME ----
function nextBiome() {
  currentBiomeIndex++;

  if (currentBiomeIndex >= biomes.length) {
    gameWin();
    return;
  }

  let biome = biomes[currentBiomeIndex];
  setBackground(biome.background);
  buildEnemySequence();
  enemyHP = 100;
  updateHP();
  loadEnemySprite();
  refillDeck();
  loadQuestion();

  document.getElementById("result").innerText = "New biome: " + biome.name.toUpperCase() + "!";
}

// ---- GAME OVER ----
function gameOver() {
  document.getElementById("gameover-popup").classList.remove("hidden");
}

// ---- GAME WIN ----
function gameWin() {
  document.getElementById("win-popup").classList.remove("hidden");
}

// ---- TRY AGAIN ----
function tryAgain() {
  // hide popups
  document.getElementById("gameover-popup").classList.add("hidden");
  document.getElementById("win-popup").classList.add("hidden");

  // hide game screen, show character select
  document.getElementById("game").style.display = "none";
  document.getElementById("character-screen").style.display = "flex";

  // reset all state
  playerHP = 100;
  enemyHP = 100;
  selectedCharacter = null;
  currentBiomeIndex = 0;
  questionDeck = [];
  currentQuestion = null;

  // clear selected character highlight
  document.querySelectorAll(".character").forEach(c => c.classList.remove("selected"));

  // reset background
  setBackground("characterbg.png");

  // clear result text and show answers again for next game
  document.getElementById("result").innerText = "";
  document.getElementById("answers").style.display = "block";
}

// ---- UPDATE HP ----
function updateHP() {
  document.getElementById("playerHP").innerText = playerHP;
  document.getElementById("enemyHP").innerText = enemyHP;
}

// ---- PLAYER ANIMATION ----
function setPlayerAnimation(type) {
  let sprite = document.getElementById("character-sprite");
  let player = players[selectedCharacter];
  let scaledSize = 48 * 6; // 288px

  sprite.style.animation = "none";

  setTimeout(() => {
    sprite.style.backgroundSize = `auto ${scaledSize}px`;

    if (type === "static") {
      sprite.style.backgroundImage = `url('assets/characters/${selectedCharacter}/${selectedCharacter}.png')`;
    } else if (type === "attack") {
      sprite.style.backgroundImage = `url('assets/characters/${selectedCharacter}/attack.png')`;
      sprite.style.setProperty("--player-attack-width", `-${player.attackFrames * scaledSize}px`);
      sprite.style.animation = `player-attack 0.6s steps(${player.attackFrames}) 1 forwards`;
    } else if (type === "hurt") {
      sprite.style.backgroundImage = `url('assets/characters/${selectedCharacter}/hurt.png')`;
      sprite.style.setProperty("--player-hurt-width", `-${player.hurtFrames * scaledSize}px`);
      sprite.style.animation = `player-hurt 0.4s steps(${player.hurtFrames}) 1 forwards`;
    } else if (type === "death") {
      sprite.style.backgroundImage = `url('assets/characters/${selectedCharacter}/death.png')`;
      sprite.style.setProperty("--player-death-width", `-${player.deathFrames * scaledSize}px`);
      sprite.style.animation = `player-death 0.8s steps(${player.deathFrames}) 1 forwards`;
    }
  }, 10);
}

// ---- ENEMY ANIMATION ----
function setEnemyAnimation(type) {
  let sprite = document.getElementById("enemy-sprite");
  let enemy = getCurrentEnemy();
  let biome = biomes[currentBiomeIndex].name;
  let frameSize = biomes[currentBiomeIndex].enemyFrameSize;
  let scaledSize = frameSize * 6;

  sprite.style.animation = "none";

  setTimeout(() => {
    sprite.style.backgroundSize = `auto ${scaledSize}px`;

    if (type === "static") {
      sprite.style.backgroundImage = `url('assets/enemies/${biome}/${enemy.sprite}/${enemy.sprite}.png')`;
    } else if (type === "attack") {
      sprite.style.backgroundImage = `url('assets/enemies/${biome}/${enemy.sprite}/attack.png')`;
      sprite.style.setProperty("--enemy-attack-width", `-${enemy.attackFrames * scaledSize}px`);
      sprite.style.animation = `enemy-attack 0.6s steps(${enemy.attackFrames}) 1 forwards`;
    } else if (type === "hurt") {
      sprite.style.backgroundImage = `url('assets/enemies/${biome}/${enemy.sprite}/hurt.png')`;
      sprite.style.setProperty("--enemy-hurt-width", `-${enemy.hurtFrames * scaledSize}px`);
      sprite.style.animation = `enemy-hurt 0.4s steps(${enemy.hurtFrames}) 1 forwards`;
    } else if (type === "death") {
      sprite.style.backgroundImage = `url('assets/enemies/${biome}/${enemy.sprite}/death.png')`;
      sprite.style.setProperty("--enemy-death-width", `-${enemy.deathFrames * scaledSize}px`);
      sprite.style.animation = `enemy-death 0.8s steps(${enemy.deathFrames}) 1 forwards`;
    }
  }, 10);
}

// ---- LOAD ENEMY SPRITE ----
function loadEnemySprite() {
  let frameSize = biomes[currentBiomeIndex].enemyFrameSize;
  let scaledSize = frameSize * 6;
  let sprite = document.getElementById("enemy-sprite");
  sprite.style.width  = scaledSize + "px";
  sprite.style.height = scaledSize + "px";
  setEnemyAnimation("static");
}

// ---- SCREENS ----
function startGame() {
  setBackground("characterbg.png");
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("character-screen").style.display = "flex";
}

function showHow() {
  document.getElementById("how-popup").classList.remove("hidden");
}

function backToMenu() {
  setBackground("background.png");
  document.getElementById("character-screen").style.display = "none";
  document.getElementById("game").style.display = "none";
  document.getElementById("start-screen").style.display = "flex";
}

function confirm() {
  if (!selectedCharacter) {
    alert("Choose a character first!");
    return;
  }

  buildEnemySequence();
  currentBiomeIndex = 0;
  playerHP = 100;
  enemyHP = 100;
  updateHP();

  setTimeout(() => {
    setBackground("swamp.png");
    document.getElementById("character-screen").style.display = "none";
    document.getElementById("game").style.display = "block";
    setPlayerAnimation("static");
    loadEnemySprite();
    refillDeck();
    loadQuestion();
  }, 100);
}

// ---- LOCK / UNLOCK ANSWERS ----
function lockAnswers() {
  document.getElementById("btnA").disabled = true;
  document.getElementById("btnB").disabled = true;
  document.getElementById("btnC").disabled = true;
  document.getElementById("btnD").disabled = true;
  document.getElementById("submitText").disabled = true;
}

function unlockAnswers() {
  document.getElementById("btnA").disabled = false;
  document.getElementById("btnB").disabled = false;
  document.getElementById("btnC").disabled = false;
  document.getElementById("btnD").disabled = false;
  document.getElementById("submitText").disabled = false;
}

function setBackground(bg) {
  document.body.style.backgroundImage = `url("assets/backgrounds/${bg}")`;
}

function initTextbox() {
  let box = document.getElementById("textAnswer");
  box.addEventListener("input", function () {
    this.style.height = "auto";
    let maxHeight = window.innerHeight * 0.35;
    this.style.height = Math.min(this.scrollHeight, maxHeight) + "px";
  });
}