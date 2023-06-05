import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { LoginService } from '../services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;
  recaptchaform!:FormGroup;
  submitted = false;
  passwordTextType!: boolean;
  token: string|undefined;
  username!:string;
  password!:string;

  constructor(private readonly _formBuilder: FormBuilder, private readonly _router: Router , private  LoginService: LoginService ) {
    this.token = undefined;

  }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
       username: ['', [Validators.required,]],
      password: ['', Validators.required],
    });
  }
///////////////////////////////////////////////
  
  ////////////////////////////////////////////////////
  get f() {
    return this.form.controls;
  }

  togglePasswordTextType() {
    this.passwordTextType = !this.passwordTextType;
  }




  onSubmit(recaptchaform:NgForm) {
    this.submitted = true;
 
    if (recaptchaform.invalid) {
      for (const control of Object.keys(recaptchaform.controls)) {
        recaptchaform.controls[control].markAsTouched();
      }
      return;
    }
   
    // Call login method from AuthService
    this.  LoginService.login(this.username, this.password,this.token) ; 
    console.log(`Token [${this.token}] generated`);
    }


    public send(recaptchaform: NgForm): void {
      if (recaptchaform.invalid) {
        for (const control of Object.keys(recaptchaform.controls)) {
          recaptchaform.controls[control].markAsTouched();
        }
        return;
      }
      console.log(`Token [${this.token}] generated`);
      
    }




}

 