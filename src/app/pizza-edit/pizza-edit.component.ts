import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UpdatePizza } from '../models/pizza-update.model';
import { Pizza } from '../models/pizza.model';
import { PizzaService } from '../services/pizza.service';

@Component({
  selector: 'app-pizza-edit',
  templateUrl: './pizza-edit.component.html',
  styleUrls: ['./pizza-edit.component.css']
})
export class PizzaEditComponent implements OnInit {

  pizza! : Pizza;

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
              this.pizza = response
              //console.log(response)
            }
          )
        }
      }
    )
  }

  onSubmit(){
    const updatepizza : UpdatePizza = {
      pizzaID : this.pizza.pizzaID,
      pizzaName : this.pizza.pizzaName,
      price : this.pizza.price,
      stock : this.pizza.stock
    }

    setTimeout(() => {
      this.pizzaService.updatePizza(this.pizza.pizzaID,updatepizza)
      .subscribe(
        response => {
          console.log(response)
          setTimeout(()=>{
            this.toastr.success('Pizza Updated Successfully!')
          },5000)
        }
      )
    },5000)
    this.router.navigate(['pizza'])
  }

}
