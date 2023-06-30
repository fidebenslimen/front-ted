import { Component, OnInit } from '@angular/core';
import { user } from '../models/user';
import { UserManagmentService } from '../services/user-managment.service';
import { LoginService } from '../services/login.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private  UserManagmentService: UserManagmentService,private route: ActivatedRoute,private LoginService :LoginService ) { }
  id!:string;
  Details:any;
  userId!: number;
 user!:any

  ngOnInit(): void {
    this.user = this.LoginService.getLoggedInUser();
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
   this.getDetails(this.id)
    
  }
  getDetails(diplome: string) {
    this.UserManagmentService.getUserByid('5').
    subscribe((user: user[]) => {
        this.Details= user;
      }, (error) => {
        console.error(error);
      });
  }
}
