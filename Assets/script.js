const startBtn = document.getElementById("start-btn")
const scoreBtn = document.getElementById("score-btn")
const quizContainerEl = document.getElementById("quiz-container")
const timerContainerEl = document.getElementById("timer-container")
const questionEl = document.getElementById("questions")
const answerBtnEl = document.getElementById("li-btn")
startBtn.addEventListener("click", startQuiz)

//var for timer 
var timerElement= document.querySelector(".timer-count");
var timer, timerCount;
var quizDone = false


var score;
let questionShuffle, currentQuestion;

//timer
function quizTimer() {
    timer= setInterval(function(){
        timerCount--;
        timerElement.textContent = timerCount;
        if(timerCount >= 0){
            //test if quiz is finished
            if (quizDone && timerCount > 0) {
                clearInterval(timer);
            }
        }
        if (timerCount === 0) {
            clearInterval(timer);
        }
    }, 1000);
}

function startQuiz() {
    startBtn.classList.add("hidden")
    scoreBtn.classList.add("hidden")
    quizContainerEl.classList.remove("hidden")
    timerContainerEl.classList.remove("hidden")
    questionShuffle = questions
    currentQuestion = 0
    quizDone = false
    timerCount = 90
    score = 0
    quizTimer()
    nextQuestion()
}

function nextQuestion() {
    displayQuestion(questionShuffle[currentQuestion])
}

function displayQuestion(questions) {
    //pulls questions from the array
    questionEl.innerText = questions.question
    

}

//array for the questions 
const questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answer: {
            a: "<javascript>",
            b: "<js>",
            c: "<script>",
            d: "<scripting>"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the correct JavaScript syntax to write 'Hello World'?",
        answer: {
            a: "response.write('Hello World')",
            b: "'Hello World'",
            c: "document.write('Hello World')",
            d: "('Hello World')"
        },
        correctAnswer: "c"
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        answer: {
            a: "Both the <head> section and the <body> section are correct",
            b: "The <body> section",
            c: "The <head> section",
            d: "The <footer> section"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
        answer: {
            a: "<script src='xxx.js'>",
            b: "<script name='xxx.js'>",
            c: "<script href='xxx.js'>",
            d: "<script 'xxx.js'>"
        },
        correctAnswer: "a"
    },
]