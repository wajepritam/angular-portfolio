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
      title: 'Portfolio Website',
      subtitle: 'Angular + Angular Material',
      description: 'A personal portfolio website to showcase my Angular projects and UX skills.',
      image: '/assets/projects/portfolio.png',
      link: 'https://your-portfolio-link.com',
      repo: 'https://github.com/pritamwaje/angular-portfolio'
    },
    {
      title: 'Weather App',
      subtitle: 'Angular + OpenWeather API',
      description: 'Displays current weather data and 5-day forecast with animations.',
      image: 'assets/projects/weather.png',
      link: 'https://your-weather-app-link.com',
      repo: 'https://github.com/pritamwaje/weather-app'
    }
    // Add more projects here...
  ];
}
