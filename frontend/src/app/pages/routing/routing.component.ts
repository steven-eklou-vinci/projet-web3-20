import { Component } from '@angular/core';

@Component({
  selector: 'app-routing',
  standalone: true,
  imports: [],
  templateUrl: './routing.component.html',
  styleUrl: './routing.component.css'
})
export class RoutingComponent {
  configRouterExemple: string = `
  import { Routes } from '@angular/router';

  import { HomeComponent } from './pages/home-page/home.component';
  import { ComponentDocComponent } from './pages/component-page/component-doc.component';
  import { PipePageComponent } from './pages/pipe-page/pipe-page.component';
  import { TemplateDataBindingComponent } from './pages/template-data-binding-page/template-data-binding-page.component';
  import { DirectiveComponent } from './pages/directive-page/directive-page.component';
  import { RoutingComponent } from './pages/routing/routing.component';
  import { ModuleComponent } from './pages/module-page/module-page.component';
  import { ServicePageComponent } from './pages/service-page/service-page.component';

  export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'components', component: ComponentDocComponent },
    { path: 'pipes', component: PipePageComponent },
    { path: 'templates-data-binding', component: TemplateDataBindingComponent },
    { path: 'directives', component: DirectiveComponent },
    { path: 'routing', component: RoutingComponent },
    { path: 'modules', component: ModuleComponent },
    { path: 'services', component: ServicePageComponent },
  ];`;

  routerMainExemple: string = `
  import { bootstrapApplication } from '@angular/platform-browser';
  import { provideRouter } from '@angular/router';
  import { appConfig } from './app/app.config';
  import { AppComponent } from './app/app.component';
  import { appRoutes } from './app/app.routes';

  bootstrapApplication(AppComponent, {
    providers: [
      provideRouter(appRoutes),
    ]
  }).catch((err) => console.error(err));`;

  routerLinkExemple: string = `
  <nav>
    <a routerLink="/">Accueil</a>
    <a routerLink="/about">À propos</a>
  </nav>

  <router-outlet></router-outlet>`;

  rParamExemple: string = `
  const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'user/:id', component: UserDetailsComponent }
  ];`;

  recupParamExemple: string = `
  import { Component, OnInit, ParamMap  } from '@angular/core';
  import { ActivatedRoute } from '@angular/router';

  @Component({
      selector: 'app-user-details',
      template: \`
          <h2>Détails de l'utilisateur</h2>
          <p>ID : {{ userId }}</p>
          \`
  })
  export class UserDetailsComponent implements OnInit {
      userId: string | null = null;

      constructor(private route: ActivatedRoute) {}

      ngOnInit(): void {
          // Récupérer le paramètre 'id' à partir de l'URL
          this.userId = this.route.snapshot.paramMap.get('id');
      }
  }`;

  navVersRouteExemple: string = 
  `<a [routerLink]="['/user', user.id]">Voir l'utilisateur ...</a>`;

}
