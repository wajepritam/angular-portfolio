import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  standalone: false
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Enterprise Dashboard Suite',
      subtitle: 'Angular • Material • RxJS',
      description: 'A modular dashboard with advanced filtering, role-based views, and real-time KPI updates.',
      image: 'assets/projects/portfolio.png',
      link: 'https://your-live-demo.com',
      repo: 'https://github.com/pritamwaje/angular-portfolio'
    },
    {
      title: 'Smart Weather Insights',
      subtitle: 'Angular • APIs • Charts',
      description: 'Forecast app with geolocation, trend visualizations, and optimized offline cache behavior.',
      image: 'assets/projects/weather.png',
      link: 'https://your-weather-app-link.com',
      repo: 'https://github.com/pritamwaje/weather-app'
    },
    {
      title: 'UI Component Library',
      subtitle: 'Design System',
      description: 'Reusable Angular components with docs, theming tokens, and accessibility-first implementation.',
      image: 'assets/projects/portfolio.png',
      link: 'https://your-component-library.com',
      repo: 'https://github.com/your-username/ui-library'
    }
  ];
}
