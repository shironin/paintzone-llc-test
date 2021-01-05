import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent {
  paragraphs = [
    'PaintZone believes in having client satisfaction the core tenant in all projects of any kind residential painting or commercial painting.',
    'Our mission is to be open and honest with our clients, easing any worries you, your family, or business may have along the way. We believe in having your expectations become our expectations.',
    'Another paragraphs here',
    'Another paragraphs here too.'
  ];
  paragraphsToShow = [];

  constructor() {
    this.paragraphsToShow = this.paragraphs.slice(0, 2);
  }

  showAllParagraphs(): void {
    this.paragraphsToShow = this.paragraphs;
    window.scrollBy(0, 10);
  }
}
