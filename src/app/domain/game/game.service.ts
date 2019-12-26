import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { GameStore } from '../../persistence/game.store';
import { HonorStore } from '../../persistence/honor.store';
import { GameFactory } from './game.factory';
import { Game } from './game.interface';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  NO_ACTIVE_GAME = 'No active game...';

  constructor(private gameStore: GameStore,
              private honorStore: HonorStore) {
  }

  getAllGames(): Observable<Game[]> {
    const lastGameId = this.gameStore.getLastGameId();
    const games = [];
    for (let i = 1; i <= lastGameId; i++) {
      if (this.gameStore.hasGame(i)) {
        const game = this.gameStore.getGame(i);
        games.push(game);
      }
    }
    return of(games);
  }

  startGame(players: string[]): Game {
    const lastGameId = this.gameStore.getLastGameId();
    const game: Game = GameFactory.newGame(lastGameId + 1, players);
    this.gameStore.saveGame(game);
    this.honorStore.resetHonor();
    return game;
  }

  continueGame(id: number): void {
    this.gameStore.setActiveGameId(id);
  }

  hasActiveGame(): boolean {
    const activeGameId = this.gameStore.getActiveGameId();
    return this.gameStore.hasGame(activeGameId);
  }

  getActiveGame(): Observable<Game> {
    const activeGameId = this.gameStore.getActiveGameId();
    if (activeGameId === this.gameStore.DEFAULT_GAME_ID) {
      return throwError(this.NO_ACTIVE_GAME);
    }
    const game = this.gameStore.getGame(activeGameId);
    return of(game);
  }

  saveGame(game: Game): void {
    this.gameStore.saveGame(game);
  }

  getGame(id: number): Observable<Game> {
    const game = this.gameStore.getGame(id);
    return of(game);
  }
}
