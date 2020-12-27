import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  stickyHeader = false;
  menuOpened = false;

  @HostListener('window:scroll')
  stickyHeaderListener(): void {
    this.stickyHeader = window.pageYOffset > 100;
  }

  constructor() {
  }

  scrollToElement(id): void {
    this.menuOpened = false;
    const element = document.querySelector(id);
    element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
  }
}
