import { Component, OnInit } from '@angular/core';
import { PaiementPreuveService } from 'src/app/etudiant/paiement/paiement-preuve.service';
@Component({
  selector: 'app-payemen',
  templateUrl: './payemen.component.html',
  styleUrls: ['./payemen.component.css']
})
export class PayemenComponent implements OnInit {
  transactions = [
    {
      id: 1,
      title: "fida ben slimen",
      date: "22/05/2023",
      field: "Executive MBA",
      type:"Null",
      status: "Unpaid",
     
    },
    {
      id: 2,
      title: "ghada soltani",
      date: "27/05/2023",
      field: "MASTER CYBER SECURITY",
      type:"cheque",
      status: "Unpaid",
    
    },
   
    {
      id: 3,
      title: "Sirin gebsi",
      date: "12/06/2023",
      field: "Licence Computer Science GLIS",
      type:"preuve",
      status: "Pending",
    
    }
  ];
  receivedData: any[] = [];
  constructor(private PaiementPreuveService:PaiementPreuveService) { }

  ngOnInit(): void {
    this.PaiementPreuveService.getPaiement().subscribe(data => {
      this.receivedData = data; // Update the receivedData property with the data from the shared service
    });
  }
  getFileUrl(fileName: string): string {
    // Assuming your files are served from a static assets directory named 'files'
    return `/assets/files/${fileName}`;
  }
  

}
