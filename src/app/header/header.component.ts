import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { user } from '../models/user';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router: Router) { }
  goToPaiement() {
    this.router.navigate(['etudiant/paiement']);
  }
 id!:number;
 user!:user;
  Mdpoublie() {
    this.router.navigate(['mdpoublié']);
  }
  goToEtudiant() {
    this.router.navigate(['etudiant/:userid']);
  }
  goToDemandes(){
    this.router.navigate(['demandes']);

  }
  goToReclamations(){
    this.router.navigate(['reclamation']);

    
  }
  
  goToEmploi(){
    this.router.navigate(['etudiant/emploi'])
  }
  goToLog(){
    this.router.navigate(['login']);
  }
}
