//!  creating component class using PasCal
import { Component } from '@angular/core'; //decorator import
import { CoursesService } from './courses.service';

//!  decorator
@Component({
  selector: 'courses',
  template: `
    {{ course.title | uppercase | lowercase }} <br />
    {{ course.rating | number: '1.1-1' }} <br />
    {{ course.students | number }} <br />
    {{ course.price | currency: 'INR':true:'3.2-2' }} <br />
    {{ course.releaseDate | date: 'shortDate' }}
  `,
})
export class CoursesComponent {
  course = {
    title: 'The Complete Angular Course',
    students: 30123,
    rating: 4.9745,
    price: 190.95,
    releaseDate: new Date(2022, 2, 1),
  };
}
