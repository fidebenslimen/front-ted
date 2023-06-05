import { Component, OnInit } from '@angular/core';
import { professorsModel } from './professors.model';
import {FormBuilder,FormGroup} from '@angular/forms';
import { ProfessorsService } from './professors.service';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';


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
  constructor(private _formBuilder: FormBuilder,private api:ProfessorsService ) { }
  model!: NgbDateStruct;
  ngOnInit(): void {
    this.ProfessorsForm = this._formBuilder.group({
      fullname:[''],
      phonenumber:[''],
      departement:[''],
      dtr:[''],
      gender:[''],
      email:[''],


    })
    this.getAllActivite();
    
  }
  
  postCandidatDetails(){
   
    this. ProfessorsModel1Obj.fullname=this.ProfessorsForm.value.fullname;
    this. ProfessorsModel1Obj.phonenumber=this.ProfessorsForm.value.phonenumber;
    this. ProfessorsModel1Obj.departement=this.ProfessorsForm.value.departement;
    this. ProfessorsModel1Obj.dtr=this.ProfessorsForm.value.dtr;
    this. ProfessorsModel1Obj.gender=this.ProfessorsForm.value.gender;
    this. ProfessorsModel1Obj.email=this.ProfessorsForm.value.email;

    this.api.postActivite(this. ProfessorsModel1Obj)
    .subscribe(res=>{
      console.log(res);
      alert("Activité bien ajoutée");
      this.ProfessorsForm.reset();
      this.getAllActivite();
    },
    err=>{
      alert('something went wrong!!!');
    })

  }
  getAllActivite(){
    this.api.getActivite()
    .subscribe(res=>{
      this.activiteData=res;
    })
  }
  deleteActivite (row: any){
    this.api.deleteActivite(row.id)
      .subscribe(res =>{
        alert("Activité suprimée");
        this.getAllActivite();

    })
  }

}
