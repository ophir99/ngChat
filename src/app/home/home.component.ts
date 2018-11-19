import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material";
import { UserService } from "../services/user.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  loginForm: FormGroup;
  signupForm: FormGroup;
  activeTab: string = "login";
  showSpinner: boolean = false;
  msg: string;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private userService: UserService
  ) {
    this.loginForm = this.formBuilder.group({
      email: [""],
      password: [""]
    });
    this.signupForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]],
      confirmPassword: ["", Validators.required]
    });
  }

  ngOnInit() {}
  submit() {
    if (this.loginForm.invalid) {
      this.snackBar.open("Please provide valid data", "", { duration: 2000 });
      return false;
    }
    this.changeDom("");
    this.msg = "logging in";

    this.userService.logUserIn(this.loginForm.value).subscribe(
      (res: any) => {
        console.log(res);
        this.changeDom("login");
        if (res.response == "User not found") {
          this.snackBar.open("User not found. Sign up or try agin", "", {
            duration: 2000
          });
          return false;
        }
        this.userService.updateUser(res.response[0]);
        this.router.navigateByUrl("dashboard");
      },
      err => {
        console.log(err);
        this.changeDom("login");
        this.snackBar.open("Something is wrong with network. Try agin", "", {
          duration: 2000
        });
      },
      () => {
        this.loginForm.reset();
      }
    );
  }

  register() {
    if (this.signupForm.invalid) {
      this.snackBar.open("Please provide valid data", "", { duration: 2000 });
      return false;
    }
    this.changeDom("");
    this.msg = "Creating your account";
    this.userService.createUser(this.signupForm.value).subscribe(
      (res: any) => {
        console.log(res);
        if (res.error) {
          this.snackBar.open("Something is wrong. Try again", "", {
            duration: 2000
          });
          this.changeDom("createAccount");
          return false;
        }
        this.snackBar.open("User Created", "", { duration: 2000 });
        this.changeDom("login");
      },
      error => {
        setTimeout(() => {
          console.log(error);
          this.changeDom("createAccount");
          this.snackBar.open("Something is wrong", "", {
            duration: 2000
          });
        }, 2000);
      },
      () => {
        this.signupForm.reset();
      }
    );
  }

  changeDom(tab: string) {
    this.showSpinner = !this.showSpinner;
    this.activeTab = tab;
  }
}

// 9177113360
