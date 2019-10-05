import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: 'input.component.html'
})
export class InputComponent {
  @Input() value = '';
  @Input() placeholder = '';
  @Input() hasFocus = false;

  @Output() valueChange = new EventEmitter<string>();

  onValueChange(value: string): void {
    this.valueChange.emit(value);
  }
}
