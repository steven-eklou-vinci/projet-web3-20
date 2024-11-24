import { Component } from '@angular/core';

@Component({
  selector: 'app-component-doc',
  templateUrl: './component-doc.component.html',
  styleUrls: ['./component-doc.component.css']
})
export class ComponentDocComponent {
 // Définir les variables de code
 componentExampleCode: string = `
 import { Component } from '@angular/core';
 
 @Component({
   selector: 'app-my-component',
   templateUrl: './my-component.component.html',
   styleUrls: ['./my-component.component.scss']
 })
 export class MyComponent {
   title = 'Bienvenue sur Angular!';
 }
   `;
 
   usageExampleCode: string = `
 <app-my-component></app-my-component>
   `;
}