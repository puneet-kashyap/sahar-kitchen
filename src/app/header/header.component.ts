import { Component, OnInit } from "@angular/core";
import { CartService } from "../cart.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  companyName = "Kohinoor Restaurant";
  orders: {}[] = [];
  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.getOrders.subscribe(order => {
      this.orders.push(order);
    });
  }

  onMenu() {
    console.log("Menu icon clicked");
  }

  onRestaurantMenu() {
    console.log("Restaurant menu icon clicked");
  }

  cartBadge() {
    return this.orders.length;
  }

  hideBadge() {
    return this.orders.length < 1 ? true : false;
  }
}
