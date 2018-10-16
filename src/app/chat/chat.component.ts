import {
  Component,
  OnInit,
  ViewChild,
  AfterViewChecked,
  ElementRef
} from "@angular/core";
import { NgForm } from "@angular/forms";
import io from "socket.io-client";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.css"]
})
export class ChatComponent implements OnInit, AfterViewChecked {
  @ViewChild("scrollMe")
  private myScrollContainer: ElementRef;
  constructor() {}

  inputMsg: string = "";
  chatMessages: {}[] = [];

  socket = io("http://localhost:3000", { transports: ["websocket"] });

  scrollToBottom() {
    this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
  }
  ngAfterViewChecked() {}

  ngOnInit() {
    this.socket.on("connect", () => {
      console.log(`Socket ID is: ${this.socket.id}`);
      this.socket.emit("message", "world");
      this.socket.on("message", msg => {
        console.log(msg);
      });
    });
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.chatMessages.push({ msg: form.value.msg, msgFrom: "user" });
      this.socket.emit("message",form.value.msg);
      form.resetForm();
    }
}
}
