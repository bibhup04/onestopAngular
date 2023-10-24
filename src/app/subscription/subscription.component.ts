import { Component } from '@angular/core';
import { SubscriptionService } from '../service/subscription.service';
import { SubscriptionDTO } from '../DTO/subpscription';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent {

  subscription: Partial<SubscriptionDTO> = {};

  constructor (private subscriptionService: SubscriptionService){}

  ngOnInit(){
    this.getSubscribedPlan();

  }

  getSubscribedPlan(){
    this.subscriptionService.getSubscribedPlan().pipe(
      catchError((error) => {
        console.error('Error from the server', error);
        throw error;
      })
    ).subscribe((data) => {
          this.subscription = data;
          console.log('Data from the server', this.subscription);
        });
  }


}
