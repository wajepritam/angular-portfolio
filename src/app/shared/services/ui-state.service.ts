import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UiStateService {
  private readonly cinematicModeSubject = new BehaviorSubject(false);
  readonly cinematicMode$ = this.cinematicModeSubject.asObservable();

  toggleCinematicMode(): void {
    this.cinematicModeSubject.next(!this.cinematicModeSubject.value);
  }
}
