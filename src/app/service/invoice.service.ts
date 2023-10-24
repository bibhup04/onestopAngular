import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InvoiceDTO, InvoiceIdDTO } from '../DTO/invoice';

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

  displayPdf(invoiceIdDTO: InvoiceIdDTO): Observable<HttpResponse<Blob>> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/pdf',
    });

    return this.http.post<Blob>(`${this.apiUrl}/displayPdf`, invoiceIdDTO, {
      headers: headers,
      observe: 'response',
      responseType: 'blob' as 'json'
    });
  }

}
