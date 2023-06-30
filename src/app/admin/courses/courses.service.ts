import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { cousesModel } from './courses.model';
import axios from 'axios';
import{map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CoursesService {



  private baseUrl = 'http://localhost:8099/api/v1/springfever/api/cours';
  

  constructor(private http: HttpClient) { }

  
  public deletecourse(id: number):Observable<any>{
      
    return this.http.delete<any>('http://localhost:8099/api/v1/springfever/api/cours/'+id);
}
getAllCourses(): Observable<cousesModel []> {
  return this.http.get<cousesModel[]>('http://localhost:8099/api/v1/springfever/api/cours');
}
async addcourse(formData: FormData) {
  const response = await axios.post(`${this.baseUrl}`,cousesModel)
  return response.data || [];
}
////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////

uploadUsersFile(file: File): Observable<any> {
  const formData: FormData = new FormData();
  formData.append('file', file, file.name);

  return this.http.post(`${this.baseUrl}/users/upload`, formData);
}


 axiosConfig = {
  headers: {
      'Content-Type': 'multipart/form-data'
  }
};
 
async getALLAdmission(){
  const response = await axios.get(this.baseUrl);
  return response.data || [];
}
async AddCourse(cousesModel: cousesModel) {
  const formData = new FormData();
  formData.append('username', cousesModel.nom_cours);
  formData.append('firstname', cousesModel.diplome);
  formData.append('lastname', cousesModel.niveau);

 

  
  const response = await axios.post('http://localhost:8099/api/v1/springfever/api/cours'+ formData, this.axiosConfig)
    .catch(error => {
    
      alert(error.response.data.message);
      throw new Error(error.response.data.message); // throw the error to the calling function
    });

  return response;
}


showAlert(message: string): void {
  const alertBox = document.createElement('div');
  alertBox.innerHTML = message;
  alertBox.classList.add('custom-alert');

  const style = document.createElement('style');
  style.innerHTML = `
    .custom-alert {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background-color: black;
      color: white;
      padding: 20px;
      border-radius: 5px;
      z-index: 9999;
    }
  `;

  document.head.appendChild(style);
  document.body.appendChild(alertBox);

  setTimeout(() => {
    alertBox.remove();
    style.remove();
  }, 3000);
}
}
