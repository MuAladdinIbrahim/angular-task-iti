import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/course.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  courseData;
  clickedCourseTitle;
  currentPage: number = 1;
  pages: any[];
  constructor(
    private _coursesService: CoursesService,
    private _activatedRoute : ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this._activatedRoute.queryParamMap.subscribe(
      (res)=>{
        const params = {};
        res.keys.forEach((key) => {params[key] = res.get(key)});
        console.log(params)
        const limit = res.get('limit') || 5;
        this._coursesService.getCourses(params).subscribe((res:any)=>{
          console.log(res);
          if(res.status){
            this.courseData = res.data;
            this.currentPage = res.page;
            this.pages = new Array(res.total_pages || 0)
          }
      }
      )
    });
  }
  onCourseClick(ev) {
    console.log(ev);
    this.clickedCourseTitle = ev;
  }
  onCourseItemClick(course) {
    this._coursesService.changeCourseData(course);
  }

}
