import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  contentClickCount = 0
  @Input('containerID') containerID
  constructor(private counterService: CounterService) {


  }
  incrementCounter() {
    this.contentClickCount++
    if (this.contentClickCount == 10) {
      this.counterService.setColor(this.containerID)
    }
  }
}
