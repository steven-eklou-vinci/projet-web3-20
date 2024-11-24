const questions = require('../models/questions');

// Récupérer 5 questions aléatoires
const getAllQuestions = (req, res) => {
  
  const shuffledQuestions = [...questions]; // Crée une copie du tableau des questions
  shuffledQuestions.sort(() => Math.random() - 0.5); // Mélange les questions
  const selectedQuestions = shuffledQuestions.slice(0, 5); // Prend les 5 premières questions après mélange

  // Renvoyer les questions sélectionnées
  res.json(selectedQuestions.map(q => ({ id: q.id, question: q.question, options: q.options })));
};

// Vérifier une réponse
const checkAnswer = (req, res) => {
  const { id, answer } = req.body;

  // Trouver la question correspondante
  const question = questions.find(q => q.id === id);

  if (!question) {
    return res.status(404).json({ error: "Question non trouvée" });
  }

  // Vérifier la réponse
  const isCorrect = question.answer === answer;
  res.json({ correct: isCorrect });
};

module.exports = {
  getAllQuestions,
  checkAnswer,
};
