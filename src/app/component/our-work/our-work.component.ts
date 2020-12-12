import { Component } from '@angular/core';

@Component({
  selector: 'app-our-work',
  templateUrl: './our-work.component.html',
  styleUrls: ['./our-work.component.scss'],
})
export class OurWorkComponent {

  imageUrl1 = 'https://www.w3schools.com/w3css/img_lights.jpg';
  imageUrl2 = 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg';
  imageUrl3 = 'https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg';

  constructor() {
  }
}
