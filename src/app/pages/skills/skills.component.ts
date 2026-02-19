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
      items: ['Angular', 'TypeScript', 'RxJS', 'SCSS', 'Angular Material']
    },
    {
      category: 'Architecture',
      items: ['State Management', 'Component Design', 'Performance Tuning', 'Accessibility']
    },
    {
      category: 'Tools',
      items: ['GitHub Actions', 'Jasmine/Karma', 'Figma Handoff', 'REST Integration']
    }
  ];
}
