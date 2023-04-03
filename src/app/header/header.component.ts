import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
  goToEtudiant() {
    this.router.navigate(['etudiant']);
  }
  goToDemandes(){
    this.router.navigate(['demandes']);

  }
  goToReclamations(){
    this.router.navigate(['reclamation']);

    
  }
  goToLog(){
    this.router.navigate(['login']);
  }
}
