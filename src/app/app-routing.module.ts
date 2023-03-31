import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { PaiementComponent } from './etudiant/paiement/paiement.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent },
  {path: 'inscri', component: InscriptionComponent },
  {path: 'etudiant', component: EtudiantComponent  },
  {path: 'etudiant/paiement', component: PaiementComponent  },
  {path: 'header', component:HeaderComponent },
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
