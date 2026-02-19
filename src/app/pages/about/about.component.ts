import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  standalone: false
})
export class AboutComponent {
  experience = [
    {
      role: 'Assistant Vice President (AVP) – Frontend / Angular',
      company: 'Citicorp India Services Pvt. Ltd., Pune',
      duration: 'Sep 2024 – Present',
      points: [
        'Promoted for technical ownership and frontend leadership across multiple initiatives.',
        'Leading frontend architecture for enterprise banking platforms supporting 5,000+ internal users globally.',
        'Drove 30%+ performance improvements through optimized change detection, lazy loading, and RxJS patterns.'
      ]
    },
    {
      role: 'Officer – Frontend / Angular',
      company: 'Citicorp India Services Pvt. Ltd., Pune',
      duration: 'Feb 2023 – Aug 2024',
      points: [
        'Built and maintained Angular enterprise applications for multiple business teams.',
        'Implemented secure REST API integrations and role-based access controls.',
        'Reduced production defects by ~20% through proactive fixes and code reviews.'
      ]
    },
    {
      role: 'Engineering Lead – Frontend (Angular)',
      company: 'Persistent Systems Ltd., Pune',
      duration: 'Jun 2021 – Feb 2023',
      points: [
        'Led Angular 8+ development for enterprise products with Ag-Grid and SCSS.',
        'Improved UI consistency and development speed by 25% via reusable components.',
        'Improved unit test coverage to 70%+ and implemented i18n and WCAG accessibility.'
      ]
    }
  ];
}
