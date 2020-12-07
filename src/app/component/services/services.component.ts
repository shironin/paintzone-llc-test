import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent {
  galleryItems = [
    {
      text: 'Interior',
      imageUrl: 'https://www.w3schools.com/w3css/img_lights.jpg'
    },
    {
      text: 'Exterior',
      imageUrl: 'https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg'
    },
    {
      text: 'Office',
      imageUrl: 'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png'
    },
    {
      text: 'Commercial',
      imageUrl: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'
    },
    {
      text: 'Residential',
      imageUrl: 'https://image.freepik.com/free-photo/double-exposure-image-business-profit-growth_31965-3022.jpg'
    }
  ];

  constructor() {
  }
}
