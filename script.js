var startQuiz = document.getElementById("start-screen");
var questionDiv = document.getElementById("questions");
var startBtn = document.getElementById("start");
var questionTitle = document.getElementById("question-title");
var choicesDiv = document.getElementById("choices");
var currentQuestionIndex = 0;
var score = 0;
var seconds = 75;

var questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts",
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses",
  },
  {
    title: "Arrays in Javascript can be used to store ____.",
    choices: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
    answer: "all of the above",
  },
  {
    title:
      "String values must be enclosed within ____ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parenthesis"],
    answer: "quotes",
  },
  {
    title:
      "A very useful tool for used during development and debugging for printing content to the debugger is:",
    choices: ["Javascript", "terminal / bash", "for loops", "console log"],
    answer: "console log",
  },
];

startBtn.addEventListener("click", function() {
  $seconds = document.querySelector("#countdown");
  (function countdown() {
    $seconds.textContent = seconds;
    if (seconds-- > 0) setTimeout(countdown, 1000);
  })();
});

function startGame() {
  startBtn.addEventListener("click", function () {
    startQuiz.classList.add("hide");
    questionDiv.classList.remove("hide");
    getQuestion();
  });
}

function getQuestion() {
  var currentQuestion = questions[currentQuestionIndex];

  questionTitle.textContent = currentQuestion.title;

  choicesDiv.innerHTML = "";

  currentQuestion.choices.forEach(function (choice, i) {
    var choicesBtn = document.createElement("button");
    choicesBtn.setAttribute("class", "choice");
    choicesBtn.setAttribute("value", choice);
    choicesBtn.textContent = choice;
    choicesDiv.appendChild(choicesBtn);
    choicesBtn.addEventListener("click", checkAnswer);
  });
}

function checkAnswer(e) {
  let element = e.target;

  if (element.textContent == questions[currentQuestionIndex].answer) {
    let correctAnswerDiv = document.createElement("div");
    correctAnswerDiv.textContent = "Correct answer, good job!";
    correctAnswerDiv.setAttribute("class", "correctAnswer");
    choicesDiv.appendChild(correctAnswerDiv);
    score++;
    nextQuestion();
  } else {
    console.log("Wrong Answer");
    let correctAnswerDiv = document.createElement("div");
    correctAnswerDiv.textContent = "Wrong answer, nice try!";
    correctAnswerDiv.setAttribute("class", "wrongAnswer");
    choicesDiv.appendChild(correctAnswerDiv);
    seconds -= 10;
    nextQuestion();
  }
}

function nextQuestion() {
  currentQuestionIndex++;
  let nextQ = questions[currentQuestionIndex];

  if (currentQuestionIndex == 5) {
    gameOver();
  } else {
    questionTitle.textContent = nextQ.title;

    choicesDiv.innerHTML = "";

    nextQ.choices.forEach(function (choice, i) {
      var choicesBtn = document.createElement("button");
      choicesBtn.setAttribute("class", "choice");
      choicesBtn.setAttribute("value", choice);
      choicesBtn.textContent = choice;
      choicesDiv.appendChild(choicesBtn);
      choicesBtn.addEventListener("click", checkAnswer);
    });
  }
}

function gameOver() {
  let gameOver = document.getElementById("end-screen");
  gameOver.classList.remove("hide");
  document.getElementById("final-score").innerHTML = score + "/5";
  let timer = document.getElementById('countdown');
  timer.classList.add('hide')
}

startGame();

document.getElementById("submit").addEventListener("click", function () {
  let userScore = document.getElementById("final-score").textContent;
  var initials = document.getElementById("initials").value;
  localStorage.setItem("Score", userScore);
  localStorage.setItem("Initials", initials);
});
