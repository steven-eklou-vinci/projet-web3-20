
// Service to get all questions
function getAllQuestions() {
    return questions.map(({ correctAnswer, ...rest }) => rest); // Do not return correct answers
}

// Service to calculate the score
function calculateScore(answers) {
    let score = 0;
    answers.forEach((answer, index) => {
        if (questions[index] && questions[index].correctAnswer === answer) {
            score += 1; // Each correct answer adds 1 point
        }
    });
    return score;
}

export default { getAllQuestions, calculateScore };
        