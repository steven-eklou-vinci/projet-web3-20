import { Component } from '@angular/core';

@Component({
  selector: 'app-service-page',
  standalone: true,
  imports: [],
  templateUrl: './service-page.component.html',
  styleUrls: ['./service-page.component.css'],
})
export class ServicePageComponent {
  serviceExample: string = `
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MyService {
  constructor() {}

  getData(): string {
    return 'Données récupérées depuis le service.';
  }
}`;

serviceComponentExample: string = `
import { Component } from '@angular/core';
import { MyService } from './my-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  message: string;

  constructor(private myService: MyService) {
    this.message = this.myService.getData();
  }
}`;
}
