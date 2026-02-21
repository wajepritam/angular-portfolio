import { AfterViewInit, Directive, ElementRef, EventEmitter, OnDestroy, Output } from '@angular/core';

@Directive({
  selector: '[appInView]',
  standalone: false
})
export class InViewDirective implements AfterViewInit, OnDestroy {
  @Output() inViewChange = new EventEmitter<boolean>();

  private observer?: IntersectionObserver;

  constructor(private readonly el: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      ([entry]) => {
        this.inViewChange.emit(entry.isIntersecting);
      },
      { threshold: 0.25 }
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
