import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';


@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private apiUrl = 'http://localhost:9898/auth/token';
    user: any;
    //private authToken: string | null = null;

    constructor(private http: HttpClient, private router: Router) { }

    login(user: User): Observable<any> {
        return this.http.post(`${this.apiUrl}`, user);
    }

    setToken(token: string): void {
        //this.authToken = token;
        localStorage.setItem('token', token);
    }

    getToken(): string | null {
        return localStorage.getItem('token'); // Use the authToken property if available
    }

    // getHeaders(): HttpHeaders {
    //     const token = this.getToken();
    //     return new HttpHeaders({
    //         'Content-Type': 'application/json',
    //         Authorization: `Bearer ${token}`,
    //     });
    // }

    isUserAdmin(): boolean {
        const token = this.getToken();
        if (token) {
          const decodedToken: any = jwt_decode(token);
          const userRole = decodedToken.role;
          return userRole === 'ADMIN';
        }
        return false;
      }

    get isLoggedIn(): boolean {
        let authToken = localStorage.getItem('token');
        return authToken !== null ? true : false;
    }

    logout(): void {
        //this.authToken = null; // Clear the authToken property
        localStorage.removeItem('token');
        this.router.navigate(['login']);
    }

    isAuthenticated(): boolean {
        let authToken = localStorage.getItem('token');
        return authToken !== null ? true : false;
      }
}
