//!  creating component class using PasCal
import { Component } from '@angular/core'; //decorator import

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

  getTitle() {
    return this.title;
  }
}

//css selector
// <courses></cousres>
// html markup
