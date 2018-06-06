import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { MenuService } from './menu.service';

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
  
  constructor(private menuService: MenuService) { }
  ngOnInit() {
    window.scroll(0,0);
    this.items = this.menuService.getMiles();
  }


  menus = [
    {
      'img':"../../assets/images/menu-1.jpeg",
      'alt':'Menu1'
    },
    {
      'img':"../../assets/images/menu-2.jpeg",
      'alt':'Menu2'
    },
    {
      'img':"../../assets/images/menu-3.jpeg",
      'alt':'Menu3'
    },
    {
      'img':"../../assets/images/menu-4.jpeg",
      'alt':'Menu4'
    },
    {
      'img':"../../assets/images/menu-5.jpeg",
      'alt':'Menu5'
    },
    
  ]

}
