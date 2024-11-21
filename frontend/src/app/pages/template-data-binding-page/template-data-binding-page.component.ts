import { Component } from '@angular/core';

@Component({
  selector: 'app-template-data-binding',
  templateUrl: './template-data-binding-page.component.html',
  styleUrls: ['./template-data-binding-page.component.css']
})
export class TemplateDataBindingComponent {
  // Exemple pour démontrer le Data Binding
  title: string = 'Data Binding Angular';
  userInput: string | null = '';
  htmlContent = 'Utilisation de <code>&#123;&#123;&#125;&#125;</code> pour afficher des données dans le HTML.';


  onInputChange(event: Event): void {
    const input = event.target as HTMLInputElement; // Cast en HTMLInputElement
    this.userInput = input.value; // Maintenant, 'value' est accessible
  }
  
}
