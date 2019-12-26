import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GameFactory } from '../../domain/game/game.factory';
import { Round } from '../../domain/game/round.interface';
import { HonorStore } from '../../persistence/honor.store';

@Component({
  selector: 'app-score-form',
  templateUrl: 'score-form.component.html'
})
export class ScoreFormComponent {
  @Input() activePlayerId: number;

  @Output() submitRound = new EventEmitter<Round>();

  showHonorsForm = true;
  showPointsForm = false;

  round: Round = GameFactory.newRound();

  constructor(private honorStore: HonorStore) {
  }

  onSubmitHonors(): void {
    this.showHonorsForm = false;
    this.showPointsForm = true;
  }

  onBackToHonors(): void {
    this.showPointsForm = false;
    this.showHonorsForm = true;
  }

  onSubmitRound(): void {
    this.submitRound.emit(this.round);
    this.showPointsForm = false;
    this.honorStore.resetHonor();
    this.showHonorsForm = true;
    this.round = GameFactory.newRound();
  }
}
