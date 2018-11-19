import { Injectable } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { Resolve } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class UsersListResolver implements Resolve<any> {
  constructor(private userService: UserService) {}

  resolve() {
    return this.userService.getAllUsers();
  }
}
