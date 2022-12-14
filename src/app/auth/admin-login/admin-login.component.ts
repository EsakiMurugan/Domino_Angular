import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { AdminPost } from 'src/app/models/admin-add.model';
import { Admin } from 'src/app/models/admin.model';
import { CredentialService } from 'src/app/services/credential.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  admin : AdminPost = {
    emailID: '',
    password: ''
  }

  constructor(private route : Router, private credservice : CredentialService) { }

  ngOnInit(): void {
   
  }

  onLogin(){
    this.credservice.adminLogin(this.admin)
    .subscribe(
      response => {
        console.log(response)
        if(response){
          this.route.navigate(['pizza'])
        }
      }
    )
  }

}
