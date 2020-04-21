import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CoursesService {
  // private _courses = [
  //   {
  //     id: 1,
  //     title: 'NodeJs',
  //     instructor: 'Ali',
  //     isAvailabel: true,
  //   },
  //   {
  //     id: 2,
  //     title: 'JavaScript',
  //     instructor: 'Mahmoud',
  //     isAvailabel: false,
  //   },
  //   {
  //     id: 3,
  //     title: 'HTML',
  //     instructor: 'Ali',
  //     isAvailabel: true,
  //   },
  //   {
  //     id: 4,
  //     title: 'Angular',
  //     instructor: 'Gniedy',
  //     isAvailabel: false,
  //   },
  // ];
  private _courseSubject = new BehaviorSubject(null);
  private _apiURL ='https://afternoon-falls-30227.herokuapp.com/api/v1/courses';
  constructor(private _http:HttpClient) {}

  getCourses(params={}) {
    // return this._courses;
    return this._http.get(this._apiURL,{params});
  }
  changeCourseData(data) {
    this._courseSubject.next(data);
  }

  get courseSubjectObservable() {
    return this._courseSubject.asObservable();
  }
  getCourseById(id) {
    // return this._courses.find((course) => course.id == id);
    return this._http.get(this._apiURL+'/'+id);

  }
  addNewCourse(course){
    // this._courses.push(course);
    return this._http.post(this._apiURL,course);
  }

  deleteCourse(course){
    // this._courses.splice(course.id);
  }
  updateCourse(course){
    // this._courses.splice(course.id);
  }
}
