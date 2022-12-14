import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Pizza } from '../models/pizza.model';
import { PizzaService } from '../services/pizza.service';

@Component({
  selector: 'app-pizza-delete',
  templateUrl: './pizza-delete.component.html',
  styleUrls: ['./pizza-delete.component.css']
})
export class PizzaDeleteComponent implements OnInit {

  pizza! : Pizza

  constructor(private pizzaService : PizzaService,
    private route : ActivatedRoute,
    private toastr : ToastrService,
    private router : Router) { }

  ngOnInit(): void {
    this.route.paramMap
    .subscribe(
      params => {
        const id = Number(params.get('id'))

        if(id){
          this.pizzaService.GetPizzaById(id)
          .subscribe(
            response => {
              this.pizza = response;
            }
          )
        }
      }
    )
  }

  onDelete(){
    setTimeout(() => {
      this.pizzaService.DeletePizza(this.pizza.pizzaID)
    .subscribe(
      response => {
        this.toastr.error('Pizza Deleted Successfully!')
        // alert('Deleted Successfully!')
      }
    )
    },5000)
    this.router.navigate(['pizza'])
  }

 


}
