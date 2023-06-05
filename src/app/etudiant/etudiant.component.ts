import { Component, OnInit, ViewChild } from '@angular/core';
import { EvenementService } from '../services/evenement.service';
@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit{
  name = 'Angular';
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
  constructor(private eventService: EvenementService ){}
  ngOnInit() {
   
    this.eventService.getActivite().subscribe(data => {
      this. EventsData = data; // Update the receivedData property with the data from the shared service
    });
   
  }

}
