import { routingAnimation } from './shared/animations/routing.animation';
import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routingAnimation],
})
export class AppComponent implements OnInit {
  title = 'my-market';
  state: any;
  ngOnInit(): void {
    Aos.init({
      duration: 1500,
      delay: 100,
    });
    window.addEventListener('load', Aos.refresh);
  }
}
