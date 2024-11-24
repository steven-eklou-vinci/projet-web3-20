import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // Fournit le service au niveau global
})
export class ArticleService {
  private articles: { id: number; title: string; content: string }[] = [
    { id: 1, title: 'Introduction à Angular', content: 'Angular est un framework puissant...' },
    { id: 2, title: 'Pourquoi utiliser des services ?', content: 'Les services permettent de centraliser...' },
  ];

  constructor() {}

  // Récupérer tous les articles
  getArticles() {
    return this.articles;
  }

  // Ajouter un nouvel article
  addArticle(title: string, content: string) {
    const newArticle = {
      id: this.articles.length + 1,
      title,
      content,
    };
    this.articles.push(newArticle);
  }

  // Supprimer un article par son ID
  deleteArticle(id: number) {
    this.articles = this.articles.filter(article => article.id !== id);
  }
}
