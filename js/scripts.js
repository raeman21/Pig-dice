/*var dice=""


function dice_Roll() {
  this.die = [];
  this.roll = function(roll) {
    this.die = [Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1]
    return this; // for chaining
  }
  this.printDie = function() {
    document.getElementById('#die1').innerHTML = this.die[0];
    document.getElementById('#die2').innerHTML = this.die[1];
  }
  return this;
}

 window.onload=function() {
  document.getElementById("#rollBut").onclick=function() {
    var die = new Dice()
    die.roll().printDie();
  }

}*/
var totalScore = 0;
var num

function rollDice() {
  num = Math.ceil(Math.random() * 6);
}

function die() {
  rollDice();
  if (num != 1) {
    totalScore = totalScore + num
    document.getElementById("results").innerHTML = '' + totalScore;

  }

}
var scorerOne = 0;
var scorerTwo = 0;
var player = 0;

function next() {
  if (player == 0) {
    totalScore = totalScore + scorerOne;
    document.getElementById("scoreOne").value = "" + totalScore;
    player = 1;
  } else if (player == 1) {
    totalScore = totalScore + scorerTwo;
    document.getElementById("scoreTwo").value = "" + totalScore;
    player = 0;
  }
  else if (totalScore=>100){
    document.getElementById("name-0")+"wins!"
  }
  else if(totalScore=>100){
    document.getElementById("name-1")+"wins!"
  }
}
