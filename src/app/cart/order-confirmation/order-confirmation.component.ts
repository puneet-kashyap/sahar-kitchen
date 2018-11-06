import { Component, OnInit } from '@angular/core';
import { CartService } from '../../cart.service';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent implements OnInit {
  companyName = `${environment.companyName} Restaurant`;
  phone = environment.companyPhoneNumber;
  cartOrders;
  itemTotals = 0;
  orderConfirmationNumber = Math.floor(Math.random()*90000) + 10000;
  constructor(private cartService: CartService) { }

  ngOnInit() {
    window.scroll(0,0);
    this.cartOrders = this.cartService.cartOrders;
    console.table(this.cartOrders);
    this.cartOrders.forEach((item) => {
      if(item.totalPrice){
        this.itemTotals = this.itemTotals + parseFloat(item.totalPrice);
      }
    })
  }

}
