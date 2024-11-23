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

  exempleCode1 : string = `
  export class DirectiveExampleComponent {
    items: string[] = ['Élément 1', 'Élément 2', 'Élément 3'];
  }`

  exempleCode2 : string = `
  &lt;ul class="item-list"&gt;
    &lt;li *ngFor="let item of items" class="item"&gt;
      {{ item }}
    &lt;/li&gt;
  &lt;/ul&gt;`

  exempleCode3 : string = `
  export class DirectiveExampleComponent {
    showContent: boolean = false;

    toggleContent(): void {
      this.showContent = !this.showContent;
    }
  }`


  exempleCode4 : string = `
  &lt;button (click)="toggleContent()"&gt; Afficher/Masquer le Contenu &lt;/button&gt;
  &lt;div *ngIf="showContent" class="content-box"&gt;
    Le contenu est visible ! Cliquez à nouveau pour le masquer.
  &lt;/div&gt;`

  item : string = '';
  // Propriété pour démontrer *ngFor
  items: string[] = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
  // Méthode pour basculer l'état de visibilité
  toggleContent(): void {
    this.showContent = !this.showContent;
  }
}
