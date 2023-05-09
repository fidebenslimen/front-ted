import { Component } from '@angular/core';
import { demandes } from '../demandes/demandes.model';
import { FormGroup,FormBuilder } from '@angular/forms';
import { RecserService } from './recser.service';
@Component({
  selector: 'app-reclamations',
  templateUrl: './reclamations.component.html',
  styleUrls: ['./reclamations.component.css']
})
export class ReclamationsComponent {
  myForm!: FormGroup;

  constructor(private fb: FormBuilder,private RecserService: RecserService,) { }
  currentDate = new Date().toISOString();
  demandes: demandes= new  demandes();
  activiteData !:any;
 
  ngOnInit(): void {
    this. myForm = this.fb.group({
      id:[''],
      type:[''],
      objet:[''],
      message:[''],
      date: this.currentDate,

    })
    this.getAllActivite();
  }


  postCandidatDetails(){
   
    this. demandes.type=this. myForm.value.type;
    this. demandes.objet=this. myForm.value.objet;
    this. demandes.message=this. myForm.value.message;
    this.demandes.date=new Date().toISOString().slice(0, 10);;
  

    this.RecserService.postActivite(this.demandes)
    .subscribe(res=>{
      console.log(res);
      alert("Demande bien ajoutée");
      this. myForm.reset();
      this.getAllActivite();
    },
    err=>{
      alert('something went wrong!!!');
    })

  }
  getAllActivite(){
    this.RecserService.getActivite()
    .subscribe(res=>{
      this.activiteData=res;
    })
  }
  deleteActivite (row: any){
    this.RecserService.deleteActivite(row.id)
      .subscribe(res =>{
        alert("Activité suprimée");
        this.getAllActivite();

    })
  }
}
