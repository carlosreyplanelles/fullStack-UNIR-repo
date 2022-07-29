import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { UserViewComponent } from './components/user-view/user-view.component';
import { UsersListComponent } from './components/users-list/users-list.component';

const routes: Routes = [
  {path:"", pathMatch:"full", redirectTo:"home"},
  {path:"home", component:UsersListComponent},
  {path:"agenda", component:UsersListComponent},
  {path:"contacto/:idcontact", component:UserViewComponent},
  {path:"nuevo", component:FormComponent},
  {path:"actualizar/:idcontact", component:FormComponent},
  {path:"**", redirectTo:"agenda"},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
