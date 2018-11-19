import { Component, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "./services/user.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnDestroy {
  title = "ui-atheer";
  showToolbar: boolean;
  user;
  constructor(private router: Router, private userService: UserService) {
    this.router.events.subscribe(ev => {
      console.log("Cool", this.router.url);
      if (this.router.url === "/") {
        this.showToolbar = false;
      } else {
        this.showToolbar = true;
      }
    });
  }

  ngOnDestroy() {
    let user = this.userService.getUser();
    if (user) {
      this.userService.logUserOut().subscribe(res => {
        console.log(res);
      });
    }
  }
}
