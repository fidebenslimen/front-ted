import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import {
 
  faGraduationCap,
  faUserGroup,
  faUniversity,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nombre-staff-each',
  templateUrl: './nombre-staff-each.component.html',
  styleUrls: ['./nombre-staff-each.component.css']
})
export class NombreStaffEachComponent implements OnInit{
 
  constructor(private http: HttpClient) { }
  ngOnInit() {
  }
  
 
  faGraduationCap=faGraduationCap;
  faUserGroup= faUserGroup;
  
  chart = new Chart({
    chart: {
      type: 'column',  // Change the chart type to 'column' for vertical bars
      height: 325,
      width:470
    },
    title: {
      text: "Student's number in master diploma"
    },
    xAxis: {
      categories: [
        'MCY',
        'MCCV',
       
        'EXMBA'
      ]
    },
    yAxis: {
      title: {
        text: 'Number of Admissions'
      }
    },
    series: [
      {
        name: "MASTER CYBER SECURITY",
        type: "column",  // Change the series type to 'column'
        color: '#044342',
        data: [12]
      },
      {
        name: 'Master Cloud computing et virtualisation',
        type: 'column',
        color: '#7e0505',
        data: [
          4
        ]
      },
     
      
      {
        name: 'Executive MBA',
        type: 'column',
        color: '#FF7F50',
        data: [
          10
        ]
      },
    ],
    credits: {
      enabled: false
    }
  });
  chart2 = new Chart({
    chart: {
      type: 'column',  // Change the chart type to 'column' for vertical bars
      height: 325,
      width:470
    },
    title: {
      text: "Student's number in licence diploma"
    },
    xAxis: {
      categories: [
      
        'LBDADD',
        'LCSGLIS',
        'LCERS',
       
      ]
    },
    yAxis: {
      title: {
        text: 'Number of Admissions'
      }
    },
    series: [
     
      {
        name: 'Licence Big Data et Analyse de Données',
        type: 'column',
        color: '#7e0505',
        data: [
          8
        ]
      },
      {
        name: 'Licence Computer Science GLIS',
        type: 'column',
        color:'#7FFFD4',
        data: [
          7
        ]
      },
      {
        name: 'Licence Computer Engineering-ingéierie des réseaux et systémes',
        type: 'column',
        color: '#8A2BE2',
        data: [
          4
        ]
      }
    ],
    credits: {
      enabled: false
    }
  });
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
  
 
  getFileUrl(fileName: string): string {
    // Assuming your files are served from a static assets directory named 'files'
    return `/assets/files/${fileName}`;
  }
  
  

} 