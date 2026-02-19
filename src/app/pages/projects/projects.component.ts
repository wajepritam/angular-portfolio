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
      title: 'Recovery & Resolution Planning (RRP) Portal',
      stack: 'Angular, TypeScript, REST APIs, Enterprise Banking',
      impact: [
        'Led UI development for business-critical modules in a regulated banking environment.',
        'Integrated secure REST APIs for sensitive regulatory data.',
        'Delivered capabilities used by global stakeholders with zero critical production issues.'
      ]
    },
    {
      title: 'Investor Relations – Comments Management Hub',
      stack: 'Angular, Secure Document Management, Workflow Automation',
      impact: [
        'Led frontend development for a high-visibility internal portal used by senior management teams.',
        'Replaced Excel/email workflows and reduced manual tracking effort by 40%+.',
        'Received CEO/CFO-level appreciation for secure handling of confidential documents.'
      ]
    },
    {
      title: 'EPNM (Evolved Programmable Network Manager)',
      stack: 'Angular 8, Ag-Grid, SCSS, Accessibility, i18n',
      impact: [
        'Developed reusable Angular components and REST integrations for large datasets.',
        'Implemented WCAG accessibility and i18n for global rollout.'
      ]
    },
    {
      title: 'CymplConnect – Role-Based Dashboard',
      stack: 'Angular 11, Nebular, RBAC',
      impact: [
        'Built role-based dashboards with modular architecture and secure access control.'
      ]
    },
    {
      title: 'Pranacare – Doctor Appointment Platform',
      stack: 'Angular, Ionic, Bootstrap, SEO',
      impact: [
        'Built web and mobile applications serving thousands of users with SEO optimization.'
      ]
    }
  ];
}
