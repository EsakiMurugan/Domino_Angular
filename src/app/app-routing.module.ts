import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './auth/admin-login/admin-login.component';
import { AuthComponent } from './auth/auth.component';
import { CustRegnComponent } from './auth/cust-regn/cust-regn.component';
import { CustLoginComponent } from './cust-login/cust-login.component';
import { PizzaAddComponent } from './pizza-add/pizza-add.component';
import { PizzaDeleteComponent } from './pizza-delete/pizza-delete.component';
import { PizzaEditComponent } from './pizza-edit/pizza-edit.component';
import { PizzaComponent } from './pizza/pizza.component';

const appRoutes : Routes = [
  {path : '', component : AuthComponent},
  {path : 'admin/login', component : AdminLoginComponent},
  {path : 'cust/login', component : CustLoginComponent},
  {path : 'cust/regn', component : CustRegnComponent},
  {path : 'pizza', component : PizzaComponent},
  {path : 'pizza/edit/:id', component : PizzaEditComponent},
  {path : 'pizza/delete/:id', component : PizzaDeleteComponent},
  {path : 'pizza/add', component : PizzaAddComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
