import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss'],
})

export class MainViewComponent {
  animationClass = true;
  phoneNumber = '(200) 300-4000';
  rawPhoneNumber = '+12003004000';
  @HostListener('window:scroll')
  addAnimationWhenInViewport(): void {
    this.animationClass = window.pageYOffset < 300;
  }

  constructor() {
  }

  smoothScrollToElement(id): void {
    const element = document.querySelector(id);
    element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
  }
}
