import { Component, OnInit } from '@angular/core';
import { PaiementPreuveService } from './paiement-preuve.service';
import { paiement } from './paiement.model';
import { HttpClient } from '@angular/common/http';
import axios from 'axios';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Frais Inscription', weight: '01/09', symbol: 'DT'},
  {position: 2, name: '	Frais Etude', weight: '01/10', symbol: 'DT'},
  {position: 3, name: '	Frais Etude', weight: '01/03', symbol: 'DT'},

];
@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.css']
})
export class PaiementComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  request!: string;
  amountt!: number;
  username!: string;
  myform!: FormGroup;

  constructor(private http: HttpClient,private PaiementPreuveService:PaiementPreuveService,private fb: FormBuilder) {}

  chargeCreditCardV2(event: Event) {
    event.preventDefault();
  
    const apiUrl = `http://localhost:8099/api/v1/springfever/api/stripe/chargeV2?request=${this.request}&amountt=${this.amountt}&username=${this.username}`;
  
    axios.post(apiUrl,{
      responseType: 'text'
    })
      .then((response: any) => {
        // if the API call is successful, open the receipt URL in a new tab
        const receiptUrl = response.data.receipt_url;
        console.log(receiptUrl);
        console.log(response.data);
        let jsonString='{'+response.data+'}';
        jsonString=this.removeLastComma(jsonString);
        let jsonStripe=JSON.parse(jsonString)
        console.log(jsonStripe.receipt_url);
        window.open(jsonStripe.receipt_url, '_blank');
      })
      .catch((error: any) => {
        // handle the error here
        console.error(error);
      });
  }


  removeLastComma(str: string): string {
    const index = str.lastIndexOf(',');
    if (index >= 0) {
      return str.substring(0, index) + str.substring(index + 1);
    }
    return str;
  }

  currentDate = new Date().toISOString();
  paiement: paiement= new  paiement();
  activiteData !:any;
 
  ngOnInit(): void {
    this. myform = this.fb.group({
      id:[''],
      methode:[''],
      preuve:[''],
      mail:[''],
      date: this.currentDate,

    })
    this.getAllActivite();
  }
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.paiement.preuve = reader.result as string;
    }
    reader.readAsDataURL(file);
  }
    
  onImageChange(event: any) {
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      const reader = new FileReader();
  
      reader.onload = () => {
        this. myform.patchValue({
          image: reader.result
        });
      };
  
      reader.readAsDataURL(file);
    }
  }
  postpaiment(){
   
    this. paiement.methode=this. myform.value.methode;
    this.paiement.preuve=this. myform.value.preuve;
    this.paiement.mail=this. myform.value.mail;
  
    this.paiement.date=new Date().toISOString().slice(0, 10);;
  

    this.PaiementPreuveService.postPaiment(this.paiement)
    .subscribe(res=>{
      console.log(res);
      this.showAlert("paiement envoyé ");
     
      this.getAllActivite();
    },
    err=>{
     this.showAlert('something went wrong!!!');
    })

  }
  showAlert(message: string): void {
    const alertBox = document.createElement('div');
    alertBox.innerHTML = message;
    alertBox.classList.add('custom-alert');
   
    const style = document.createElement('style');
    style.innerHTML = `
      .custom-alert {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: green;
        color: white;
        padding: 20px;
        border-radius: 5px;
        z-index: 9999;
      }
    `;
   
    document.head.appendChild(style);
    document.body.appendChild(alertBox);
   
    setTimeout(() => {
      alertBox.remove();
      style.remove();
    }, 3000);
   }
   
  getAllActivite(){
    this.PaiementPreuveService.getPaiement()
    .subscribe(res=>{
      this.activiteData=res;
    })
  }
  deleteActivite (row: any){
    this.PaiementPreuveService.deletePaiment(row.id)
      .subscribe(res =>{
        alert("Activité suprimée");
        this.getAllActivite();

    })
  }
}


