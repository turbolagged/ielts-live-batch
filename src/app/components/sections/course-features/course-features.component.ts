import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-course-features',
	templateUrl: './course-features.component.html',
	styleUrls: ['./course-features.component.scss']
})
export class CourseFeaturesComponent {
	@Input() features: any;

	ngOnInit() {
	}
}
