import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-menu-popup',
  templateUrl: './menu-popup.component.html',
  styleUrls: ['./menu-popup.component.css']
})
export class MenuPopupComponent implements OnInit {
  orderName: string;
  orderPrice;
  quantity: number = 1;

  constructor(public dialogRef: MatDialogRef<MenuPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private cartService: CartService){}

  ngOnInit() {
    this.orderName = this.data.name;
    this.orderPrice = this.data.price;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  incrementQuantity(){
    this.quantity++;
  }

  decrementQuantity(){
    if(this.quantity>0){
      this.quantity--;
    }
  }

  addToCart(){
    this.cartService.addToCart({
      name: this.orderName,
      price: this.orderPrice,
      quantity: this.quantity
    });
  }

}
