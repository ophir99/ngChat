import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  AfterViewChecked
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { TextService } from "src/app/services/text.service";
import { FormBuilder } from "@angular/forms";
import * as socket from "socket.io-client";
@Component({
  selector: "app-room",
  templateUrl: "./room.component.html",
  styleUrls: ["./room.component.scss"]
})
export class RoomComponent implements OnInit, AfterViewChecked {
  room;
  messages = [];
  user;
  postForm;
  @ViewChild("wall")
  wall;
  constructor(
    private fb: FormBuilder,
    private ar: ActivatedRoute,
    private textService: TextService
  ) {}

  ngOnInit() {
    this.user = sessionStorage.getItem("user");
    this.createForm();
    this.ar.data.subscribe(
      (res: any) => {
        if (res.room.response.length === 1) {
          this.room = res.room.response[0]._id;
          this.getAllMessages();
        }
      },
      err => {
        console.log(err);
      }
    );
    const io = socket("http://localhost:4500");
    io.on("connect", () => {
      io.emit("createRoom", this.room);
    });
    io.on("newMsg", data => {
      this.messages = [...this.messages, data.data];
      this.scroll();
    });
    this.scroll();
  }

  ngAfterViewChecked() {
    this.scroll();
  }
  createForm() {
    this.postForm = this.fb.group({
      post: [""]
    });
  }
  post() {
    if (!this.postForm.value.post) {
      return false;
    }
    const data = {
      ...this.postForm.value,
      room: this.room,
      by: sessionStorage.getItem("user")
    };
    this.textService.send(data).subscribe(
      res => {},
      err => {
        this.postForm.reset();
      },
      () => {
        this.postForm.reset();
      }
    );
  }

  getAllMessages() {
    this.textService.getConvo(this.room).subscribe((res: any) => {
      this.messages = res.response;
      this.scroll();
    });
  }

  scroll() {
    this.wall.nativeElement.scrollTop = this.wall.nativeElement.scrollHeight;
  }
}
