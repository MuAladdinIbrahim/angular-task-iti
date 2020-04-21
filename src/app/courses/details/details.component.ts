import { Component, OnInit } from '@angular/core';
import {CoursesService} from '../services/course.service';
import { Subscription } from 'rxjs';
import {ActivatedRoute} from '@angular/router';



@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  course;
  private _routeParamsSubscription: Subscription;
  private _courseSubscription: Subscription;
  constructor(
    private _coursesService: CoursesService,
    private _activatedRoute : ActivatedRoute,

    ) {}

  ngOnInit(): void {
    //     this._courseSubscription = this._coursesService.courseSubjectObservable.subscribe(
    //   (data) => {
    //     console.log(data);
    //     if (data && typeof data === 'object') {
    //       this.course = data;
    //     }
    //   }
    // );

    this._routeParamsSubscription = this._activatedRoute.paramMap.subscribe(
      (paramMap)=> {
        console.log(paramMap);
        if(paramMap.has('id')){
          this._coursesService.getCourseById(paramMap.get('id')).subscribe(
            (res:any)=>{
              if(res.status){
                this.course = res.data;
              }
            }
          )
          // this._coursesService.getCourseById(paramMap.get('id'));
        }
      }
    )
  }

}
