import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-directive',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './directive-page.component.html',
  styleUrls: ['./directive-page.component.css']
})
export class DirectiveComponent {
  // Propriété pour démontrer *ngIf
  showContent: boolean = true;

  // Propriété pour démontrer *ngFor
  items: string[] = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
  // Méthode pour basculer l'état de visibilité
  toggleContent(): void {
    console.log(this.showContent)
    this.showContent = !this.showContent;
  }
}
