import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza/pizza.component';
import { PizzaEditComponent } from './pizza-edit/pizza-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PizzaAddComponent } from './pizza-add/pizza-add.component';
import { PizzaDeleteComponent } from './pizza-delete/pizza-delete.component';
import { AuthComponent } from './auth/auth.component';
import { AdminLoginComponent } from './auth/admin-login/admin-login.component';
import { CustRegnComponent } from './auth/cust-regn/cust-regn.component';
import { CustLoginComponent } from './cust-login/cust-login.component';
import { CustomInterceptor } from './services/custom.interceptor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    PizzaEditComponent,
    PizzaAddComponent,
    PizzaDeleteComponent,
    AuthComponent,
    AdminLoginComponent,
    CustRegnComponent,
    CustLoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
     BrowserAnimationsModule,
     ToastrModule.forRoot({
       timeOut : 2000,
       progressBar : true,
       progressAnimation : 'increasing',
       positionClass : 'toast-top-right',
     }),
     ReactiveFormsModule,
     NgbModule,
     NgbDropdownModule
  ],

  providers: [{
    provide : HTTP_INTERCEPTORS, useClass : CustomInterceptor,
    multi : true
  }],

  bootstrap: [AppComponent]
})

export class AppModule { }
