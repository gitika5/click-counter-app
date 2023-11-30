import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { CounterService } from './counter.service';
import { ContentComponent } from './content/content.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, SidenavComponent, ContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class AppComponent {
  @ViewChild('headerRef',{static: true}) headerReff: ElementRef
  @ViewChild('navRef',{static: true}) navReff: ElementRef
  @ViewChild('mainRef',{static: true}) mainReff: ElementRef
  @ViewChild('footerRef',{static: true}) footerReff: ElementRef

  containerIDClicked: string[] = []


  constructor(private counterService: CounterService) {
    
    this.counterService.containerSubject.subscribe(res => {
      this.containerIDClicked.push(res)
    })
  }
}
