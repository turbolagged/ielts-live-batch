import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
	selector: 'app-testimonials',
	templateUrl: './testimonials.component.html',
	styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {
	@Input() testimonials: any;
	slides = [
		{
			description: 'শিক্ষার্থী',
			name: 'Junaed Samad (Band Score: 8.5)',
			videoId: 'AvB2ibYd1z4',
			thumb: 'https://cdn.10minuteschool.com/images/catalog/product/testimonial/AvB2ibYd1z4-HD_1727177955435.jpg',
		},
		{
			description: 'শিক্ষার্থী',
			name: 'Mohammad Rafi (Band Score: 8)',
			videoId: 'KcwncFcSIOY',
			thumb: 'https://cdn.10minuteschool.com/images/catalog/product/testimonial/KcwncFcSIOY-HD_1727178045711.jpg',
		},
		{
			description: 'শিক্ষার্থী',
			name: 'Yeamin Farabi (Band Score: 7)',
			videoId: 'uAQ-WjhZnl0',
			thumb: 'https://cdn.10minuteschool.com/images/catalog/product/testimonial/uAQ-WjhZnl0-HD_%281%29_1727178007691.jpg',
		},
	];

	ngOnInit() {
		this.processSlides();
	}

	processedSlides: Array<{
		description: string;
		name: string;
		videoUrl: SafeResourceUrl;
		thumb: string;
	}> = [];

	currentSlide = 0;
	activeVideo: number | null = null;

	constructor(private sanitizer: DomSanitizer) {
	}

	processSlides() {
		this.processedSlides = this.testimonials.values.map((slide: any) => ({
			...slide,
			videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl(
				`https://www.youtube.com/embed/${slide.video_url}?autoplay=1`
			),
		}));
	}

	playVideo(index: number) {
		this.activeVideo = index;
	}

	stopVideo() {
		this.activeVideo = null;
	}

	nextSlide() {
		if (this.currentSlide < this.processedSlides.length - 2) {
			this.currentSlide++;
		}
	}

	previousSlide() {
		if (this.currentSlide > 0) {
			this.currentSlide--;
		}
	}
}
