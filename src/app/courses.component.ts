//!  creating component class using PasCal
import { Component } from '@angular/core'; //decorator import
import { CoursesService } from './courses.service';

//!  decorator
@Component({
  selector: 'courses',
  template: `
    <input type="text" (keyup)="onKey($event)" />
    <h2>{{ 'Title : ' + title }}</h2>
  `,
})
export class CoursesComponent {
  onKey($event) {
    if ($event.keyCode === 13) {
      console.log('Enter Key presses');
    }
  }
  public title = 'Arafat';
  constructor(service: CoursesService) {}
}
