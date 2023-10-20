import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../AuthService';
import { UserStatusService } from '../service/user-status.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  isLoggedIn = false;
  isAdmin = false;
  userName = "abc";

  constructor(private userStatusService: UserStatusService, private authService: AuthService, private router: Router) {
    this.isLoggedIn = this.authService.isLoggedIn;
    this.isAdmin = this.authService.isUserAdmin();
    this.userName = this.authService.getUserName();
  }

  // getUserName(){
  //   this.userName = this.authService.getUserName();
  // }
  ngOnInit() {
    this.userStatusService.isLoggedIn.subscribe(status => {
      this.isLoggedIn = status;
      if (status) {
        this.userName = this.authService.getUserName();
      } else {
        this.userName = ''; // Reset the username if the user is not logged in
      }
    });
  }
  logout() {
    this.authService.logout(); 
    this.isLoggedIn = false;
    this.userStatusService.changeLoginStatus(false);
    this.router.navigate(['/home']);
  }

  login(){
    this.router.navigate(['/login'])
  }

  register(){
    this.router.navigate(['/register'])
  }

  navigateAdmin(){
    this.router.navigate(['/admin']);
  }

  family(){
    this.router.navigate(['/family']);
  }

}