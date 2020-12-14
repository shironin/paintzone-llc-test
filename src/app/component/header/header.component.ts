import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  stickyHeader = false;

  @HostListener('window:scroll')
  stickyHeaderListener(): void {
    this.stickyHeader = window.pageYOffset > 100;
  }

  constructor() {
  }
}
