import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  orders:{}[]=[];
  cartOrders=[];
  quantity: number = 1;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    // this.cartService.getOrders.subscribe(
    //   order => {
    //     console.log(order);
    //     this.orders.push(order);
    //     console.log(this.orders);
    //   }
    // )
    this.cartOrders = this.cartService.cartOrders;
  };

  incrementQuantity(index){
    this.cartOrders[index].quantity++;
  }

  decrementQuantity(index){
    if(this.cartOrders[index].quantity > 0){
      this.cartOrders[index].quantity--
    }
  }

  setOrders(order){
    return order;
  }

  getOrders(){
    return this.orders;
  }

}
