import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataServiceService } from '../data-service.service';
import { demandes } from './demandes.model';
@Component({
  selector: 'app-demandes',
  templateUrl: './demandes.component.html',
  styleUrls: ['./demandes.component.css']
})
export class DemandesComponent implements OnInit {
  myForm!: FormGroup;

  constructor(private fb: FormBuilder,private dataService: DataServiceService,) { }
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
  

    this.dataService.postActivite(this.demandes)
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
    this.dataService.getActivite()
    .subscribe(res=>{
      this.activiteData=res;
    })
  }
  deleteActivite (row: any){
    this.dataService.deleteActivite(row.id)
      .subscribe(res =>{
        alert("Activité suprimée");
        this.getAllActivite();

    })
  }
  
}
