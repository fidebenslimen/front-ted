import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';
import { CoursesService } from './courses.service';
import { cousesModel } from './courses.model';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  coursesForm!:FormGroup;
  cousesModel : cousesModel= new  cousesModel();
  coursesData !:any;
  constructor(private _formBuilder: FormBuilder,private api:CoursesService ) { }
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.cousesModel.image = reader.result as string;
    }
    reader.readAsDataURL(file);
  }
  onImageChange(event: any) {
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      const reader = new FileReader();
  
      reader.onload = () => {
        this. coursesForm.patchValue({
          image: reader.result
        });
      };
  
      reader.readAsDataURL(file);
    }
  }
  
  ngOnInit(): void {
    console.log('ngOnInit called');
    this.coursesForm = this._formBuilder.group({
      name:[''],
      professor:[''],
      class:[''],
      image:['']
     


    })
    this.getAllActivite();
    
  }
  
  postCandidatDetails() {
    this.cousesModel.name = this.coursesForm.value.name;
    this.cousesModel.professor = this.coursesForm.value.professor;
    this.cousesModel.class = this.coursesForm.value.class;
    this.cousesModel.image = this.coursesForm.value.image; // add the image value

    console.log("postCandidatDetails called");
    this.api.postActivite(this.cousesModel)
      .subscribe(res => {
        console.log(res);
        alert("course added");
        this.coursesForm.reset();
        this.getAllActivite();
       
      },
      err => {
        alert('something went wrong!!!');
      })
  }

  getAllActivite(){
    this.api.getActivite()
    .subscribe(res=>{
      this.coursesData=res;
    })
  }
  deleteActivite (row: any){
    this.api.deleteActivite(row.id)
      .subscribe(res =>{
        alert("course deleted");
        this.getAllActivite();

    })
  }
}
