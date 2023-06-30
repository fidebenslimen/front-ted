import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,NgForm} from '@angular/forms';
import { CoursesService } from './courses.service';
import { cousesModel } from './courses.model';
import { diplome } from 'src/app/inscription/cursus';
import { niveau } from 'src/app/models/niveau';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  coursesForm!:FormGroup;
  cousesModel : cousesModel= new  cousesModel();
  coursesData !:any;
  constructor(private _formBuilder: FormBuilder,private CoursesService:CoursesService ) { }
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
  courses: any;
  ngOnInit(): void {
      this.getAllCourses();
   
  }
  nom_cours!:string;
  professor!:string;
  diplome!:string;
   niveau!: string;
   image!:string;
 
   getAllCourses() {
    this.CoursesService.getAllCourses()
      .subscribe((cousesModel : cousesModel []) => {
        this.courses = cousesModel ;
      }, (error) => {
        console.error(error);
      });
      
  }
  Diplome: (string|  diplome )[] = Object.values( diplome );
  iveau: (string| niveau)[] = Object.values(niveau);
  onSubmit(form: NgForm) {
    const formData = new FormData();
    formData.append('nom_cours', this.nom_cours);
    formData.append('niveau', this. niveau);
    formData.append('diplome', this.diplome);

    this.CoursesService.addcourse(formData).then(res => {
      console.log("res.data");
    });
  
  }
Courses!:cousesModel []
 

  
}