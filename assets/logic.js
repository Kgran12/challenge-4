var questions = [

    {
        question: "Commonly used data types DO NOT include",
        choice: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        question: "The condition in an if / else statement is enclosed with___.",
        choice: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        choice: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "quotes"
    },
    {
        question: "A very useful tool used during development and debugging for pringit content to the debugger is:",
        choice: ["Javacript", "terminal/bash", "for loops", "console log"],
        answer: "console log"
    },
];

var timer = document.getElementById("time");
var timesUp = document.getElementById("timesUp");

var startDiv = document.getElementById("start");
var startQuizBtn = document.getElementById("start-quiz-button");

var questionDiv = document.getElementById("questionDiv");
var questionTitle = document.getElementById("questionTitle");
var choiceA = document.getElementById("btn0");
var choiceB = document.getElementById("btn1");
var choiceC = document.getElementById("btn2");
var choiceD = document.getElementById("btn3");
var answerCheck = document.getElementById("answerCheck");

var summary = document.getElementById("summary");
var submitIntBtn = document.getElementById("submitIntBtn");
var initialsInput = document.getElementById("initials");
var everything = document.getElementById("everything");

var highScoreDiv = document.getElementById("highScoreDiv");
var finalScore = document.getElementById("finalScore");

var backButton = document.getElementById("backButton");
var clearScores = document.getElementById("clearScores");
var viewHighScore = document.getElementById("highScoresDiv");
var highScoresList = document.getElementById("highScoresList");
var endScreen = document.getElementById("end-screen");


var correctAns = 0;
var questionNum = 0;
var scoreResult;
var questionIndex = 0;

var totalTime = 120;

function newQuiz() {
    console.log("newQuiz")
    questionIndex = 0;
    totalTime = 120;
    timer.textContent = totalTime;
    initialsInput.textContent = "";

    startDiv.classList.add("hide")
    questionDiv.classList.remove("hide")

    var startTimer = setInterval(function () {
        totalTime--;
        timer.textContent = totalTime;
        if (totalTime <= 0) {
            clearInterval(startTimer);
            if (questionIndex < questions.length - 1) {
                gameOver();
            }
        }
    }, 1000);
    showQuiz();

}

function showQuiz() {
    nextQuestion();
}

function nextQuestion() {
    questionTitle.textContent = questions[questionIndex].question;
    choiceA.textContent = questions[questionIndex].choice[0];
    choiceB.textContent = questions[questionIndex].choice[1];
    choiceC.textContent = questions[questionIndex].choice[2];
    choiceD.textContent = questions[questionIndex].choice[3];
}

function checkAnswer(answer) {

    if (questions[questionIndex].answer === questions[questionIndex].choice[answer]) {
        correctAns++;
        answerCheck.textContent = "Correct!";
    } else {
        totalTime -= 15;
        timer.textContent = totalTime;
        answerCheck.textContent = "Wrong! The correct answer is: " + questions[questionIndex].answer;
    }

    questionIndex++;
    if (questionIndex < questions.length) {
        nextQuestion();
    } else {
        gameOver();
    }
}

function chooseA() { checkAnswer(0); }

function chooseB() { checkAnswer(1); }

function chooseC() { checkAnswer(2); }

function chooseD() { checkAnswer(3); }

function gameOver() {
    startDiv.classList.add("hide")
    questionDiv.classList.add("hide")
    timesUp.classList.remove("hide")
    endScreen.classList.remove("hide")

    finalScore.textContent = correctAns;
}

function storeHighScores(event) {
    event.preventDefault();

    if (initialsInput.value === "") {
        alert("No Initials Entered");
        return;
    }

    var savedHighScores = localStorage.getItem("high scores");
    var scoresArray;

    if (savedHighScores === null) {
        scoresArray = [];
    } else {
        scoresArray = JSON.parse(savedHighScores)
    }

    var userScore = {
        initials: initialsInput.value,
        score: finalScore.textContent
    };
    console.log(userScore);
    scoresArray.push(userScore);

    var scoresArrayString = JSON.stringify(scoresArray);
    window.localStorage.setItem("high scores", scoresArrayString);
    highScoresDiv.classList.remove("hide");
    showHighScores();

}

var i = 0;
function showHighScores() {

    var savedHighScores = localStorage.getItem("high scores");

    if (savedHighScores === null) {
        return;
    }
    console.log(savedHighScores);

    var storedHighScores = JSON.parse(savedHighScores);
    for (; i < storedHighScores.length; i++) {
        var eachNewHighScore = document.createElement("p");
        eachNewHighScore.innerHTML = storedHighScores[i].initials + ": " + storedHighScores[i].score;
        highScoresList.appendChild(eachNewHighScore);
        console.log(storedHighScores[i].initials)
    }
}

startQuizBtn.addEventListener("click", newQuiz);
choiceA.addEventListener("click", chooseA);
choiceB.addEventListener("click", chooseB);
choiceC.addEventListener("click", chooseC);
choiceD.addEventListener("click", chooseD);

submitIntBtn.addEventListener("click", function (event) {
    storeHighScores(event);
});

viewHighScore.addEventListener("click", function (event) {
    showHighScores(event);
});

backButton.addEventListener("click", function () {
    startDiv.style.display = "block";
    highScoreSection.style.display = "none";
});

clearScores.addEventListener("click", function () {
    window.localStorage.removeItem("high scores");
    highScoresList.innerHTML = "High Scores Cleared!";
    highScoresList.setAttribute("style", "font-family: 'Archivo', sans-serif; font-style: italic;")
});