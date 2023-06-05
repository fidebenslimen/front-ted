import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { admissions } from './admission';
import axios from 'axios';
import{map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdmissionService {
  private apiBaseUrl = '/api/v1/springfever/api/demandeAdmissions';

  AddActURL : string;
  getActURL : string;

 constructor(private http: HttpClient) {  
   this.AddActURL = 'http://localhost:8099/api/v1/springfever/api/demandeAdmissions/';
   this.getActURL='http://localhost:8099/api/v1/springfever/api/demandeAdmissions/{{idAdmission}}';
}


 httpOptions = {
   headers: new HttpHeaders({
     'Content-Type': 'application/json'
   })
 }

 // GET all demandes d'admission
 async getALLAdmission(){
   const response = await axios.get(this.AddActURL);
   return response.data || [];
 }

 // GET demande d'admission by id
 getDemandeAdmission(id: number): Observable<any> {
  const url = `http://localhost:8099/api/v1/springfever/api/demandeAdmissions/${id}`;
  return this.http.get<any>(url);
}
 // POST a new demande d'admission
 async addDemandeAdmission(demandeAdmission: any) {
   const response = await axios.post(this.AddActURL+"add_iduser",demandeAdmission)
   return response.data || [];
 }

 // PUT updated demande d'admission
 updateDemandeAdmission(id: number, demandeAdmission: admissions): Observable<admissions> {
   const url = `${this.AddActURL}/${id}`;
   return this.http.put<admissions>(url, demandeAdmission, this.httpOptions);
 }

 // DELETE demande d'admission by id
 deleteDemandeAdmission(id: number): Observable<admissions> {
   const url = `${this.AddActURL}/${id}`;
   return this.http.delete<admissions>(url, this.httpOptions);
 }
 
}
