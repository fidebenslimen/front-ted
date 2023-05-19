import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
@Component({
  selector: 'app-admissions',
  templateUrl: './admissions.component.html',
  styleUrls: ['./admissions.component.css']
})
export class AdmissionsComponent implements OnInit {
  panelOpenState = false;
  chart = new Chart({
    chart: {
      type: 'line',
      height: 325
    },
    title: {
      text: 'University Admissions'
    },
    xAxis: {
      categories: [
        'MCY',
        'MCCV',
        'LBDADD',
        'LCSGLIS',
        'LCERS',
        'EXMBA'
      ]
    },
    yAxis: {
      title: {
        text: 'number of admissions'
      }
    },
    series: [
      {
        name: "MASTER CYBER SECURITY",
        type: "line",
        color: '#044342',
        data: [70, 69, 95, 145, 182, 215]
      },
      {
        name: 'Master Cloud computing et virtualisation',
        type: 'line',
        color: '#7e0505',
        data: [
          47, 52, 44, 35, 58, 69
        ]
      },
      {
        name: 'Licence Big Data et Analyse de Données',
        type: 'line',
        color: '#7e0505',
        data: [
          37, 22, 64, 25, 88, 76
        ]
      },
      {
        name: 'Licence Computer Science GLIS',
        type: 'line',
        color:'#7FFFD4',
        data: [
          47, 22, 44, 15, 78, 23
        ]
      },

      {
        name: 'Licence Computer Engineering-ingéierie des réseaux et systémes',
        type: 'line',
        color: '#8A2BE2',
        data: [
          47, 52, 44, 35, 58, 69
        ]
      },
      {
        name: 'Executive MBA',
        type: 'line',
        color: '#FF7F50',
        data: [
          10, 12, 14, 12, 18, 20
        ]
      },
    ],
    credits: {
      enabled: false
    }
  })
  constructor() { }

  ngOnInit(): void {
  }
}
