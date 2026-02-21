import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiStateService } from './shared/services/ui-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: false
})
export class AppComponent implements OnInit, OnDestroy {
  loading = true;
  cinematicMode = false;
  cursorX = 0;
  cursorY = 0;

  private sub?: Subscription;

  constructor(private readonly uiState: UiStateService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 2000);

    this.sub = this.uiState.cinematicMode$.subscribe((mode) => {
      this.cinematicMode = mode;
    });
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    this.cursorX = event.clientX;
    this.cursorY = event.clientY;
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
