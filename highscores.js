window.onload = function () {
  let userInitials = localStorage.getItem("Initials");
  let userHighscore = localStorage.getItem("Score");
  let highscoresOL = document.getElementById("highscores");
  let userInitialsCaps = userInitials.toUpperCase();
  highscoresOL.innerHTML = `${userInitialsCaps} = ${userHighscore}`;
};