import { Component } from '@angular/core';
import { CourseDetailsService } from './services/course-details.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ielts-live-batch';

  courseDetails: any;
  ngOnInit() {
    this.initFunction()
  }
  initFunction () {
    this.getCourseDetails();
  }

  constructor(private courseDetailsService: CourseDetailsService) {}

  getCourseDetails () {
    this.courseDetailsService.getCourseDetails().subscribe((response: any) => {
      if ( response && response.code === 200) {
        this.courseDetails = response.data;
      }
    })
  }
}
