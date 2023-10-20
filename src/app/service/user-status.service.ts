import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserStatusService {

  // private loggedIn = new BehaviorSubject<boolean>(false);
  // isLoggedIn = this.loggedIn.asObservable();

  // constructor() { }

  // changeLoginStatus(status: boolean) {
  //   this.loggedIn.next(status);
  // }

  private loggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn = this.loggedIn.asObservable();
  userName = new BehaviorSubject<string>('');

  constructor() {
    this.checkStatus();
  }

  checkStatus() {
    const status = localStorage.getItem('loggedIn');
    const userName = localStorage.getItem('userName') || '';
    this.loggedIn.next(status === 'true');
    this.userName.next(userName);
  }

  changeLoginStatus(status: boolean, userName?: string) {
    this.loggedIn.next(status);
    if (userName) {
      this.userName.next(userName);
      localStorage.setItem('userName', userName);
    }
    localStorage.setItem('loggedIn', status.toString());
  }

  logout() {
    this.loggedIn.next(false);
    this.userName.next('');
    localStorage.setItem('loggedIn', 'false');
    localStorage.removeItem('userName');
  }
}
