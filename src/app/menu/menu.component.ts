import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { FirebaseService } from "../firebase.service";
import { MenuPopupComponent } from "../menu/menu-popup/menu-popup.component";
@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"],
  providers: [FirebaseService]
})
export class MenuComponent implements OnInit {
  items: {
    type: string;
    items: {
      itemName: string;
      itemPrice: string;
      itemDescription: string;
    }[];
  }[] = [];

  constructor(
    public firebaseService: FirebaseService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    window.scroll(0, 0);
    this.getMenu();
  }

  getMenu() {
    this.firebaseService.db
      .collection("menu")
      .doc("menuDoc")
      .get()
      .then(doc => {
        this.items = doc.data().menu;
      });
  }

  menuOrder(order) {
    this.dialog.open(MenuPopupComponent, {
      height: "400px",
      width: "600px",
      data: { name: order.itemName, price: order.itemPrice }
    });
  }
}
