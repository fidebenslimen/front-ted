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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InscriptionComponent,
    FooterComponent,
    HeaderComponent,
    EtudiantComponent,
    PaiementComponent,
   
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
   ,MatTableModule,MdbModalModule
 
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
