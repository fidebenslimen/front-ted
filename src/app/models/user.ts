import { Role } from "./role";
import { RoleType } from "./RoleType";
export class user {
    userid!: number;
    username!: string;
    email!: string;
    firstname!: string;
    lastname!: string;
    cin!: File;
    etatUser!: string;
    phoneNumber!: string;
    dob!: string;
    password!: string;
    failedLoginAttempts!: string;
    payment_status!: number;
    creationDate!: string;
    roles!: Role[];
    image!:File;
    role!: RoleType;
    

  }
  