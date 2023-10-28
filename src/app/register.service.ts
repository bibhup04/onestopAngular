import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { newUser } from './user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private baseUrl = 'http://localhost:8080/auth'; 

  constructor(private http: HttpClient) { }

  registerUser(newUser: newUser): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, newUser, { responseType: 'text' as 'json' });
  }
}
