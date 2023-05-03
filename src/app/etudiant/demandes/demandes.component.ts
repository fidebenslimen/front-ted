import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-demandes',
  templateUrl: './demandes.component.html',
  styleUrls: ['./demandes.component.css']
})
export class DemandesComponent implements OnInit {
  myForm!: FormGroup;

  constructor(private fb: FormBuilder, private dataService:  DataServiceService) { }

  sendData() {
    const dataToSend = this.myForm.value; // Get the form data as an object
    this.dataService.setData(dataToSend); // Set the data in the shared service
  }

  ngOnInit() {
    this.myForm = this.fb.group({
      type: [''], // Set initial value for type
      objet: [''], // Set initial value for objet
      message: [''] // Set initial value for message
      // Add more form controls as needed
    });
  }
}
