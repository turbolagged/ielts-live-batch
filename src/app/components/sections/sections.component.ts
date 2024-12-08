import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss']
})
export class SectionsComponent {
  @Input() courseDetails: any;

  ngOnInit () {
    console.log(this.courseDetails?.sections[0].values);
  }
}
