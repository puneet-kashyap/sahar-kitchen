import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  companyName = "Sahar's Kitchen";
  orders = 1;
  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  onMenu(){
    console.log('Menu icon clicked');
  }

  onRestaurantMenu(){
    console.log('Restaurant menu icon clicked');
  }

  showBadge(){
    if(this.orders > 0){
      return true;
    }    
  }
  

}
