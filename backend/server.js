const express = require('express');
const cors = require('cors');  // Ajoute cette ligne
const app = express();
const quizzController = require('./src/controllers/quizz');

// Utilise CORS pour autoriser les requêtes du frontend
app.use(cors());

// Middleware pour parser le JSON
app.use(express.json());

// Routes pour le quiz
app.get('/questions', quizzController.getAllQuestions);
app.post('/questions/check', quizzController.checkAnswer);

// Démarrer le serveur
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
