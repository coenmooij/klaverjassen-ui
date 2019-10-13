import { Component, Input } from '@angular/core';
import { Game } from '../../domain/game/game.interface';

@Component({
  selector: 'app-statistics',
  templateUrl: 'statistics.component.html'
})
export class StatisticsComponent {
  @Input() game: Game;

  getWinningTeam(): string {
    const points = this.game.teamOneScore - this.game.teamTwoScore;
    if (points > 0) {
      return `${this.game.players[0]} & ${this.game.players[2]} won with ${points} points!`;
    } else if (points < 0) {
      return `${this.game.players[1]} & ${this.game.players[3]} won with ${-points} points!`;
    } else {
      return 'Game resulted in a tie';
    }
  }
}
