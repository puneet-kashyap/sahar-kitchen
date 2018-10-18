import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { CartService } from "../../cart.service";
import { FirebaseService } from "../../firebase.service";

@Component({
  selector: "app-check-out",
  templateUrl: "./check-out.component.html",
  styleUrls: ["./check-out.component.css"]
})
export class CheckOutComponent implements OnInit {
  times = [
    "11:30 am",
    "12:00 pm",
    "01:00 pm",
    "01:30 pm",
    "02:00 pm",
    "02:30 pm",
    "05:00 pm",
    "06:00 pm",
    "07:00 pm",
    "08:00 pm",
    "09:00 pm",
    "10:00 pm"
  ];
  cartOrders;

  constructor(
    private firebaseService: FirebaseService,
    private router: Router,
    private cartService: CartService
  ) {}

  ngOnInit() {
    window.scroll(0, 0);
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.cartOrders = this.cartService.cartOrders;
      console.log(this.cartOrders)
      this.router.navigate(["/orders"]);
      this.firebaseService.writeToDatabase("orders", {...form.value,...this.cartOrders});
    }
  }
}
