# Hypernova Strike

## Play the game [here]()!

## Overview

**Hypernova Strike** is a browser-based, space shooter arcade game written entirely in **HTML, CSS, and JavaScript**. It features a dynamic player ship with two different attack options, strategic enemy wave progression, and challenging boss encounters.

The game runs on an HTML5 `<canvas>` using JavaScript for all game mechanics and rendering. The interface and menu screens are created with semantic HTML and styled with CSS.

---

## Table of Contents

- [Technologies Used](#technologies-used)  
- [How the Game Works](#how-the-game-works)
- [Ship and Weapon controls](#ship-and-weapon-controls)
- [Enemy Types](#enemy-types)
- [Boss Mechanics](#boss-mechanics)
- [Health](#health)
- [Game UI](#game-ui)
- [Enemy/Boss Game Scaling](#enemyboss-game-scaling)

---

## Technologies Used

- **HTML5**: Structural layout for menus, buttons, and UI elements  
- **CSS3**: Styling for the entire interface, animations, and interactive elements  
- **JavaScript (ES6+)**:  
  - Game logic and rendering using HTML5 `<canvas>`  
  - **Object-Oriented Programming** (OOP) to manage game entities  
  - Dynamic difficulty scaling and enemy spawning  
- **Assets**: Images and music are integrated with HTML5 (`<img> <audio>`) and JavaScript

---

## How the Game Works

- The game begins with a menu featuring “Start Game” and “How to Play” options.  
- When “Start Game” is clicked, the canvas and core game loop are initialized via JavaScript.  
- Enemies spawn in waves, based on weighted probabilities that evolve as the wave count increases.  
- Each enemy belongs to a specific class (ZetaScout, BetaStriker, OmegaTitan), with unique behavior and health.  
- Players use standard projectiles and a powerful laser beam to eliminate enemies.  
- A boss appears every 5 waves, becoming progressively stronger with each appearance.  
- The player starts with 3 hearts and can gain up to a maximum of 5 hearts throughout the game.
- Survive as long as possible and rack up the highest score you can!

---

## Ship and Weapon controls

- Use the **arrow keys** to move left and right.
- Use the **spacebar** to fire basic attack projectiles.
- The powerful **Laser Beam weapon** can do huge damage to enemies and bosses. It automatically charges over time with a blue energy bar that fills over time.
You can fire the Laser Beam at any time by clicking the **F key**. The energy bar will decrease depending on how much power you use. If the bar is empty, it will turn red
as it slowly starts to recharge, and the weapon can't be activated. The Laser Beam enters a brief warm-up phase lasting a few seconds. The Laser Beam itself is disabled, but your main blasters
remain fully operational. You must wait for the cooldown to finish until you can reuse the Laser Beam again. The energy bar returns to blue once the Laser Beam is ready for use again

## Enemy Types

- 🟢 **ZetaScout (Green)**:  
  - 1 HP  
  - The weakest and most common early enemy  
  - Spawns frequently in initial waves but decreases in later ones  

- 🟡 **BetaStriker (Yellow)**:  
  - 2 HP  
  - Medium difficulty enemy  
  - Spawns less in the early game, frequently in mid-game waves, then becomes less common in later waves  

- 🔴 **OmegaTitan (Red)**:  
  - 3 HP  
  - The tankiest enemy  
  - Rare in early waves but becomes the dominant enemy type in the later waves  
  - After wave 101, it's the only enemy type that spawns  

## Boss Mechanics

- Bosses appear every 5 waves (e.g., wave 5, 10, 15, etc.)
- Each boss has significantly higher health than regular enemies
- Bosses get stronger over time, increasing in health by 5
- A visible health number is displayed during boss fights, allowing players to track progress
- If you are hit by the Boss enemy, it's game over, no matter how much health you have

## Health

- Players begin with **3 hearts**
- A heart is lost whenever the player is hit by an enemy or certain types of collisions
- If the enemy makes it to the bottom of a screen without hitting you, the game is over then no matter how much health you have left.
- After each wave, the player regenerates **1 heart**, up to a maximum of **5 hearts**

## Game UI

- The top left of the screen displays:  
  - **Score**  
  - **Current wave**  
  - **Remaining hearts (health)**  
  - **Laser Beam energy bar**
- The player’s ship stays near the bottom center of the screen, while enemies spawn from above and move downward

---

## Enemy/Boss Game Scaling

The game becomes progressively harder by adjusting enemy spawn probabilities and increasing overall game speed as the wave count rises.

### Enemy Scaling Table

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

### Boss Scaling Table

| Wave | Boss HP |
|------|---------|
| 5    | 10 HP   |
| 10   | 15 HP   |
| 15   | 20 HP   |
| 20   | 25 HP   |
| 25   | 30 HP   |
| 30   | 35 HP   |
| 35   | 40 HP   |
| 40   | 45 HP   |
| 45   | 50 HP   |
| 50   | 55 HP   |
| 55   | 60 HP   |
| 60   | 65 HP   |
| 65   | 70 HP   |
| 70   | 75 HP   |
| 75   | 80 HP   |
| 80   | 85 HP   |
| 85   | 90 HP   |
| 90   | 95 HP   |
| 95   | 100 HP  |
| 100+ | 105+ HP |


### Additional Difficulty Scaling

- With each new wave:  
  - The number of enemies increases  
  - Enemies may spawn in more columns  
  - Enemy speed and shooting rate increase  
  - Bosses become tougher by gaining more health

---
