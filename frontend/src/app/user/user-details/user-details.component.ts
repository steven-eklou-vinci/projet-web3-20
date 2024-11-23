import { Component } from '@angular/core';

@Component({
  selector: 'app-user-details',
  template: `
    <div *ngIf="user">
      <h2>Détails de l'utilisateur</h2>
      <p><strong>Nom :</strong> {{ user?.name }}</p>
      <p><strong>Email :</strong> {{ user?.email }}</p>
      <p><strong>Rôle :</strong> {{ user?.role }}</p>
    </div>
    <div *ngIf="!user">
      <p>Sélectionnez un utilisateur pour voir les détails.</p>
    </div>
  `,
  styles: [
    `
      div {
        border: 1px solid #ddd;
        padding: 15px;
        border-radius: 5px;
        margin-top: 10px;
      }
      h2 {
        color: green;
      }
    `,
  ],
})
export class UserDetailsComponent {
  user: { name: string; email: string; role: string } | null = {
    name: 'Alice',
    email: 'alice@example.com',
    role: 'Admin',
  };

  // Vous pouvez définir une méthode pour mettre à jour l'utilisateur
  updateUser(selectedUser: { name: string; email: string; role: string }) {
    this.user = selectedUser;
  }
}
