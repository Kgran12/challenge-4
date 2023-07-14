// var quizSettings = {
//     duration: 75, 
//     penalty: 10, 
//     questions: [
//         {
//             text: "Commonly used data types DO NOT include",
//             choices: ["strings", "booleans", "alerts", "numbers"],
//             answer: "alerts"
//         },
//         {
//             text: "The condition in an if / else statement is enclosed with___.",
//             choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
//             answer: "all of the above"
//         },
//         {
//             text: "String values must be enclosed within ____ when being assigned to variables.",
//             choices: ["commas", "curly brackets", "quotes", "parenthesis"],
//             answer: "quotes"
//         },
//         {
//             text: "A very useful tool used during development and debugging for pringit content to the debugger is:",
//             choices: ["Javacript", "terminal/bash", "for loops", "console log"],
//             answer: "console log"
//         },
    
//     ]
// };

// var startButton = document.querySelector("#start");
// var quizContainer = document.querySelector("#questions");
// var questionText = document.querySelector("#question-title");
// var choicesContainer = document.querySelector("#choices");
// var feedbackText = document.querySelector("#feedback");
// var submitContainer = document.querySelector("#submit");
// var initialsInput = document.querySelector("#initials");
// var submitButton = document.querySelector("#submit");
// var currentTime = document.querySelector("#time")
// var startScreen = document.querySelector("#start-screen")
// var remainingSeconds = 100;
// var holdInterval;
// var penalty = 10;
// var userScore = 0;
// var questionIndex = 0;
// // var wrapper = document.querySelector(".wrapper")

// var currentQuestionIndex;
// var timeLeft;
// var score;

// function startQuiz() {
//     startScreen.classList.add("hide")
//     questionDiv.classList.remove("hide")
//     var holdInterval = setInterval(function () {
//         remainingSeconds--;
//         currentTime.textContent = remainingSeconds;
//         if (remainingSeconds <= 0) {
//             clearInterval(holdInterval);
//             allDone();
//             currentTime.textContent = "Time's up!";
//         }
//     }, 1000);
//     displayQuestion();
// }

// function displayQuestion() {

//     var currentQuestion = quizSettings.questions[currentQuestionIndex];

//     questionText.textContent = currentQuestion.text;
//     choicesContainer.innerHTML = "";
//     currentQuestion.choices.forEach(choice => {
//         var choiceButton = document.createElement("button");
//         choiceButton.textContent = choice;
//         choiceButton.addEventListener("click", () => {
//             checkAnswer(choice, currentQuestion.answer);
//         });
//         choicesContainer.appendChild(choiceButton);
//     });
// }
// startButton.addEventListener("click", startQuiz);