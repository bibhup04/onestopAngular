export class UserDTO {
    id?: number;
    name?: string;
    email?: string;
    phoneNo?: string;
    password?: string;
    role?: string;
    status?: string;
  }
  

export interface NewMemberDTO {
  members: NameAndPhone[];

}
  
export interface NameAndPhone {
  name: string;
  phoneNo: string;
}
  