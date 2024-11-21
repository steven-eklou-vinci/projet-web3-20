import { Component } from '@angular/core';
import { PipesModule } from '../../pipes/pipes.module';

@Component({
  selector: 'app-pipe-page',
  standalone: true,
  imports: [PipesModule],
  templateUrl: './pipe-page.component.html',
  styleUrls: ['./pipe-page.component.css']
})
export class PipePageComponent {
  pipeExampleCode: string = `
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    if (!value) return value;
    const date = new Date(value);
    return \`\${date.getDate()}/\${date.getMonth() + 1}/\${date.getFullYear()}\`;
  }
}
  `;

  usageExampleCode: string = `
<p>{{ '2024-11-21' | customDate }}</p> <!-- Affichera "21/11/2024" -->
  `;

  pipeExplanation: string = `
  <ul class="section-list">
    <li><strong>@Pipe({ name: 'customDate' })</strong> : Ce décorateur définit le nom du pipe. Vous pouvez l'utiliser dans vos templates en faisant <code>{{ date | customDate }}</code>.</li>
    <li><strong>La méthode <code>transform()</code></strong> : C'est la méthode clé dans un pipe. Elle prend la valeur en entrée et renvoie une nouvelle valeur après l'avoir transformée. Dans ce cas, elle formate une date en <strong>jour/mois/année</strong>.</li>
    <li><strong>new Date(value)</strong> : La méthode crée un objet <code>Date</code> à partir de la valeur d'entrée. Cela permet de manipuler et formater cette valeur comme une date.</li>
    <li><strong>date.getDate(), date.getMonth(), date.getFullYear()</strong> : Ces méthodes permettent d'extraire respectivement le jour, le mois (ajusté avec +1 pour tenir compte de l'indexation de janvier à 0), et l'année de l'objet <code>Date</code>.</li>
  </ul>
  `;

  pipeExplanation2: string = `import { Component } from '@angular/core';
import { PipesModule } from 'path/to/your/pipes.module';  // Importer le module Pipes

@Component({
  selector: 'app-my-component',
  imports: [PipesModule],  // Ajouter PipesModule dans la section imports
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.scss']
})
export class MyComponent {
  title = 'Bienvenue sur Angular!';
}`;
}


