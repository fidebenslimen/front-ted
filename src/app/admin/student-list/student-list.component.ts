import { Component, OnInit } from '@angular/core';
import { StudentsService } from './students.service';
import {FormBuilder,FormGroup} from '@angular/forms';
import { StudentsModel } from './students.model';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent  implements OnInit{
  date!: Date;
  StudentsForm!:FormGroup;
  StudentsModel  : StudentsModel = new  StudentsModel ();
 studentsData !:any;
  constructor(private _formBuilder: FormBuilder,private api:StudentsService ) { }
 
  ngOnInit(): void {
    this.StudentsForm = this._formBuilder.group({
      fullname:[''],
      cin:[''],
      mail:[''],
      class:[''],
      groupe:[''],
    


    })
    this.getAllActivite();
    
  }
  
  postCandidatDetails(){
   
    this.  StudentsModel .fullname=this.StudentsForm.value.fullname;
    this.  StudentsModel .cin=this.StudentsForm.value.cin;
    this.  StudentsModel .class=this.StudentsForm.value.class;
    this. StudentsModel.mail=this.StudentsForm.value.mail;
    this. StudentsModel.groupe=this.StudentsForm.value.groupe;
    

    this.api.postActivite(this. StudentsModel )
    .subscribe(res=>{
      console.log(res);
      alert("Activité bien ajoutée");
      this.StudentsForm.reset();
      this.getAllActivite();
    },
    err=>{
      alert('something went wrong!!!');
    })

  }
  getAllActivite(){
    this.api.getActivite()
    .subscribe(res=>{
      this.studentsData=res;
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

