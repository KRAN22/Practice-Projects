// Write a rock-paper-scissor games

function rockPaperScissor(player1, player2) {
  if (player1 == "ROCK" && player2 == "PAPER") {
    return "PAPER";
  }
  if (player1 == "ROCK" && player2 == "SCISSOR") {
    return "ROCK";
  }
  if (player1 == "SCISSOR" && player2 == "PAPER") {
    return "SCISSOR";
  }
  if (player1 == "SCISSOR" && player2 == "ROCK") {
    return "ROCK";
  }
  if (player1 == "PAPER" && player2 == "ROCK") {
    return "PAPER";
  }
  if (player1 == "PAPER" && player2 == "SCISSOR") {
    return "SCISSOR";
  } else {
    return "DRAW";
  }
}

console.log(rockPaperScissor("ROCK", "PAPER") == "PAPER");
console.log(rockPaperScissor("ROCK", "SCISSOR") == "ROCK");
console.log(rockPaperScissor("SCISSOR", "PAPER") == "SCISSOR");
console.log(rockPaperScissor("SCISSOR", "ROCK") == "ROCK");
console.log(rockPaperScissor("PAPER", "ROCK") == "PAPER");
console.log(rockPaperScissor("PAPER", "SCISSOR") == "SCISSOR");
console.log(rockPaperScissor("ROCK", "ROCK") == "DRAW");
