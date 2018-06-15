import { Component, OnInit } from '@angular/core';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent implements OnInit {
  cartOrders;
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartOrders = this.cartService.cartOrders;
    console.table(this.cartOrders);
    
  }

}
