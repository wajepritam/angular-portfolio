import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
  standalone: false
})
export class SkillsComponent {
  skillGroups = [
    {
      category: 'Frontend',
      items: ['Angular (2+)', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'SCSS', 'CSS3']
    },
    {
      category: 'Frameworks & Libraries',
      items: ['RxJS', 'NgRx', 'Ag-Grid', 'Ionic 4', 'Bootstrap', 'Nebular']
    },
    {
      category: 'Testing & Quality',
      items: ['Jasmine', 'Karma', 'Unit Testing', 'Web Accessibility (WCAG)', 'Internationalization (i18n)']
    },
    {
      category: 'DevOps, Cloud & Delivery',
      items: ['Git', 'Bitbucket', 'NPM', 'Jenkins', 'CI/CD', 'AWS (EC2, VPC)', 'Agile/Scrum']
    }
  ];
}
