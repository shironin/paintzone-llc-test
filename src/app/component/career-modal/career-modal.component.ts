import { AfterViewChecked, Component } from '@angular/core';
import { EventsService } from '../../service/events.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-career-modal',
  templateUrl: './career-modal.component.html',
  styleUrls: ['./career-modal.component.scss'],
})
export class CareerModalComponent implements AfterViewChecked {
  modalOpen = false;
  careerForm = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    phone: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required]),
    infoText: new FormControl(null, [Validators.required])
  });

  constructor(public eventsService: EventsService, private fb: FormBuilder) {
    this.eventsService.careerModalToggle.subscribe(() => {
      this.modalOpen = !this.modalOpen;
    });
  }

  ngAfterViewChecked(): void {
  }

  clickOutside($event): void {
    if ($event.path) {
      if ($event.path.length) {
        if ($event.path[0].classList.contains('modal-wrapper')) {
          this.modalOpen = false;
        }
      }
    }
  }

  submitCareer(): void {
    if (this.careerForm.valid) {
      console.log(this.careerForm.get('name').value);
      console.log(this.careerForm.get('phone').value);
      console.log(this.careerForm.get('email').value);
      console.log(this.careerForm.get('infoText').value);
      this.careerForm.get('name').setValue('');
      this.careerForm.get('phone').setValue('');
      this.careerForm.get('email').setValue('');
      this.careerForm.get('infoText').setValue('');
    }
  }
}
