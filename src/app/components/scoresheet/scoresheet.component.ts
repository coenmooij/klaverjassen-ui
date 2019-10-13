import { Component, Input, OnInit } from '@angular/core';
import { Game } from '../../domain/game/game.interface';
import { Round } from '../../domain/game/round.interface';

@Component({
  selector: 'app-scoresheet',
  templateUrl: 'scoresheet.component.html',
  styleUrls: ['scoresheet.component.scss']
})
export class ScoresheetComponent implements OnInit {
  @Input() game: Game;

  teamOne = '';
  teamTwo = '';

  TEGENPIT = 'TEGENPIT';
  NAT = 'NAT';
  PIT = 'PIT';

  ngOnInit(): void {
    this.setTeams(this.game.players);
  }

  setTeams(players: string[]): void {
    this.teamOne = `${players[0]} & ${players[2]}`;
    this.teamTwo = `${players[1]} & ${players[3]}`;
  }

  getTeamScore(team: number, roundIndex: number, round: Round): string | number {
    if (this.getPlayingTeamForRound(roundIndex) === team) {
      return round.tegenpit ? this.TEGENPIT : (round.nat ? this.NAT : this.getPoints(team, round));
    } else {
      return round.pit ? this.PIT : this.getPoints(team, round);
    }
  }

  getPlayingTeamForRound(round: number): number {
    const teamIndex = round % 2;
    return teamIndex + 1;
  }

  getPoints(team: number, round: Round): number {
    return team === 1 ? round.teamOnePoints : round.teamTwoPoints;
  }
}
