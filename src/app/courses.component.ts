//!  creating component class using PasCal
import { Component } from '@angular/core'; //decorator import
import { CoursesService } from './courses.service';

//!  decorator
@Component({
  selector: 'courses',
  //   template: '<h2>{{"Title : "+ title}}</h2>',
  template: `
    <!-- adding button -->
    <input type="button" class="btn btn-primary" value="Save" />
    <h2>{{ getTitle() }}</h2>
    <h2 [textContent]="title"></h2>
    <ul>
      <li *ngFor="let course of courses">{{ course }}</li>
    </ul>
    <img src="{{ imageUrl }}" />
    <img [src]="imageUrl" />
    <table>
      <tr>
        <td [attr.colSpan]="colSpan" ]></td>
      </tr>
    </table>
  `,
})
export class CoursesComponent {
  title = 'Angular Coursed On demand';
  courses;
  colSpan = '2';
  imageUrl = '';

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
