import { routes } from './app.routes';
import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import {ComponentDocComponent} from './pages/component-page/component-doc.component';
import {AppComponent } from './app.component'; 


@NgModule({
  declarations: [
    // Vos composants ici
    AppComponent,
    HomeComponent,
    ComponentDocComponent
  ],
  imports: [
    routes,
    // Autres modules ici
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
