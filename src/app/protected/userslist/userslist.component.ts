import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-userslist",
  templateUrl: "./userslist.component.html",
  styleUrls: ["./userslist.component.scss"]
})
export class UserslistComponent implements OnInit {
  user;
  usersList;
  constructor(
    private ar: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {
    this.ar.data.subscribe((data: any) => {
      this.usersList = data.usersList.response;
    });
    this.user = sessionStorage.getItem("id");
    console.log(this.user);
  }

  ngOnInit() {}

  inviteToChat(id, email) {
    console.log(id);
    this.userService.inviteToChat(id, email).subscribe(res => {
      console.log(res);
      this.router.navigateByUrl(`/room/${id}`);
    });
  }
}
