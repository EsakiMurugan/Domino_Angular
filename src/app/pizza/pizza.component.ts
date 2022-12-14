import { Component, OnInit } from '@angular/core';
import { Pizza } from '../models/pizza.model';
import { PizzaService } from '../services/pizza.service';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {

  pizza : Pizza[] = [];

  constructor(private pizzaService : PizzaService) { }

  ngOnInit(): void {
    this.pizzaService.GetAllPizza()
    .subscribe(
      response => {
        console.log(response)
        this.pizza = response;
      }
    )
  }

 

}
