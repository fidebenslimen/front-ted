import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import axios from 'axios';
import { user } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class AdduserService {
  constructor(private http: HttpClient) { }
  /*signup(user:User) {
    const headers = new HttpHeaders().set('Content-Type', 'multipart/form-data');
   // formData.append('image', image);
    
    axios.post('http://localhost:8099/api/v1/springfever/api/auth/signUpV3',user).then(res=>console.log(res)).catch(e=>console.log(e))

  }*/
 axiosConfig = {
  headers: {
      'Content-Type': 'multipart/form-data'
  }
};
 
async signup(user: user) {
  const formData = new FormData();
  formData.append('username', user.username);
  formData.append('firstname', user.firstname);
  formData.append('lastname', user.lastname);
  formData.append('email', user.email);
  formData.append('phoneNumber', user.phoneNumber);
  formData.append('cin', user.cin);
  formData.append('dob', user.dob);
  formData.append('password', user.password);
  formData.append('roleType', user.role);
 
  const response = await axios.post('http://localhost:8099/api/v1/springfever/api/auth/signUpV3', formData, this.axiosConfig)
  return response;
}  
}


