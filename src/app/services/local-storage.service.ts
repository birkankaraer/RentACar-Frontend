import { Injectable } from '@angular/core';

export const LocalStorageKeys = {
  USER: "user",
  RENTAL_CAR: "rentalCar",
  TOKEN: "token",
}

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  localStorage:Storage;

  constructor() {this.localStorage = window.localStorage;}

  set(key: string, value: string){
    this.localStorage.setItem(key,value);
  }

  clean(){
    this.localStorage.clear();
  }
  getToken(){
    return localStorage.getItem("token")
  }

  save(key: string, value: any) {
    let json = JSON.stringify(value);
    localStorage.setItem(key, json);
  }

  isSave(key: string): boolean {
    if (!localStorage.getItem(key)) {
      return false;
    }
    return true;
  }

  get(key: string): any {
    let json = localStorage.getItem(key);
    if (json) {
      return JSON.parse(json);
    } else {
      return null;
    }
  }
  getkey(key : string){
    return this.localStorage.getItem(key);
  }

  getWithType<T>(key: string): T | null {
    let json = localStorage.getItem(key);
    if (json) {
      let value: T = Object.assign({}, JSON.parse(json));
      return value;
    }
    return null;
  }

  remove(key: string) {
    localStorage.removeItem(key);
  }

  removeAll() {
    localStorage.clear();
  }

  contain(key:string):boolean {
    if(localStorage.getItem(key)) {
      return true
    } else {
      return false
    }
  }
  GetUserId():number{
    return Number.parseInt(this.get(LocalStorageKeys.USER))
  }
}
