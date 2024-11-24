import { Component } from '@angular/core';
import { ArticleService } from '../../article.service';

@Component({
  selector: 'app-user-list',
  template: `
    <h2>Liste des utilisateurs</h2>
    <ul>
      <li *ngFor="let user of users">{{ user.name }}</li>
    </ul>
  `,
  styles: ['h2 { color: blue; }']
})
export class UserListComponent {
  articles: any[] = [];

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.articles = this.articleService.getArticles();
  }

  users = [
    { name: 'Alice' },
    { name: 'Bob' },
    { name: 'Charlie' }
  ];

}
