import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-course-instructors',
  templateUrl: './course-instructors.component.html',
  styleUrls: ['./course-instructors.component.scss']
})
export class CourseInstructorsComponent {
  @Input() instructors: any;

  ngOnInit () {
  }
}
