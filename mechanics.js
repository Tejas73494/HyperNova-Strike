var ClickMenu;

// This function is to help initialse the background music  


function InitialGameStart() {
    document.getElementById("InitialStart").style.display = "block";
    document.getElementById("play-button").style.display = "none";
    document.getElementById("game-overlay").style.display = "none";
    //document.getElementById("BackgroundMusic").play();
}

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function() {
      this.sound.play();
    };
    this.stop = function() {
      this.sound.pause();
      this.sound.currentTime = 0;
    };
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

}



function startGame() {
    document.getElementById("BackgroundMusic").pause();
}