import { Component } from '@angular/core';

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
  users = [
    { name: 'Alice' },
    { name: 'Bob' },
    { name: 'Charlie' }
  ];
}
