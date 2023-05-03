import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.component.html',
  styleUrls: ['./enseignant.component.css']
})
export class EnseignantComponent implements OnInit {
  goToEnseignant(){
    this.router.navigate(['enseignant']);
  }
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
