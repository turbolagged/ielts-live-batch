import { Component, Input } from '@angular/core';
import { interval, Subscription } from 'rxjs';
const ADMISSION_END = '2025-01-06T23:59:59';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {
  @Input() courseDetails: any;

  targetDate = new Date(ADMISSION_END).getTime();
  countdown: { days: number; hours: number; minutes: number; seconds: number } =
    { days: 0, hours: 0, minutes: 0, seconds: 0 }
  countdownKeys: Array<keyof typeof this.countdown> = ['days', 'hours', 'minutes', 'seconds'];

  private countdownSubscription!: Subscription;

  ngOnInit() {
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
