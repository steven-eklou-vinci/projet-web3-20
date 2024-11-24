
const express = require('express');
const bodyParser = require('body-parser');
const quizzRoutes = require('./src/controllers/quizz');

const app = express();

app.use(bodyParser.json());

// Routes
app.use('/quizz', quizzRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
        