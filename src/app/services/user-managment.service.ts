import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { user } from '../models/user';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class UserManagmentService {


  private baseUrl = 'http://localhost:8099/api/v1/springfever/api/user';
  

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<user[]> {
    return this.http.get<user[]>(`${this.baseUrl}/getallusers`);
  }
  public deleteuser(id: number):Observable<any>{
      
    return this.http.delete<any>('http://localhost:8099/api/v1/springfever/api/user/delete/'+id);
}
public adduser(id: number):Observable<any>{
      
  return this.http.delete<any>('http://localhost:8099/api/v1/springfever/api/auth/signUpV3');
}
////////////////////////////////////////////////////////
getUsersByRoleAndYear(role: string | undefined = undefined, year: number | undefined = undefined): Observable<user[]> {
  let url = `${this.baseUrl}/FILTER_USERS`;
  
  if (role !== undefined && year !== undefined) {
    url += `?role=${role}&year=${year}`;
  } else if (role !== undefined) {
    url += `?role=${role}`;
  } else if (year !== undefined) {
    url += `?year=${year}`;
  }

  return this.http.get<user[]>(url);
}

/////////////////////////////////////////////////////////

uploadUsersFile(file: File): Observable<any> {
  const formData: FormData = new FormData();
  formData.append('file', file, file.name);

  return this.http.post(`${this.baseUrl}/users/upload`, formData);
}



async updateUser(user: user) {
  const formData = new FormData();
  formData.append('username', user.username);
  formData.append('firstname', user.firstname);
  formData.append('lastname', user.lastname);
  formData.append('email', user.email);
  formData.append('phoneNumber', user.phoneNumber);
  formData.append('cin', user.cin);
  formData.append('dob', user.dob);
  formData.append('roleType', "CANDIDATE"); 
  formData.append('image', user.image,user.image.name);

  
  const response = await axios.put('http://localhost:8099/api/v1/springfever/api/user/UPDATE_USER/'+user.userid, formData)
    .catch(error => {
    
      alert(error.response.data.message);
      throw new Error(error.response.data.message); // throw the error to the calling function
    });

  return response;
}


async getUserById(id:string)
{
  const response = await axios.get('http://localhost:8081/api/v1/springfever/api/user/getby/'+id);

return response.data;
}




async onSaveBadge(id: number) {
  try {
    
    const response = await axios.post('http://localhost:8081/api/v1/springfever/badges/addbadge/'+id);

    // Extract the HTML link from the response and open it in a new tab
    const htmlLink = response.data.message;
    console.log(htmlLink);
    //window.open(htmlLink, '_blank');
  } catch (error) {
    console.error(error);
  }
}


getTimeoutLog() {
  axios.get('/api/stripe/timeout-log')
    .then(response => {
      // Split the log into individual lines
      const lines = response.data.split('\n');

      // Display each line as a separate toast message
      for (const line of lines) {
        if (line !== '') {
          this.showAlert(line);
        }
      }
    })
    .catch(error => {
      console.error(error);
    });
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
