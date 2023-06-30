import { AfterViewInit, Component, ViewChild,OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admissions-stat',
  templateUrl: './admissions-stat.component.html',
  styleUrls: ['./admissions-stat.component.css']
})
export class AdmissionsStatComponent implements OnInit {

 

  ngOnInit(): void {
  }
  canvas: any;
  ctx: any;
  @ViewChild('pieCanvas') pieCanvas!: { nativeElement: any };
  pieChart: any;

  constructor(private http: HttpClient) {}

  ngAfterViewInit(): void {
    this.pieChartBrowser();
  }

  pieChartBrowser(): void {
    this.canvas = this.pieCanvas.nativeElement;
    this.ctx = this.canvas.getContext('2d');

    this.http.get<Map<string, number>>('http://localhost:8099/api/v1/springfever/api/demandeAdmissions/StatDiplome').subscribe(
      (dataMap) => {
        const labels = Object.keys(dataMap);
        const data = Object.values(dataMap);

        
        this.pieChart = new Chart(this.ctx, {
          type: 'doughnut',
          data: {
            labels: labels,
            datasets: [
              {
                backgroundColor: [
                  '#af4c4c',
                  '#BEBEBE',
                  'rgb(42, 123, 42)',
                  'rgb(232, 121, 158)',
                  'rgb(234, 174, 64)',
                  'rgb(142, 124, 247)'
                ],
                data: data,
              },
            ],
          },
          options: {
            plugins: {
              datalabels: {
                align: 'end',
                anchor: 'end',
                color: 'black',
                font: {
                  weight: 'bold'
                }
              }
            },
            legend: {
              display: false
            }
          }as any
        });
        
      },
      (error) => {
        console.log('Erreur lors de la récupération des données du serveur', error);
      }
    );
  }
}


