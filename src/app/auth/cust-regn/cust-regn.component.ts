import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { customerAdd } from 'src/app/models/cust-add.model';
import { CredentialService } from 'src/app/services/credential.service';

@Component({
  selector: 'app-cust-regn',
  templateUrl: './cust-regn.component.html',
  styleUrls: ['./cust-regn.component.css']
})
export class CustRegnComponent implements OnInit {

  customer : customerAdd = {
    customerName : '',
    mobileNumber : Number(''),
    emailID : '',
    address : '',
    password : '',
    cPassword : ''
  }

  constructor(private credservice : CredentialService,
    private toastr : ToastrService,
    private router : Router) { }

  ngOnInit(): void {
    
  }

  register(){
    this.credservice.customerRegistration(this.customer)
    .subscribe(
      response => {
        this.router.navigate(['cust/login'])
        this.toastr.info('Welcome, you are registered Successfully!')
      })
  }

}
