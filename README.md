# Hypernova Strike

Play the game [here]()!
---

## Overview

**Hypernova Strike** is a browser-based, space shooter arcade game written entirely in ** HTML, CSS, and JavaScript**. It features a dynamic SpaceShip with two different attack properties, enemy spawning, escalating difficulty, and a unique boss mechanic to challenge players as they progress through waves of alien enemies.

The game runs on an HTML5 `<canvas>` element using JavaScript for all game mechanics and rendering. The user interface and informational screens, including the *How to Play* page, are built with semantic HTML and styled with CSS.

---

## Table of Contents
  
- [Technologies Used](#technologies-used)  
- [How the Game Works](#how-the-game-works)    
- [How to Play Page Details](#how-to-play-page-details) 
- [Controls](#controls)
- [Game Scaling and Enemy Spawn Table](#game-scaling-and-enemy-spawn-table)
---

## Technologies Used

- **HTML5**: Structure for menus, buttons, and the How to Play page  
- **CSS3**: Styling for all UI elements, buttons, images, and informational text  
- **JavaScript (ES6+)**:  
  - All game mechanics and rendering are done in an HTML5 `<canvas>`  
  - **Object-Oriented Programming** (OOP) design organizes the ship, enemies, bullets, bosses, and game logic  
  - Dynamic enemy spawning and wave scaling using weighted probabilities  
- **Assests**: images/music controlled via HTML5 `<audio>` elements created with javascript

---

## How the Game Works

- The game starts with a **menu screen** featuring Start Game and How to Play buttons.  
- Clicking **Start Game** initializes the canvas and game loop in JavaScript.  
- Enemies spawn in waves based on weighted probabilities that scale with the current wave (`this.game.waveCount`).  
- Enemy objects are created from distinct classes (`ZetaScout`, `BetaStriker`, and `OmegaTitan`), each with its health and behavior.  
- The player controls the ship and fires projectiles to eliminate enemies.  
- A **Laser Beam Weapon** charges over time and can be fired when charged, dealing heavy damage to enemies and bosses.  
- Every 5 waves, a **boss enemy** appears with increased health and movement speed.  
- The player starts with 3 hearts and loses one when hit by enemies; hearts can be regained between waves up to a maximum of 5.

---

## How to Play Page Details

The **How to Play** page is an HTML and CSS-based UI screen designed to give players clear instructions and explanations about the game, including:

- **Ship Controls and Super Weapon:**  
  Describes the player’s ship movement and firing controls. Explains the Laser Beam super weapon mechanics, charging system, energy bar, cooldown, and strategic use.

- **Enemy Descriptions:**  
  - **ZetaScout (Green):** 1 HP, common early enemy, spawns frequently initially but less in later waves.  
  - **BetaStriker (Yellow):** 2 HP, medium difficulty, less common early but increases mid-game, then declines late-game.  
  - **OmegaTitan (Red):** 3 HP, rare early, becomes dominant in late waves, the only enemy after wave 101+.

- **Health**  
  Player starts with 3 hearts, loses one when hit, regains one with each new wave, maximum of 5 hearts.

 - **Boss Mechanics**
- Bosses spawn every 5 waves.  
- They have higher health than regular enemies and a visible health bar.  
- With each subsequent boss (every 5 waves), the boss’s health and movement speed increase.  
- Boss fights require the player to utilize normal shots and the Laser Beam strategically to survive.

- **Bosses:**  
  Every 5 waves, a boss appears with increased health and movement speed. A visible health number shows the boss’s current health during fights.

- **Game UI:**  
  Displays score, current wave, health, and Laser Beam energy bar in the top left. The player ship is centered at the bottom; enemies descend from above.

The page uses buttons and images for an engaging instructional experience, all styled neatly with CSS.

---

## Controls

- **Movement:** Arrow keys to move the ship.  
- **Shoot:** Press the Spacebar to fire standard projectiles.  
- **Laser Beam:** Press F to fire the Laser Beam when charged. The energy bar shows current charge and cooldown status.

---
## Game Scaling and Enemy Spawn Table

The enemy spawn rates dynamically change as the wave count increases, increasing game difficulty gradually. Each 10 waves, the spawn probability of easier enemies decreases while harder enemies become more frequent.

| Wave Range | ZetaScout (1 HP) | BetaStriker (2 HP) | OmegaTitan (3 HP) |
|------------|------------------|--------------------|-------------------|
| 1 - 10     | 50%              | 40%                | 10%               |
| 11 - 20    | 40%              | 50%                | 10%               |
| 21 - 30    | 30%              | 50%                | 20%               |
| 31 - 40    | 20%              | 50%                | 30%               |
| 41 - 50    | 10%              | 50%                | 40%               |
| 51 - 60    | 0%               | 50%                | 50%               |
| 61 - 70    | 0%               | 40%                | 60%               |
| 71 - 80    | 0%               | 30%                | 70%               |
| 81 - 90    | 0%               | 20%                | 80%               |
| 91 - 100   | 0%               | 10%                | 90%               |
| 101+       | 0%               | 0%                 | 100%              |

### Additional Difficulty Scaling
- Every wave, **a new random enemy column** can be added, increasing the number of enemies on screen.  
- Game speed gradually increases, making enemies move and shoot faster as waves progress.  
- Boss health and movement speed increase every 5 waves, scaling the challenge accordingly.

---
