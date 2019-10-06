import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Game, NUMBER_OF_ROUNDS } from '../../domain/game/game.interface';

@Component({
  selector: 'app-game-table',
  templateUrl: 'game-table.component.html'
})
export class GameTableComponent {
  @Input() games: Game[] = [];

  @Output() continue = new EventEmitter<number>();
  @Output() view = new EventEmitter<number>();

  MAX_ROUNDS = NUMBER_OF_ROUNDS;

  columns = [
    'Team 1',
    '',
    '-',
    '',
    'Team 2',
    ''
  ];

  onContinue(id: number): void {
    this.continue.emit(id);
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
