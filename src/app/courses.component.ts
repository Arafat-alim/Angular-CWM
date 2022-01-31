//!  creating component class using PasCal
import { Component } from '@angular/core'; //decorator import
import { CoursesService } from './courses.service';

//!  decorator
@Component({
  selector: 'courses',
  template: '<h2>{{"Title : "+ title}}</h2>',
})
export class CoursesComponent {
  public title = 'Arafat';
  constructor(service: CoursesService) {}
}
