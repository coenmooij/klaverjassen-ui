import { Component, OnInit } from '@angular/core';
import { GameService } from '../../domain/game/game.service';
import { Routes } from '../../routing/routes.enum';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {
  createGameRoute = `/${Routes.CREATE_GAME}`;
  playGameRoute = `/${Routes.PLAY_GAME}`;

  hasActiveGame = false;

  constructor(private gameService: GameService) {
  }

  ngOnInit(): void {
    this.hasActiveGame = this.gameService.hasActiveGame();
  }
}
