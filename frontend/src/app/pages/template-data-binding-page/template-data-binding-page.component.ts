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
  htmlContent: string = ' : Utilisée pour afficher les données dans le HTML via des accolades <code>{{}}</code>.';
  exempleCode: string = `
  export class TemplateDataBindingComponent {
    userInput: string = '';

    onInputChange(event: Event): void {
      const input = event.target as HTMLInputElement;
      this.userInput = input.value;
    }
  }`;

  exempleHtml: string = `
  &lt;input type="text" (input)="onInputChange($event)" placeholder="Tapez ici..." /&gt;
  &lt;p class="section-content"&gt;
    &lt;strong&gt;Texte Saisi :&lt;/strong&gt; {{ userInput }}
  &lt;/p&gt;`;

  
  onInputChange(event: Event): void {
    const input = event.target as HTMLInputElement; // Cast en HTMLInputElement
    this.userInput = input.value; // Maintenant, 'value' est accessible
  }
  
}
