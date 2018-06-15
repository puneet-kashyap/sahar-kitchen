import { Component, OnInit, Inject } from '@angular/core';
import * as firebase from 'firebase';
import { MenuService } from './menu.service';
import {MatDialog} from '@angular/material';
import {MenuPopupComponent} from '../menu/menu-popup/menu-popup.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [MenuService]
})
export class MenuComponent implements OnInit {
  items:{
    type: string, 
    items: {
      itemName: string, 
      itemPrice: string, 
      itemDescription: string
    }[]
  }[] = [];
  
  constructor(
    private menuService: MenuService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    window.scroll(0,0);
    this.items = this.menuService.getMiles();
  }

  menuOrder(order){
    // console.log(order);
    let dialogRef = this.dialog.open(MenuPopupComponent, {
      height: '400px',
      width: '600px',
      data: { name: order.itemName, price: order.itemPrice}
    });
  }

}
