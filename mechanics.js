// Global variables
let ctx, background, CANVAS_WIDTH, CANVAS_HEIGHT;
let gameSpeed = 5;
let y = 0;
let y2 = 1333;



// This function is to help initialize the background music  

function InitialGameStart() {
    document.getElementById("InitialStart").style.display = "block";
    document.getElementById("play-button").style.display = "none";
    document.getElementById("game-overlay").style.display = "none";
    //document.getElementById("BackgroundMusic").play();
}

// These next 7 functions contorl the how-to-play page

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
    document.getElementById("SuperWeaponInstructions").style.display = "none"
    document.getElementById("ShipControl").style.display = "none"
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
    GameCanvas.start(); // refers to the object for creating the canvas
}

// Creating the canvas element into HTML and setting dimensions and uploading the parallex background
var GameCanvas = {
    canvas: document.createElement("canvas"),
    start: function () {
        this.canvas.id = "gameCanvas";
        this.canvas.width = 600;
        this.canvas.height = 760;
        CANVAS_WIDTH = this.canvas.width;
        CANVAS_HEIGHT = this.canvas.height;
        ctx = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        background = new Image();
        background.src = 'lol.png';
        animate();
    }
};

// animating the parallex background 
function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.drawImage(background, 0, y);
    ctx.drawImage(background, 0, y2);
    if (y > 1333) y = -1333 + y2 + gameSpeed;
    else y += gameSpeed;
    if (y2 > 1333) y2 = -1333 + y + gameSpeed;
    else y2 += gameSpeed;
    requestAnimationFrame(animate);
}
