import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  faDashboard,
  faUser,
  faUserGraduate,
  faMailBulk,
  faChevronUp,
  faMoneyBills,
  faChevronDown,
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
  faChevronUp=faChevronUp;
  faChevronDown=faChevronDown;
  
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
  gotocour(){
    this.router.navigate(['courses']);
  }
  gotodemrec(){
    this.router.navigate(['dem-rec']);
  }
  gotoeven(){
    this.router.navigate(['evenment']);}
  gotopaymen(){
    this.router.navigate(['payement']);
  }
  ngOnInit(): void {
  }
  panelOpenState = false;

  isAdmissionsPanelOpen = false;

  toggleAdmissionsPanel() {
    this.isAdmissionsPanelOpen = !this.isAdmissionsPanelOpen;
  }
}
