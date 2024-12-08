import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
const COURSE_DETAILS_URL =  `${environment.tenMsBaseUrl}/ielts-live-batch`

@Injectable({
  providedIn: 'root'
})
export class CourseDetailsService {

  constructor(private http: HttpClient) { }

  getCourseDetails () {
    return this.http.get(COURSE_DETAILS_URL);
  }
}
