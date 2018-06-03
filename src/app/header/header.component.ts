import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  companyName = "Sahar's Kitchen";

  constructor() { }

  ngOnInit() {
  }

  onMenu(){
    console.log('Menu icon clicked');
  }

  onRestaurantMenu(){
    console.log('Restaurant menu icon clicked');
  }

}
