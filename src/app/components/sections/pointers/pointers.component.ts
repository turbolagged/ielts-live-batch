import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pointers',
  templateUrl: './pointers.component.html',
  styleUrls: ['./pointers.component.scss']
})
export class PointersComponent {
  @Input() pointers: any;
}
