import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  orders: Order[] = [];

  getOrders = new Subject();

  constructor() { }

  addToCart(order){
    this.orders.push(order);
    this.getOrders.next(this.orders);
  }

}

class Order {
  name: string;
  price: number;
  quantity: number;
}
