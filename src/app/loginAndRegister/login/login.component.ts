import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { AuthService } from 'src/app/AuthService';
import { User } from 'src/app/user';
import jwt_decode from 'jwt-decode';
import { UserFamilyService } from 'src/app/service/user-family.service';
import { UserDTO } from 'src/app/DTO/user-family';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authService: AuthService, private userFamilyService: UserFamilyService, private router: Router) { }
  user: User = {
    username: '',
    password: ''
  };

  ngOnInit(){};

  userDTO?: UserDTO;

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

    this.getFamilydata();
    this.ngOnInit();

    
    this.router.navigate([redirectRoute]);
    
    });
    
  }

  logout(): void {
    this.authService.logout();
  }

  getFamilydata(){

    this.userFamilyService.getUserFamilyData().pipe(
      catchError((error) => {
        console.error('Error from the server', error);
        throw error;
      })
    ).subscribe((data) => {
          this.userDTO = data;
          console.log('Data from the server', this.userDTO);
        });

  }

}
