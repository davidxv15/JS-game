const game = document.getElementById('game');

function renderHome() {
  game.innerHTML = `
    <h1>JS RPG Battle!</h1>
    <button id="start-btn">Start Game</button>
  `;
  document.getElementById('start-btn').onclick = renderBattle;
}

// For demo: basic stub for battle screen
function renderBattle() {
  game.innerHTML = `
    <h2>Battle Time!</h2>
    <button id="attack-btn">Attack</button>
    <button id="back-btn">Back</button>
  `;
  document.getElementById('back-btn').onclick = renderHome;
}

renderHome();
