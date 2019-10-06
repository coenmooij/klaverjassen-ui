import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Game, NUMBER_OF_ROUNDS } from '../../domain/game/game.interface';

@Component({
  selector: 'app-game-table',
  templateUrl: 'game-table.component.html'
})
export class GameTableComponent {
  @Input() games: Game[] = [];

  @Output() play = new EventEmitter<number>();
  @Output() view = new EventEmitter<number>();

  MAX_ROUNDS = NUMBER_OF_ROUNDS;

  columns = [
    'Team 1',
    'Score',
    '-',
    'Score',
    'Team 2',
    ''
  ];

  onPlay(id: number): void {
    this.play.emit(id);
  }

  onView(id: number): void {
    this.view.emit(id);
  }

  getTeamOne(players: string []): string {
    return `${players[0]} & ${players[2]}`;
  }

  getTeamTwo(players: string []): string {
    return `${players[1]} & ${players[3]}`;
  }
}
