
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {AfterViewInit, Component, ViewChild,OnInit } from '@angular/core';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { DataServiceService } from '../etudiant/data-service.service';
export interface Demande{
  name: string;
  id: number;
  mail: string;
  date: string;
  type: string;
 
}
export interface Reclamation{
  name: string;
  id: number;
  mail: string;
  date: string;
  type: string;
 
}
const ELEMENT_DATA: Demande[] = [
  {id:1,name:'ross',mail:'rossgeller@hotmail.com',date:'17/01/2023',type:'Demande'},
  {id:2,name:'rachel',mail:'rachelgreen@hotmail.com',date:'17/01/2023',type:'Demande'},
  {id:3,name:'pheobe',mail:'pheboeboffey@hotmail.com',date:'17/01/2023',type:'Demande'},
  {id:4,name:'joey',mail:'joey@hotmail.com',date:'17/01/2023',type:'Demande'},
  

];
const DATA: Reclamation[] = [
  {id:1,name:'ross',mail:'rossgeller@hotmail.com',date:'17/01/2023',type:'Reclamation'},
  {id:2,name:'rachel',mail:'rachelgreen@hotmail.com',date:'17/01/2023',type:'Reclamation'},
  {id:3,name:'pheobe',mail:'pheboeboffey@hotmail.com',date:'17/01/2023',type:'Reclamation'},
  {id:4,name:'joey',mail:'joey@hotmail.com',date:'17/01/2023',type:'Reclamation'},
  

];
/**
 * @title Table with sorting
 */
@Component({
  selector: 'app-demandereclamation',
  templateUrl: './demandereclamation.component.html',
  styleUrls: ['./demandereclamation.component.css']
})
export class DemandereclamationComponent implements AfterViewInit {
  receivedData: any[] = [];
  panelOpenState = false;
  displayedColumns: string[] = ['id', 'name', 'mail', 'date','type','action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  dataS = new MatTableDataSource(DATA);
  constructor(private _liveAnnouncer: LiveAnnouncer,private dataService: DataServiceService) {}

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    
    // Subscribe to the data service to receive the data
    
    this.dataService.getData().subscribe(data => {
      this.receivedData = data; // Assign the data to the receivedData array
    });
  }
  



  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}