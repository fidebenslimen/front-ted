import { Component, OnInit } from '@angular/core';
import { professorsModel } from './professors.model';
import {FormBuilder,FormGroup} from '@angular/forms';
import { ProfessorsService } from './professors.service';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { UserManagmentService } from 'src/app/services/user-managment.service';

@Component({
  selector: 'app-professors',
  templateUrl: './professors.component.html',
  styleUrls: ['./professors.component.css']
})
export class ProfessorsComponent implements OnInit {
  selectedDate!: Date;
  date!: Date;
  ProfessorsForm!:FormGroup;
  ProfessorsModel1Obj :professorsModel= new professorsModel();
  activiteData !:any;
  constructor(private _formBuilder: FormBuilder,private api:ProfessorsService,private UserManagmentService :UserManagmentService  ) { }
  model!: NgbDateStruct;
  ngOnInit(): void {
  this.getUserProfessor('TEACHER')
    
  }

  professorDetails:any
getUserProfessor(nom: string) {
  this.UserManagmentService.getUserByRole('TEACHER')
    .subscribe((professorsModel: professorsModel[]) => {
      this.professorDetails = professorsModel;
    }, (error) => {
      console.error(error);
    });
}
 
}
