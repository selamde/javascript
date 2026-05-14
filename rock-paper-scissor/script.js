let score = JSON.parse(localStorage.getItem("score"));

if (score === null) {
  score = {
    wins: 0,
    losses: 0,
    ties: 0,
  };
}

updateScore();

function playGame(palyerMove) {
  const randomNumber = Math.random();
  let computerMove = "";
  let result = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "scissor";
  }

  if (palyerMove === "rock") {
    if (computerMove === "rock") {
      result = "Tie";
    } else if (computerMove === "paper") {
      result = "You lose";
    } else if (computerMove === "scissor") {
      result = "You win";
    }
  }

  if (palyerMove === "paper") {
    if (computerMove === "rock") {
      result = "You win";
    } else if (computerMove === "paper") {
      result = "Tie";
    } else if (computerMove === "scissor") {
      result = "You lose";
    }
  }

  if (palyerMove === "scissor") {
    if (computerMove === "rock") {
      result = "You lose";
    } else if (computerMove === "paper") {
      result = "You win";
    } else if (computerMove === "scissor") {
      result = "Tie";
    }
  }

  if (result === "You win") {
    score.wins += 1;
  } else if (result === "You lose") {
    score.losses += 1;
  } else if (result === "Tie") {
    score.ties += 1;
  }

  //
  localStorage.setItem("score", JSON.stringify(score));

  console.log(localStorage.getItem("score"));

  document.querySelector(".js-result").innerHTML = result;
  document.querySelector(".js-move").innerHTML = `  You
      <img src="./images/${palyerMove}.png" alt="rock" srcset="" />
      <img src="./images/${computerMove}.png" alt="scissor" srcset="" />
      Computer`;

  updateScore();
}

function updateScore() {
  document.querySelector(".js-score").innerHTML =
    `  Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
}
