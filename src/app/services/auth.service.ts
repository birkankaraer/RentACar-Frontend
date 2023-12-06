import { Injectable } from '@angular/core';
import { LoginModel } from '../models/loginModel';
import { HttpClient } from '@angular/common/http';
import { TokenModel } from '../models/tokenModel';
import { SingleResponseModel } from '../models/singleResonseModel';
import { RegisterModel } from '../models/registerModel';
import { Token } from '@angular/compiler';
import { Observable } from 'rxjs';
import { LocalStorageKeys, LocalStorageService } from './local-storage.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userId: number;
  currentUserId: number;
  apiUrl = 'https://localhost:44329/api/auth/';

  constructor(
    private httpClient: HttpClient,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  login(loginModel: LoginModel): Observable<SingleResponseModel<TokenModel>> {
    return this.httpClient.post<SingleResponseModel<TokenModel>>(
      this.apiUrl + 'login',
      loginModel
    );
  }

  register(
    registerModel: RegisterModel
  ): Observable<SingleResponseModel<TokenModel>> {
    return this.httpClient.post<SingleResponseModel<TokenModel>>(
      this.apiUrl + 'register',
      registerModel
    );
  }

  isAuthenticated() {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }
  getUserId(): number {
    return this.userId;
  }

  getCurrentUserId():number {
    return this.currentUserId
  }

  logout() {
    this.localStorageService.remove(LocalStorageKeys.TOKEN);
    this.localStorageService.remove(LocalStorageKeys.USER);
    this.router.navigate(['']);
  }
}
