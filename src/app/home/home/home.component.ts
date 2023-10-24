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
