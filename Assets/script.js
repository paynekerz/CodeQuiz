const startBtn = document.getElementById("start-btn")
const scoreBtn = document.getElementById("score-btn")
const quizContainerEl = document.getElementById("quiz-container")
const timerContainerEl = document.getElementById("timer-container")
const questionEl = document.getElementById("questions")
const answerBtnEl = document.getElementById("li-btn")
const nameEl = document.getElementById("name-entry")
const highscoreEl = document.getElementById("highscores")
const finalScore = document.getElementById("score")
const submitBtn = document.getElementById("submit-btn")


startBtn.addEventListener("click", startQuiz)
submitBtn.addEventListener("click", showBoard)

//var for timer 
var timerElement= document.querySelector(".timer-count");
var timer, timerCount;
var quizDone = false
var questionIndex= 0;

var score;
var highscore= [];

//timer
function quizTimer() {
    timer= setInterval(function(){
        timerCount--;
        timerElement.textContent = timerCount;
            //test if quiz is finished
            if (quizDone || timerCount <= 0) {
                clearInterval(timer);
                quizEnd();
            }
    }, 1000);
}

function startQuiz() {
    startBtn.classList.add("hidden")
    scoreBtn.classList.add("hidden")
    quizContainerEl.classList.remove("hidden")
    timerContainerEl.classList.remove("hidden")
    quizDone = false
    timerCount = 60
    score = 0
    quizTimer()
    displayQuestion()
}

function displayQuestion() {
    //pulls questions from the array
    questionEl.innerText = questions[questionIndex].question
    //removes the previous question
    document.querySelector("#choices").innerHTML = ""
    questions[questionIndex].answer.forEach(function(item){
        var button = document.createElement("button")
        button.innerText = item
        button.setAttribute("class", "btn")
        button.addEventListener("click", checkAnswer)
        document.querySelector("#choices").appendChild(button)
    })
}

function checkAnswer(event){
    var answer = event.target.textContent
    if (answer === questions[questionIndex].correctAnswer){
        score += 25
    }
    else {
        timerCount -= 20
    }
    questionIndex++
    if (questionIndex === questions.length){
        quizDone = true;
        quizEnd()
    }
    else {
        displayQuestion()
    }
}

function quizEnd(){
    quizContainerEl.classList.add("hidden")
    timerContainerEl.classList.add("hidden")
    nameEl.classList.remove("hidden")
    finalScore.innerText = "Your Score: " + score
}

function showBoard(){
    var name = document.getElementById("nametag").value
    var entry = name + " " + score
    nameEl.classList.add("hidden")
    //if storage is empty then it save an empty array
    if(localStorage.getItem("scoreBoard") == null){
        localStorage.setItem("scoreBoard", "[]")
    }
    var oldHighscores = JSON.parse.localStorage.getItem("scoreBoard");
    oldHighscores.push(entry)

    localStorage.setItem("scoreBoard", JSON.stringify(oldHighscores));
    
}

//array for the questions 
const questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answer: [
             "<javascript>",
             "<js>",
             "<script>",
             "<scripting>"
        ],
        correctAnswer: "<script>"
    },
    {
        question: "What is the correct JavaScript syntax to write 'Hello World'?",
        answer: [
             "response.write('Hello World')",
             "'Hello World'",
             "document.write('Hello World')",
             "('Hello World')"
        ],
        correctAnswer: "document.write('Hello World')"
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        answer: [
             "Both the <head> section and the <body> section are correct",
             "The <body> section",
             "The <head> section",
             "The <footer> section"
        ],
        correctAnswer: "Both the <head> section and the <body> section are correct"
    },
    {
        question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
        answer: [
             "<script src='xxx.js'>",
             "<script name='xxx.js'>",
             "<script href='xxx.js'>",
             "<script 'xxx.js'>"
        ],
        correctAnswer: "<script src='xxx.js'>"
    },
]