import { Component } from '@angular/core';
import { EventsService } from '../../service/events.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  submitAttempt = false;
  contactForm = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    address: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required]),
    message: new FormControl(null, [Validators.required])
  });

  constructor(public eventsService: EventsService) {
  }

  toggleCareerModal(): void {
    this.eventsService.careerModalToggle.emit();
  }

  submitContact(): void {
    this.submitAttempt = true;
    if (this.contactForm.valid) {
      console.log(this.contactForm.get('name').value);
      console.log(this.contactForm.get('email').value);
      console.log(this.contactForm.get('address').value);
      console.log(this.contactForm.get('message').value);
      this.contactForm.get('name').setValue('');
      this.contactForm.get('email').setValue('');
      this.contactForm.get('address').setValue('');
      this.contactForm.get('message').setValue('');
      this.contactForm.clearValidators();
      this.submitAttempt = false;
    }
  }
}
