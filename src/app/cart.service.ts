import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartOrders=[];
  orders: Order;
  getOrders = new Subject();

  constructor() { }

  addToCart(order){
    this.getOrders.next(order);
    this.cartOrders.push(order);
  }

  getCartOrders(): Observable<Order[]>{
    this.getOrders.subscribe(
      order => {
        console.log(order);
        return order;
      }
    )
    return;
  };

}

class Order {
  name: string;
  price: number;
  quantity: number;
}
