import { Component, OnInit } from '@angular/core';
import { QuizzService } from '../../services/quizz.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quizz-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quizz-page.component.html',
  styleUrls: ['./quizz-page.component.css'],
})
export class QuizzPageComponent implements OnInit {
  questions: any[] = [];
  currentQuestionIndex = 0;
  selectedAnswer: string | null = null;
  score = 0;
  isQuizFinished = false;
  loading = true;

  constructor(private quizzService: QuizzService) {}

  ngOnInit(): void {
    this.fetchQuestions();
  }

  // Récupérer les questions du backend
  fetchQuestions() {
    this.quizzService.getQuestions().subscribe(
      (data) => {
        this.questions = data;
        this.loading = false;
      },
      (error) => {
        console.error('Erreur lors du chargement des questions', error);
        this.loading = false;
      }
    );
  }

  // Sélectionner une réponse
  selectAnswer(option: string) {
    this.selectedAnswer = option;
  }

  // Soumettre une réponse et vérifier via le backend
  submitAnswer() {
    if (!this.selectedAnswer) return;

    const currentQuestion = this.questions[this.currentQuestionIndex];

    this.quizzService.checkAnswer(currentQuestion.id, this.selectedAnswer).subscribe(
      (response) => {
        if (response.correct) {
          this.score++;
        }

        this.selectedAnswer = null;
        this.currentQuestionIndex++;

        if (this.currentQuestionIndex >= this.questions.length) {
          this.isQuizFinished = true;
        }
      },
      (error) => {
        console.error('Erreur lors de la vérification de la réponse', error);
      }
    );
  }

  // Réinitialiser le quiz
  restartQuiz() {
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.isQuizFinished = false;
    this.fetchQuestions();
  }
}
