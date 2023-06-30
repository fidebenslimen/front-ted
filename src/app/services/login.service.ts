import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
import { ToastrService } from 'ngx-toastr';
import { user } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
 

  token = localStorage.getItem('accessToken') 

  loginUrl = "http://localhost:8099/api/v1/springfever/api/auth/signinV2"
  resetUrl = "http://localhost:8099/api/v1/springfever/api/auth"
 constructor(private http: HttpClient ,  private router: Router,) { }

 
 getUserId(): string | null {
  // Retrieve the userId from local storage
  return localStorage.getItem('userId');
 }
login(username: string, password: string,token:any): void {

 axios.post<any>(this.loginUrl, { username, password })
   .then(response => {
     // Store the JWT token in the local storage
     localStorage.setItem('accessToken', response.data.accessToken);
     localStorage.setItem('username', response.data.username);
     localStorage.setItem('roles', response.data.roles);
     localStorage.setItem('userId', response.data.id);
     localStorage.setItem('mail',response.data.email)
    

     if(localStorage.getItem('roles')?.includes("ADMIN")) {
      // Navigate to another page 
       this.router.navigate(['admin'])
     }
    else if (localStorage.getItem('roles')?.includes("SUPER_ADMIN")){this.router.navigate(['admin']);}
     else if(localStorage.getItem('roles')?.includes("STUDENT")) { this.router.navigate(['etudiant']);}
     else if(localStorage.getItem('roles')?.includes("TEACHER")) { this.router.navigate(['enseignant']);}
    
     
    else{
      this.router.navigate(['']);
    }
     console.log(localStorage.getItem('roles'));
   })
   .catch(error => {
     console.log(error.response.data.message); // log the entire error object to the console
     let errorMessage = error.response.data.message || 'An error occurred';
     //alert(errorMessage);
     this.showAlert(errorMessage);
   });}

showAlert(message: string): void {
 const alertBox = document.createElement('div');
 alertBox.innerHTML = message;
 alertBox.classList.add('custom-alert');

 const style = document.createElement('style');
 style.innerHTML = `
   .custom-alert {
     position: fixed;
     top: 50%;
     left: 50%;
     transform: translate(-50%, -50%);
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



 

   // Http Headers
   httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json',
       'Authorization': "Bearer " + this.token
     }),
     withCredentials: true
   };



   getLoggedInUser(): user {
    return this.loggedInUser;
  }
  

 resetPassword(username: string) {
   return this.http.post(`${this.resetUrl}/resetPassword?resetPasswordRequest=${username}`,this.httpOptions)

 }

 
 loggedInUser!: user;

 logout(): void {
   // Remove the token and user data from local storage
   localStorage.removeItem('token');
   localStorage.removeItem('user');
 }

 isLoggedIn(): boolean {
   // Check whether the user is logged in by checking for the presence of the token in local storage
   return !!localStorage.getItem('token');
 }

 getToken(): string | null {
   // Retrieve the token from local storage
   return localStorage.getItem('token');
 }
}

