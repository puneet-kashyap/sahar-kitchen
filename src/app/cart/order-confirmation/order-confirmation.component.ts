import { Component, OnInit } from '@angular/core';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent implements OnInit {
  cartOrders;
  itemTotals = 0;
  constructor(private cartService: CartService) { }

  ngOnInit() {
    window.scroll(0,0);
    this.cartOrders = this.cartService.cartOrders;
    console.table(this.cartOrders);
    this.cartOrders.forEach((item) => {
      if(item.newPrice){
        this.itemTotals = this.itemTotals + parseFloat(item.newPrice);
      }
    })
  }

}
