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
  showSubscription: boolean = true;

  modalVisible: boolean = false;
  modalMessage: string = '';
  isError: boolean = false;
  isSuccess: boolean = false;

  constructor (private subscriptionService: SubscriptionService, private router: Router){}

  ngOnInit(){
    this.getSubscribedPlan();

  }

  getSubscribedPlan(){
    this.subscriptionService.getSubscribedPlan().pipe(
      catchError((error) => {
        console.error('Error from the server', error);
        this.showSubscription = false;
        throw error;
      })
    ).subscribe((data) => {
          this.subscription = data;
          if(this.subscription == null){
            this.showSubscription = false;
          }else{
            this.showSubscription = true;
          }
          
          //console.log('Data from the server', this.subscription.planId);
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
                // alert('Error from the server: ' + error.message);
                this.openResponseModal("Error from the server: " + error.message, true);
                
                throw error;
            })
        ).subscribe((data) => {
            console.log('Data from the server', data);
            // alert('Subscription ended successfully');
            this.openResponseModal("Subscription ended successfully", false);
            this.router.navigate(['/bill'])
        });
    } else {
        console.error("There is no subscribed plan, Refresh the page.");
    }
  }

  openResponseModal(message: string, isError: boolean) {
    this.modalMessage = message;
    this.isError = isError;
    this.isSuccess = !isError;
    this.modalVisible = true;
  }

  // Function to close the modal
  closeResponseModal() {
    this.modalVisible = false;
  }

}




  





