import { Component, OnInit, Input } from "@angular/core";
import { AppService } from "../chat.service";
import * as firebase from "firebase/app";
import "firebase/firestore";

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.scss"]
})
export class InputComponent implements OnInit {
  @Input() userAuth: string;
  myMessage: string = "";

  constructor(private msgService: AppService) {}

  ngOnInit() {}

  sendMsg(msg) {
    if (msg !== null) {
      let message = {
        msg: msg,
        user: this.userAuth,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      };
      this.msgService.addMsg(message).then(() => {
        this.myMessage = "";
      });
    }
  }
}
