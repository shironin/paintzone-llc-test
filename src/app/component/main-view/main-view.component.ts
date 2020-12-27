import {AfterViewChecked, Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss'],
})
export class MainViewComponent implements AfterViewChecked {
  animationClass = true;
  @HostListener('window:scroll')
  addAnimationWhenInViewport(): void {
    this.animationClass = window.pageYOffset < 300;
  }
  constructor() {
  }

  ngAfterViewChecked(): void {
  }
}
