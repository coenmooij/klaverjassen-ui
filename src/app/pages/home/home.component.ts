import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from '../../domain/game/game.interface';
import { GameService } from '../../domain/game/game.service';
import { Routes } from '../../routing/routes.enum';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {
  createGameRoute = `/${Routes.CREATE_GAME}`;
  playGameRoute = `/${Routes.PLAY_GAME}`;

  games: Game[] = [];

  hasActiveGame = false;

  loading = true;
  hasError = false;

  constructor(private gameService: GameService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.hasActiveGame = this.gameService.hasActiveGame();
    this.loadGames();
  }

  loadGames(): void {
    this.gameService.getAllGames()
      .subscribe(
        (games: Game[]) => {
          this.games = games;
          this.loading = false;
        },
        () => {
          this.hasError = true;
          this.loading = false;
        }
      );
  }

  onPlay(id: number): void {
    this.gameService.continueGame(id);
    this.router.navigate([Routes.PLAY_GAME]);
  }

  onView(id: number): void {
    this.router.navigate([Routes.GAMES, id]);
  }
}
