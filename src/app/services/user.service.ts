import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  getCurrentUser() {
    if (localStorage.getItem('user')) return localStorage.getItem('user');
    return '';
  }
}
