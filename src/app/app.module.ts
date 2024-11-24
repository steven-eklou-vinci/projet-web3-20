import { routes } from './app.routes';
import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/home-page/home.component';
import {ComponentDocComponent} from './pages/component-page/component-doc.component';
import {AppComponent } from './app.component'; 
import { TemplateDataBindingComponent } from './pages/template-data-binding-page/template-data-binding-page.component';
import { DirectiveComponent } from './pages/directive-page/directive-page.component';
import { UserModule } from './user/user.module';
import { ModuleComponent } from './pages/module-page/module-page.component';
import { ServicePageComponent } from './pages/service-page/service-page.component';
import { QuizzService } from './services/quizz.service';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    // Vos composants ici
    AppComponent,
    HomeComponent,
    ComponentDocComponent, 
    TemplateDataBindingComponent,
    DirectiveComponent,
    ModuleComponent,
    ServicePageComponent,
    
  ],
  imports: [
    routes,
    UserModule,
    CommonModule
    // Autres modules ici
  ],
  providers: [
    QuizzService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

