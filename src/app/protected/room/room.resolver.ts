import { Injectable } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import {
  ActivatedRoute,
  Resolve,
  ActivatedRouteSnapshot
} from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class RoomResolver implements Resolve<any> {
  constructor(private userService: UserService) {}
  resolve(ac: ActivatedRouteSnapshot): Observable<any> {
    const uid = ac.params["id"];
    console.log(ac.params["id"]);
    return this.userService.goToRoom(uid);
  }
}
