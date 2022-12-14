import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AddPizza } from '../models/pizza-add.model';
import { PizzaService } from '../services/pizza.service';

@Component({
  selector: 'app-pizza-add',
  templateUrl: './pizza-add.component.html',
  styleUrls: ['./pizza-add.component.css']
})
export class PizzaAddComponent implements OnInit {

  pizza : AddPizza = {
    pizzaName : '',
    price : Number(''),
    stock : Number('')
  }

  constructor(private pizzaService : PizzaService,
    private toastr : ToastrService,
    private router : Router) { }

  ngOnInit(): void {
    
  }

  
  
  onSubmit(){
    setTimeout(() => {
      this.pizzaService.AddPizza(this.pizza)
      .subscribe(
        response => {
          this.toastr.info('Pizza Added Successfully!','Add', {
            timeOut : 2000,
            progressBar : true,
            progressAnimation : 'increasing'
          })
         // alert('Added Successfully!')
        }
      )
    },5000)
    this.router.navigate(['pizza'])
  }

}
