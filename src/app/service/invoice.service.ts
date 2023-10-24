import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InvoiceDTO } from '../DTO/invoice';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private apiUrl = 'http://localhost:8080/invoice';

  //allInvoice: InvoiceDTO [] = [];

  constructor(private http: HttpClient) { }

  getData(): Observable<InvoiceDTO[]>{
    return this.http.get<InvoiceDTO[]>(`${this.apiUrl}/get/invoice`);
  }

}
