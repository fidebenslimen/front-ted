import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payemen',
  templateUrl: './payemen.component.html',
  styleUrls: ['./payemen.component.css']
})
export class PayemenComponent implements OnInit {
  transactions = [
    {
      id: 1,
      title: "Jens Brincker",
      date: "22/01/2023",
      field: "Executive MBA",
      type:"Null",
      status: "Unpaid",
     
    },
    {
      id: 2,
      title: "Denver Blackcode",
      date: "27/05/2023",
      field: "MASTER CYBER SECURITY",
      type:"cheque",
      status: "Paid",
    
    },
    {
      id: 3,
      title: "David Perry",
      date: "11/04/2023",
      field: "Licence Computer Science GLIS",
      type:"Credit card",
      status: "Paid",
    
    },
    {
      id: 4,
      title: "Jennifer Perry",
      date: "12/05/2023",
      field: "Licence Computer Science GLIS",
      type:"preuve",
      status: "en cours",
    
    }
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
