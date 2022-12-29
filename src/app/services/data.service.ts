import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  data:Array<CartItem> =[];
readonly baseUrl = 'http://localhost:3000/products';

  constructor(private http :HttpClient) { }

 
getData ()
{

return this.http.get(this.baseUrl);

}




}
