import { Component } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from "firebase/app";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  constructor(public afAuth: AngularFireAuth) {}
  login() {
    this.afAuth.auth
      .signInWithPopup(new auth.GoogleAuthProvider())
      .then(usr => {
        console.log(usr);
      });
  }
  logout() {
    this.afAuth.auth.signOut();
  }
}
