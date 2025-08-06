const game = document.getElementById('game');

const heroes = [
  { name: "Code Falcon", hp: 100, attack: 15 },
  { name: "Null Pointer", hp: 90, attack: 20 },
  { name: "JS Ninja", hp: 80, attack: 25 }
];

function renderCharacterSelect() {
  game.innerHTML = `
    <h2>Select Your Hero</h2>
    <div id="hero-list">
      ${heroes.map((hero, i) => `
        <div style="margin:10px 0; padding:8px; background:#444; border-radius:8px;">
          <b>${hero.name}</b> (HP: ${hero.hp}, ATK: ${hero.attack})
          <button data-index="${i}">Select</button>
        </div>
      `).join('')}
    </div>
    <button id="back-btn">Back</button>
  `;
  document.getElementById('back-btn').onclick = renderHome;
  document.querySelectorAll('#hero-list button').forEach(btn => {
    btn.onclick = () => startGameWithHero(heroes[btn.dataset.index]);
  });
}

function startGameWithHero(hero) {
  game.innerHTML = `
    <h2>Welcome, ${hero.name}!</h2>
    <p>HP: ${hero.hp} | ATK: ${hero.attack}</p>
    <button onclick="location.reload()">Restart</button>
  `;
}


function renderHome() {
  game.innerHTML = `
    <h1>Mabel's Strike Force</h1>
    <button id="start-btn">Begin</button>
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
