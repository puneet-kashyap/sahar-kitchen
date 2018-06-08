import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { CartService } from './cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [CartService]
})
export class AppComponent implements OnInit {

  constructor(private cartService: CartService){};

  ngOnInit() {
    var config = {
      apiKey: "AIzaSyCbFzEgQzl4cKq-8pKK8oO8iQg5J0mQR9U",
      databaseURL: "https://sahar-kitchen.firebaseio.com",
    };
    firebase.initializeApp(config);    
  }
}
