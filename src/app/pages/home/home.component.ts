import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: false
})
export class HomeComponent {
  highlights = [
    '8.5+ years building enterprise-grade Angular platforms',
    'Assistant Vice President (AVP) at Citi leading frontend initiatives',
    'Performance, accessibility (WCAG), and scalable component architecture specialist'
  ];
}
