export class UserDTO {
    id?: number;
    name?: string;
    email?: string;
    phoneNo?: string;
    password?: string;
    role?: string;
    status?: string;
  }
  

export class NewMemberDTO {
  members?: NameAndPhone[];
}
  
export class NameAndPhone {
  name?: string;
  phoneNo?: string;
}
  