var dice=""


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

}
