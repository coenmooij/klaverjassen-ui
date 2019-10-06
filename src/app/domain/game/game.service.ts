import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { GameStore } from '../../persistence/game.store';
import { GameFactory } from './game.factory';
import { Game } from './game.interface';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  NO_ACTIVE_GAME = 'No active game...';

  constructor(private store: GameStore) {
  }

  getAllGames(): Observable<Game[]> {
    const lastGameId = this.store.getLastGameId();
    const games = [];
    for (let i = 1; i <= lastGameId; i++) {
      if (this.store.hasGame(i)) {
        const game = this.store.getGame(i);
        games.push(game);
      }
    }
    return of(games);
  }

  startGame(players: string[]): Game {
    const lastGameId = this.store.getLastGameId();
    const game: Game = GameFactory.newGame(lastGameId + 1, players);
    this.store.saveGame(game);
    return game;
  }

  continueGame(id: number): void {
    this.store.setActiveGameId(id);
  }

  hasActiveGame(): boolean {
    const activeGameId = this.store.getActiveGameId();
    return this.store.hasGame(activeGameId);
  }

  getActiveGame(): Observable<Game> {
    const activeGameId = this.store.getActiveGameId();
    if (activeGameId === this.store.DEFAULT_GAME_ID) {
      return throwError(this.NO_ACTIVE_GAME);
    }
    const game = this.store.getGame(activeGameId);
    return of(game);
  }
}
