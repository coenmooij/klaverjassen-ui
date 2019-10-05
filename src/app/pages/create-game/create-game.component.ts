import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from '../../domain/game/game.service';
import { Routes } from '../../routing/routes.enum';

@Component({
  selector: 'app-create-game',
  templateUrl: 'create-game.component.html'
})
export class CreateGameComponent {
  cancelRoute = `/${Routes.HOME}`;

  playerOne = '';
  playerTwo = '';
  playerThree = '';
  playerFour = '';

  focus = 1;

  constructor(private gameService: GameService,
              private router: Router) {
  }

  isComplete(): boolean {
    return this.playerOne !== ''
      && this.playerTwo !== ''
      && this.playerThree !== ''
      && this.playerFour !== '';
  }

  onSubmit(): void {
    if (!this.isComplete()) {
      return;
    }
    this.gameService.startGame([
      this.playerOne,
      this.playerTwo,
      this.playerThree,
      this.playerFour
    ]);
    this.router.navigate([Routes.PLAY_GAME]);
  }
}
