
const express = require('express');
const router = express.Router();
const { getAllQuestions, calculateScore } = require('../services/quizz.service').default;

// Route to get all quiz questions
router.get('/questions', (req, res) => {
    const questions = getAllQuestions();
    res.json(questions);
});

// Route to calculate the score based on answers
router.post('/calculate-score', (req, res) => {
    const { answers } = req.body;
    if (!answers || !Array.isArray(answers)) {
        return res.status(400).json({ message: 'Invalid answers format' });
    }
    const score = calculateScore(answers);
    res.json({ score });
});

module.exports = router;
        