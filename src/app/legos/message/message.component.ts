import { Component, OnInit, Input } from "@angular/core";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-message",
  templateUrl: "./message.component.html",
  styleUrls: ["./message.component.scss"]
})
export class MessageComponent implements OnInit {
  user;
  @Input()
  message;
  constructor(private userService: UserService) {
    this.user = userService.getUser();
  }

  ngOnInit() {}
}
