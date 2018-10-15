import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";
import io from "socket.io-client";

@Injectable({
  providedIn: "root"
})
export class ChatService {
  constructor() {}

  private url = "http://localhost:3000";
  private socket = io("http://localhost:3000", { transports: ["websocket"] });

  public sendMessage(message) {
    this.socket.emit("add-message", message);
  }

  public getMessages() {
    let observable = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on("message", (message: any) => {
        observer.next(message);
      });
      return () => {
        this.socket.disconnect();
      };
    });
    return observable;
  }
}
