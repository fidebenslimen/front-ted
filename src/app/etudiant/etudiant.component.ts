import { Component, ViewChild } from '@angular/core';
@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent {
  name = 'Angular';
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
}
