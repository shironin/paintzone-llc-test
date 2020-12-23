import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements DoCheck {

  gallery = null;
  carouselScrolledToEnd = false;
  carouselScrolledToStart = false;
  showScrollButtons = false;
  itemsOnCenter = false;
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

  ngDoCheck(): void {
    this.gallery = document.getElementById('services_gallery');
    this.adjustGalleryState();
  }

  adjustGalleryState(): void {
    this.carouselScrolledToEnd = (this.gallery.scrollLeft + this.gallery.clientWidth >= (this.gallery.scrollWidth - 2));
    this.carouselScrolledToStart = (this.gallery.scrollLeft === 0);
    this.showScrollButtons = (this.gallery.clientWidth < this.gallery.scrollWidth);
    this.itemsOnCenter = !(this.gallery.clientWidth < this.gallery.scrollWidth);
  }

  moveCarousel(direction = 'right'): void {
    const step = 30;
    const distance = 350;
    const speed = 15;
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      scrollAmount += step;
      if (direction === 'right') {
        this.gallery.scrollLeft += step;
      } else {
        this.gallery.scrollLeft -= step;
      }
      if (scrollAmount >= distance) {
        window.clearInterval(slideTimer);
      }
    }, speed);
  }
}
