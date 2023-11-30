import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'

})
export class HeaderComponent {
  headerClickCount = 0
  @Input('containerID') containerID
  constructor(private counterService: CounterService) {


  }
  incrementCounter() {
    this.headerClickCount++
    if (this.headerClickCount == 10) {
      this.counterService.setColor(this.containerID)
    }
  }
}
