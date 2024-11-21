import { routes } from './app.routes';
import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/home-page/home.component';
import {ComponentDocComponent} from './pages/component-page/component-doc.component';
import {AppComponent } from './app.component'; 
import { TemplateDataBindingComponent } from './pages/template-data-binding-page/template-data-binding-page.component';
import { DirectiveComponent } from './pages/directive-page/directive-page.component';

@NgModule({
  declarations: [
    // Vos composants ici
    AppComponent,
    HomeComponent,
    ComponentDocComponent, 
    TemplateDataBindingComponent,
    DirectiveComponent
  ],
  imports: [
    routes,
    // Autres modules ici
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
