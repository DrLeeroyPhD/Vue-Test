var app = new Vue({
  el: '#app',
  data: {
    opponentAlive: true,
    playerAlive: true,
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

attackButton.addEventListener('click', showAttacks);
pokemonButton.addEventListener('click', pokemonDialogue);
runButton.addEventListener('click', runDialogue);
itemButton.addEventListener('click', itemDialogue);

function showAttacks(){
  console.log('Success!');
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