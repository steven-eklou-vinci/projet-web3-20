import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuizzService {
  private baseUrl = 'http://localhost:3000'; // Remplace par l'URL de ton backend

  constructor() {}

  // Utilisation de fetch pour récupérer les données
  getQuestions(): Observable<any> {
    return from(fetch(`${this.baseUrl}/questions`).then(res => res.json()));
  }

  // Vérifier une réponse avec fetch
  checkAnswer(questionId: number, answer: string): Observable<any> {
    return from(
      fetch(`${this.baseUrl}/questions/check`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: questionId, answer }),
      }).then(res => res.json())
    );
  }
}
