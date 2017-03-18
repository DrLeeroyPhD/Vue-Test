var app = new Vue({
  el: '#app',
  data: {
    opponentAlive: true,
    playerAlive: true,
    
    // V-Bind for what will show in the menu
    display: {
      menu: true,
      attacks: false,
      items: false
    },
    // Opponent Stats
    opponent: {
      health: 100,
      attacks: {
        confuse: {
          name: 'Confuse',
          damage: 35
        },
        bug: {
          name: 'Bug',
          damage: 25
        }
      },
      level: 40
    },
    // Player Stats
    player: {
      health: 100,
      attacks: {
        readDocs: {
          name: 'Read Docs',
          damage: 25
        },
        youtube: {
          name: 'YouTube',
          damage: 40
        },
        readBook: {
          name: 'Read Book',
          damage: 30
        },
        google: {
          name: 'Google',
          damage: 35
        }
      },
      level: 42
    },
    // Likely to be removed?
    // Toying around with where to keep the menu options
    menu: [
      {option: 'Attack'},
      {option: 'Pokemon'},
      {option: 'Item'},
      {option: 'Run'}
    ]
  }
})

var menu = document.getElementById('menu');
var attackButton = document.getElementById('Attack');
var pokemonButton = document.getElementById('Pokemon');
var itemButton = document.getElementById('Item');
var runButton = document.getElementById('Run');
var dialogueBox = document.getElementById('dialogue');

// Check if a menu option is clicked, kick off function accordingly
attackButton.addEventListener('click', showAttacks);
pokemonButton.addEventListener('click', pokemonDialogue);
runButton.addEventListener('click', runDialogue);
itemButton.addEventListener('click', itemDialogue);

// Open attacks menu
function showAttacks(){
  if(app.opponentAlive && app.playerAlive){
    dialogueBox.innerHTML = "Player and Enemy Are Alive";
  }
}

function pokemonDialogue(){
  dialogueBox.innerHTML = "Isn't this Copyrighted or something?";
}

function runDialogue(){
  dialogueBox.innerHTML = "There is no escaping destiny!!!";
}

function itemDialogue(){
  dialogueBox.innerHTML = "";
}


// Check if Player is Alive after being attacked
function isPlayerAlive(){
  if(app.player.health < 1){
    app.playerAlive = false;
  } else{
    app.playerAlive = true;
  }
}

// Check if Opponent is Alive after being attacked
function isOpponentAlive(){
  if(app.opponent.health < 1){
    app.opponentAlive = false;
  } else{
    app.opponentAlive = true;
  }
}