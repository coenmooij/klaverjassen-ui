import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GameFactory } from '../../domain/game/game.factory';
import { NUMBER_OF_POINTS, PIT_HONOR } from '../../domain/game/game.interface';
import { Round } from '../../domain/game/round.interface';

@Component({
  selector: 'app-points-form',
  templateUrl: 'points-form.component.html'
})
export class PointsFormComponent {
  @Input() round: Round = GameFactory.newRound();
  @Input() activePlayerId = 0;

  @Output() roundChange = new EventEmitter<Round>();
  @Output() back = new EventEmitter<void>();
  @Output() next = new EventEmitter<void>();

  teamOnePoints = 0;
  teamTwoPoints = 0;

  teamOneIdList = [0, 2];

  hasError = false;
  isComplete = false;

  onBack(): void {
    this.back.emit();
  }

  onNext(): void {
    this.next.emit();
  }

  calculateTeamOne(): void {
    if (this.teamOnePoints < 0 || this.teamOnePoints > NUMBER_OF_POINTS) {
      this.hasError = true;
      return;
    }
    this.teamTwoPoints = NUMBER_OF_POINTS - this.teamOnePoints;
    this.calculateRound();
  }

  calculateTeamTwo(): void {
    if (this.teamTwoPoints < 0 || this.teamTwoPoints > NUMBER_OF_POINTS) {
      this.hasError = true;
      return;
    }
    this.teamOnePoints = NUMBER_OF_POINTS - this.teamTwoPoints;
    this.calculateRound();
  }

  calculateRound(): void {
    this.hasError = false;
    this.round.nat = false;
    this.round.pit = false;
    this.round.tegenpit = false;
    this.round.teamOnePoints = this.round.teamOneHonors + this.teamOnePoints;
    this.round.teamTwoPoints = this.round.teamTwoHonors + this.teamTwoPoints;
    this.teamOneIdList.includes(this.activePlayerId)
      ? this.checkForTeamOne()
      : this.checkForTeamTwo();
    this.isComplete = true;
  }

  checkForTeamOne(): void {
    if (this.round.teamOnePoints <= this.round.teamTwoPoints) {
      this.round.teamTwoPoints = NUMBER_OF_POINTS + this.round.teamOneHonors + this.round.teamTwoHonors;
      if (this.round.teamOnePoints === 0) {
        this.round.teamTwoPoints += PIT_HONOR; // TODO : Make configurable
        this.round.tegenpit = true;
      } else {
        this.round.nat = true;
      }
      this.round.teamOnePoints = 0;
    } else if (this.round.teamTwoPoints === 0) {
      this.round.teamOnePoints += PIT_HONOR;
      this.round.pit = true;
    }
  }

  checkForTeamTwo(): void {
    if (this.round.teamTwoPoints <= this.round.teamOnePoints) {
      this.round.teamOnePoints = NUMBER_OF_POINTS + this.round.teamOneHonors + this.round.teamTwoHonors;
      if (this.round.teamTwoPoints === 0) {
        this.round.teamOnePoints += PIT_HONOR; // TODO : Make configurable
        this.round.tegenpit = true;
      } else {
        this.round.nat = true;
      }
      this.round.teamTwoPoints = 0;
    } else if (this.round.teamOnePoints === 0) {
      this.round.teamTwoPoints += PIT_HONOR;
      this.round.pit = true;
    }
  }
}
