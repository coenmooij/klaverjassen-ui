import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Game, NUMBER_OF_ROUNDS } from '../../domain/game/game.interface';
import { GameService } from '../../domain/game/game.service';
import { Round } from '../../domain/game/round.interface';
import { Suit } from '../../domain/game/suit.enum';
import { Routes } from '../../routing/routes.enum';

@Component({
  selector: 'app-play-game',
  templateUrl: 'play-game.component.html'
})
export class PlayGameComponent implements OnInit {
  createGameRoute = `/${Routes.CREATE_GAME}`;
  game: Game;

  loading = true;
  hasError = false;

  activePlayerId = 0;
  trump = Suit.HEARTS;

  constructor(private gameService: GameService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.gameService.getActiveGame()
      .subscribe(
        (game: Game) => {
          this.game = game;
          this.setupGame();
          this.loading = false;
        },
        () => {
          this.hasError = true;
          this.loading = false;
        }
      );
  }

  onSubmitRound(round: Round): void {
    this.game.rounds.push(round);
    this.game.teamOneScore += round.teamOnePoints;
    this.game.teamTwoScore += round.teamTwoPoints;
    this.gameService.saveGame(this.game);
    if (this.game.rounds.length >= NUMBER_OF_ROUNDS) {
      this.router.navigate([Routes.GAMES, this.game.id]);
    } else {
      this.setActivePlayer(this.game.rounds.length);
    }
  }

  getActivePlayer(): string {
    return this.game.players[this.activePlayerId];
  }

  getPreviousPlayer(): string {
    if (this.activePlayerId === 0) {
      return this.game.players[3];
    }
    return this.game.players[this.activePlayerId - 1];
  }

  setupGame(): void {
    this.setActivePlayer(this.game.rounds.length);
  }

  setActivePlayer(numberOfRounds: number): void {
    const numberOfPlayers = 4;
    this.activePlayerId = numberOfRounds % numberOfPlayers;
  }
}
