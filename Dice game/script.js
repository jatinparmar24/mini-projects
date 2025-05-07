let player1Score = 0;
let player2Score = 0;
let currentPlayer = 1;
const winningScore = 20;

const faces = {
  1: ['center'],
  2: ['top-left', 'bottom-right'],
  3: ['top-left', 'center', 'bottom-right'],
  4: ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
  5: ['top-left', 'top-right', 'center', 'bottom-left', 'bottom-right'],
  6: ['top-left', 'top-right', 'middle-left', 'middle-right', 'bottom-left', 'bottom-right']
};

function createDots(face, element) {
  element.innerHTML = '';
  faces[face].forEach(pos => {
    const dot = document.createElement('div');
    dot.className = `dot ${pos}`;
    element.appendChild(dot);
  });
}

function roll() {
  const die = document.getElementById('die');
  const scoreDisplay = document.getElementById('score');
  const turnDisplay = document.getElementById('turn');
  const winnerDisplay = document.getElementById('winner');
  const rollBtn = document.getElementById('roll-btn');

  if (player1Score >= winningScore || player2Score >= winningScore) return;

  die.style.visibility = 'visible';
  die.style.transform = 'rotate(0deg)';
  rollBtn.disabled = true;

  const randomRoll = Math.floor(Math.random() * 6) + 1;
  createDots(randomRoll, die);

  setTimeout(() => {
    if (currentPlayer === 1) {
      player1Score += randomRoll;
      currentPlayer = 2;
    } else {
      player2Score += randomRoll;
      currentPlayer = 1;
    }

    scoreDisplay.textContent = `P1: ${player1Score} | P2: ${player2Score}`;
    turnDisplay.textContent = `Player ${currentPlayer}'s Turn`;

    if (player1Score >= winningScore || player2Score >= winningScore) {
      const winner = player1Score >= winningScore ? "Player 1" : "Player 2";
      winnerDisplay.textContent = `${winner} Wins! 🎉`;
      winnerDisplay.style.display = 'block';
      turnDisplay.textContent = '';
    }

    die.style.visibility = 'hidden';
    rollBtn.disabled = false;
  }, 1000);
}
