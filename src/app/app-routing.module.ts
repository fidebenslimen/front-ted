import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { PaiementComponent } from './etudiant/paiement/paiement.component';
import { HeaderComponent } from './header/header.component';
import { DemandesComponent } from './etudiant/demandes/demandes.component';
import { ReclamationsComponent } from './etudiant/reclamations/reclamations.component';
import { AdminComponent } from './admin/admin.component';
import { CalenderComponent } from './admin/calender/calender.component';
import { ProfessorsComponent } from './admin/professors/professors.component';
import { PrincipaleComponent } from './admin/principale/principale.component';
import { StudentListComponent } from './admin/student-list/student-list.component';
import { AdmissionsComponent } from './admin/admissions/admissions.component';
const routes: Routes = [
  {path: 'login', component: LoginComponent },
  {path: 'inscri', component: InscriptionComponent },
  {path: 'etudiant', component: EtudiantComponent  },
  {path: 'etudiant/paiement', component: PaiementComponent  },
  {path: 'header', component:HeaderComponent },
  {path: 'demandes', component:DemandesComponent },
  {path: 'reclamation', component:ReclamationsComponent },
  {path: 'admin', component:AdminComponent},
  {path: 'calender', component:CalenderComponent},
  {path: 'professors', component:ProfessorsComponent},
  {path: 'dashbords', component:PrincipaleComponent},
  {path: 'students', component:StudentListComponent},
{path: 'admin/admissions', component:AdmissionsComponent},
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
