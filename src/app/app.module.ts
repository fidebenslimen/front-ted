import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InscriptionComponent } from './inscription/inscription.component';
import {MatStepperModule} from '@angular/material/stepper';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {HttpClientModule} from '@angular/common/http';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { PaiementComponent } from './etudiant/paiement/paiement.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import {MatTableModule} from '@angular/material/table';
import { DemandesComponent } from './etudiant/demandes/demandes.component';
import { ReclamationsComponent } from './etudiant/reclamations/reclamations.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { AdminComponent } from './admin/admin.component';
import { PrincipaleComponent } from './admin/principale/principale.component';
import { TeteComponent } from './admin/tete/tete.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AdmissionsComponent } from './admin/admissions/admissions.component';
import { NombreStaffEachComponent } from './admin/nombre-staff-each/nombre-staff-each.component';
import { StudentListComponent } from './admin/student-list/student-list.component';
import { UniversityReportComponent } from './admin/university-report/university-report.component';
import { ChartModule } from 'angular-highcharts';
import { ScheduleModule,RecurrenceEditorModule, DayService, WeekService, WorkWeekService, MonthService, MonthAgendaService } from '@syncfusion/ej2-angular-schedule';
import { CalenderComponent } from './admin/calender/calender.component';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { FullCalendarModule } from '@fullcalendar/angular'; 
import {MatGridListModule} from '@angular/material/grid-list';
import { ProfessorsComponent } from './admin/professors/professors.component';
import { SidenavComponent } from './admin/sidenav/sidenav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PayemenComponent } from './admin/payemen/payemen.component';
import { CoursesComponent } from './admin/courses/courses.component';
import { CommonModule } from '@angular/common';
import { FlatpickrDefaults, FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { EnseignantComponent } from './enseignant/enseignant.component';
import { DemandereclamationComponent } from './demandereclamation/demandereclamation.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { DataServiceService } from './etudiant/data-service.service';
import { AvancementComponent } from './avancement/avancement.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ProfileComponent } from './profile/profile.component';
import { ReclamaComponent } from './enseignant/reclama/reclama.component';
import {MatTreeModule} from '@angular/material/tree';
import { CalenderetudiantComponent } from './etudiant/calenderetudiant/calenderetudiant.component';


import { ToastrModule } from 'ngx-toastr';
import { EvemenmentComponent } from './admin/evemenment/evemenment.component';
import { ContactComponent } from './contact/contact.component';
import { MdpComponent } from './etudiant/mdp/mdp.component';
import { TestInscriComponent } from './test-inscri/test-inscri.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InscriptionComponent,
    FooterComponent,
    HeaderComponent,
    EtudiantComponent,
    PaiementComponent,
    DemandesComponent,
    ReclamationsComponent,
    AdminComponent,
 
    PrincipaleComponent,
    TeteComponent,
    AdmissionsComponent,
    NombreStaffEachComponent,
    StudentListComponent,
    UniversityReportComponent,
    CalenderComponent,
    ProfessorsComponent,
    SidenavComponent,
    PayemenComponent,
    CoursesComponent,
    EnseignantComponent,
    DemandereclamationComponent,
    AvancementComponent,
    ProfileComponent,
    ReclamaComponent,
    CalenderetudiantComponent,
    EvemenmentComponent,
    ContactComponent,
    MdpComponent,
    TestInscriComponent,
   
    
 
 
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FlexLayoutModule,
     BrowserAnimationsModule,
     MatInputModule,MatStepperModule,
     FormsModule,ReactiveFormsModule,
     MatRadioModule,MatDatepickerModule,
     HttpClientModule,MatNativeDateModule,
     MatSelectModule,MatDialogModule
   ,MatTableModule,MdbModalModule,  NgImageSliderModule, FontAwesomeModule,
   ChartModule,ScheduleModule,RecurrenceEditorModule,ButtonModule 
   , FullCalendarModule,CalendarModule,  CommonModule,FlatpickrModule,NgbModalModule,MatGridListModule,
   MatExpansionModule,MatProgressSpinnerModule,MatTreeModule,NgbModule,
   MatPaginatorModule,ToastrModule.forRoot(
    
   ),
   CalendarModule.forRoot({
    provide: DateAdapter,
    useFactory: adapterFactory,
  }),
 
     
  ],
  
  providers: [DayService, WeekService, WorkWeekService, MonthService, MonthAgendaService,FlatpickrDefaults,DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
