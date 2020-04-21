import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CoursesService } from '../services/course.service';
import { Course } from '../models/course.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tdform',
  templateUrl: './tdform.component.html',
  styleUrls: ['./tdform.component.css'],
})
export class TdformComponent implements OnInit {
  course = new Course();
  constructor(
    private _coursesService: CoursesService,
    private _router: Router
  ) {}

  ngOnInit(): void {}
  onSubmit(form: NgForm) {
    // console.log(form.value)
    // console.log(this.course)
    //  this._coursesService.addNewCourse({...this.course})
    //  form.reset();
    this._coursesService.addNewCourse(this.course).subscribe((res: any) => {
      if (res.status) {
        this._router.navigate(['/courses']);
        form.reset();
      }
    });
  }
}
