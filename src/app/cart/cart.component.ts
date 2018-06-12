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
  totalPrice:number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartOrders = this.cartService.cartOrders;
    if(this.totalPrice == 0){
      this.cartOrders.forEach( (item) => {
        item.newPrice = (item.quantity * parseFloat(item.price));
        this.totalPrice = this.totalPrice + parseFloat(item.price);
      })
    }
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
    this.grandTotal();
  }

  grandTotal(){
    let itemTotals = 0;
    this.cartOrders.forEach( (item) => {
      if(item.newPrice){
        itemTotals = itemTotals + parseFloat(item.newPrice);
      }
    });
    this.totalPrice = itemTotals;
  }

}
