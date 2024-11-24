import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home-page/home.component';
import { ComponentDocComponent } from './pages/component-page/component-doc.component';
import { PipePageComponent } from './pages/pipe-page/pipe-page.component';
import { TemplateDataBindingComponent } from './pages/template-data-binding-page/template-data-binding-page.component';
import { DirectiveComponent } from './pages/directive-page/directive-page.component';
import { RoutingComponent } from './pages/routing/routing.component';
import { ModuleComponent } from './pages/module-page/module-page.component';
import { ServicePageComponent } from './pages/service-page/service-page.component';
import {QuizzPageComponent} from './pages/quizz-page/quizz-page.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'components', component: ComponentDocComponent },
  { path: 'pipes', component: PipePageComponent },
  { path: 'templates-data-binding', component: TemplateDataBindingComponent },
  { path: 'directives', component: DirectiveComponent },
  { path: 'routing', component: RoutingComponent },
  { path: 'modules', component: ModuleComponent },
  { path: 'services', component: ServicePageComponent },
  { path: 'quizz', component: QuizzPageComponent },
];
