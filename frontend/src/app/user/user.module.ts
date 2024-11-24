import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component'; // Importation du composant UserList

@NgModule({
  declarations: [
    UserListComponent 
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserListComponent 
  ], 
  providers: []
})
export class UserModule { }

