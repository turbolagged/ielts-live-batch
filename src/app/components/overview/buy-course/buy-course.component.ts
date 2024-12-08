import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
	selector: 'app-buy-course',
	templateUrl: './buy-course.component.html',
	styleUrls: ['./buy-course.component.scss']
})
export class BuyCourseComponent {
	@Input() courseDetails: any;
	@Input() variantDetails: any;
	slides: any[] = [];
	currentIndex = 0;

	constructor(private sanitizer: DomSanitizer) { }

	ngOnInit() {
		this.slides = this.courseDetails.media
			.filter((data: any) => data.name === 'preview_gallery')
			.map((data: any) => {
				if (data.resourceType === 'video') {
					// Sanitize video URL
					const safeUrl = `https://www.youtube.com/embed/${data.resource}`;
					data.resource = this.sanitizer.bypassSecurityTrustResourceUrl(safeUrl);
				}
				return data;
			});
	}

	get carouselOffset() {
		return -this.currentIndex * 100;
	}

	next() {
		this.currentIndex = (this.currentIndex + 1) % this.slides.length;
	}

	prev() {
		this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
	}

	goToSlide(index: number) {
		this.currentIndex = index;
	}
}
