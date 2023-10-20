import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PlanDTO, PlanIdDTO } from '../DTO/plan';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private apiUrl = 'http://localhost:8080/app';

  planData: PlanDTO [] = [];

  constructor(private http: HttpClient) { }

  getData(): Observable<PlanDTO[]>{
    return this.http.get<PlanDTO[]>(`${this.apiUrl}/home`);
  }

  buyPlan( planIdDTO: PlanIdDTO): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/plan/buy`, planIdDTO, { responseType: 'json'});
  }

}          
          