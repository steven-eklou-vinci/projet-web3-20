import { Component } from '@angular/core';

@Component({
  selector: 'app-module-page',
  templateUrl: './module-page.component.html',
  styleUrls:[ './module-page.component.css']
})
export class ModuleComponent {

  moduleExample:  string = `import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
  declarations: [
    UserListComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserListComponent
  ]
})
export class UserModule {}`;

}
