import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import {
  faLocation,
  faShop,
  faBoxes,
  faMoneyBill,
  faGraduationCap,
  faUserGroup,
  faUniversity,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  
  faGraduationCap=faGraduationCap;
  faUserGroup= faUserGroup;
  faUniversity=faUniversity;
  faChevronDown=faChevronDown;
  constructor(private router: Router) {
 
   }
    showW=false;

}
