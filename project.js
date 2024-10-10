// Sample question and answer data
const questions = [
    { question: "HTML is parent of .....", answer: "Head tag and Body tag" },
    { question: "JVM stands for?", answer: "Java Virtual Machine" },
    { question: "Spring is developed by...", answer: "Rod Johnson in 2003" },
    { question: "IOC stands for?", answer: "Inversion Of Control" },
    { question: "What is spring boot?", answer: "Combination of Spring Framework and Embedded servers" },
];

let currentQuestionIndex = 0;

const questionText = document.getElementById("question-text");
const congratulationsMsg = document.getElementById("congratulations-msg");
const nextQuestionBtn = document.getElementById("next-question");

// Function to show the next question
function showNextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        questionText.textContent = questions[currentQuestionIndex].question;
        congratulationsMsg.style.display = "none";
        nextQuestionBtn.style.display = "none";
    } else {
        questionText.textContent = "Game Over! Thanks for playing.";
        nextQuestionBtn.style.display = "none";
    }
}

// Simulate scanning QR code and answering from mobile device
function submitAnswer(playerName, answer) {
    const correctAnswer = questions[currentQuestionIndex].answer;

    if (answer.toLowerCase() === correctAnswer.toLowerCase()) {
        playerNameSpan.textContent = playerName;
        congratulationsMsg.style.display = "block";
        nextQuestionBtn.style.display = "block";
    } else {
        alert("Sorry, the answer is incorrect.");
    }
}

// Hook up the Next Question button
nextQuestionBtn.addEventListener("click", showNextQuestion);

// Simulate a player scanning the QR code and submitting an answer
// In a real-world app, this would be handled with WebSockets or AJAX.
setTimeout(() => {
    submitAnswer(" ", " head tag and body tag");
}, 5000); // Simulate a player answering after 5 seconds
