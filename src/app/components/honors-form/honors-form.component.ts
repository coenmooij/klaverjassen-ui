import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-honors-form',
  templateUrl: 'honors-form.component.html'
})
export class HonorsFormComponent {
  @Input() teamOneHonors = 0;
  @Input() teamTwoHonors = 0;

  @Output() teamOneHonorsChange = new EventEmitter<number>();
  @Output() teamTwoHonorsChange = new EventEmitter<number>();
  @Output() next = new EventEmitter<void>();

  INCREMENT = 10;

  onRemoveTeamOneHonors(): void {
    this.teamOneHonors -= this.INCREMENT;
    this.teamOneHonorsChange.emit(this.teamOneHonors);
  }

  onRemoveTeamTwoHonors(): void {
    this.teamTwoHonors -= this.INCREMENT;
    this.teamTwoHonorsChange.emit(this.teamTwoHonors);
  }

  onAddTeamOneHonors(): void {
    this.teamOneHonors += this.INCREMENT;
    this.teamOneHonorsChange.emit(this.teamOneHonors);
  }

  onAddTeamTwoHonors(): void {
    this.teamTwoHonors += this.INCREMENT;
    this.teamTwoHonorsChange.emit(this.teamTwoHonors);
  }

  onNext(): void {
    this.next.emit();
  }
}
