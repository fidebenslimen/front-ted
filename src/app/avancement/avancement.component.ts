import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-avancement',
  templateUrl: './avancement.component.html',
  styleUrls: ['./avancement.component.css']
})
export class AvancementComponent implements OnInit {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;
  constructor(private _formBuilder: FormBuilder) { }
  
  ngOnInit(): void {
  }

}
