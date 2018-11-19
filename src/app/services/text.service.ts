import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from "./../../environments/environment";
import { shareReplay, distinctUntilChanged } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class TextService {
  constructor(private http: HttpClient) {}

  send = data =>
    this.http
      .post(`${environment.url.dev}/message/new`, data)
      .pipe(distinctUntilChanged());

  getAllMessages = (user, receiver) => {
    console.log("BY", user, "To", receiver);
    return this.http.get(
      `${environment.url.dev}/message?createdBy=${user}&receivedBy=${receiver}`
    );
  };

  getConvo = id => {
    return this.http.get(`${environment.url.dev}/message?room=${id}`);
  };
}
