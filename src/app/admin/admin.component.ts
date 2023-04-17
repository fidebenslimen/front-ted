import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import {
  faDashboard,
  faUser,
  faUserGraduate,
  faMailBulk,
  faMoneyBills,
  faChartBar,
  faContactBook,
  faFilePrescription,
 faBook,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  faDashboard = faDashboard;
  faUser= faUser;
  faUserGraduate =faUserGraduate;
   faMailBulk =  faMailBulk;
   faMoneyBills =  faMoneyBills;
  faChartBar = faChartBar;
  faFilePrescription=faFilePrescription;
  faContactBook = faContactBook;
  faBook = faBook;
 
  
  constructor(private router: Router) {
 
   }
    showW=false;
   goto(){
    this.router.navigate(['professors']);
  }
}
