import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BillingDTO, CollectionDTO } from '../DTO/bill';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  private apiUrl = 'http://localhost:8080/subscribe';

  constructor(private http: HttpClient) { }

  getLastBill(): Observable<BillingDTO>{
    return this.http.get<BillingDTO>(`${this.apiUrl}/user/bill`);
  }

 
}
