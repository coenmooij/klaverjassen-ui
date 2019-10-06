import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Round } from '../../domain/game/round.interface';

@Component({
  selector: 'app-scoreform',
  templateUrl: 'scoreform.component.html'
})
export class ScoreformComponent {
  @Input() activePlayerId: number;

  @Output() submitRound = new EventEmitter<Round>();

  teamOneIdList = [0, 1];
  teamTwoIdList = [1, 3];

  hasError = false;

  round: Round = {
    teamOneHonors: 0,
    teamOnePoints: 0,
    teamTwoHonors: 0,
    teamTwoPoints: 0,
    nat: false,
    pit: false
  };


  addHonors(teamId: number, amount: number): void {
    switch (teamId) {
      case 1:
        this.round.teamOneHonors += amount;
        break;
      case 2:
        this.round.teamTwoHonors += amount;
        break;
    }
  }

  removeHonors(teamId: number, amount: number): void {
    switch (teamId) {
      case 1:
        this.round.teamOneHonors -= amount;
        break;
      case 2:
        this.round.teamTwoHonors -= amount;
        break;
    }
  }

  onCheckScore(): void {
  }

  onSubmitRound(): void {
    this.submitRound.emit(this.round);
  }
}
