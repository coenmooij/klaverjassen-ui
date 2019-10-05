import { AfterContentInit, Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appAutoFocus]'
})
export class AutoFocusDirective implements AfterContentInit, OnChanges {
  @Input() appAutoFocus = false;

  loaded = false;

  constructor(private element: ElementRef) {
  }

  ngAfterContentInit(): void {
    this.loaded = true;
    this.focus();
  }

  ngOnChanges(): void {
    if (this.loaded) {
      this.focus();
    }
  }

  focus(): void {
    if (this.appAutoFocus) {
      setTimeout(() => {
        this.element.nativeElement.focus();
      }, 0);
    }
  }
}
