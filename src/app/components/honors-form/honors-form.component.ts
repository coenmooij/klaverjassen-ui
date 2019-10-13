import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HonorStore } from '../../persistence/honor.store';

@Component({
  selector: 'app-honors-form',
  templateUrl: 'honors-form.component.html'
})
export class HonorsFormComponent implements OnInit {
  @Input() teamOneHonors = 0;
  @Input() teamTwoHonors = 0;

  @Output() teamOneHonorsChange = new EventEmitter<number>();
  @Output() teamTwoHonorsChange = new EventEmitter<number>();
  @Output() next = new EventEmitter<void>();

  INCREMENT = 10;
  TEAM_ONE_ID = 1;
  TEAM_TWO_ID = 2;
  loading = true;

  constructor(private store: HonorStore) {
  }

  ngOnInit(): void {
    this.teamOneHonors = this.store.getHonor(this.TEAM_ONE_ID);
    this.teamTwoHonors = this.store.getHonor(this.TEAM_TWO_ID);
    this.loading = false;
  }

  onRemoveTeamOneHonors(): void {
    this.teamOneHonors -= this.INCREMENT;
    this.store.setHonor(this.TEAM_ONE_ID, this.teamOneHonors);
    this.teamOneHonorsChange.emit(this.teamOneHonors);
  }

  onRemoveTeamTwoHonors(): void {
    this.teamTwoHonors -= this.INCREMENT;
    this.store.setHonor(this.TEAM_TWO_ID, this.teamTwoHonors);
    this.teamTwoHonorsChange.emit(this.teamTwoHonors);
  }

  onAddTeamOneHonors(): void {
    this.teamOneHonors += this.INCREMENT;
    this.store.setHonor(this.TEAM_ONE_ID, this.teamOneHonors);
    this.teamOneHonorsChange.emit(this.teamOneHonors);
  }

  onAddTeamTwoHonors(): void {
    this.teamTwoHonors += this.INCREMENT;
    this.store.setHonor(this.TEAM_TWO_ID, this.teamTwoHonors);
    this.teamTwoHonorsChange.emit(this.teamTwoHonors);
  }

  onNext(): void {
    this.next.emit();
  }
}
