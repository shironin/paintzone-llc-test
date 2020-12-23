import { Component } from '@angular/core';

@Component({
  selector: 'app-our-work',
  templateUrl: './our-work.component.html',
  styleUrls: ['./our-work.component.scss'],
})
export class OurWorkComponent {

  image1 = {
    hover: false,
    url: 'https://www.w3schools.com/w3css/img_lights.jpg'
  };
  image2 = {
    hover: false,
    url: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'
  };
  image3 = {
    hover: false,
    url: 'https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg'
  };

  constructor() {
  }

  setFrontImage(item): void {
    if (item === 2) {
      const temp = this.image3.url;
      this.image3.url = this.image2.url;
      this.image2.url = this.image1.url;
      this.image1.url = temp;
      this.image2.hover = false;
    }
    if (item === 1) {
      const temp = this.image1.url;
      this.image1.url = this.image2.url;
      this.image2.url = this.image3.url;
      this.image3.url = temp;
      this.image1.hover = false;
    }
  }
}
