import { Component, Input } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
	selector: 'app-overview',
	templateUrl: './overview.component.html',
	styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {
	@Input() variantDetails: any;
	@Input() courseDetails: any;

	countdown: { days: number; hours: number; minutes: number; seconds: number } =
		{ days: 0, hours: 0, minutes: 0, seconds: 0 }
	countdownKeys: Array<keyof typeof this.countdown> = ['days', 'hours', 'minutes', 'seconds'];

	private countdownSubscription!: Subscription;
	slides: any;
	targetDate!: number;

	ngOnInit() {
		this.targetDate = new Date(this.variantDetails?.items[0].meta[1].values[0].end_at).getTime();
		this.countdownSubscription = interval(1000).subscribe(() => this.updateCountdown());
	}

	ngOnDestroy() {
		this.countdownSubscription?.unsubscribe();
	}

	updateCountdown() {
		const now = Date.now();
		const diff = Math.max(this.targetDate - now, 0);
		this.countdown = {
			days: Math.floor(diff / (1000 * 60 * 60 * 24)),
			hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
			minutes: Math.floor((diff / (1000 * 60)) % 60),
			seconds: Math.floor((diff / 1000 % 60))
		}
	}
}
