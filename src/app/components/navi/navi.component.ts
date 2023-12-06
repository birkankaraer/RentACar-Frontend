import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import {
  LocalStorageKeys,
  LocalStorageService,
} from 'src/app/services/local-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css'],
})
export class NaviComponent implements OnInit {
  userLoggedIn: boolean = false;

  user: User;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private localStorageService: LocalStorageService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.checkToLogin();
    this.setUserLoggedIn();
    this.setUser();
  }

  checkToLogin() {
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      return false;
    }
  }

  setUserLoggedIn() {
    this.userLoggedIn = this.authService.isAuthenticated();
  }

  setUser() {
    if (
      this.userLoggedIn &&
      this.localStorageService.contain(LocalStorageKeys.USER)
    ) {
      this.userService
        .getUserById(
          Number.parseInt(this.localStorageService.get(LocalStorageKeys.USER))
        )
        .subscribe(
          (response) => {
            this.user = response.data;
            console.log(response);
          },
          (errorResponse) => {
            console.log(errorResponse);
          }
        );
    } else {
      this.user = null;
    }
  }
  logout() {
    this.authService.logout();
    this.userLoggedIn = false;
    this.toastrService.info("Çıkış yaptınız","",{
      progressBar:true
    })
  }
}
