import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CollectionDTO } from '../DTO/bill';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  private apiUrl = 'http://localhost:8080/collection';

  constructor(private http: HttpClient) { }

  payment(collectionDTO: CollectionDTO):Observable<String>{
    return this.http.post<String>(`${this.apiUrl}/payment`, collectionDTO, { responseType: 'text' as 'json' });
  }
}
