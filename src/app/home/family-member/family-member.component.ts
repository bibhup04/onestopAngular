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

  modalVisible: boolean = false;
  modalMessage: string = '';
  isError: boolean = false;
  isSuccess: boolean = false;

  constructor (private userFamilyService:UserFamilyService){}

  ngOnInit(){
    this.getFamilydata();

  }

  userMembers: { [key: string]: string } = {
    member1: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fcodepen.io%2FFibonaccifreak%2Ffull%2FEqQzNx&psig=AOvVaw1tZx-JV4OWLZWz1KDh7Sjc&ust=1697866866687000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCPCJ55H1g4IDFQAAAAAdAAAAABAD',
    member2: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fnetflix-bootcamp-db.netlify.app%2F&psig=AOvVaw1tZx-JV4OWLZWz1KDh7Sjc&ust=1697866866687000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCPCJ55H1g4IDFQAAAAAdAAAAABAI',
    member3: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fhotcore.info%2Fbabki%2Fnetflix-profile-icon.htm&psig=AOvVaw1tZx-JV4OWLZWz1KDh7Sjc&ust=1697866866687000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCPCJ55H1g4IDFQAAAAAdAAAAABAX',
    member4: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fhotcore.info%2Fbabki%2Fnetflix-profile-icon.htm&psig=AOvVaw1tZx-JV4OWLZWz1KDh7Sjc&ust=1697866866687000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCPCJ55H1g4IDFQAAAAAdAAAAABAX',
    member5: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fvlr.eng.br%2Ftri-colour-gold-necklace%2F%2Fthe-default-netflix-profile-r-pareidolia-ww-47512488&psig=AOvVaw1tZx-JV4OWLZWz1KDh7Sjc&ust=1697866866687000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCPCJ55H1g4IDFQAAAAAdAAAAABAt',
    member6: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fnetflixsmiley%2Fstatus%2F1446887999476731904&psig=AOvVaw1tZx-JV4OWLZWz1KDh7Sjc&ust=1697866866687000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCPCJ55H1g4IDFQAAAAAdAAAAABA9'
};


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


addFamilydata() {
  console.log("family members to add " + this.newMemberDTO);
  this.userFamilyService.addFamilyDetails(this.newMemberDTO).pipe(
    catchError((error) => {
      console.error('Error from the server', error);
      let errorMessage;
      if (error.status === 400) {
        errorMessage = error.error;
      } else {
        errorMessage = 'Error from the server: ' + (error.message ? error.message : JSON.stringify(error));
      }
      this.openResponseModal(errorMessage, true); 
      throw error;
    })
  ).subscribe((data) => {
    console.log('Family Data from the server', data);
    this.ngOnInit();
  });
}

openResponseModal(message: string, isError: boolean) {
  console.log("inside open response Modal" )
  this.modalMessage = message;
  this.isError = isError;
  this.isSuccess = !isError;
  this.modalVisible = true;
  console.log("inside open response Modal" + this.modalVisible)
}

closeResponseModal() {
  this.modalVisible = false;
}

deleteMember(member: NameAndPhone) {
  console.log("Member Name: ", member.name);
  console.log("Member Phone Number: ", member.phoneNo);
  this.userFamilyService.deleteFamilyMember(member).pipe(
    catchError((error) => {
      console.error('Error from the server', error);
      let errorMessage;
      if (error.status === 400) {
        errorMessage = error.error;
      } else {
        errorMessage = 'Error from the server: ' + (error.message ? error.message : JSON.stringify(error));
      }
      this.openResponseModal(errorMessage, true); 
      throw error;
    })
  ).subscribe((data) => {
    console.log('Member deleted successfully', data);
    this.ngOnInit();
  });

}

  
}
