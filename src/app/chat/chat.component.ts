import { Component, OnInit } from "@angular/core";
import io from "socket.io-client";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.css"]
})
export class ChatComponent implements OnInit {
  constructor() {}
  socket = io("http://localhost:3000", { transports: ["websocket"] });

  ngOnInit() {
    this.socket.on("connect", () => {
      console.log(`Socket ID is: ${this.socket.id}`);
      this.socket.emit("message", "world");
      this.socket.on("message", msg => {
        console.log(msg);
      });
    });
  }
}
