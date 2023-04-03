import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

public user={
  identifiant:'',
  password:'',
};
  
ngOnInit(): void {
    
}
  constructor(private router: Router){}
formSubmit() {
  if (this.user.identifiant=='' || this.user.password=='') {
    alert("Veuillez entrer votre identifiant et votre mdp !!!");
    return;
  }
  this.router.navigate(['/etudiant']);
}

}
