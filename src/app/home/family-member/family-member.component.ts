import { Component } from '@angular/core';
import { UserFamilyService } from 'src/app/service/user-family.service';
import { NewMemberDTO, NameAndPhone } from 'src/app/DTO/user-family';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-family-member',
  templateUrl: './family-member.component.html',
  styleUrls: ['./family-member.component.css']
})
export class FamilyMemberComponent {

  newMemberDTO?: NewMemberDTO;
  nameAndPhone: NameAndPhone [] = []; 
  newMemberName?: string;
  newMemberPhoneNo?: string;

  constructor (private userFamilyService:UserFamilyService){}

  ngOnInit(){
    this.getFamilydata();

  }

  getFamilydata(){
   
    this.userFamilyService.getFamilyDetails().pipe(
      catchError((error) => {
        console.error('Error from the server', error);
        throw error;
      })
    ).subscribe((data) => {
          this.newMemberDTO = data;
          console.log('Family Data from the server', this.newMemberDTO);
        });

  }

  onSubmit(){}

  addNewMember(): void {
    this.newMemberName = '';
    this.newMemberPhoneNo = '';
  }

}
