import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable()
export class EventsService {
  @Output() careerModalToggle = new EventEmitter<any>();
}
