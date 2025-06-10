let game, canvas;


// This function is to help initialize the background music  
function InitialGameStart() {
    document.getElementById("InitialStart").style.display = "block";
    document.getElementById("play-button").style.display = "none";
    document.getElementById("game-overlay").style.display = "none";
    document.getElementById("BackgroundMusic").play();
}

// These next 7 functions control the how-to-play page
function playInstructions() {
    document.getElementById("Instructions").style.display = "none";
    document.getElementById("ControlsSuperWeapon").style.display = "block";
    document.getElementById("HealthEnemyProperties").style.display = "block";
    document.getElementById("HealthBossProperties").style.display = "block";
    document.getElementById("GameUI").style.display = "block";
    document.getElementById("Back").style.display = "block";
}

function ControlsSuperWeapon() {
    document.getElementById("ControlsSuperWeapon").style.display = "none";
    document.getElementById("HealthEnemyProperties").style.display = "none";
    document.getElementById("HealthBossProperties").style.display = "none";
    document.getElementById("GameUI").style.display = "none";
    document.getElementById("Back").style.display = "none";
    document.getElementById("ShipControl").style.display = "block";
    document.getElementById("SuperWeaponInstructions").style.display = "block";
    document.getElementById("goBackToHowtoplay").style.display = "block";
}

function EnemyProperties() {
    document.getElementById("ControlsSuperWeapon").style.display = "none";
    document.getElementById("HealthEnemyProperties").style.display = "none";
    document.getElementById("HealthBossProperties").style.display = "none";
    document.getElementById("GameUI").style.display = "none";
    document.getElementById("Back").style.display = "none";
    document.getElementById("goBackToHowtoplay").style.display = "block";
    document.getElementById("ZetaScout").style.display = "block";
    document.getElementById("ZetaScoutProperties").style.display = "block";
    document.getElementById("BetaStriker").style.display = "block";
    document.getElementById("BetaStrikerProperties").style.display = "block";
    document.getElementById("OmegaTitan").style.display = "block";
    document.getElementById("OmegaTitanProperties").style.display = "block";
}

function HealthBossProperties() {
    document.getElementById("ControlsSuperWeapon").style.display = "none";
    document.getElementById("HealthEnemyProperties").style.display = "none";
    document.getElementById("HealthBossProperties").style.display = "none";
    document.getElementById("GameUI").style.display = "none";
    document.getElementById("Back").style.display = "none";
    document.getElementById("goBackToHowtoplay").style.display = "block";
    document.getElementById("HealthLives").style.display = "block";
    document.getElementById("HealthLivesProperties").style.display = "block";
    document.getElementById("BossAlienShooting").style.display = "block";
    document.getElementById("BossAlienBeam").style.display = "block";
    document.getElementById("BossProperties").style.display = "block";
}

function GameUI() {
    document.getElementById("ControlsSuperWeapon").style.display = "none";
    document.getElementById("HealthEnemyProperties").style.display = "none";
    document.getElementById("HealthBossProperties").style.display = "none";
    document.getElementById("GameUI").style.display = "none";
    document.getElementById("Back").style.display = "none";
    document.getElementById("goBackToHowtoplay").style.display = "block";
}

function goBackToInstructions() {
    document.getElementById("Instructions").style.display = "block";
    document.getElementById("ControlsSuperWeapon").style.display = "none";
    document.getElementById("HealthEnemyProperties").style.display = "none";
    document.getElementById("HealthBossProperties").style.display = "none";
    document.getElementById("GameUI").style.display = "none";
    document.getElementById("Back").style.display = "none";
}

function goBackToHowtoplay() {
    document.getElementById("ControlsSuperWeapon").style.display = "block";
    document.getElementById("HealthEnemyProperties").style.display = "block";
    document.getElementById("HealthBossProperties").style.display = "block";
    document.getElementById("GameUI").style.display = "block";
    document.getElementById("Back").style.display = "block";
    document.getElementById("goBackToHowtoplay").style.display = "none";
    document.getElementById("SuperWeaponInstructions").style.display = "none";
    document.getElementById("ShipControl").style.display = "none";
    document.getElementById("ZetaScout").style.display = "none";
    document.getElementById("ZetaScoutProperties").style.display = "none";
    document.getElementById("BetaStriker").style.display = "none";
    document.getElementById("BetaStrikerProperties").style.display = "none";
    document.getElementById("OmegaTitan").style.display = "none";
    document.getElementById("OmegaTitanProperties").style.display = "none";
    document.getElementById("HealthLives").style.display = "none";
    document.getElementById("HealthLivesProperties").style.display = "none";
    document.getElementById("BossAlienShooting").style.display = "none";
    document.getElementById("BossAlienBeam").style.display = "none";
    document.getElementById("BossProperties").style.display = "none";
}

function startGame() {
    const startArea = document.getElementById("startGame");
    document.body.removeChild(startArea);
    canvas = document.createElement("canvas");
    canvas.id = "canvas";
    canvas.width = 600;
    canvas.height = 760;
    document.body.insertBefore(canvas, document.body.childNodes[0]);
    
    //Inserting assests
    const ZetaScoutImg = document.createElement("img");
    ZetaScoutImg.id = "ZetaScout1";
    ZetaScoutImg.src = "assets/images/ZetaScout.png";
    ZetaScoutImg.alt = "ZetaScout";
    document.body.appendChild(ZetaScoutImg);

    const SpaceShipImg = document.createElement("img");
    SpaceShipImg.id = "player";
    SpaceShipImg.src = "assets/images/SpaceShip.png";
    SpaceShipImg.alt = "SpaceShip";
    document.body.appendChild(SpaceShipImg);

    const BetaStrikerImg = document.createElement("img");
    BetaStrikerImg.id = "BetaStriker1";
    BetaStrikerImg.src = "assets/images/BetaStriker.png";
    BetaStrikerImg.alt = "BetaStriker";
    document.body.appendChild(BetaStrikerImg);

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
}





class Laser {
    constructor(game) {
        this.game = game;
        this.x = 0;
        this.y = 0;
        this.height = this.game.height - 50;
    }
    render(context) {
        this.x = this.game.player.x + this.game.player.width * 0.5;
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
                    boss.hit(this.damage);
                }
            })           
        }
    }
}

class bigLaser extends Laser {
    constructor(game) {
        super(game)
        this.width = 40;
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
        this.width = 200;
        this.height = 200;
        this.x = this.game.width * 0.5 - this.width * 0.5;
        this.y = this.game.height - this.height;
        this.speed = 5;
        this.lives = 3;
        this.maxLives = 10;
        this.image = document.getElementById('player');
        this.SmallLaser = new bigLaser(this.game);
        this.energy = 50;
        this.maxEnergy = 100;
        this.cooldown = false;
    }
    draw(context) {
        context.fillRect(this.x + 53, this.y + 40, this.width - 101, this.height + 360);
        context.drawImage(this.image, this.x, this.y, this.width, this.height);
        if (this.game.keys.indexOf('f') > -1) {
            this.SmallLaser.render(context);
        }
    }
    update() {
        //energy
        if (this.energy < this.maxEnergy) this.energy += 0.05;
        if (this.energy < 1) this.cooldown = true;
        else if (this.energy > this.maxEnergy * 0.2) this.cooldown = false;

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
        if (projectile) projectile.start(this.x + this.width/2, this.y);
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
        this.height = this.game.enemySize;
        this.positionX = positionX;
        this.positionY = positionY;
        this.x = 0;
        this.y = 0;
        this.markedforDeletion = false;
    }
    draw(context) {
        context.strokeRect(this.x, this.y, this.width, this.height);
        context.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
    update(x, y) {
        this.x = x + this.positionX;
        this.y = y + this.positionY;
        // check collision enemies - projectiles
        this.game.projectilesPool.forEach(projectile => {
            if (!projectile.free && this.game.checkCollision(this, projectile)){
                this.hit(1);
                projectile.reset();
            }
        });
        if (this.lives < 1) {
            this.markedforDeletion = true;
            if (!this.game.gameOver) this.game.score += this.maxLives;
        }
        // check collision enemies - player
        if (this.game.checkCollision(this, this.game.player)) {
            this.markedforDeletion = true;
            if (!this.game.gameOver && this.game.score > 0) this.game.score--;
            this.game.player.lives--;

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

class Boss {
    constructor(game, bossLives){
        this.game = game;
        this.width = 300;
        this.height = 300;
        this.x = this.game.width * 0.5 - this.width * 0.5;
        this.y = -this.height;
        this.speedX = Math.random() < 0.5 ? -1 : 1;
        this.speedY = 0;
        this.lives = bossLives;
        this.maxLives = this.lives;
        this.markedforDeletion = false;
        this.image = document.getElementById('BossAlien1');
        
    }
    draw(context) {
        //context.fillRect(this.x + 53, this.y + 40, 99, 110);
        context.strokeRect(this.x + 45, this.y + 90, this.width - 75, this.height - 200);
        context.drawImage(this.image, this.x, this.y, this.width, this.height);
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
            }
        })

        // collision detection boss/player
        if (this.game.checkCollision(this, this.game.player) && this.lives >= 1) {
            this.game.gameOver = true;
            this.lives = 0;
        }


        // boss destroyed
        if (this.lives < 1) {
            this.markedforDeletion = true;
            this.game.score += this.maxLives;
            this.game.bossLives += 5;
            if (!this.game.gameOver) this.game.newWave();
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
                let enemyY = y * this.game.enemySize;
                if (Math.random() < 0.5){
                    this.enemies.push(new ZetaScout(this.game, enemyX, enemyY));

                } else {
                    this.enemies.push(new BetaStriker(this.game, enemyX, enemyY));
                }
                
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
        this.enemySize = 200;
        // this.waves.push(new Wave(this));
        this.waveCount = 1;

        this.spriteUpdate = false;
        this.spriteTimer = 0;
        this.spriteInterval = 150;

        this.score = 0;
        this.gameOver = false;

        this.bossArray = [];
        this.bossLives = 10;
        this.restart();

        // event listeners
        window.addEventListener("keydown", e => {
            if (e.key === " " && !this.fired) this.player.shoot();
            this.fired = true;
            if (this.keys.indexOf(e.key) === -1) this.keys.push(e.key);
            
            if (e.key === 'r' && this.gameOver) this.restart();
        });
        window.addEventListener("keyup", e => {
            this.fired = false;
            const index = this.keys.indexOf(e.key);
            if (index > -1) this.keys.splice(index, 1);
        });
    }
    render(context, deltaTime) {
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
        for (let i = 0; i < this.player.maxLives; i++) {
            context.strokeRect(20 + 20 * i, 100, 10, 15);
        }
        for (let i = 0; i < this.player.lives; i++) {
            context.fillRect(20 + 20 * i, 100, 10, 15);
        }
        // energy
        context.save();
        this.player.cooldown ? context.fillStyle = 'red' : context.fillStyle = 'blue';
        for (let i = 0; i < this.player.energy; i++) {
            context.fillRect(20 + 2 * i, 130, 2, 15)
        }
        context.restore()
        if (this.gameOver) {
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
            this.bossArray.push(new Boss(this, this.bossLives));
        } else {
            if (Math.random() < 0.5 && this.columns * this.enemySize < this.width * 0.8) {
                this.columns++;
            } else if (this.rows * this.enemySize < this.height * 0.6) {
                this.rows++;
            }
            this.waves.push(new Wave(this));
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
        //this.waves.push(new Wave(this));
        this.bossArray.push(new Boss(this, this.bossLives));
        this.waveCount = 1;

        this.score = 0;
        this.gameOver = false;
    }
}