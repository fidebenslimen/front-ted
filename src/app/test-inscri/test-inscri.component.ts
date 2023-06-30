import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators,FormGroup} from '@angular/forms';
import { MatDialog,}  from  '@angular/material/dialog';
import {FormControl, FormGroupDirective, NgForm} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

import { CandidatService } from '../services/candidat.service';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgbDate, NgbCalendar,NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';
import { admissions } from '../inscription/admission';
import { AdmissionService } from '../inscription/admission.service';
import { typeDemande } from '../inscription/typeDemande';
import { sexe } from '../inscription/sexe';
import { diplome } from '../inscription/cursus';
@Component({
  selector: 'app-test-inscri',
  templateUrl: './test-inscri.component.html',
  styleUrls: ['./test-inscri.component.css']
})
export class TestInscriComponent implements OnInit {

  DemandeAdmission!: admissions[]
  typeDemande!: string;
 firstname!:string;
 lastname!:string;
 mail!:string;
 PhoneNumber!:string;
  niveau!: string;
  sexe!:string;
  cursus!: string;
  CV!: string;
 dob!:string
  selectedFile!: File;

  typedemande: (string| typeDemande)[] = Object.values(typeDemande);
  cursuus: (string| diplome)[] = Object.values(diplome);
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  ngOnInit(): void {
    this.getALLAdmission();}

  onSubmit() {
    const formData = new FormData();
    formData.append('typeDemande', this.typeDemande);
    formData.append(' firstname', this. firstname);
    formData.append('lastname', this.lastname);
    formData.append('phone', this.PhoneNumber);
    formData.append('mail', this.mail);
    formData.append('cursus', this.cursus);
    formData.append('sexe', this.sexe);
    formData.append('dob', this.dob);
    formData.append('CV', this.selectedFile);
    formData.append('userid', "1");
    formData.append('specialiterid', "1");
    this.admissionService.addDemandeAdmission(formData).then(res => {
      console.log("res.data");
    })
  }
  getALLAdmission() {
    this.admissionService.getALLAdmission().then((res) => {
      this.DemandeAdmission = res;
    });
  }
  constructor(private _formBuilder: FormBuilder,dialogRef : MatDialog,private api:CandidatService,private calendar: NgbCalendar, public formatter: NgbDateParserFormatter,
    private admissionService: AdmissionService) {
  
    
  }
  
  
   emailFormControl = new FormControl('', [Validators.required, Validators.email]); 
 
 

}
