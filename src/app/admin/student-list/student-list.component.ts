import { Component, OnInit } from '@angular/core';
import { StudentsService } from './students.service';
import {FormBuilder,FormGroup} from '@angular/forms';
import { StudentsModel } from './students.model';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { AdduserService } from 'src/app/services/adduser.service';
import { NgForm } from '@angular/forms';
import { user } from 'src/app/models/user';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({

  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent  implements OnInit{
  date!: Date;
 
  StudentsModel  : StudentsModel = new  StudentsModel ();
 studentsData !:any;
 model!: NgbDateStruct;
 constructor(private AdduserService: AdduserService,private router: Router) { 

 }
 
 ngOnInit(): void {
  //throw new Error('Method not implemented.');
}
selectedFiles?: FileList;
currentFile?: File;
progress = 0;
message = '';
preview = '';
imageInfos?: Observable<any>;
f = new File([""], "filename");

selectFile(event: any): void {
  this.message = '';
  this.preview = '';
  this.progress = 0;
  this.selectedFiles = event.target.files;

  if (this.selectedFiles) {
    const file: File | null = this.selectedFiles.item(0);

    if (file) {
      this.preview = '';
      this.currentFile = file;

      const reader = new FileReader();

      reader.onload = (e: any) => {
       // console.log(e.target.result);
        this.preview = e.target.result;
      };

      reader.readAsDataURL(this.currentFile);
    }
  }
}



onSubmit(form: NgForm) {
  let user = {
    userid: 0,
    username: form.value.username,
    email: form.value.email,
    firstname: form.value.firstname,
    lastname: form.value.lastname,
    cin: form.value.cin,
    etatUser: form.value.etatUser,
    phoneNumber: form.value.phoneNumber,
    dob: form.value.dob,
    password: form.value.password,
    failedLoginAttempts: form.value.failedLoginAttempts,
    payment_status: form.value.payment_status,
    creationDate: form.value.creationDate,
    roles: form.value.roleType,
    image: this.f,
    role:form.value.roleType
    
  }
  this.progress = 0;

  if (this.selectedFiles) {
    const file: File | null = this.selectedFiles.item(0);

    if (file) {
      this.currentFile = file;
     
      user={...user,image:this.currentFile}
    }
  this.AdduserService.signup(user).then(res=>this.router.navigate(['/auth/sign-in'])).catch(error=>this.showAlert(error.response.data.message));
}}
showAlert(message: string): void {
  const alertBox = document.createElement('div');
  alertBox.innerHTML = message;
  alertBox.classList.add('custom-alert');

  const style = document.createElement('style');
  style.innerHTML = `
    .custom-alert {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: black;
      color: white;
      padding: 20px;
      border-radius: 5px;
      z-index: 9999;
    }
  `;

  document.head.appendChild(style);
  document.body.appendChild(alertBox);

  setTimeout(() => {
    alertBox.remove();
    style.remove();
  }, 3000);
}
}
