import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { ToastrService, GlobalConfig } from 'ngx-toastr';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { typeDemande } from 'src/app/inscription/typeDemande';
import { cursus } from 'src/app/inscription/cursus';
import { admissions } from 'src/app/inscription/admission';
import { AdmissionService } from 'src/app/inscription/admission.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-admissions',
  templateUrl: './admissions.component.html',
  styleUrls: ['./admissions.component.css']
})
export class AdmissionsComponent implements OnInit {
  toastrConfig!: Partial<GlobalConfig>;
  model!: NgbDateStruct;
  panelOpenState = false;

  constructor(private toastr: ToastrService, private AdmissionService: AdmissionService ,private route:ActivatedRoute) {
    this.toastrConfig = {
      positionClass: 'toast-top-center',
      // Other toastr options if needed
    };
  }
id:any;
loadDemandeAdmissionDetails(id: number) {
  this.AdmissionService.getDemandeAdmission(id)
    .subscribe((demandeAdmission: any) => {
      this.admissionDetails = demandeAdmission;
    }, (error) => {
      console.error(error);
    });
}
admissionDetails: any;
ngOnInit(): void {
  this.getALLAdmission();
  const currentDate = new Date();
this.id=this.route.snapshot.params['id'];
 // Replace 1 with the desired ID
  this.loadDemandeAdmissionDetails(this.id);

// Date de début du compte à rebours
const startDate = new Date('2023-06-01');

// Date de fin du compte à rebours
const endDate = new Date('2023-09-01');

// Calcul de la durée totale du compte à rebours en millisecondes
const totalDuration = endDate.getTime() - startDate.getTime();

// Calcul de la durée écoulée depuis la date de début en millisecondes
const elapsedDuration = currentDate.getTime() - startDate.getTime();

// Calcul du temps restant en millisecondes
const remainingDuration = totalDuration - elapsedDuration;

// Conversion du temps restant en secondes
const remainingSeconds = Math.floor(remainingDuration / 1000);

// Définition de l'intervalle de rafraîchissement du compte à rebours (en secondes)
const refreshInterval = 1;

// Lancement du compte à rebours
setInterval(() => {
  // Calcul du temps restant en millisecondes
  const remainingDuration = endDate.getTime() - new Date().getTime();

  // Conversion du temps restant en secondes
  const remainingSeconds = Math.floor(remainingDuration / 1000);

  // Mise à jour de l'affichage du compte à rebours
  this.remainingTime = this.formatTime(remainingSeconds);
}, refreshInterval * 1000);
}
  showToast() {
    this.toastr.success('', 'mail sended', this.toastrConfig);


  }

  remainingTime!: string;
  updateDemandeAdmission(da: admissions) {
   this.AdmissionService.updateDemandeAdmission(1,da).subscribe();
  }
 
  
  deleteDemandeAdmission(arg0: number) {
    throw new Error('Method not implemented.');
  }

  openMap() {
    navigator.geolocation.getCurrentPosition(function(position) {
      var directionsUrl = "https://www.google.com/maps/dir/?api=1&origin=" + position.coords.latitude + "," + position.coords.longitude + "&destination=ESB:+Esprit+School+of+Business&travelmode=driving";
      window.open(directionsUrl, "_blank");
    });
  }
  DemandeidAdmission!: admissions[]
  DemandeAdmission!: admissions[]
  

  formatTime(totalSeconds: number): string {
    const months = Math.floor(totalSeconds / (30 * 24 * 60 * 60)); // nombre de mois complets
    const days = Math.floor((totalSeconds % (30 * 24 * 60 * 60)) / (24 * 60 * 60)); // nombre de jours complets restants
    const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60)); // nombre d'heures complètes restantes
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60); // nombre de minutes complètes restantes
    const seconds = totalSeconds % 60; // nombre de secondes restantes
  
    return `${months} mois, ${days} jours, ${hours} heures, ${minutes} minutes et ${seconds} secondes`;
  }




  idAdmission!: number;
  typeDemande!: string;
  nom!:string;
  prenom!:string;
  mail!:string;
  tel!:string;
   niveau!: string;
   sexe!:string;
   cursus!: string;
   CV!: string;
  dob!:string
   selectedFile!: File;;

  typedemande: (string| typeDemande)[] = Object.values(typeDemande);
 
  cursuus: (string| cursus)[] = Object.values(cursus);
  

  onSubmit() {
    const formData = new FormData();
    formData.append('typeDemande', this.typeDemande);
    formData.append(' firstname', this. nom);
    formData.append('lastname', this.prenom);
    formData.append('phone', this.tel);
    formData.append('mail', this.mail);
    formData.append('cursus', this.cursus);
    formData.append('sexe', this.sexe);
    formData.append('dob', this.dob);
    formData.append('CV', this.selectedFile);
    formData.append('userid', "1");
    formData.append('specialiterid', "1");
    this.AdmissionService.addDemandeAdmission(formData).then(res => {
      console.log("res.data");
    })
  }

  getALLAdmission() {
    this.AdmissionService.getALLAdmission().then((res) => {
      this.DemandeAdmission = res;
    });
  }

  
  start = new Date('2023-06-01');
  end = new Date('2023-09-01');
  timeLeft = this.end.getTime() - new Date().getTime();
  interval:any;

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }


 
}

