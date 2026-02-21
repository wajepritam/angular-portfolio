import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiStateService } from '../services/ui-state.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  standalone: false
})
export class NavbarComponent implements OnInit, OnDestroy {
  hidden = false;
  cinematicMode = false;
  private lastScrollY = 0;
  private sub?: Subscription;

  constructor(private readonly uiState: UiStateService) {}

  ngOnInit(): void {
    this.sub = this.uiState.cinematicMode$.subscribe((mode) => {
      this.cinematicMode = mode;
    });
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    const current = window.scrollY;
    this.hidden = current > this.lastScrollY && current > 120;
    this.lastScrollY = current;
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
