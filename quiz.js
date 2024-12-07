var htmlQuestions = [
    { question: "What does HTML stand for?", option1: "Hyper Text Markup Language", option2: "Home Tool Markup Language", option3: "Hyperlinks and Text Markup Language", correctAnswer: "Hyper Text Markup Language" },
    { question: "Which HTML element is used for the largest heading?", option1: "<h6>", option2: "<h1>", option3: "<header>", correctAnswer: "<h1>" },
    { question: "What is the correct HTML element for inserting a line break?", option1: "<br>", option2: "<lb>", option3: "<break>", correctAnswer: "<br>" },
    { question: "Which attribute is used to provide an alternative text for an image?", option1: "alt", option2: "title", option3: "src", correctAnswer: "alt" },
    { question: "What is the correct way to make a checkbox in HTML?", option1: "<input type='checkbox'>", option2: "<checkbox>", option3: "<input type='box'>", correctAnswer: "<input type='checkbox'>" },
    { question: "Which HTML tag is used to create an unordered list?", option1: "<ul>", option2: "<ol>", option3: "<list>", correctAnswer: "<ul>" },
    { question: "What does the <title> element define?", option1: "The document's body", option2: "The document's title in the browser toolbar", option3: "The main heading", correctAnswer: "The document's title in the browser toolbar" },
    { question: "Which tag is used to define a hyperlink in HTML?", option1: "<link>", option2: "<href>", option3: "<a>", correctAnswer: "<a>" },
    { question: "What is the correct syntax for adding a background color in HTML?", option1: "<body bg='color'>", option2: "<body style='background-color: color;'>", option3: "<background color='color'>", correctAnswer: "<body style='background-color: color;'>" },
    { question: "How can you make text bold in HTML?", option1: "<strong>", option2: "<b>", option3: "Both <strong> and <b>", correctAnswer: "Both <strong> and <b>" }
];

var cssQuestions = [
    { question: "Which property is used to change the background color?", option1: "background-color", option2: "bgcolor", option3: "color", correctAnswer: "background-color" },
    { question: "How do you add a background color for all <h1> elements?", option1: "h1 {background-color: #FFFFFF;}", option2: "all.h1 {background-color: #FFFFFF;}", option3: "h1.all {background-color: #FFFFFF;}", correctAnswer: "h1 {background-color: #FFFFFF;}" },
    { question: "Which CSS property controls the text size?", option1: "text-style", option2: "text-size", option3: "font-size", correctAnswer: "font-size" },
    { question: "What is the correct CSS syntax for making all the <p> elements bold?", option1: "p {text-size:bold;}", option2: "p {font-weight:bold;}", option3: "p {font:bold;}", correctAnswer: "p {font-weight:bold;}" },
    { question: "How do you display hyperlinks without an underline?", option1: "a {underline:none;}", option2: "a {decoration:no-underline;}", option3: "a {text-decoration:none;}", correctAnswer: "a {text-decoration:none;}" },
    { question: "Which property is used to change the font of an element?", option1: "font-family", option2: "font-weight", option3: "font-style", correctAnswer: "font-family" },
    { question: "How do you make each word in a text start with a capital letter?", option1: "text-transform:capitalize", option2: "text-transform:uppercase", option3: "text-transform:lowercase", correctAnswer: "text-transform:capitalize" },
    { question: "Which property is used to change the left margin of an element?", option1: "margin-left", option2: "margin-right", option3: "padding-left", correctAnswer: "margin-left" },
    { question: "How do you select an element with id 'demo'?", option1: "#demo", option2: ".demo", option3: "demo", correctAnswer: "#demo" },
    { question: "How do you select elements with class name 'test'?", option1: ".test", option2: "#test", option3: "*test", correctAnswer: ".test" }
];

var jsQuestions = [
    { question: "Inside which HTML element do we put the JavaScript?", option1: "<js>", option2: "<scripting>", option3: "<script>", correctAnswer: "<script>" },
    { question: "What is the correct syntax for referring to an external script called 'xxx.js'?", option1: "<script href='xxx.js'>", option2: "<script name='xxx.js'>", option3: "<script src='xxx.js'>", correctAnswer: "<script src='xxx.js'>" },
    { question: "How do you write 'Hello World' in an alert box?", option1: "alertBox('Hello World');", option2: "msgBox('Hello World');", option3: "alert('Hello World');", correctAnswer: "alert('Hello World');" },
    { question: "How do you create a function in JavaScript?", option1: "function myFunction()", option2: "function:myFunction()", option3: "function = myFunction()", correctAnswer: "function myFunction()" },
    { question: "How do you call a function named 'myFunction'?", option1: "call myFunction()", option2: "call function myFunction()", option3: "myFunction()", correctAnswer: "myFunction()" },
    { question: "How to write an IF statement in JavaScript?", option1: "if i = 5", option2: "if i == 5 then", option3: "if (i == 5)", correctAnswer: "if (i == 5)" },
    { question: "How does a WHILE loop start?", option1: "while (i <= 10)", option2: "while i = 1 to 10", option3: "while (i <= 10; i++)", correctAnswer: "while (i <= 10)" },
    { question: "How can you add a comment in JavaScript?", option1: "<!--This is a comment-->", option2: "//This is a comment", option3: "'This is a comment'", correctAnswer: "//This is a comment" },
    { question: "What is the correct way to write a JavaScript array?", option1: "var colors = ['red', 'green', 'blue']", option2: "var colors = 'red', 'green', 'blue'", option3: "var colors = (1:'red', 2:'green', 3:'blue')", correctAnswer: "var colors = ['red', 'green', 'blue']" },
    { question: "How do you round the number 7.25 to the nearest integer?", option1: "Math.round(7.25)", option2: "Math.rnd(7.25)", option3: "round(7.25)", correctAnswer: "Math.round(7.25)" }
];
 
var questions;
var category = localStorage.getItem('quizCategory');
if (category === 'html') {
    questions = htmlQuestions;
} else if (category === 'css') {
    questions = cssQuestions;
} else if (category === 'javascript') {
    questions = jsQuestions;
}
 
var ques = document.getElementById("question");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var button = document.getElementById("btn");
var timer = document.getElementById("timer");
var index = 0;
var score = 0;
var correctAnswers = [];
var min = 2;
var sec = 0;
function displayQuestion() {
 
    document.getElementsByName("answer").forEach(option => {
        option.nextElementSibling.classList.remove('correct', 'wrong');
    });

 
    ques.innerText = questions[index].question;
    option1.innerText = questions[index].option1;
    option2.innerText = questions[index].option2;
    option3.innerText = questions[index].option3;
    button.disabled = true;
    resetTimer();  
}
function nextQuestion() {
    var options = document.getElementsByName("answer");
    var selectedOption = null;

  
    for (var i = 0; i < options.length; i++) {
        if (options[i].checked) {
            selectedOption = options[i];
            var selected = options[i].value;
            var userAnswer = questions[index][`option${selected}`];
            var correctAns = questions[index].correctAnswer;

            if (userAnswer === correctAns) {
                score++;
                options[i].nextElementSibling.classList.add('correct');
            } else {
                options[i].nextElementSibling.classList.add('wrong');
            }

            options[i].checked = false;  
        }
    }

    if (!selectedOption) {
        return;
    }

    setTimeout(function() {
        if (index >= questions.length - 1) {
            showResults();
        } else {
            index++;
            displayQuestion();
        }
    }, 1000);  
}
function showResults() {
    var resultDiv = document.getElementById("result");
    var scoreDiv = document.getElementById("score");
    var backButton = document.createElement('button');

    var correct = score;
    var incorrect = questions.length - score;
    var percentage = (score / questions.length) * 100;

    scoreDiv.innerHTML = `
        Correct Answers: ${correct}<br>
        Incorrect Answers: ${incorrect}<br>
        Percentage: ${percentage.toFixed(2)}%
    `;

    backButton.innerText = "Back to Home Page";
    backButton.onclick = function() {
        window.location.href = 'home.html';
    };
    resultDiv.appendChild(backButton);

    document.querySelector(".quiz-container").classList.add('hidden');
    resultDiv.classList.remove('hidden');
}
function enableBtn() {
    button.disabled = false;
}

function resetTimer() {
    clearInterval(interval);
    min = 2;
    sec = 0;
    timer.innerHTML = `${min} : ${sec}`;
    interval = setInterval(function() {
        timer.innerHTML = `${min} : ${sec}`;
        sec--;

        if (sec < 0) {
            if (min <= 0) {
                nextQuestion();
            } else {
                min--;
                sec = 59;
            }
        }
    }, 1000);
}

var interval = setInterval(function() {
    timer.innerHTML = `${min} : ${sec}`;
    sec--;

    if (sec < 0) {
        if (min <= 0) {
            nextQuestion();
        } else {
            min--;
            sec = 59;
        }
    }
}, 1000);

 
displayQuestion();
