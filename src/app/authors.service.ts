import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthorsService {
  getAuthors() {
    return ['Course1', 'Course2', 'Course3'];
  }
  //!  not needed here
  //   constructor() { }
}
