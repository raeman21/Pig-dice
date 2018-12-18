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
//UI logic


//Business Logic

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
  else if (num == 1) {
    (totalScore === 0).reset

  }

}
var scorerOne = 0;
var scorerTwo = 0;
var player = 0;

function next() {
  if (player == 0) {
    totalScore = totalScore + scorerOne;
    document.getElementById("scoreOne").value = "You rolled" + totalScore;
    player = 1;
  } else if (player == 1) {
    totalScore = totalScore + scorerTwo;
    document.getElementById("scoreTwo").value = "You rolled" + totalScore;
    totalScore = 0;
  }
    else if (scoreOne == 100){
      alert("player1+wins!")
  }
    else if(scoreTwo == 100 ){
      alert("player2+wins!")
  }
}
//UI logic

$(document).ready(function(){
  $("#p1").click(function(){
    $(".button").hide()
    $("#name-0").show()
  });
  $("#p2").click(function(){
    $(".button").hide()
    $("#name-1").show()
  });
})
