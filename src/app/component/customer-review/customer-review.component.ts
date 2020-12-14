import { Component } from '@angular/core';

@Component({
  selector: 'app-customer-review',
  templateUrl: './customer-review.component.html',
  styleUrls: ['./customer-review.component.scss'],
})
export class CustomerReviewComponent {

  currentText = '';
  currentStars = [];
  currentCustomer = '';

  reviews = [
    {
      active: false,
      text: 'AWe had the best experience working with Andre and Dorian. From the very beginning they were responsive with communications and on time. They met us at our home to help us pick colors, and were patient with our agonizing over colors. They did such a high quality.',
      stars: 4,
      customer: 'Mitch S. in Seattle, WA',
      customerImageUrl: 'https://www.w3schools.com/w3css/img_lights.jpg'
    },
    {
      active: false,
      text: 'BWe had the best working with Andre and Dorian. From the very beginning they were responsive with communications and on time. They met us at our home to help us pick colors, and were patient with our agonizing over colors. They did such a high quality.',
      stars: 4,
      customer: 'Mitch Ssehseh. in Seattle, WA',
      customerImageUrl: 'https://www.w3schools.com/w3css/img_lights.jpg'
    },
    {
      active: false,
      text: 'CWe had the best with Andre and Dorian. From the very beginning they were responsive with communications and on time. They met us at our home to help us pick colors, and were patient with our agonizing over colors. They did such a high quality.',
      stars: 3,
      customer: 'Mitch segesgS. in Seattle, WA',
      customerImageUrl: 'https://www.w3schools.com/w3css/img_lights.jpg'
    },
    {
      active: false,
      text: 'DWe had the best experience working and Dorian. From the very beginning they were responsive with communications and on time. They met us at our home to help us pick colors, and were patient with our agonizing over colors. They did such a high quality.',
      stars: 5,
      customer: 'Mitch Sesgsg. in Seattle, WA',
      customerImageUrl: 'https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg'
    },
    {
      active: false,
      text: 'EWe had the best experience working and. From the beginning they were responsive with communications and on time. They met us at our home to help us pick colors, and were patient with our agonizing over colors. They did such a high quality.',
      stars: 4,
      customer: 'Mitch Sasf. in Seattle, WA',
      customerImageUrl: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'
    }
  ];

  constructor() {
    this.setActive(2);
  }

  switchLeft(): void {
    for (let index = 0; index < this.reviews.length; index++) {
      if (this.reviews[index].active) {
        if (this.reviews[index - 1] !== undefined) {
          this.setActive(index - 1);
        } else {
          this.setActive(this.reviews.length - 1);
        }
        return;
      }
    }
  }

  switchRight(): void {
    for (let index = 0; index < this.reviews.length; index++) {
      if (this.reviews[index].active) {
        if (this.reviews[index + 1] !== undefined) {
          this.setActive(index + 1);
        } else {
          this.setActive(0);
        }
        return;
      }
    }
  }

  private setActive(index): void {
    this.reviews.forEach(item => item.active = false);
    this.reviews[index].active = true;
    this.currentCustomer = this.reviews[index].customer;
    this.currentText = this.reviews[index].text;
    this.currentStars = [];
    for (let i = 0; i < this.reviews[index].stars; i++) {
      this.currentStars.push('*');
    }
  }
}
