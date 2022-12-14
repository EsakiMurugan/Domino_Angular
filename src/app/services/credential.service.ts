import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AdminPost } from '../models/admin-add.model';
import { Admin } from '../models/admin.model';
import { Auth } from '../models/auth.model';
import { customerAdd } from '../models/cust-add.model';
import { CustLogin } from '../models/cust-login.model';
import { customer } from '../models/cust.model';


@Injectable({
    providedIn: 'root'
})

  export class CredentialService{

    constructor(private http : HttpClient) { }

  apiBaseURL = "https://localhost:7200/"

  adminLogin(adminPost : AdminPost) : Observable<Admin>{
    return this.http.post<Admin>(this.apiBaseURL + 'api/credential/AdminLogin', adminPost)
  }

  customerRegistration(custadd : customerAdd) : Observable<customer>{
    return this.http.post<customer>(this.apiBaseURL + 'api/Credential/CustomerRegn',custadd)
  }

  CustomerLogin(custLogin : CustLogin) : Observable<Auth>{
    return this.http.post<Auth>(this.apiBaseURL + 'api/Credential/CustomerLogin',custLogin)
  }

  }