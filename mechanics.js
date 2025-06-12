//Defining variables

let game, canvas;
const InitialStart = document.getElementById("InitialStart");
const playButton = document.getElementById("play-button");
const gameOverlay = document.getElementById("game-overlay");
const BackgroundMusic = document.getElementById("BackgroundMusic");
const ClickMenu = document.getElementById("ClickMenu");
const Instructions = document.getElementById("Instructions");
const ControlsSuperWeapon1 = document.getElementById("ControlsSuperWeapon");
const HealthEnemyProperties = document.getElementById("HealthEnemyProperties");
const HealthBossProperties1 = document.getElementById("HealthBossProperties");
const GameUI1 = document.getElementById("GameUI");
const Back = document.getElementById("Back");
const ShipControl = document.getElementById("ShipControl");
const SuperWeaponInstructions = document.getElementById("SuperWeaponInstructions");
const goBackToHowtoplay1 = document.getElementById("goBackToHowtoplay")
const ZetaScout1 = document.getElementById("ZetaScout");
const ZetaScoutProperties1 = document.getElementById("ZetaScoutProperties");
const BetaStriker1 = document.getElementById("BetaStriker");
const BetaStrikerProperties1 = document.getElementById("BetaStrikerProperties");
const OmegaTitan1 = document.getElementById("OmegaTitan");
const OmegaTitanProperties1 = document.getElementById("OmegaTitanProperties");
const HealthLives1 = document.getElementById("HealthLives");
const HealthLivesProperties1 = document.getElementById("HealthLivesProperties");
const BossAlienShooting1 = document.getElementById("BossAlienShooting");
const BossAlienBeam1 = document.getElementById("BossAlienBeam");
const BossProperties1 = document.getElementById("BossProperties");

// This function is to help initialize the background music  
function InitialGameStart() {
    //BackgroundMusic.play();
    InitialStart.style.display = "block";
    playButton.style.display = "none";
    gameOverlay.style.display = "none";
}

// These next 7 functions control the how-to-play page
function playInstructions() {
    ClickMenu.play();
    Instructions.style.display = "none";
    ControlsSuperWeapon1.style.display = "block";
    HealthEnemyProperties.style.display = "block";
    HealthBossProperties1.style.display = "block";
    GameUI1.style.display = "block";
    Back.style.display = "block";
}

function ControlsSuperWeapon() {
    ClickMenu.play();
    ControlsSuperWeapon1.style.display = "none";
    HealthEnemyProperties.style.display = "none";
    HealthBossProperties1.style.display = "none";
    GameUI1.style.display = "none";
    Back.style.display = "none";
    ShipControl.style.display = "block";
    SuperWeaponInstructions.style.display = "block";
    goBackToHowtoplay1.style.display = "block";
}

function EnemyProperties() {
    ClickMenu.play();
    ControlsSuperWeapon1.style.display = "none";
    HealthEnemyProperties.style.display = "none";
    HealthBossProperties1.style.display = "none";
    GameUI1.style.display = "none";
    Back.style.display = "none";
    goBackToHowtoplay1.style.display = "block";
    ZetaScout1.style.display = "block";
    ZetaScoutProperties1.style.display = "block";
    BetaStriker1.style.display = "block";
    BetaStrikerProperties1.style.display = "block";
    OmegaTitan1.style.display = "block";
    OmegaTitanProperties1.style.display = "block";
}

function HealthBossProperties() {
    ClickMenu.play();
    ControlsSuperWeapon1.style.display = "none";
    HealthEnemyProperties.style.display = "none";
    HealthBossProperties1.style.display = "none";
    GameUI1.style.display = "none";
    Back.style.display = "none";
    goBackToHowtoplay1.style.display = "block";
    HealthLives1.style.display = "block";
    HealthLivesProperties1.style.display = "block";
    BossAlienShooting1.style.display = "block";
    BossAlienBeam1.style.display = "block";
    BossProperties1.style.display = "block";
}

function GameUI() {
    ClickMenu.play();
    ControlsSuperWeapon1.style.display = "none";
    HealthEnemyProperties.style.display = "none";
    HealthBossProperties1.style.display = "none";
    GameUI1.style.display = "none";
    Back.style.display = "none";
    goBackToHowtoplay1.style.display = "block";
}

function goBackToInstructions() {
    ClickMenu.play();
    Instructions.style.display = "block";
    ControlsSuperWeapon1.style.display = "none";
    HealthEnemyProperties.style.display = "none";
    HealthBossProperties1.style.display = "none";
    GameUI1.style.display = "none";
    Back.style.display = "none";
}

function goBackToHowtoplay() {
    ClickMenu.play();
    ControlsSuperWeapon1.style.display = "block";
    HealthEnemyProperties.style.display = "block";
    HealthBossProperties1.style.display = "block";
    GameUI1.style.display = "block";
    Back.style.display = "block";
    goBackToHowtoplay1.style.display = "none";
    SuperWeaponInstructions.style.display = "none";
    ShipControl.style.display = "none";
    ZetaScout1.style.display = "none";
    ZetaScoutProperties1.style.display = "none";
    BetaStriker1.style.display = "none";
    BetaStrikerProperties1.style.display = "none";
    OmegaTitan1.style.display = "none";
    OmegaTitanProperties1.style.display = "none";
    HealthLives1.style.display = "none";
    HealthLivesProperties1.style.display = "none";
    BossAlienShooting1.style.display = "none";
    BossAlienBeam1.style.display = "none";
    BossProperties1.style.display = "none";
}

function startGame() {
    const startArea = document.getElementById("startGame");
    document.body.removeChild(startArea);
    canvas = document.createElement("canvas");
    canvas.id = "canvas";
    canvas.width = 600;
    canvas.height = 760;
    document.body.insertBefore(canvas, document.body.childNodes[0]);
    CreateGameImgAssets();
    CreateGameAudioAssets();
    game = new Game(canvas);
    game.ctx.fillStyle = "white";
    game.ctx.strokeStyle = "white";
    game.ctx.font = '30px Impact';

    let lastTime = 0;
    function animate(timeStamp) {
        const deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;
        game.ctx.clearRect(0, 0, canvas.width, canvas.height);
        game.render(game.ctx, deltaTime);
        requestAnimationFrame(animate);
    }
    animate(0);
    ShipLaunch.play();
    MainMusic.play();
}

class Laser {
    constructor(game) {
        this.game = game;
        this.x = 0;
        this.y = 0;
        this.height = this.game.height - 74.3;
    }
    render(context) {
        this.x = this.game.player.x + this.game.player.width * 0.5 - 23.2;
        this.game.player.energy -= this.damage;
        

        context.save();
        context.fillStyle = 'blue';
        context.fillRect(this.x, this.y, this.width, this.height);
        context.fillStyle = 'red';
        context.fillRect(this.x + this.width * 0.2, this.y, this.width * 0.6, this.height);
        context.restore();

        if (this.game.spriteUpdate) {
            this.game.waves.forEach(wave => {
                wave.enemies.forEach(enemy => {
                    if (this.game.checkCollision(enemy, this)) {
                        enemy.hit(this.damage);
                    }
                })
            })
            this.game.bossArray.forEach(boss => {
                if (this.game.checkCollision(boss, this) && boss.y >= 0) {
                    BossHit.play();
                    BossHit.currentTime = 0;
                    boss.hit(this.damage);
                }
            })           
        }
    }
}

class bigLaser extends Laser {
    constructor(game) {
        super(game)
        this.width = 47.5;
        this.damage = 0.7;
    }
    render(context) {
        if (this.game.player.energy > 1 && !this.game.player.cooldown) {
            super.render(context);
        }

    }
}

class Player {
    constructor(game) {
        this.game = game;
        this.width = 113;
        this.height = 140;
        this.x = this.game.width * 0.5 - this.width * 0.5;
        this.y = this.game.height - this.height - 5;
        this.speed = 5;
        this.lives = 3;
        this.maxLives = 5;
        this.image = document.getElementById('player');
        this.BigLaser = new bigLaser(this.game);
        this.energy = 50;
        this.maxEnergy = 100;
        this.cooldown = (this.energy < this.maxEnergy * 0.2);
        this.OffsetX = 510;
        this.OffsetY = 530;
        this.DrawoffsetX = 25;
        this.DrawoffsetY = 20;

        this.isRechargingSoundPlaying = false;
        this.isRechargedSoundPlayed = (this.energy >= this.maxEnergy * 0.2);
    }
    draw(context) {
        const imageWidth = 300;
        const imageHeight = 300; 
        const imageX = this.x - (imageWidth - this.width) / 2;
        const imageY = this.y - (imageHeight - this.height) / 2;
        context.drawImage(this.image, this.DrawoffsetX, this.DrawoffsetY, this.OffsetX, this.OffsetY, imageX, imageY, imageWidth, imageHeight);

        if (this.game.keys.indexOf('f') > -1) {
            this.BigLaser.render(context);
        }
    }
    update() {
        const wasInCooldown = this.cooldown;

        //energy
        if (this.energy < this.maxEnergy) this.energy += 0.05; 
        if (this.energy < 1) {
            this.cooldown = true;
        }
        else if (this.energy > this.maxEnergy * 0.2) this.cooldown = false;

        if (this.cooldown && !wasInCooldown) {
            if (typeof LaserDown !== 'undefined' && LaserDown) {
                LaserBeam.pause();
                LaserDown.currentTime = 0;
                LaserDown.play();
            }
            this.isRechargingSoundPlaying = true;
            this.isRechargedSoundPlayed = false;
        }
        if (!this.cooldown && wasInCooldown) {
            if (typeof LaserUp !== 'undefined' && LaserUp) {
                if (!this.isRechargedSoundPlayed) {
                    LaserUp.currentTime = 0;
                    LaserUp.play();
                    this.isRechargedSoundPlayed = true;
                }
            }
            if (typeof LaserDown !== 'undefined' && LaserDown && this.isRechargingSoundPlaying) {
                LaserDown.pause();
                LaserDown.currentTime = 0;
            }
            this.isRechargingSoundPlaying = false;
        }
        if (this.energy >= this.maxEnergy && !this.isRechargedSoundPlayed) {
            if (typeof LaserUp !== 'undefined' && LaserUp) {
                LaserUp.currentTime = 0;
                LaserUp.play();
                this.isRechargedSoundPlayed = true;
            }
        }
        if (this.game.keys.indexOf("ArrowLeft") > -1) this.x -= this.speed;
        if (this.game.keys.indexOf("ArrowRight") > -1) this.x += this.speed;
        if (this.x < 0) this.x = 0;
        else if (this.x > this.game.width - this.width) this.x = this.game.width - this.width;

        //hoz bound
        if (this.x < -this.width * 0.5) this.x = -this.width * 0.5;
        else if (this.x > this.game.width - this.width * 0.5) this.x = this.game.width - this.width * 0.5;
    }
    shoot() {
        const projectile = this.game.getProjectile();
        if (projectile) projectile.start((this.x + this.width * 0.5) - 1.8, this.y);
    }
    restart() {
        this.x = this.game.width * 0.5 - this.width * 0.5;
        this.y = 600;
        this.lives = 3;
    }
}

class Enemy {
    constructor(game, positionX, positionY) {
        this.game = game;
        this.width = this.game.enemySize;
        this.height = this.game.enemySize - 23;
        this.width2 = 130;
        this.height2 = 130;
        this.positionX = positionX;
        this.positionY = positionY;
        this.x = 0;
        this.y = 0;
        this.markedforDeletion = false;

        this.isDying = false;
        this.deathAnimationTimer = 0; 
        this.deathAnimationDuration = 150;

        this.deathImage = document.getElementById('EnemyDeathImg1');
    }
    draw(context) {
        if (this.isDying) {
            context.drawImage(this.deathImage, this.x, this.y, this.width, this.height);
        } else {
            context.drawImage(this.image, this.x - 21, this.y - 32, this.width2, this.height2);
        }
    }
    update(x, y) {
        this.x = x + this.positionX;
        this.y = y + this.positionY;
        // check collision enemies - projectiles
        this.game.projectilesPool.forEach(projectile => {
            if (!projectile.free && this.game.checkCollision(this, projectile) && this.lives > 0) {
                this.hit(1);
                projectile.reset();
            }
        });

        // check collision enemies - player
        if (this.game.checkCollision(this, this.game.player)) {
            PlayerHit.play();
            PlayerHit.currentTime = 0;
            this.markedforDeletion = true;
            if (!this.game.gameOver && this.game.score > 0) this.game.score--;
            this.game.player.lives--;
        }

        // enemy destroyed
        if (this.lives < 1 && !this.isDying) {
            this.isDying = true;
            this.deathAnimationTimer = 0;
            EnemyDeath.play();
            EnemyDeath.currentTime = 0;
            if (!this.game.gameOver) this.game.score += this.maxLives;
        }
        if (this.isDying) {
            this.deathAnimationTimer += this.game.deltaTime;
            if (this.deathAnimationTimer >= this.deathAnimationDuration) {
                this.markedforDeletion = true;
            }
        }

        // lose condition 
        if (this.y + this.height > this.game.height || this.game.player.lives < 1) {
            this.game.gameOver = true;
        }
    }
    hit(damage) {
        this.lives -= damage;
    }
}

class ZetaScout extends Enemy {
    constructor(game, positionX, positionY) {
        super(game, positionX, positionY);
        this.image = document.getElementById('ZetaScout1');
        this.lives = 1;
        this.maxLives = this.lives;
    }
}

class BetaStriker extends Enemy {
    constructor(game, positionX, positionY) {
        super(game, positionX, positionY);
        this.image = document.getElementById('BetaStriker1');
        this.lives = 2;
        this.maxLives = this.lives;
    }
}

class OmegaTitan extends Enemy {
    constructor(game, positionX, positionY) {
        super(game, positionX, positionY);
        this.image = document.getElementById('OmegaTitan1');
        this.lives = 3;
        this.maxLives = this.lives;
    }
}

class Boss {
    constructor(game, bossLives) {
        this.game = game;
        this.width = 280;
        this.height = 113;
        this.x = this.game.width * 0.5 - this.width * 0.5;
        this.y = -this.height;
        this.speedX = Math.random() < 0.5 ? -1 : 1;
        this.speedY = 0;
        this.lives = bossLives;
        this.maxLives = this.lives;
        this.markedforDeletion = false;
        this.image = document.getElementById('BossAlien1');

        this.isDying = false;
        this.deathAnimationTimer = 0; 
        this.deathAnimationDuration = 1800;
        this.imageScale = 2;

        this.BossImage = document.getElementById('BossDeathImg1');

        
    }
    draw(context) {
        if (this.isDying) {
            context.drawImage(this.BossImage, this.x, this.y, this.width, this.height);
        } else {
            const imageWidth = 185 * this.imageScale;
            const imageHeight = 185 * this.imageScale;
            const imageX = this.x - (imageWidth - this.width) / 2 - 4.5;
            const imageY = this.y - (imageHeight - this.height) / 2;
            context.drawImage(this.image, imageX, imageY, imageWidth, imageHeight);
        }
        if (this.lives >= 1) {
            context.save();
            context.textAlign = 'center'
            context.shadowOffsetX = 3;
            context.shadowOffsetY = 3;
            context.shadowColor = 'black';
            context.fillText(Math.floor(this.lives), this.x + this.width * 0.5, this.y + 50);
            context.restore();
        }
    }
    update() {
        this.speedY = 0;
        if (this.y < 0) this.y += 4;
        if (this.x < 0 || this.x > this.game.width - this.width && this.lives >= 1) {
            this.speedX *= -1;
            this.speedY = this.height * 0.5;

        }
        this.x += this.speedX;
        this.y += this.speedY;
        // collision detection boss/projectiles
        this.game.projectilesPool.forEach(projectile => {
            if (this.game.checkCollision(this, projectile) && !projectile.free && this.lives >= 1 && this.y >= 0) {
                this.lives--;
                projectile.reset();
                BossHit.play();
                BossHit.currentTime = 0;
            }
        })

        // collision detection boss/player
        if (this.game.checkCollision(this, this.game.player) && this.lives >= 1) {
            PlayerHit.play();
            PlayerHit.currentTime = 0;
            this.game.gameOver = true;
            this.lives = 0;
        }


        // boss destroyed
        if (this.lives < 1 && !this.isDying) {
            this.isDying = true;
            this.deathAnimationTimer = 0;
            BossHit.pause();
            BossDeath.play();
            //this.markedforDeletion = true;
            BossBattleMusic.pause();
            BossBattleMusic.currentTime = 0;
            this.game.score += this.maxLives;
            this.game.bossLives += 5;
            if (!this.game.gameOver) this.game.newWave();
            MainMusic.play();
        }
        if (this.isDying) {
            this.deathAnimationTimer += this.game.deltaTime;
            if (this.deathAnimationTimer >= this.deathAnimationDuration) {
                this.markedforDeletion = true;
            }
        }
        // lose condition
        if (this.y + this.height > this.game.height) this.game.gameOver = true;

    }
    hit(damage) {
        this.lives -= damage;
    }
}

class Wave {
    constructor(game) {
        this.game = game;
        this.width = this.game.columns * this.game.enemySize;
        this.height = this.game.rows * this.game.enemySize;
        this.x = this.game.width * 0.5 - this.width * 0.5;
        this.y = -this.height;
        this.speedX = Math.random() < 0.5 ? -1 : 1;
        this.speedY = 0;
        this.enemies = [];
        this.nextWaveTrigger = false;
        this.create();
    }
    render(context) {
        if (this.y < 0) this.y += 5;
        this.speedY = 0;
        if (this.x < 0 || this.x > this.game.width - this.width) {
            this.speedX *= -1;
            this.speedY = this.game.enemySize;
        }
        this.x += this.speedX;
        this.y += this.speedY;
        this.enemies.forEach(enemy => {
            enemy.update(this.x, this.y);
            enemy.draw(context);
        });
        this.enemies = this.enemies.filter(object => !object.markedforDeletion);    
    }
    create() {
        for (let y = 0; y < this.game.rows; y++) {
            for (let x = 0; x < this.game.columns; x++) {
                let enemyX = x * this.game.enemySize;
                let enemyY = y * (this.game.enemySize * 0.75);

                const round = this.game.waveCount;

                let easyWeight = Math.max(0, 50 - Math.floor((round - 1) / 10) * 10); 
                let hardWeight = 20 + Math.floor((round - 1) / 10) * 10;

                if (hardWeight > 100) hardWeight = 100;

                let mediumWeight = 100 - (easyWeight + hardWeight);

                if (easyWeight + mediumWeight + hardWeight !== 100) {
                    const overflow = easyWeight + mediumWeight + hardWeight - 100;
                    mediumWeight -= overflow;
                    if (mediumWeight < 0) mediumWeight = 0;
                }
                const randomEnemy = Math.random() * 100;

                if (randomEnemy < easyWeight) {
                    this.enemies.push(new ZetaScout(this.game, enemyX, enemyY));
                } else if (randomEnemy < easyWeight + mediumWeight) {
                    this.enemies.push(new BetaStriker(this.game, enemyX, enemyY));
                } else {
                    this.enemies.push(new OmegaTitan(this.game, enemyX, enemyY));
                }

                // const randomEnemy = Math.random();
                // if (randomEnemy < 0.5) {
                //     this.enemies.push(new ZetaScout(this.game, enemyX, enemyY));
                // } else if (randomEnemy < 0.8) {
                //     this.enemies.push(new BetaStriker(this.game, enemyX, enemyY));
                // } else {
                //     this.enemies.push(new OmegaTitan(this.game, enemyX, enemyY));
                // }
                
            }
        }
    }
}

class Projectile {
    constructor() {
        this.width = 4;
        this.height = 20;
        this.x = 0;
        this.y = 0;
        this.speed = 20;
        this.free = true;
    }
    draw(context) {
        if (!this.free) {
            context.save();
            context.fillStyle = 'blue';
            context.fillRect(this.x, this.y, this.width, this.height);
            context.restore();
        }
    }
    update() {
        if (!this.free) {
            this.y -= this.speed;
            if (this.y < -this.height) this.reset();
        }
    }
    start(x, y) {
        this.x = x;
        this.y = y;
        this.free = false;
    }
    reset() {
        this.free = true;
    }
}

class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.width = canvas.width;
        this.height = canvas.height;
        this.keys = [];
        this.player = new Player(this);
        this.projectilesPool = [];
        this.numberOfProjectiles = 10;
        this.createProjectiles();
        this.fired = false;
        this.waves = [];
        this.columns = 2;
        this.rows = 2;
        this.enemySize = 91;
        this.image = document.getElementById('HeartLives1')
        setTimeout(() => {
        this.waves.push(new Wave(this));
        }, 5500)
        this.waveCount = 1;

        this.spriteUpdate = false;
        this.spriteTimer = 0;
        this.spriteInterval = 150;

        this.score = 0;
        this.gameOver = false;
        this.gameOverPlayed = false;

        this.bossArray = [];
        this.bossLives = 10;
        this.laserSoundPlaying = false;
        this.lastWaveWasBoss = false;

        // event listeners
        window.addEventListener("keydown", e => {
            if (e.key === " ") {
                if (!this.fired) {
                    this.player.shoot();
                    BlastorNoise.play();
                    BlastorNoise.currentTime = 0;
                }
                this.fired = true;
            }

            if (e.key === 'f') {
                if (!this.laserSoundPlaying) {
                    if (typeof LaserBeam !== 'undefined' && LaserBeam && !this.player.cooldown) {
                        LaserBeam.play();
                    }
                    this.laserSoundPlaying = true;
                }
            }

            if (this.keys.indexOf(e.key) === -1) this.keys.push(e.key);
            
            if (e.key === 'r' && this.gameOver) this.restart();
        });
        window.addEventListener("keyup", e => {
            this.fired = false;

            if (e.key === 'f') {
                if (this.laserSoundPlaying) {
                    if (typeof LaserBeam !== 'undefined' && LaserBeam) {
                        LaserBeam.pause();
                        LaserBeam.currentTime = 0;
                        LaserBeam.loop = false;
                    }
                    this.laserSoundPlaying = false;
                }
            }
            const index = this.keys.indexOf(e.key);
            if (index > -1) this.keys.splice(index, 1);
        });
    }
    render(context, deltaTime) {
        this.deltaTime = deltaTime
        // sprite timing
        if (this.spriteTimer > this.spriteInterval) {
            this.spriteUpdate = true;
            this.spriteTimer = 0;
        } else {
            this.spriteUpdate = false;
            this.spriteTimer += deltaTime;
        }
        this.drawStatusText(context);
        this.player.draw(context);
        this.player.update();
        this.projectilesPool.forEach(projectile => {
            projectile.update();
            projectile.draw(context);
        });
        this.player.draw(context);
        this.player.update();
        this.bossArray.forEach(boss => {
            boss.draw(context);
            boss.update();
        })
        this.bossArray = this.bossArray.filter(object => !object.markedforDeletion);
        this.waves.forEach(wave => {
            wave.render(context);
            if (wave.enemies.length < 1 && !wave.nextWaveTrigger && !this.gameOver) {
                this.newWave();
                wave.nextWaveTrigger = true;
            }
        });
    }
    // create projectiles object pool
    createProjectiles() {
        for (let i = 0; i < this.numberOfProjectiles; i++) {
            this.projectilesPool.push(new Projectile());
        }
    }
    // get free projectile object from the pool
    getProjectile() {
        for (let i = 0; i < this.numberOfProjectiles; i++) {
            if (this.projectilesPool[i].free) return this.projectilesPool[i];
        }
    }
    // collision detection between 2 rectangles
    checkCollision(a, b) {
        return (
            a.x < b.x + b.width &&
            a.x + a.width > b.x &&
            a.y < b.y + b.height &&
            a.y + a.height > b.y
        );
    }
    drawStatusText(context) {
        context.save();
        context.shadowOffsetX = 2;
        context.shadowOffsetY = 2;
        context.shadowColor = 'black';
        context.fillText('Score: ' + this.score, 20, 40);
        context.fillText('Wave: ' + this.waveCount, 20, 80);

        //Draw lives
        for (let i = 0; i < this.player.lives; i++) {
            context.drawImage(this.image, -15 + 50 * i, 65, 100, 100);
        }
        // Laser Beam Energy
        context.save();
        context.font = '18px Impact'
        context.fillText('Laser Beam Energy', 20, 150);
        context.restore();

        context.save()
        if (this.player.cooldown) {
            context.fillStyle = 'red'
        } else {
            context.fillStyle = 'blue';
        }
        if (this.player.energy >= this.player.maxEnergy) context.fillStyle = 'green';
        for (let i = 0; i < this.player.energy; i++) {
            context.fillRect(20 + 2 * i, 160, 2, 15)
        }
        context.restore()
        if (this.gameOver) {
            MainMusic.pause();
            if (!this.gameOverPlayed) {
                GameOver.currentTime = 0;
                GameOver.play();
                this.gameOverPlayed = true;
            }
            context.textAlign = 'center';
            context.font = '100px Impact';
            context.fillText('GAME OVER', this.width * 0.5, this.height * 0.5);
            context.font = '20px Impact';
            context.fillText('Press R to restart!', this.width * 0.5, this.height * 0.5 + 30);
        }
        context.restore();
    }
    newWave() {
        this.waveCount++;
        if (this.player.lives < this.player.maxLives) this.player.lives++;

        if (this.waveCount % 2 === 0) {
            WaveCompleted.play()
            WaveCompleted.currentTime = 0;
            this.bossArray.push(new Boss(this, this.bossLives));
            MainMusic.pause();
            BossBattleMusic.play();
            this.lastWaveWasBoss = true;
        } else {
            if (this.lastWaveWasBoss) {
                const postBossDelay = 2700;
                if (typeof BackgroundMusic !== 'undefined' && BackgroundMusic) {
                     BackgroundMusic.pause();
                }

                setTimeout(() => {
                    if (Math.random() < 0.5 && this.columns * this.enemySize < this.width * 0.8) {
                        this.columns++;
                    } else if (this.rows * this.enemySize < this.height * 0.6) {
                        this.rows++;
                    }
                    WaveCompleted.play();
                    WaveCompleted.currentTime = 0;
                    this.waves.push(new Wave(this));
                    this.lastWaveWasBoss = false;
                }, postBossDelay);
            } else {
                if (Math.random() < 0.5 && this.columns * this.enemySize < this.width * 0.8) {
                    this.columns++;
                } else if (this.rows * this.enemySize < this.height * 0.6) {
                    this.rows++;
                }
                WaveCompleted.play()
                WaveCompleted.currentTime = 0;
                this.waves.push(new Wave(this));
                this.lastWaveWasBoss = false;
            }
        }
        this.waves = this.waves.filter(object => !object.markedforDeletion);
    }
    restart() {
        this.player.restart()
        this.columns = 2;
        this.rows = 2;

        this.waves = [];
        this.bossArray = [];
        this.bossLives = 10;
        this.waves.push(new Wave(this));
        this.waveCount = 1;

        this.score = 0;
        this.gameOver = false;
        this.gameOverPlayed = false;
        this.player.energy = 50;
        MainMusic.currentTime = 0;
        MainMusic.play();
    }
}

function CreateGameImgAssets() {
    //Creating/Inserting Image assests
    const ZetaScoutImg = document.createElement("img");
    ZetaScoutImg.id = "ZetaScout1";
    ZetaScoutImg.src = "assets/images/ZetaScout.png";
    ZetaScoutImg.alt = "ZetaScout";
    document.body.appendChild(ZetaScoutImg);

    const BetaStrikerImg = document.createElement("img");
    BetaStrikerImg.id = "BetaStriker1";
    BetaStrikerImg.src = "assets/images/BetaStriker.png";
    BetaStrikerImg.alt = "BetaStriker";
    document.body.appendChild(BetaStrikerImg);

    const OmegaTitanImg = document.createElement("img");
    OmegaTitanImg.id = "OmegaTitan1";
    OmegaTitanImg.src = "assets/images/OmegaTitan.png";
    OmegaTitanImg.alt = "OmegaTitanImg";
    document.body.appendChild(OmegaTitanImg);

    const SpaceShipImg = document.createElement("img");
    SpaceShipImg.id = "player";
    SpaceShipImg.src = "assets/images/SpaceShip.png";
    SpaceShipImg.alt = "SpaceShip";
    document.body.appendChild(SpaceShipImg);

    const BossAlienImg = document.createElement("img");
    BossAlienImg.id = "BossAlien1";
    BossAlienImg.src = "assets/images/BossAlien.png";
    BossAlienImg.alt = "BossAlien";
    document.body.appendChild(BossAlienImg);

    const HeartLivesImg = document.createElement("img");
    HeartLivesImg.id = "HeartLives1";
    HeartLivesImg.src = "assets/images/HeartLives.png";
    HeartLivesImg.alt = "HeartLives";
    document.body.appendChild(HeartLivesImg);

    const EnemyDeathImg = document.createElement("img");
    EnemyDeathImg.id = "EnemyDeathImg1";
    EnemyDeathImg.src = "assets/images/EnemyDeath.png";
    EnemyDeathImg.alt = "EnemyDeathImg";
    document.body.appendChild(EnemyDeathImg);

    const BossDeathImg = document.createElement("img");
    BossDeathImg.id = "BossDeathImg1";
    BossDeathImg.src = "assets/images/BossDeath.png";
    BossDeathImg.alt = "BossDeathImg";
    document.body.appendChild(BossDeathImg);
}


function CreateGameAudioAssets() {
    //Creating/Inserting Audio assests
    const BlastorNoise = document.createElement("audio");
    BlastorNoise.id = "BlastorNoise";
    BlastorNoise.src = "assets/sounds/BlasterNoise.mp3";
    BlastorNoise.type = "audio/mpeg";
    BlastorNoise.volume = 0.5;
    document.body.appendChild(BlastorNoise);

    const BossBattleMusic = document.createElement("audio");
    BossBattleMusic.id = "BossBattleMusic";
    BossBattleMusic.src = "assets/sounds/BossBattleMusic.mp3";
    BossBattleMusic.type = "audio/mpeg";
    BossBattleMusic.loop = true;
    BossBattleMusic.volume = 0.6;
    document.body.appendChild(BossBattleMusic);

    const EnemyDeath = document.createElement("audio");
    EnemyDeath.id = "EnemyDeath";
    EnemyDeath.src = "assets/sounds/EnemeyDeath.mp3";
    EnemyDeath.type = "audio/mpeg";
    EnemyDeath.volume = 0.2;
    document.body.appendChild(EnemyDeath);

    const BossHit = document.createElement("audio");
    BossHit.id = "BossHit";
    BossHit.src = "assets/sounds/BossHit.mp3";
    BossHit.type = "audio/mpeg";
    BossHit.volume = 0.7;
    document.body.appendChild(BossHit);

    const GameOver = document.createElement("audio");
    GameOver.id = "GameOver";
    GameOver.src = "assets/sounds/GameOver.mp3";
    GameOver.type = "audio/mpeg";
    GameOver.volume = 0.7;
    document.body.appendChild(GameOver);

    const LaserBeam = document.createElement("audio");
    LaserBeam.id = "LaserBeam";
    LaserBeam.src = "assets/sounds/LaserBeam.mp3";
    LaserBeam.type = "audio/mpeg";
    document.body.appendChild(LaserBeam);

    const ShipLaunch = document.createElement("audio");
    ShipLaunch.id = "ShipLaunch";
    ShipLaunch.src = "assets/sounds/ShipLaunch.mp3";
    ShipLaunch.type = "audio/mpeg";
    ShipLaunch.volume = 0.4;
    document.body.appendChild(ShipLaunch);

    const WaveCompleted = document.createElement("audio");
    WaveCompleted.id = "WaveCompleted";
    WaveCompleted.src = "assets/sounds/WaveCompleted.mp3";
    WaveCompleted.type = "audio/mpeg";
    WaveCompleted.volume = 0.4;
    document.body.appendChild(WaveCompleted);

    const LaserDown = document.createElement("audio");
    LaserDown.id = "LaserDown";
    LaserDown.src = "assets/sounds/LaserDown.mp3";
    LaserDown.type = "audio/mpeg";
    LaserDown.volume = 0.9;
    document.body.appendChild(LaserDown);

    const LaserUp = document.createElement("audio");
    LaserUp.id = "LaserUp";
    LaserUp.src = "assets/sounds/LaserUp.mp3";
    LaserUp.type = "audio/mpeg";
    LaserUp.volume = 0.7;
    document.body.appendChild(LaserUp);

    const BossDeath = document.createElement("audio");
    BossDeath.id = "BossDeath";
    BossDeath.src = "assets/sounds/BossDeath.mp3";
    BossDeath.type = "audio/mpeg";
    BossDeath.volume = 0.3;
    document.body.appendChild(BossDeath);

    const MainMusic = document.createElement("audio");
    MainMusic.id = "MainMusic";
    MainMusic.src = "assets/sounds/MainMusic.mp3";
    MainMusic.type = "audio/mpeg";
    MainMusic.loop = true;
    MainMusic.volume = 0.4;
    document.body.appendChild(MainMusic);

    const PlayerHit = document.createElement("audio");
    PlayerHit.id = "PlayerHit";
    PlayerHit.src = "assets/sounds/PlayerHit.mp3";
    PlayerHit.type = "audio/mpeg";
    document.body.appendChild(PlayerHit);
    PlayerHit.volume = 0.6;


}