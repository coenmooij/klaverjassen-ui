import { Injectable } from '@angular/core';
import { Game } from '../domain/game/game.interface';
import { Store } from './store';

@Injectable({
  providedIn: 'root'
})
export class GameStore {
  ACTIVE_GAME = 'current_game';

  constructor(private store: Store) {
  }

  setGame(game: Game): void {
    this.store.set(this.ACTIVE_GAME, JSON.stringify(game));
  }

  hasActiveGame(): boolean {
    return this.store.has(this.ACTIVE_GAME);
  }

  getGame(): Game {
    const json = this.store.get(this.ACTIVE_GAME);

    return JSON.parse(json);
  }
}
