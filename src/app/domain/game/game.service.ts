import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GameStore } from '../../persistence/game.store';
import { Game } from './game.interface';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private gameStore: GameStore) {
  }

  startGame(players: string[]): void {
    const game: Game = {players};
    this.gameStore.setGame(game);
  }

  hasActiveGame(): boolean {
    return this.gameStore.hasActiveGame();
  }

  loadGame(): Observable<Game> {
    const game = this.gameStore.getGame();

    return of(game);
  }
}
