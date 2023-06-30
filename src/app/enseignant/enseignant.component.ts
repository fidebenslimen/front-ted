import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EvenementService } from '../services/evenement.service';
@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.component.html',
  styleUrls: ['./enseignant.component.css']
})
export class EnseignantComponent implements OnInit {
  goToEnseignant(){
    this.router.navigate(['enseignant']);
  }
  gotoservices(){
   
    this.router.navigate(['en/reclamation']);
  }
  
  EventsData: any[] = [];
  imageObject = [{
      image: 'assets/slide1.jpg',
      thumbImage: 'assets/slide1.jpg',
      title: '1'
  }, {
      image: 'assets/slide2.jpg',
      thumbImage: 'assets/slide2.jpg'
  }, {
      image: 'hassets/slide3.jpg',
      thumbImage: 'assets/slide3.jpg',
      title: 'événements.'
  },{
      image: 'assets/slide4.jpg',
      thumbImage: 'assets/slide4.jpg',
      title: 'Hummingbirds are amazing creatures'
  }, {
      image: 'assets/slide5.jpg',
      thumbImage: 'assets/slide5.jpg'
  }];
  events: string[] = [
    'Event 1',
    'Event 2',
    'Event 3'
  ];
  constructor(private eventService: EvenementService,private router: Router ){}
  ngOnInit() {
   
    this.eventService.getActivite().subscribe(data => {
      this. EventsData = data; // Update the receivedData property with the data from the shared service
    });
   
  }

}
