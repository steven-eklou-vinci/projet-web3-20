import { Routes } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';


import { HomeComponent } from './pages/home/home.component'; 
import { ComponentDocComponent } from './pages/component-page/component-doc.component';
import { PipePageComponent } from './pages/pipe-page/pipe-page.component';

  export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'components', component: ComponentDocComponent },
    { path: 'pipes', component: PipePageComponent }
  ];

  
