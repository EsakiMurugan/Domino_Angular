import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CustLogin } from '../models/cust-login.model';
import { CredentialService } from '../services/credential.service';

@Component({
  selector: 'app-cust-login',
  templateUrl: './cust-login.component.html',
  styleUrls: ['./cust-login.component.css']
})
export class CustLoginComponent implements OnInit{

  customer : CustLogin = {
    emailID : '',
    password : '',
    cPassword : ''
  }

  constructor(private credService : CredentialService,
    private route : Router,
    private toastr : ToastrService) {}

  ngOnInit(): void {
    
  }

  onSubmit(password : string){
    this.customer.cPassword = password;
    this.credService.CustomerLogin(this.customer)
    .subscribe((response : any) => {
      console.log(response.token)
      localStorage.setItem("token", response.token)
      this.route.navigate(['pizza'])
      // if(response){
      //   this.route.navigate(['pizza'])
      // }else{
      //   this.toastr.error('Invalid Credentials!')
      // }
    })
  }
}
