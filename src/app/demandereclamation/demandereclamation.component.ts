
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {AfterViewInit, Component, ViewChild,OnInit } from '@angular/core';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { DataServiceService } from '../etudiant/data-service.service';
import { RecserService } from '../etudiant/reclamations/recser.service';
import {
 
  faListOl,
  faCalendarCheck,
  faTasks
} from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';




 
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
export class DemandereclamationComponent implements OnInit {
  receivedData: any[] = [];
  reclamationData: any[]=[];
  panelOpenState = false;
  displayedColumns: string[] = ['id', 'name', 'mail', 'date','type','action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  dataS = new MatTableDataSource(DATA);
  constructor(private _liveAnnouncer: LiveAnnouncer,private dataService: DataServiceService,private RecserService: RecserService,private toastr: ToastrService) {}
  faListOl=faListOl;
  faTasks= faTasks;
  faCalendarCheck= faCalendarCheck;

  @ViewChild(MatSort) sort!: MatSort;
 

  ngOnInit() {
   
    this.dataService.getActivite().subscribe(data => {
      this.receivedData = data; // Update the receivedData property with the data from the shared service
    });
    this.RecserService.getActivite().subscribe(rec => {
      this.reclamationData = rec; // Update the receivedData property with the data from the shared service
    });
  }

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }


  /** Announce the change in sort state for assistive technology. */
 
}