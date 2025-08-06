// src/battle.js
export function simulateBattle(hero, enemy) {
    // Basic sample logic
    const heroAttack = Math.floor(hero.attack * (0.8 + Math.random() * 0.4));
    const enemyAttack = Math.floor(enemy.attack * (0.8 + Math.random() * 0.4));
    return heroAttack > enemyAttack ? "win" : "lose";
  }
  
  // Could export more (enemies array, helpers, etc.)
  export const enemies = [
    { name: "Bug Lord", hp: 80, attack: 12 },
    { name: "Syntax Error", hp: 95, attack: 18 },
    { name: "Spaghetti Coder", hp: 110, attack: 10 },
    { name: "Legacy App", hp: 130, attack: 15 },
    { name: "Null Boss", hp: 160, attack: 22 }
  ];
  