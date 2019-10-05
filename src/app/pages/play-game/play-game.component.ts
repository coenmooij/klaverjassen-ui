import { Component, OnInit } from '@angular/core';
import { Game } from '../../domain/game/game.interface';
import { GameService } from '../../domain/game/game.service';

@Component({
  selector: 'app-play-game',
  templateUrl: 'play-game.component.html'
})
export class PlayGameComponent implements OnInit {
  game: Game;

  constructor(private gameService: GameService) {
  }

  ngOnInit(): void {
    this.gameService.loadGame()
      .subscribe(
        (game: Game) => {
          this.game = game;
        },
        (error: Error) => {
          console.log(error);
        }
      );
  }
}
