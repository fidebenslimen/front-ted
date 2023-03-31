import { Component,OnInit} from '@angular/core';
import {FormBuilder, Validators,FormGroup} from '@angular/forms';
import { MatDialog } from  '@angular/material/dialog';
import {FormControl, FormGroupDirective, NgForm} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

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

  constructor(private _formBuilder: FormBuilder,dialogRef : MatDialog) {}
  types: type[] = [
    {value: 'Baccalauréat', viewValue: 'Baccalauréat'},
    {value: 'Études supérieures', viewValue: 'Études supérieures'},
    {value: 'Attestation', viewValue: 'Attestation'},
    {value: 'Certficat', viewValue: 'Certficat'},
  ];
  Forma: type[] = [
    {value: 'MASTER CYBER SECURITY', viewValue: 'MASTER CYBER SECURITY'},
    {value: 'Master Cloud computing et virtualisatio ', viewValue: 'Master Cloud computing et virtualisatio'},
    {value: 'Licence Big Data et Analyse de Données', viewValue: 'Licence Big Data et Analyse de Données'},
    {value: 'Licence Computer Science GLIS', viewValue: 'Licence Computer Science GLI'},
    {value: 'Licence Computer Engineering-ingéierie des réseaux et systémes', viewValue: 'Licence Computer Engineering-ingéierie des réseaux et systémes'},
    {value: 'Executive MBA', viewValue: 'Executive MBA'},
  ];
  
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
formValue !: FormGroup;
  matcher = new MyErrorStateMatcher();
  ngOnInit(): void {
    this.formValue = this._formBuilder.group({
      
    })
  }

}

