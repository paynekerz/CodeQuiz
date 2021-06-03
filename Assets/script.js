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
    //fuck this bullshit
    questions.answer.forEach(answer => {
        const btn = document.createElement("button")
        btn.innerText = answer.text
        btn.classList.add("btn")
        if (answer.correct) {
            btn.dataset.correct = answer.correct
        }
        btn.addEventListener("click", chosenAnswer)
        answerBtnEl.appendChild(btn)
    })
}

//array for the questions 
const questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answer: [
            {text: "a) <javascript>",correct: false},
            {text: "b) <js>",correct: false},
            {text: "c) <script>", correct: true},
            {text: "d) <scripting>",correct: false},
        ]
    },
    {
        question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
        answer: [
            {text: "a) <script src='xxx.js'>",correct: true},
            {text: "b) <script name='xxx.js'>",correct: false},
            {text: "c) <script href='xxx.js'>",correct: false},
            {text: "d) <script value='xxx.js'>",correct: false},
        ]
    },
    {
        question: "How do you call a function named 'myFunction'?",
        answer: [
            {text: "a) call myFunction()",correct: false},
            {text: "b) myFunction()",correct: true},
            {text: "c) call function myFunction",correct: false},
            {text: "d) Call.myFunction()",correct: false},
        ]
    },
    {
        question: "How do you create a function?",
        answer: [
            {text: "a) function:myFunction()",correct: false},
            {text: "b) function=myFunction()",correct: false},
            {text: "c) function myFunction()",correct: true},
            {text: "d) myFunction():function",correct: false},
        ]
    }
]