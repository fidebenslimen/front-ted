import { Component,OnInit} from '@angular/core';
import {FormBuilder, Validators,FormGroup} from '@angular/forms';
import { MatDialog,}  from  '@angular/material/dialog';
import {FormControl, FormGroupDirective, NgForm} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { inscriptionModel1 } from './inscription.model';
import { CandidatService } from '../services/candidat.service';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgbDate, NgbCalendar,NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';
import { admissions } from './admission';
import { AdmissionService } from './admission.service';
import { typeDemande } from './typeDemande';
import { sexe } from './sexe';
import { cursus } from './cursus';
interface type {
  value: string;
  viewValue: string;
}

declare var $: any;
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  candidatForm!:FormGroup;
  inscriptionModel1Obj :inscriptionModel1= new inscriptionModel1();
  activiteData !:any;
  selectedDate!: NgbDateStruct;
  model!: NgbDateStruct;
 firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
    secondCtrl:['', Validators.required],
    thirdCtrl:['', Validators.required],
   
    fourthCtrl:['', Validators.required],
    fiveCtrl:['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({

  });
  isEditable = false;
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
  cursuus: (string| cursus)[] = Object.values(cursus);
 


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
    this.fromDate = calendar.getToday();
		this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);

    
  }
  
  
   emailFormControl = new FormControl('', [Validators.required, Validators.email]); 
  matcher = new MyErrorStateMatcher();
 
  ngOnInit(): void {
    this.candidatForm = this._formBuilder.group({
      specialite:[''],
      etablissement:[''],
      mention:[''],
      annee:[''],
      type:[''],

    })
    this.getAllActivite();
  }


  postCandidatDetails(){
   
    this.inscriptionModel1Obj.mention=this.candidatForm.value.mention;
    this.inscriptionModel1Obj.specialite=this.candidatForm.value.specialite;
    this.inscriptionModel1Obj.etablissement=this.candidatForm.value.etablissement;
    this.inscriptionModel1Obj.annee=this.candidatForm.value.annee;
    this.inscriptionModel1Obj.type=this.candidatForm.value.type;

    this.api.postActivite(this.inscriptionModel1Obj)
    .subscribe(res=>{
      console.log(res);
      alert("Activité bien ajoutée");
      this.candidatForm.reset();
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
  
  hoveredDate: NgbDate | null = null;

	fromDate!: NgbDate | null;
	toDate!: NgbDate | null;

	

	onDateSelection(date: NgbDate) {
		if (!this.fromDate && !this.toDate) {
			this.fromDate = date;
		} else if (this.fromDate && !this.toDate && date && date.after(this.fromDate)) {
			this.toDate = date;
		} else {
			this.toDate = null;
			this.fromDate = date;
		}
	}

	isHovered(date: NgbDate) {
		return (
			this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate)
		);
	}

	isInside(date: NgbDate) {
		return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
	}

	isRange(date: NgbDate) {
		return (
			date.equals(this.fromDate) ||
			(this.toDate && date.equals(this.toDate)) ||
			this.isInside(date) ||
			this.isHovered(date)
		);
	}

	validateInput(currentValue: NgbDate | null, input: string): NgbDate | null {
		const parsed = this.formatter.parse(input);
		return parsed && this.calendar.isValid(NgbDate.from(parsed)) ? NgbDate.from(parsed) : currentValue;
	}

}

