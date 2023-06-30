import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { ToastrService, GlobalConfig } from 'ngx-toastr';
@Component({
  selector: 'app-mdp',
  templateUrl: './mdp.component.html',
  styleUrls: ['./mdp.component.css']
})
export class MdpComponent implements OnInit {
  form!: FormGroup;
  
  submitted = false;

  constructor(private toastr: ToastrService,private readonly _formBuilder: FormBuilder,private router: Router , private LoginService  : LoginService ) 
  {
    this.toastrConfig = {
      positionClass: 'toast-center-center',
      // Other toastr options if needed
    };
  }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      email: ['', [Validators.required]]
    });
  }
  

  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    
    const email = this.form.get('email')?.value;
if (email) {
  // Do something with the email value
  console.log(email);
  this.LoginService .resetPassword(email).subscribe(
    (response) => { this.toastr.info('', 'Vérifiez votre boîte e-mail. Un nouveau mot de passe vous a été envoyé', this.toastrConfig);
 
      this.router.navigate(['/auth/sign-in']);
    
      // Handle success case
    },
    (error) => {
      this.router.navigate(['/auth/sign-in']);
      console.error(error);
      this.toastr.info('', 'Vérifiez votre boîte e-mail. Un nouveau mot de passe vous a été envoyé', this.toastrConfig);
    });
}
  
    }
    toastrConfig!: Partial<GlobalConfig>;
    

    showAlert(message: string): void {
      const alertBox = document.createElement('div');
      alertBox.innerHTML = message;
      alertBox.classList.add('custom-alert');
    
      alertBox.style.position = 'fixed';
      alertBox.style.top = '50%';
      alertBox.style.left = '50%';
      alertBox.style.transform = 'translate(-50%, -50%)';
      alertBox.style.backgroundColor = 'black';
      alertBox.style.color = 'white';
      alertBox.style.padding = '20px';
      alertBox.style.borderRadius = '5px';
      alertBox.style.zIndex = '9999';
    
      document.body.appendChild(alertBox);
    
      setTimeout(() => {
        alertBox.remove();
      }, 3000);
    }
    
}
