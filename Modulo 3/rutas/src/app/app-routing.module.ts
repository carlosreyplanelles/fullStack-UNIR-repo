import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { ProductsComponent } from './components/products/products.component';
import { TrabajoViewComponent } from './components/trabajo-view/trabajo-view.component';
import { TrabajosComponent } from './components/trabajos/trabajos.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'home'},
  {path:'home',component:HomeComponent  },
  {path:'contacto', component:ContactComponent},
  {path:'productos', component:ProductsComponent},
  {path:'producto/:id', component:ProductViewComponent},
  {path:'trabajos', component:TrabajosComponent},
  {path:'trabajo/:url', component:TrabajoViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
