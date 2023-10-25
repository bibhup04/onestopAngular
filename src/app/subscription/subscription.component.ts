import { Component } from '@angular/core';
import { SubscriptionService } from '../service/subscription.service';
import { SubscriptionDTO } from '../DTO/subpscription';
import { catchError } from 'rxjs';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent {

  subscription: Partial<SubscriptionDTO> = {};
  showConfirmation: boolean = false;

  constructor (private subscriptionService: SubscriptionService, private router: Router){}

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
          console.log('Data from the server', this.subscription.planId);
        });
  }

  endSubscription(){
    console.log("end subscription- " + this.subscription.subscriptionId);
    this.endSubscribedPlan();
    this.showConfirmation = false
  }

  endSubscribedPlan() {
    if (this.subscription) {
        console.log("end subscription- " + this.subscription.subscriptionId);
        this.subscriptionService.endSubscription(this.subscription as SubscriptionDTO).pipe(
            catchError((error) => {
                console.error('Error from the server', error);
                alert('Error from the server: ' + error.message);
                throw error;
            })
        ).subscribe((data) => {
            console.log('Data from the server', data);
            alert('Subscription ended successfully');
            this.router.navigate(['/bill'])
        });
    } else {
        console.error("There is no subscribed plan, Refresh the page.");
    }
  }
}




  





