import { Component, OnInit } from '@angular/core';
import { Game } from '../../domain/game/game.interface';
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

  activePlayer = 0;
  trump = Suit.HEARTS;

  constructor(private gameService: GameService) {
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
    // TODO : Implement
  }

  getActivePlayer(): string {
    return this.game.players[this.activePlayer];
  }

  getPreviousPlayer(): string {
    if (this.activePlayer === 0) {
      return this.game.players[3];
    }
    return this.game.players[this.activePlayer - 1];
  }

  setupGame(): void {
    this.setActivePlayer(this.game.rounds.length);
  }

  setActivePlayer(numberOfRounds: number): void {
    const numberOfPlayers = 4;
    this.activePlayer = numberOfRounds % numberOfPlayers;
  }
}
