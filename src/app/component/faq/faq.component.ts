import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent {

  faqs = [
    {
      opened: false,
      question: 'Question number 01 goes in here?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor. Ut eget imperdiet neque. In volutpat ante semper diam molestie, et aliquam erat laoreet.',
    },
    {
      opened: false,
      question: 'Question number 02 goes in here?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor. Ut eget imperdiet neque. In volutpat ante semper diam molestie, et aliquam erat laoreet.',
    },
    {
      opened: false,
      question: 'Question number 03 goes in here?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor. Ut eget imperdiet neque. In volutpat ante semper diam molestie, et aliquam erat laoreet.',
    },
    {
      opened: false,
      question: 'Question number 04 goes in here?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor. Ut eget imperdiet neque. In volutpat ante semper diam molestie, et aliquam erat laoreet.',
    },
    {
      opened: false,
      question: 'Question number 05 goes in here?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor. Ut eget imperdiet neque. In volutpat ante semper diam molestie, et aliquam erat laoreet.',
    },
    {
      opened: false,
      question: 'Question number 06 goes in here?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor. Ut eget imperdiet neque. In volutpat ante semper diam molestie, et aliquam erat laoreet.',
    }
  ];

  constructor() {
  }

  toggleItem(index): void {
    this.faqs[index].opened = !this.faqs[index].opened;
  }
}
