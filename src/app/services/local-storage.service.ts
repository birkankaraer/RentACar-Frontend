import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

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
}
