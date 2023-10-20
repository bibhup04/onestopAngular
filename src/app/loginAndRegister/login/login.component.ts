import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { AuthService } from 'src/app/AuthService';
import { User } from 'src/app/user';
import jwt_decode from 'jwt-decode';
import { UserFamilyService } from 'src/app/service/user-family.service';
import { UserDTO } from 'src/app/DTO/user-family';
import { UserStatusService } from 'src/app/service/user-status.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private userStatusService: UserStatusService,private authService: AuthService, private userFamilyService: UserFamilyService, private router: Router) { }
  user: User = {
    username: '',
    password: ''
  };


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
      this.authService.setToken(token);
      const userName = this.authService.getUserName(); // Assuming the username is accessible in this.userDTO
      this.userStatusService.changeLoginStatus(true, userName);

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
      redirectRoute = '/home';
    } else{
      redirectRoute = '/register';
    }

   

    this.getFamilydata();


    
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
