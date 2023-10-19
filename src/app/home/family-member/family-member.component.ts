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

  MemberDTO: NewMemberDTO = { members: [] };
  newMemberDTO: NewMemberDTO = { members: [] };
  nameAndPhone: NameAndPhone [] = []; 
  newMemberName: string='';
  newMemberPhoneNo: string='';

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
          this.MemberDTO = data;
          console.log('Family Data from the server', this.MemberDTO);
        });

  }

  // Assuming this.nameAndPhone is defined in the class

// Assuming this.newMemberDTO and this.nameAndPhone are defined in the class

addFields() {
  if (this.nameAndPhone.length < 4) {
    const newMember: NameAndPhone = {
      name: this.newMemberName,
      phoneNo: this.newMemberPhoneNo,
    };

    this.nameAndPhone.push(newMember);

    if (this.newMemberDTO) {
      this.newMemberDTO.members = this.nameAndPhone; // Assigning the nameAndPhone array to the members property
    }

    this.newMemberName = '';
    this.newMemberPhoneNo = '';
    console.log("new members to add - " + JSON.stringify(this.nameAndPhone));
  }
}




onSubmit() {
  if (this.newMemberDTO) {
    console.log(JSON.stringify(this.nameAndPhone)); // Display the contents of nameAndPhone
    this.addFamilydata(); // Assuming addFamilydata is defined somewhere in the class
  }
}


  addFamilydata(){
   console.log("family memberws to add " + this.newMemberDTO);
    this.userFamilyService.addFamilyDetails(this.newMemberDTO).pipe(
      catchError((error) => {
        console.error('Error from the server', error);
        throw error;
      })
    ).subscribe((data) => {
          this.MemberDTO = data;
          console.log('Family Data from the server', this.MemberDTO);
        });

  }
  
}
