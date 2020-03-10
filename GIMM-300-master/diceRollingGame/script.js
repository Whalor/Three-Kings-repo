//auto load a score on load and make dice be those values, have a play button that collapses and the dice reset to 1's.
//on play count the number of rolls it takes to beat the computer's auto load score.  
//Pop up a modal when you beat the computer's score, and advance to level two
//In the next level, the moves you are allowed are reduced by 1.
//Each time you get a score that is the difference between your score and the computer's score multiplied by the amount of moves it took you to beat the computer

//global variables:
var pictureRef = "";
var numArray = [1,1];
var gameOver = false;
var playerTurn = true;
var enemyTurn = false;
var playerHealthDisp;
var enemyHealthDisp;
var roundDisp;
var playerHealth = 30;
var enemyHealth = 15;
var rounds = 0;

function gO(string){
  //popup modal
  console.log("Game over");

  showGameOver(string);
  restart();
  updateDisp();
}

function restart(){
resetDice();
numArray = [1,1];
pictureRef = "";
gameOver = false;
enemyTurn = false;
playerTurn = true;
playerHealthDisp;
enemyHealthDisp;
roundDisp;
playerHealth = 30;
enemyHealth = 15;
rounds = 0;

}

/*function roundLost() {
  if (playerHealth <= 0){
    
    return true;
  }
  else return false;
}
*/
function loadGame(){
  updateDisp();
}

function enemyRoll(){
  function rollDamage(indexName, placeholderName){
    var num = roll();
    numArray[indexName] = num;
    var newDice = document.getElementById(placeholderName);
    newDice.src = pictureRef;
    getPlayerHealth();
    nextRound();
    updateDisp();
  }
}

function nextRound(){
  //var roundL = roundLost();
  if(playerHealth <= 0){
    gO("Nice try kid.");
    resetDice();
    updateDisp();
  }
  else if (playerHealth >= 1 && enemyHealth >= 1){
    rounds++;
    console.log(rounds)
    showModal("Next round!"), 
     ("Start Round: " + (rounds));
    resetDice();
    updateDisp();
  }
  else if (enemyHealth <= 0){
    gO("You win!");
    resetDice();
    updateDisp();
  }
}
function resetPlayerScore(){
  numArray = [1,1,1,1,1,1];
}
function showModal(modalTitle, info){
  document.getElementById("modalTitle").innerHTML = modalTitle;
  document.getElementById("runningPlayerScore").innerHTML = "Player health: " + playerHealth;
  document.getElementById("runningComputerScore").innerHTML = "Enemy health: " + enemyHealth;
  document.getElementById("additionalInfo").innerHTML = info;
  $("#modalDisp").modal()
}
function showGameOver(modalTitle){
  document.getElementById("modalTitle2").innerHTML = modalTitle;
  document.getElementById("runningPlayerScore2").innerHTML = "Player Health: " + playerHealth;
  document.getElementById("runningComputerScore2").innerHTML = "Enemy Health: " + enemyHealth;
  $("#modalDisp2").modal()
}

function updateDisp(){
  playerHealhtDisp = document.getElementById("playerHealthDisp").innerHTML = playerHealth;
  //playerHealthDisp.innerHTML = "Player Health: " + playerHealth;
  enemyHealthDisp = document.getElementById("enemyHealthDisp").innerHTML = enemyHealth;
  //enemyHealthDisp.innerHTML = "Enemy Health: " + enemyHealth;
}

function getReferences(){
  playerHealhtDisp = document.getElementById("playerHealthDisp");
  enemyHealthDisp = document.getElementById("enemyHealthDisp");
  roundDisp = document.getElementById("roundDisp");
  rollsLeftDisp = document.getElementById("rollsLeftDisp");
  showModal("Play Game", "Try to beat the computers roll","Each roll decreases your number of rolls left","See if you can last all five rounds!");
}

function getNextNumber(){
  var nextNum = Math.floor(Math.random() * 6 + 1)
  return nextNum;
}


function roll(){
  var num = getNextNumber();
  //update Player Health array:
  var newRef = "";
  switch(num){
    case 1:
      newRef= "d1.png";
      break;
    case 2:
      newRef = "d2.png"
      break;
    case 3:
      newRef = "d3.png"
      break;
    case 4:
      newRef = "d4.png"
      break;
    case 5:
      newRef = "d5.png"
      break;
    case 6:
      newRef = "d6.png"
      break;
    default:
      console.log("value of roll is invalid: " + num);
  }
  
  pictureRef = newRef;
  return num;
}

function rollDamage(indexName, placeholderName){
  var num = roll();
  var num2 = roll();
  numArray[indexName] = num;
  var newDice = document.getElementById(placeholderName);
  newDice.src = pictureRef;
  dealDamage(num);
  console.log(num);
}

function dealDamage(num){
  if (playerTurn){
    enemyHealth -= num;
    nextRound();
    updateDisp();
  }
}

function resetDice(){
  document.getElementById('placeholder1').src = "d1.png";
  document.getElementById('placeholder2').src = "d1.png";
  document.getElementById('placeholder3').src = "d1.png";
  document.getElementById('placeholder4').src = "d1.png";
  document.getElementById('placeholder5').src = "d1.png";
  document.getElementById('placeholder6').src = "d1.png";
 
}