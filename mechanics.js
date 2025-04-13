var ClickMenu;

// This function is to help initialse the background music  


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
    document.getElementById("ShipControl").style.display = "block"
    document.getElementById("SuperWeaponInstructions").style.display = "block"
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
    startArea = document.getElementById("startGame");
    document.body.removeChild(startArea);
    GameCanvas.start()
}
    


// Creating the canvas element into HTML and setting dimensions and background
var GameCanvas = {
    canvas : document.createElement("canvas"),
    start : function() {
    this.canvas.width = 600;
    this.canvas.height = 700;
    this.canvas.id = "gameCanvas";
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    }
}