import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-number-input',
  templateUrl: 'number-input.component.html'
})
export class NumberInputComponent {
  @Input() value: number;
  @Input() increment = 1;

  @Output() valueChange = new EventEmitter<number>();

  onValueChange(value: number): void {
    this.valueChange.emit(value);
  }
}
