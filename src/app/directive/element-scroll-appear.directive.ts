import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appElementScrollAppear]'
})
export class ElementScrollAppearDirective {
  element;

  @HostListener('window:scroll')
  stickyHeaderListener(): void {
    if (this.isInViewport(this.element)) {
      this.element.classList.add('fade-in');
      this.element.style.opacity = 1;
    } else {
      this.element.classList.remove('fade-in');
    }
  }

  constructor(el: ElementRef) {
    this.element = el.nativeElement;
  }

  isInViewport(el): boolean {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
}
