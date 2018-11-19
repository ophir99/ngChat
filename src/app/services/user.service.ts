import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "./../../environments/environment";
@Injectable({
  providedIn: "root"
})
export class UserService {
  user: string;
  constructor(private http: HttpClient) {}

  createUser = data =>
    this.http.post(`${environment.url.dev}/user/create`, data);

  logUserIn = data => this.http.post(`${environment.url.dev}/user/login`, data);

  getAllUsers = () => this.http.get(`${environment.url.dev}/user/all`);

  updateUser(user) {
    sessionStorage.setItem("user", user.email);
    sessionStorage.setItem("id", user._id);
  }
  getUser = () => sessionStorage.getItem("user");

  logUserOut = () =>
    this.http.put(`${environment.url.dev}/user/logout/${this.getUser()}`, {});

  inviteToChat = (id, email) =>
    this.http.post(`${environment.url.dev}/chatroom/new`, {
      user1: sessionStorage.getItem("id"),
      user2: id,
      user1Name: sessionStorage.getItem("user"),
      user2Name: email
    });

  getAllRooms = () =>
    this.http.get(
      `${environment.url.dev}/chatroom/all?user=${sessionStorage.getItem("id")}`
    );

  goToRoom = id =>
    this.http.get(
      `${environment.url.dev}/chatroom/${id}?user=${sessionStorage.getItem(
        "id"
      )}`
    );
}
