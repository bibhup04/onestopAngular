import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { AuthService } from 'src/app/AuthService';
import { User } from 'src/app/user';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) { }
  user: User = {
    username: '',
    password: ''
  };

  login(): void {
    this.authService.login(this.user).pipe(
      catchError((error) => {
        console.error('Login failed:', error);
        throw error;
      })
    ).subscribe((response) => {
      const token = response.token;
      console.log("token is - " +token);

      // Decode the JWT token
    const decodedToken: any = jwt_decode(token);
      console.log("decoded token is "+ decodedToken.role);
    // Check the user's role (scope) from the decoded token
    const userRole = decodedToken.role;
    

    let redirectRoute: string;

   // redirectRoute = '/home';

    if (userRole === 'USER') {
      redirectRoute = '/home';
    } else if(userRole === 'ADMIN') {
      redirectRoute = '/admin';
    } else{
      redirectRoute = '/register';
    }

    this.authService.setToken(token);
    this.router.navigate([redirectRoute]);
    });
  }

  logout(): void {
    this.authService.logout();
  }

}
