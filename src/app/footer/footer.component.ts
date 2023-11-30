import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  footerClickCount = 0
  @Input('containerID') containerID
  constructor(private counterService: CounterService) {


  }
  incrementCounter() {
    this.footerClickCount++
    if (this.footerClickCount == 10) {
      this.counterService.setColor(this.containerID)
    }
  }

}
