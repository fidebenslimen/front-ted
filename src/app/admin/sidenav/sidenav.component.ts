import { Component, OnInit } from '@angular/core';
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
 faBook,faCalendarDays
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
faDashboard = faDashboard;
  faUser= faUser;
  faUserGraduate =faUserGraduate;
  faCalendarDays =  faCalendarDays;
   faMoneyBills =  faMoneyBills;
  faChartBar = faChartBar;
  faFilePrescription=faFilePrescription;
  faContactBook = faContactBook;
  faBook = faBook;
 
  
  constructor(private router: Router) {
 
   }

   gotoPr(){
    this.router.navigate(['professors']);
  }
  gotoDa(){
    this.router.navigate(['admin']);
  }
  gotoS(){
    this.router.navigate(['students']);
  }
  gotoInscri(){
    this.router.navigate(['admissions']);
  }
 
  gotocalender(){
    this.router.navigate(['calender']);
  }
  gotodep(){
    this.router.navigate(['courses']);
  }
  gotodemrec(){
    this.router.navigate(['dem-rec']);
  }
  ngOnInit(): void {
  }

 

}
