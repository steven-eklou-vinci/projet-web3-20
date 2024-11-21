import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomDatePipe } from './custom-date.pipe';  // Importer le pipe

@NgModule({
  declarations: [CustomDatePipe],  // Déclarer le pipe
  imports: [CommonModule],
  exports: [CustomDatePipe]  // Exporter le pipe pour l'utiliser dans toute l'application
})
export class PipesModule { }
