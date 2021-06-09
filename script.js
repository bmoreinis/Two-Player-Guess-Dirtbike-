function playDirtBike(){
  var guess = 0;
  var done1 = false;
  var done2 = false;
  var winner = "";
  var player1 = prompt("Player 1 name?");
  var player2 = prompt("Player 2 name?");
  var dirtbikes1 = Math.floor(Math.random() * 15) + 1;
  var dirtbikes2 = Math.floor(Math.random() * 15) + 1;
  play();

  function play() {
    alert("Dirtbike Race! There are 15 bikes.");
    var done = false;
    while (done == false) {
      done = playerGuess(player1,dirtbikes1);
      if (done == true) {
        endGame(player1);
      }
      else {
        done = playerGuess(player2,dirtbikes2);
        if (done == true) {
          endGame(player2);
        }
      }
    }
  }

  function playerGuess(player,dirtbikes) {
    var guess = prompt(player + ": How many bikes am I thinking of?");
    if (dirtbikes == guess) {
      alert("You got it right!");
      return true;
    }
    else {
      if (dirtbikes > guess) alert("Guess higher!");
      else alert("Guess lower!");
      return false;
    }
  }

  function endGame(player){
    alert(player + " won the race!");
    localStorage.setItem("winner", player);
    window.location.href = "bike.html";
  }
}