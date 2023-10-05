const questions = [
    {
        question: "What is the capital of France?",
        choices: ["London", "Berlin", "Paris", "Madrid"],
        correctAnswer: "Paris",
    },
    {
        question: "Which planet is known as the Red Planet?",
        choices: ["Earth", "Mars", "Jupiter", "Venus"],
        correctAnswer: "Mars",
    },
    {
        question: "What is the largest mammal?",
        choices: ["Elephant", "Giraffe", "Blue Whale", "Lion"],
        correctAnswer: "Blue Whale",
    },
    {
        question: "What is the tallest mountain in the world?",
        choices: ["K2", "Kilimanjaro", "Mount Everest", "Denali"],
        correctAnswer: "Mount Everest",
    },
    {
        question: "How many continents are there?",
        choices: ["5", "6", "7", "8"],
        correctAnswer: "7",
    },
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const feedbackElement = document.getElementById("feedback");
const scoreElement = document.getElementById("score");
const submitButton = document.getElementById("submit-button");
const nextButton = document.getElementById("next-button");

function displayQuestion() {
    const questionData = questions[currentQuestion];
    questionElement.textContent = questionData.question;
    choicesElement.innerHTML = "";

    questionData.choices.forEach((choice, index) => {
        const li = document.createElement("li");
        li.textContent = choice;
        li.addEventListener("click", () => checkAnswer(index));
        choicesElement.appendChild(li);
    });

    submitButton.disabled = true;
    nextButton.style.display = "none";
    feedbackElement.textContent = "";
}

function checkAnswer(choiceIndex) {
    const questionData = questions[currentQuestion];
    if (questionData.choices[choiceIndex] === questionData.correctAnswer) {
        feedbackElement.textContent = "Correct!";
        score++;
    } else {
        feedbackElement.textContent = "Incorrect!";
    }

    submitButton.disabled = true;
    nextButton.style.display = "block";
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        // Display final score
        questionElement.textContent = "Quiz Completed!";
        choicesElement.innerHTML = "";
        feedbackElement.textContent = `Your Score: ${score} / ${questions.length}`;
        scoreElement.textContent = "";
        submitButton.disabled = true;
        nextButton.style.display = "none";
    }
}

submitButton.addEventListener("click", () => checkAnswer());
nextButton.addEventListener("click", nextQuestion);

// Initial question display
displayQuestion();
