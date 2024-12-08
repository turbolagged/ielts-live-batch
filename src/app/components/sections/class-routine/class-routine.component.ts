import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-class-routine',
  templateUrl: './class-routine.component.html',
  styleUrls: ['./class-routine.component.scss']
})
export class ClassRoutineComponent {
  @Input() routine: any;

  downloadRoutine() {
    
  }
}
