import { Component } from '@angular/core';
import { MatDialog } from  '@angular/material/dialog';

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
export class PaiementComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  constructor(private  dialogRef : MatDialog){}
 
}
