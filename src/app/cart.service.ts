import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  order:{
    name: string,
    price: number,
    quantity: number
  }

  constructor() { }

  addToCart(order){
      this.order = order;
      console.log(this.order);
  }
}
