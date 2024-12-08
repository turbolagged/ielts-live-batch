import { Component } from '@angular/core';
import { CourseDetailsService } from './services/course-details.service';
import { VariantDetailsService } from './services/variant-details.service';
import { firstValueFrom } from 'rxjs';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'ielts-live-batch';

	courseDetails: any;
	variantDetails: any;

	ngOnInit() {
		this.initFunction()
	}

	async initFunction() {
		this.courseDetails = await this.getCourseDetails();
		this.variantDetails = await this.getVariantDetails();

		console.log(this.variantDetails);

	}

	constructor(private courseDetailsService: CourseDetailsService, private variantDetailsService: VariantDetailsService) { }

	async getCourseDetails() {
		try {
			const response: any = await firstValueFrom(this.courseDetailsService.getCourseDetails());
			if (response && response.code === 200) {
				return response.data;
			}
		} catch (err) {
			alert('Something Went Wrong. Please try later');
			return {};
		}
	}

	async getVariantDetails() {
		try {
			const response: any = await firstValueFrom(this.variantDetailsService.getVariantDetails());
			if (response && response.code === 200) {
				return response.data;
			}
		} catch (err) {
			alert('Something Went Wrong. Please try later');
			return {};
		}
	}
}
