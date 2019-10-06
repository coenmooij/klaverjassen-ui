import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game } from '../../domain/game/game.interface';
import { GameService } from '../../domain/game/game.service';

@Component({
  selector: 'app-view-game',
  templateUrl: 'view-game.component.html'
})
export class ViewGameComponent implements OnInit {
  game: Game;

  loading = true;
  hasError = false;

  constructor(private route: ActivatedRoute,
              private gameService: GameService) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.gameService.getGame(id)
      .subscribe(
        (game: Game) => {
          this.game = game;
          this.loading = false;
        },
        () => {
          this.hasError = true;
        }
      );
  }
}
