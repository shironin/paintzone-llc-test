import { Component } from '@angular/core';

@Component({
  selector: 'app-customer-review',
  templateUrl: './customer-review.component.html',
  styleUrls: ['./customer-review.component.scss'],
})
export class CustomerReviewComponent {

  reviews = [
    {
      text: 'We had the best experience working with Andre and Dorian. From the very beginning they were responsive with communications and on time. They met us at our home to help us pick colors, and were patient with our agonizing over colors. They did such a high quality.',
      stars: 4,
      customer: 'Mitch S. in Seattle, WA',
      customerImageUrl: 'https://www.w3schools.com/w3css/img_lights.jpg'
    },
    {
      text: 'We had the best working with Andre and Dorian. From the very beginning they were responsive with communications and on time. They met us at our home to help us pick colors, and were patient with our agonizing over colors. They did such a high quality.',
      stars: 4,
      customer: 'Mitch Ssehseh. in Seattle, WA',
      customerImageUrl: 'https://www.w3schools.com/w3css/img_lights.jpg'
    },
    {
      text: 'We had the best with Andre and Dorian. From the very beginning they were responsive with communications and on time. They met us at our home to help us pick colors, and were patient with our agonizing over colors. They did such a high quality.',
      stars: 4,
      customer: 'Mitch segesgS. in Seattle, WA',
      customerImageUrl: 'https://www.w3schools.com/w3css/img_lights.jpg'
    },
    {
      text: 'We had the best experience working and Dorian. From the very beginning they were responsive with communications and on time. They met us at our home to help us pick colors, and were patient with our agonizing over colors. They did such a high quality.',
      stars: 4,
      customer: 'Mitch Sesgsg. in Seattle, WA',
      customerImageUrl: 'https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg'
    },
    {
      text: 'We had the best experience working and. From the beginning they were responsive with communications and on time. They met us at our home to help us pick colors, and were patient with our agonizing over colors. They did such a high quality.',
      stars: 4,
      customer: 'Mitch Sasf. in Seattle, WA',
      customerImageUrl: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'
    }
  ];

  constructor() {
  }
}
