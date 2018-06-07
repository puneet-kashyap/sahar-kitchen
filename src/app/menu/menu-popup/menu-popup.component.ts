import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

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
    @Inject(MAT_DIALOG_DATA) public data: any){}

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
    console.log(`${this.orderName} added to cart. Total quantity is ${this.quantity}`);
    console.log(`Total cost of this order is ${this.orderPrice * this.quantity}`)
  }

}
