import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SubscriptionDTO } from '../DTO/subpscription';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  private apiUrl = 'http://localhost:8080/subscribe';

  constructor(private http: HttpClient) { }

  getSubscribedPlan(): Observable<SubscriptionDTO>{
    return this.http.get<SubscriptionDTO>(`${this.apiUrl}/user/subscription`);
  }

  endSubscription(subscriptionDTO: SubscriptionDTO): Observable<String>{
    return this.http.post<String>(`${this.apiUrl}/end/subscription`, subscriptionDTO, { responseType: 'text' as 'json' });
  }
}
