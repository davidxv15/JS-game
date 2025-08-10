import { simulateBattle, enemies } from './battle.js';


const game = document.getElementById('game');

const NUM_NODES = 10; // Number of battles/nodes
let progress = 0; // 0-based index, how far the player has gotten
let selectedHero = null;

// Hero data (expand later)
const heroes = [
  { name: "The Falconer", hp: 100, attack: 15 },
  { name: "Knight Armor", hp: 90, attack: 20 },
  { name: "Bigchief", hp: 80, attack: 30 },
  { name: "KillDozer", hp: 70, attack: 40 },
  { name: "Hank Hill", hp: 60, attack: 30 },
  { name: "Bug-a-bago", hp: 80, attack: 20 },
  { name: "BillDozer", hp: 200, attack: 5 }
];

// 1. Enter Screen
function renderEnterScreen() {
  game.innerHTML = `
    <div style="height: 240px;"></div> <!-- Room for graphics -->
    <h1>Mabel's Strike Force</h1>
    <button class="button" id="start-btn">Enter</button>
  `;
  document.getElementById('start-btn').onclick = renderMapScreen;
}

// 2. Map Screen
function renderMapScreen() {
  let nodes = '';
  for (let i = 0; i < NUM_NODES; i++) {
    let cls = 'node';
    if (i < progress) cls += ' cleared';
    else if (i === progress) cls += ' current';
    nodes += `<span class="${cls}" data-node="${i+1}">${i+1}</span>`;
  }
  game.innerHTML = `
    <h2>Battle Map</h2>
    <div style="margin:24px 0;">${nodes}</div>
    <p>Click current node to begin the next fight!</p>
    <button class="button" id="back-btn">Back</button>
  `;
  document.querySelectorAll('.node.current').forEach(node => {
    node.onclick = renderCharacterSelectScreen;
  });
  document.getElementById('back-btn').onclick = renderEnterScreen;
}

// 3. Character Select Screen
function renderCharacterSelectScreen() {
  game.innerHTML = `
    <h2>Select Your Hero</h2>
    <div id="hero-list">
      ${heroes.map((hero, i) => `
        <div class="hero-card">
          <div class="hero-name">${hero.name}</div> (HP: ${hero.hp}, ATK: ${hero.attack})
          <button class="button" data-index="${i}">Select</button>
        </div>
      `).join('')}
    </div>
    <button class="button" id="back-btn">Back to Map</button>
  `;
  document.getElementById('back-btn').onclick = renderMapScreen;
  document.querySelectorAll('#hero-list button').forEach(btn => {
    btn.onclick = () => {
      selectedHero = heroes[btn.dataset.index];
      renderBattleScreen();
    }
  });
}

// 4. Battle Screen (stub)
function renderBattleScreen() {
  game.innerHTML = `
    <h2>Battle!</h2>
    <p>You selected <b>${selectedHero.name}</b></p>
    <p>HP: ${selectedHero.hp} | ATK: ${selectedHero.attack}</p>
    <button class="button" id="win-btn">Simulate Win</button>
    <button class="button" id="lose-btn">Simulate Lose</button>
    <button class="button" id="back-btn">Back to Character Select</button>
  `;
  document.getElementById('win-btn').onclick = () => {
    progress++;
    if (progress >= NUM_NODES) renderVictoryScreen();
    else renderMapScreen();
  };
  document.getElementById('lose-btn').onclick = renderGameOverScreen;
  document.getElementById('back-btn').onclick = renderCharacterSelectScreen;
}

// 5. Victory Screen
function renderVictoryScreen() {
  game.innerHTML = `
    <h2>🏆 Tournament Victory! 🏆</h2>
    <p>You cleared all ${NUM_NODES} battles!</p>
    <button class="button" id="restart-btn">Restart</button>
  `;
  document.getElementById('restart-btn').onclick = () => {
    progress = 0;
    renderEnterScreen();
  }
}

// 6. Game Over Screen
function renderGameOverScreen() {
  game.innerHTML = `
    <h2>Game Over</h2>
    <p>Try again!</p>
    <button class="button" id="restart-btn">Restart</button>
  `;
  document.getElementById('restart-btn').onclick = () => {
    progress = 0;
    renderEnterScreen();
  }
}

// Kick it off!
renderEnterScreen();
