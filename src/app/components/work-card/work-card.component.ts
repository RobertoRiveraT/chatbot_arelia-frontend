import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-work-card',
  templateUrl: './work-card.component.html',
  styleUrls: ['./work-card.component.css']
})
export class WorkCardComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() bullets!: string[];
  @Input() readMoreText?: string;
  @Input() link?: string;
  @Input() thumbnail?: string;
  @Input() startDate!: string;
  @Input() endDate?: string;
  @Input() category!: string;

  readMoreOpen = false;

  toggleReadMore(): void {
    this.readMoreOpen = !this.readMoreOpen;
  }

  isModalOpen = false;

  openImageModal(): void {
    this.isModalOpen = true;
  }

  closeImageModal(): void {
    this.isModalOpen = false;
  }

}
