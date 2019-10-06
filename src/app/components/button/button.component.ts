import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: 'button.component.html'
})
export class ButtonComponent {
  @Input() route: string;
  @Input() icon: string;
  @Input() disabled = false;
  @Input() isSumbit = false;
  @Input() isSmall = false;
  @Input() isError = false;
  @Input() isWarning = false;
  @Input() isInfo = false;
  @Input() isFullWidth = false;
  @Input() iconRight = false;

  @Output() buttonClick = new EventEmitter<void>();

  onClick(event: MouseEvent): void {
    event.stopPropagation();
    if (!this.disabled) {
      this.buttonClick.emit();
    }
  }
}
