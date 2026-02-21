import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  ViewChild
} from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { UiStateService } from '../../shared/services/ui-state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: false,
  animations: [
    trigger('sectionReveal', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(35px)' }),
        animate('700ms cubic-bezier(0.16, 1, 0.3, 1)', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  @ViewChild('heroVideo') heroVideo?: ElementRef<HTMLVideoElement>;

  heroVisible = false;
  aboutVisible = false;
  skillsVisible = false;
  projectsVisible = false;
  experienceVisible = false;
  contactVisible = false;
  videoFailed = false;
  isMuted = true;
  scrollY = 0;

  readonly skillSet = [
    { name: 'Angular & TypeScript', level: 95 },
    { name: 'RxJS & State Management', level: 90 },
    { name: 'UI Animation & Motion Design', level: 88 },
    { name: 'Accessibility & Performance', level: 86 }
  ];

  readonly projects = [
    { title: 'Nebula Banking Console', summary: 'Mission-critical dashboard with cinematic UX and real-time telemetry.' },
    { title: 'Aurora Trade Flow', summary: 'Story-driven transaction platform with high-performance component architecture.' },
    { title: 'Midnight Risk Monitor', summary: 'Visual intelligence interface for proactive compliance and anomaly detection.' }
  ];

  readonly timeline = [
    { period: '2024 - Present', title: 'Assistant Vice President', company: 'Citi', text: 'Leading Angular modernization programs across enterprise fintech products.' },
    { period: '2021 - 2024', title: 'Senior Frontend Engineer', company: 'Global Banking Platform', text: 'Built scalable design systems and advanced animated user experiences.' },
    { period: '2017 - 2021', title: 'Frontend Engineer', company: 'Digital Product Studio', text: 'Delivered accessible and responsive interfaces for B2B and B2C platforms.' }
  ];

  private audioContext?: AudioContext;
  private gainNode?: GainNode;
  private oscillator?: OscillatorNode;

  constructor(private readonly uiState: UiStateService) {}

  ngAfterViewInit(): void {
    this.heroVideo?.nativeElement.play().catch(() => {
      this.videoFailed = true;
    });
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.scrollY = window.scrollY;
  }

  startJourney(): void {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  }

  async toggleSoundtrack(): Promise<void> {
    if (!this.audioContext) {
      this.audioContext = new AudioContext();
      this.gainNode = this.audioContext.createGain();
      this.gainNode.gain.value = 0.03;
      this.oscillator = this.audioContext.createOscillator();
      this.oscillator.type = 'sine';
      this.oscillator.frequency.value = 66;
      this.oscillator.connect(this.gainNode);
      this.gainNode.connect(this.audioContext.destination);
      this.oscillator.start();
    }

    if (this.audioContext.state === 'suspended') {
      await this.audioContext.resume();
    }

    this.isMuted = !this.isMuted;
    if (this.gainNode) {
      this.gainNode.gain.value = this.isMuted ? 0 : 0.03;
    }
  }

  toggleCinematicMode(): void {
    this.uiState.toggleCinematicMode();
  }

  ngOnDestroy(): void {
    this.oscillator?.stop();
    this.audioContext?.close();
  }
}
