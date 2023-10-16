import { Component } from '@angular/core';
import { RegisterService } from 'src/app/register.service';
import { newUser } from 'src/app/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  newUser: newUser = {
    name: '',
    password: '',
    email: '',
    phoneNo: ''
  };
  passwordRepeat?: '';
  constructor(private registerService: RegisterService) { }

  register(){
    if (this.newUser.password !== this.passwordRepeat) {
      alert("Passwords do not match. Please re-enter them.");
      this.newUser.name='';
      this.newUser.password='';
      this.newUser.email='';
      this.newUser.phoneNo = '';
      this.passwordRepeat = '';
    } else {
      console.log("new user is " + this.newUser.name + " password - " + this.newUser.password + " repeat pass - " + this.passwordRepeat);
      this.registerService.registerUser(this.newUser).subscribe(
        (response) => {
          console.log("Registration successful", response);
          // Optionally, you can perform redirection or other actions on success
        },
        (error) => {
          console.error("Registration failed", error);
          // Handle errors here
        }
      );
    }
  
  }
}
