var userScore = 0;
var questionIndex = 0;
var currentTime = document.querySelector("#time")
var questionDiv = document.querySelector("#questions")
var wrapper = document.querySelector(".wrapper")
var remainingSeconds = 100;
var holdInterval;
var penalty = 10;
var choicesEL = document.querySelector("#choices");
var startBtn = document.querySelector("#start")
var startScreen = document.querySelector("#start-screen")
var qTitleEl = document.querySelector("#question-title")

var questions = [

    {
        questionText: "Commonly used data types DO NOT include",
        choice:["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        questionText: "The condition in an if / else statement is enclosed with___.",
        choice: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        questionText: "String values must be enclosed within ____ when being assigned to variables.",
        choice: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "quotes"
    },
    {
        questionText: "A very useful tool used during development and debugging for pringit content to the debugger is:",
        choice: ["Javacript", "terminal/bash", "for loops", "console log"],
        answer: "console log"
    },
];

function startQuiz() {
    startScreen.classList.add("hide")
    questionDiv.classList.remove("hide")
    holdInterval = setInterval(function () {
        remainingSeconds--;
        currentTime.textContent = remainingSeconds;

        if (remainingSeconds <= 0) {
            clearInterval(holdInterval);
            allDone();
            currentTime.textContent = "Time's up!";
        }
    }, 1000);
    render()
}

function render() {

    qTitleEl.textContent = questions[questionIndex].questionText;

    choicesEL.innerHTML = "";
    
    questions[questionIndex].choice.forEach(function (newItem){
        var listItem = document.createElement("li");
        listItem = document.createElement("li");
        listItem.textContent = newItem;
        questionDiv.appendChild(createUl);
        createUl.appendChild(listItem);

        
    })
}





startBtn.addEventListener("click", startQuiz)

// function displayQuestion() {
//     qTitleEl.textContent = questions[questionIndex].questionText; // displays the question
//     var currentQuestion = questions[questionIndex];
//     var choiceEls = [choiceOneEl, choiceTwoEl, choiceThreeEl, choiceFourEl];
//     for (var i = 0; i < choiceEls.length; i++) {
//         choiceEls[i].textContent = currentQuestion.choices[i];
//         choiceEls[i].addEventListener("click", checkAnswer); //adds the event listener to each choice element
//     }
// }

// function render(){
//     var currentQuestion = questions.questionText[questionIndex];
//     qTitleEl.textContent = currentQuestion.text;
//     choice.innerHTML = "";
//     currentQuestion.choicesEL.forEach(choice => {
//       var choiceButton = document.createElement("button");
//       choiceButton.textContent = choice;
//       choiceButton.addEventListener("click", () => {
//         checkAnswer(choice, currentQuestion.answer);
//       });
//       choice.appendChild(choiceButton);
//     });
    
// }