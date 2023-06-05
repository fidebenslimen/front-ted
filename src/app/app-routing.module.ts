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
import { CoursesComponent } from './admin/courses/courses.component';
import { EnseignantComponent } from './enseignant/enseignant.component';
import { DemandereclamationComponent } from './demandereclamation/demandereclamation.component';
import { AvancementComponent } from './avancement/avancement.component';
import { ProfileComponent } from './profile/profile.component';
import { ReclamaComponent } from './enseignant/reclama/reclama.component';
import { PayemenComponent } from './admin/payemen/payemen.component';
import { CalenderetudiantComponent } from './etudiant/calenderetudiant/calenderetudiant.component';
import { EvemenmentComponent } from './admin/evemenment/evemenment.component';
import { TestInscriComponent } from './test-inscri/test-inscri.component';
import { MdpComponent } from './etudiant/mdp/mdp.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent , data: { returnUrl: window.location.pathname }},
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
{path: 'admissions', component:AdmissionsComponent},
{path: 'courses', component:CoursesComponent},
{path: 'enseignant', component:EnseignantComponent},
{path: 'dem-rec', component:DemandereclamationComponent},
{path: 'avancement', component:AvancementComponent},
{path: 'profile', component:ProfileComponent},
{path: 'en/reclamation', component:ReclamaComponent},
{path: 'payement', component:PayemenComponent},
{path: 'etudiant/emploi', component:CalenderetudiantComponent},
{path: 'evenment', component:EvemenmentComponent},
{path: 'test', component:TestInscriComponent},
{path: 'mdpoublié', component:MdpComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
