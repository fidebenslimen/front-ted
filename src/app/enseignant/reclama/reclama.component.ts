import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-reclama',
  templateUrl: './reclama.component.html',
  styleUrls: ['./reclama.component.css']
})
export class ReclamaComponent implements OnInit {
  goToEnseignant(){
    this.router.navigate(['enseignant']);
  }
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
