import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  @Input() courseData;
  @Output() courseClick = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  onClick() {
    this.courseClick.emit(this.courseData.title);
  }

}
