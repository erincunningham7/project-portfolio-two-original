//Variables created to access the DOM
let userScore = document.getElementById('user-score');
const questionText = document.getElementById('question-text');
const restartBtn = document.getElementById('restart');
const prevBtn = document.getElementById('previous');
const nextBtn = document.getElementById('next');
const submitBtn = document.getElementById('submit');
const answerOne = document.getElementById('answer-one');
const answerTwo = document.getElementById('answer-two');
const answerThree = document.getElementById('answer-three');
const answerFour = document.getElementById('answer-four');
//Event listeners added to call particular functions when clicked
restartBtn.addEventListener('click', restart);
prevBtn.addEventListener('click', previous);
nextBtn.addEventListener('click', next);
submitBtn.addEventListener('click', submit);
//Variable containing quiz questions and answers 
let questions = [{
        question: "How many kids does Angelina Jolie have?",
        answers: [{
                option: "8",
                answer: false
            },
            {
                option: "6",
                answer: true
            },
            {
                option: "10",
                answer: false
            },
            {
                option: "5",
                answer: false
            }
        ]
    },

    {
        question: "Who did Kim Kardashian call 'the least interesting look at'?",
        answers: [{
                option: "Kylie",
                answer: false
            },
            {
                option: "Khloe",
                answer: false
            },
            {
                option: "Rob",
                answer: false
            },
            {
                option: "Kourtney",
                answer: true
            }
        ]
    },

    {
        question: "Who played the role of Elvis Presley in the 2022 movie Elvis?",
        answers: [{
                option: "Austin Butler",
                answer: true
            },
            {
                option: "Timothee Chalamet",
                answer: false
            },
            {
                option: "Leonardo DiCaprio",
                answer: false
            },
            {
                option: "Theo James",
                answer: false
            }
        ]
    },

    {
        question: "Who was exposed for having a secret love child in a diss track by Pusha T in 2018?",
        answers: [{
                option: "Tristan Thompson",
                answer: false
            },
            {
                option: "Robin Thicke",
                answer: false
            },
            {
                option: "Drake",
                answer: true
            },
            {
                option: "Kanye West",
                answer: false
            }
        ]
    },

    {
        question: "Who played Tanya in season two of the hit show White Lotus?",
        answers: [{
                option: "Zendaya",
                answer: false
            },
            {
                option: "Jennifer Coolidge",
                answer: true
            },
            {
                option: "Aubrey Plaza",
                answer: false
            },
            {
                option: "Connie Britton",
                answer: false
            }
        ]
    },

    {
        question: "Real Housewives star Taylor Armstrong become a viral meme that depicted her screaming at what animal?",
        answers: [{
                option: "Cat",
                answer: true
            },
            {
                option: "Turtle",
                answer: false
            },
            {
                option: "Seal",
                answer: false
            },
            {
                option: "Frog",
                answer: false
            }
        ]
    },

    {
        question: "Which beauty Youtuber was infamously exposed in 2019 for selling mouldy lipsticks?",
        answers: [{
                option: "James Charles",
                answer: false
            },
            {
                option: "Jeffree Star",
                answer: false
            },
            {
                option: "Kat Von D",
                answer: false
            },
            {
                option: "Jaclyn Hill",
                answer: true
            }
        ]
    },

    {
        question: "What did Molly Mae and Tommy Fury name their baby girl?",
        answers: [{
                option: "Halo",
                answer: false
            },
            {
                option: "Nephele",
                answer: false
            },
            {
                option: "Bambi",
                answer: true
            },
            {
                option: "Cloud",
                answer: false
            }
        ]
    },

    {
        question: "When did Aaron ask Cady what day was it in Mean Girls?",
        answers: [{
                option: "October 3",
                answer: true
            },
            {
                option: "March 29",
                answer: false
            },
            {
                option: "January 1",
                answer: false
            },
            {
                option: "May 4",
                answer: false
            }
        ]
    },

    {
        question: "Which music video was the first to be played on MTV?",
        answers: [{
                option: "Never Gonna Give You Up",
                answer: false
            },
            {
                option: "Walking On Sunshine",
                answer: false
            },
            {
                option: "Video Killed The Radio Star",
                answer: true
            },
            {
                option: "Highway To Hell",
                answer: false
            }
        ]
    },
];
//Counters for both scores and questions
let currentQuestion = 0;
let score = 0;
//Function to execute quiz when the page loads
function startQuiz() {
    currentQuestion = 0;
    questionText.innerHTML = questions[currentQuestion].question;
    answerOne.innerHTML = questions[currentQuestion].answers[0].option;
    answerOne.onclick = () => {
        let ans = 0;
        if (questions[currentQuestion].answers[ans].answer) {
            if (score < 10) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if (currentQuestion < 9) {
            next();
        }
    }
    answerTwo.innerHTML = questions[currentQuestion].answers[1].option;
    answerTwo.onclick = () => {
        let ans = 1;
        if (questions[currentQuestion].answers[ans].answer) {
            if (score < 10) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if (currentQuestion < 9) {
            next();
        }
    }
    answerThree.innerHTML = questions[currentQuestion].answers[2].option;
    answerThree.onclick = () => {
        let ans = 2;
        if (questions[currentQuestion].answers[ans].answer) {
            if (score < 10) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if (currentQuestion < 9) {
            next();
        }
    }
    answerFour.innerHTML = questions[currentQuestion].answers[3].option;
    answerFour.onclick = () => {
        let ans = 3;
        if (questions[currentQuestion].answers[ans].answer) {
            if (score < 10) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if (currentQuestion < 9) {
            next();
        }
    }
    prevBtn.classList.add('hide');
}
startQuiz();
//Function to display countdown timer
function startTimer(duration, display) {
    let timer = duration,
        minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ":" + seconds;
        if (--timer < 0) {
            timer = duration;
            display.textContent = "Oh no! You have run out of time!";
        }
    }, 1000);
    function endTimer() {
        clearInterval(startTimer());
    }
}

startTimer(60, document.querySelector("#count"));
//Function that restarts the quiz
function restart() {
    currentQuestion = 0;
    prevBtn.classList.remove('hide');
    nextBtn.classList.remove('hide');
    submitBtn.classList.remove('hide');
    answerOne.classList.remove('hide');
    answerTwo.classList.remove('hide');
    answerThree.classList.remove('hide');
    answerFour.classList.remove('hide');
    score = 0;
    userScore.innerHTML = score;
    startQuiz();
}
//Function that jumps to the next question
function next() {
    currentQuestion++;
    if (currentQuestion >= 9) {
        nextBtn.classList.add('hide');
        prevBtn.classList.remove('hide');
    }
    questionText.innerHTML = questions[currentQuestion].question;
    answerOne.innerHTML = questions[currentQuestion].answers[0].option;
    answerOne.onclick = () => {
        let ans = 0;
        if (questions[currentQuestion].answers[ans].answer) {
            if (score < 10) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if (currentQuestion < 9) {
            next();
        }
    }
    answerTwo.innerHTML = questions[currentQuestion].answers[1].option;
    answerTwo.onclick = () => {
        let ans = 1;
        if (questions[currentQuestion].answers[ans].answer) {
            if (score < 10) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if (currentQuestion < 9) {
            next();
        }
    }
    answerThree.innerHTML = questions[currentQuestion].answers[2].option;
    answerThree.onclick = () => {
        let ans = 2;
        if (questions[currentQuestion].answers[ans].answer) {
            if (score < 10) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if (currentQuestion < 9) {
            next();
        }
    }
    answerFour.innerHTML = questions[currentQuestion].answers[3].option;
    answerFour.onclick = () => {
        let ans = 3;
        if (questions[currentQuestion].answers[ans].answer) {
            if (score < 10) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if (currentQuestion < 9) {
            next();
        }
    }
    prevBtn.classList.add('hide');
}
//Function that jumps to the previous question
function previous() {
    currentQuestion--;
    if (currentQuestion <= 0) {
        nextBtn.classList.add('hide');
        prevBtn.classList.remove('hide');
    }
    questionText.innerHTML = questions[currentQuestion].question;
    answerOne.innerHTML = questions[currentQuestion].answers[0].option;
    answerOne.onclick = () => {
        let ans = 0;
        if (questions[currentQuestion].answers[ans].answer) {
            if (score < 10) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if (currentQuestion < 9) {
            next();
        }
    }
    answerTwo.innerHTML = questions[currentQuestion].answers[1].option;
    answerTwo.onclick = () => {
        let ans = 1;
        if (questions[currentQuestion].answers[ans].answer) {
            if (score < 10) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if (currentQuestion < 9) {
            next();
        }
    }
    answerThree.innerHTML = questions[currentQuestion].answers[2].option;
    answerThree.onclick = () => {
        let ans = 2;
        if (questions[currentQuestion].answers[ans].answer) {
            if (score < 10) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if (currentQuestion < 9) {
            next();
        }
    }
    answerFour.innerHTML = questions[currentQuestion].answers[3].option;
    answerFour.onclick = () => {
        let ans = 3;
        if (questions[currentQuestion].answers[ans].answer) {
            if (score < 10) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if (currentQuestion < 9) {
            next();
        }
    }
    nextBtn.classList.remove('hide');
}
//Form submission that shows the users score and congratulations message
const form = document.getElementById("user-form");
form.addEventListener('submit', (e) => {
    e.preventDefault();
})
const user = document.getElementById('username');
console.log(user.value);

function submit() {
    prevBtn.classList.add('hide');
    nextBtn.classList.add('hide');
    submitBtn.classList.add('hide');
    answerOne.classList.add('hide');
    answerTwo.classList.add('hide');
    answerThree.classList.add('hide');
    answerFour.classList.add('hide');
    questionText.innerHTML = `Congratulations ${user} you have completed the quiz!`;
    userScore.innerHTML = `You scored ${score}`;
}

//image func
function createImage(src) {
let image = document.createElement('img');
img.src = 'https://tse1.explicit.bing.net/th?id=OIP.IssytltEGTSmWbBTedheTwAAAA&pid=Api&P=0';
document.body.appendChild(img);
}

function displayAnswerImages() {
    let quizContainer = document.getElementById('quiz-container');
    questions.forEach((question, index) => {
        let answerContainer = document.createElement('div');
        answerContainer.classList.add('answer-container');

        question.answers.forEach(answer => {
            let imageSrc = answer.answer ? 'images/correct.png' : 'images/incorrect.png';
            let image = createImage(imageSrc);
            let optionContainer = document.createElement('div');
            optionContainer/classList.add('option-container');
            optionContainer.appendChild(createTextNode(answer.option));
            optionContainer.appendChild(image);

            answerContainer.appendChild(optionContainer);
    });
    quizContainer.appendChild(answerContainer);
    });
}
displayAnswerImages();
//fix timer so it restarts with restart func and ends when submitted
//fix image func
//fix error with favicon
//fix footer
//fix prev button