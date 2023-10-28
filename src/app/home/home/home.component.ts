import { Component } from '@angular/core';
import { HomeService } from 'src/app/service/home.service';
import { PlanDTO } from 'src/app/DTO/plan';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  planData: PlanDTO [] = [];
  constructor (private homeservice:HomeService){}

  images = ['https://cdn-icons-png.flaticon.com/512/2504/2504929.png', 'https://hindubabynames.info/wp-content/themes/hbn_download/download/entertainment-and-channels-companies/disney-plus-hotstar-logo.png', 'https://hindubabynames.info/wp-content/themes/hbn_download/download/entertainment-and-channels-companies/sony-liv-logo.png', 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Amazon_Prime_Video_blue_logo_1.svg/2048px-Amazon_Prime_Video_blue_logo_1.svg.png'];

  customOptions: any = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        margin: 10,
        stagePadding: 10,
        dots: true
      },
      600: {
        items: 2,
        margin: 10,
        stagePadding: 10,
        dots: true
      },
      1000: {
        items: 3,
        margin: 20,
        stagePadding: 20,
        dots: true
      }
    }
  };
  
 
  
  ngOnInit(){
    this.getdata();

  }



  getdata(){
   
    this.homeservice.getData().pipe(
      catchError((error) => {
        console.error('Error from the server', error);
        throw error;
      })
    ).subscribe((data) => {
          this.planData = data;
          console.log('Data from the server', this.planData);
          this.planData.forEach((plan) => {
            console.log('Plan Id:', plan.planId);
          });
        });

  }


}
