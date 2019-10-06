import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Round } from '../../domain/game/round.interface';

@Component({
  selector: 'app-score-form',
  templateUrl: 'score-form.component.html'
})
export class ScoreFormComponent {
  @Input() activePlayerId: number;

  @Output() submitRound = new EventEmitter<Round>();

  showHonorsForm = true;
  showPointsForm = false;

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

  onCheckScore(): void {
  }

  onSubmitHonors(): void {
    this.showHonorsForm = false;
    this.showPointsForm = true;
  }
}
