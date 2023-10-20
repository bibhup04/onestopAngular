import { Component, HostBinding, Inject, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { PlanDTO, PlanIdDTO } from 'src/app/DTO/plan';
import { HomeService } from 'src/app/service/home.service';
import { catchError } from 'rxjs';
import { AuthService } from 'src/app/AuthService';
import { Router } from '@angular/router';




@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  animations: [
    trigger('flip', [
      state('front', style({ transform: 'none' })),
      state('back', style({ transform: 'rotateY(180deg)' })),
      transition('front => back', [animate('0.5s')]),
      transition('back => front', [animate('0.5s')]),
    ]),
  ],
})
export class CardComponent {
  @Input() plan!: PlanDTO;
  flipState: string = 'front';
  planIdDTO: PlanIdDTO = { planId: 0 };
  openModal:Boolean = false;
  num : number = 0;
  response : string = '';
  
  constructor( private authService: AuthService,private homeservice:HomeService, private router: Router) {};

  toggleFlip() {
    this.flipState = this.flipState === 'front' ? 'back' : 'front';
  }

  ottImages: { [key: string]: string } = {
    'Netflix': 'https://cdn-icons-png.flaticon.com/512/2504/2504929.png',
    'AmazonPrimeVideo': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Amazon_Prime_Video_blue_logo_1.svg/2048px-Amazon_Prime_Video_blue_logo_1.svg.png',
    'Disney+': 'https://hindubabynames.info/wp-content/themes/hbn_download/download/entertainment-and-channels-companies/disney-plus-hotstar-logo.png',
    'SonyLiv': 'https://hindubabynames.info/wp-content/themes/hbn_download/download/entertainment-and-channels-companies/sony-liv-logo.png'
  };



openConfirmation() {
  this.openModal = true;
  if (!this.authService.isLoggedIn) {
    this.redirectToLogin();
  } else {
    if (this.plan) {
        console.log('Plan ID:', this.plan.planId); 
      } else {
        console.error('Plan is undefined.');
    }

  }
}

redirectToLogin() {
  // Redirect to the login page
  this.router.navigate(['/login']); // Adjust the route to your login page
}





  closeModal() {
    this.openModal = false;
  }

  confirmPurchase() {
    //console.log(this.plan)
    console.log('Current Plan ID:', this.plan.planId); // Check the current value of this.planId
    //  this.planIdDTO = this.plan.planId;
    
    this.num = this.plan.planId;
    console.log("number" + this.num);
    this.planIdDTO.planId = this.num;
    console.log(this.planIdDTO.planId);
    
    this.buyPlan();

  }
  
  

  buyPlan(){
   
    this.homeservice.buyPlan(this.planIdDTO).pipe(
      catchError((error) => {
        alert("plan subscribed successfully");
        console.error('Error from the server', error);
        throw error;
      })
    ).subscribe((data) => {
        this.response = data;
        alert("real response "+this.response);
          console.log('Plan subscribed', data);
        });
        this.closeModal();
  }

  // openDialog(): void {
  //   const dialogRef = this.dialog.open(DialogComponent, {
  //     width: '250px',
  //     data: { response: this.response },
  //   });

  //   dialogRef.afterClosed().subscribe((result) => {
  //     console.log('The dialog was closed');
  //   });
  // }


}
