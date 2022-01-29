//!  creating component class using PasCal
import { Component } from '@angular/core'; //decorator import
import { CoursesService } from './courses.service';

//!  decorator
@Component({
  selector: 'courses',
  //   template: '<h2>{{"Title : "+ title}}</h2>',
  template: `
    <h2>{{ getTitle() }}</h2>
    <ul>
      <li *ngFor="let course of courses">{{ course }}</li>
    </ul>
  `,
})
export class CoursesComponent {
  title = 'Angular Coursed On demand';
  courses;

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }

  getTitle() {
    return this.title;
  }
}

//css selector
// <courses></cousres>
// html markup
