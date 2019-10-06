import { Component, Input, OnInit } from '@angular/core';
import { Game } from '../../domain/game/game.interface';

@Component({
  selector: 'app-scoresheet',
  templateUrl: 'scoresheet.component.html'
})
export class ScoresheetComponent implements OnInit {
  @Input() game: Game;

  teamOne = '';
  teamTwo = '';

  ngOnInit(): void {
    this.setTeams(this.game.players);
  }

  setTeams(players: string[]): void {
    this.teamOne = `${players[0]} & ${players[2]}`;
    this.teamTwo = `${players[1]} & ${players[3]}`;
  }
}
