import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {
  sidenavClickCount = 0
  @Input('containerID') containerID
  constructor(private counterService: CounterService) {


  }
  incrementCounter() {
    this.sidenavClickCount++
    if (this.sidenavClickCount == 10) {
      this.counterService.setColor(this.containerID)
    }
  }
}
