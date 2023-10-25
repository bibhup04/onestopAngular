import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDTO } from '../DTO/user-family';
import { Observable } from 'rxjs';
import { NewMemberDTO } from '../DTO/user-family';

@Injectable({
  providedIn: 'root'
})
export class UserFamilyService {
  private apiUrl = 'http://localhost:8080/app';

  userdto?: UserDTO;
  newMemberDTO?: NewMemberDTO;

  constructor(private http: HttpClient) { }

  getUserFamilyData(): Observable<UserDTO>{
    return this.http.get<UserDTO>(`${this.apiUrl}/user`);
  }

  getFamilyDetails(): Observable<NewMemberDTO>{
    return this.http.get<NewMemberDTO>(`${this.apiUrl}/getMember`);
  }

  // addFamilyDetails(): Observable<NewMemberDTO>{
  //   return this.http.post<NewMemberDTO>(`${this.apiUrl}/getMember`);
  // }
  addFamilyDetails( newMemberDTO: NewMemberDTO): Observable<String> {
    return this.http.post<String>(`${this.apiUrl}/addMember`, newMemberDTO, { responseType: 'text' as 'json' });
  }



}
