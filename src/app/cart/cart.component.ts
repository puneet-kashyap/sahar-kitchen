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

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartOrders = this.cartService.cartOrders;
  };

  incrementQuantity(index){
    this.cartOrders[index].quantity++;
    this.itemPrice(index);
  }

  decrementQuantity(index){
    if(this.cartOrders[index].quantity > 0){
      this.cartOrders[index].quantity--;
    }
    this.itemPrice(index);
  }

  itemPrice(index){
    let unitPrice = parseFloat(this.cartOrders[index].price);
    let price = this.cartOrders[index].quantity * unitPrice;
    this.cartOrders[index].newPrice = price.toFixed(2).toString();    
  }

}
