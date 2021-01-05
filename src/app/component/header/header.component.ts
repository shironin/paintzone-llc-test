import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  onMainPage = false;
  stickyHeader = false;
  menuOpened = false;
  mainPageSections = [
    '#about-us-section',
    '#services-section',
    '#customer-reviews-section',
    '#contact-section'
  ];
  phoneNumber = '(200) 300-4000';
  rawPhoneNumber = '+12003004000';

  @HostListener('window:scroll')
  stickyHeaderListener(): void {
    this.stickyHeader = window.pageYOffset > 100;
  }

  constructor(private router: Router) {
    this.onMainPage = !!this.router.url.match('^/$');
  }

  navigateTo(id, pathToNavigate = '/'): void {
    this.menuOpened = false;
    if (this.mainPageSections.includes(id)) {
      if (!this.onMainPage) {
        this.router.navigate(['/']).then(() => {
          setTimeout(() => {
            this.smoothScrollToElement(id);
          }, 100);
        });
      } else {
        this.smoothScrollToElement(id);
      }
    } else {
      this.router.navigate([pathToNavigate]).then(() => {
        setTimeout(() => {
          this.smoothScrollToElement(id);
        }, 100);
      });
    }
  }

  smoothScrollToElement(id): void {
    const element = document.querySelector(id);
    element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
  }
}
