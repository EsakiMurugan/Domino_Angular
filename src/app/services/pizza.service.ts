import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddPizza } from '../models/pizza-add.model';
import { UpdatePizza } from '../models/pizza-update.model';

import { Pizza } from '../models/pizza.model';

@Injectable({
  providedIn: 'root'
})

export class PizzaService {

  // pizza : Pizza[] = [];

  constructor(private http : HttpClient) { }

  apiBaseURL = "https://localhost:7200/"

  GetAllPizza() : Observable<Pizza[]>{
    return this.http.get<Pizza[]>(this.apiBaseURL + 'api/pizza')
  }

  GetPizzaById(id : number) : Observable<Pizza>{
    return this.http.get<Pizza>(this.apiBaseURL + 'api/pizza/' + id);
  }

  updatePizza(id : number, updatePizza : UpdatePizza){
    return this.http.put<Pizza>(this.apiBaseURL + 'api/pizza', updatePizza)

    // setTimeout( () => {
    //   return this.http.put<Pizza>(this.apiBaseURL + 'api/pizza', updatePizza)
    // },5000)
    
  }

  AddPizza(addPizza : AddPizza) : Observable<Pizza>{
    return this.http.post<Pizza>(this.apiBaseURL + 'api/pizza', addPizza)
  } 

  DeletePizza(id : number) : Observable<Pizza>{
    return this.http.delete<Pizza>(this.apiBaseURL + 'api/pizza/' + id)
  }

}
