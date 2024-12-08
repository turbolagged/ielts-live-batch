import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  @Input() about: any;
  // opened accordion item index tracking
  activeIndex: number | null = null; 

  toggleAccordion(index: number): void {
    // Toggle accordion item
    this.activeIndex = this.activeIndex === index ? null : index; 
  }
}
