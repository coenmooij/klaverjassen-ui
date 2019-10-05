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
  @Input() isRed = false;
  @Input() isOrange = false;

  @Output() click = new EventEmitter<void>();

  onClick(event: MouseEvent): void {
    event.stopPropagation();
    if (!this.disabled) {
      this.click.emit();
    }
  }
}
