import { Injectable } from '@angular/core';
import { Game, NUMBER_OF_ROUNDS } from '../domain/game/game.interface';
import { Store } from './store';

@Injectable({
  providedIn: 'root'
})
export class GameStore {
  DEFAULT_GAME_ID = 0;
  LAST_GAME_ID = 'last_game_id';
  ACTIVE_GAME_ID = 'active_game_id';

  GAME_PREFIX = 'game';

  constructor(private store: Store) {
  }

  getLastGameId(): number {
    const id = this.store.get(this.LAST_GAME_ID);
    return id !== '' ? Number(id) : this.DEFAULT_GAME_ID;
  }

  getActiveGameId(): number {
    const id = this.store.get(this.ACTIVE_GAME_ID);
    return id !== '' ? Number(id) : this.DEFAULT_GAME_ID;
  }

  setActiveGameId(id: number) {
    this.store.set(this.ACTIVE_GAME_ID, String(id));
  }

  hasGame(id: number): boolean {
    const key = this.getGameKey(id);

    return this.store.has(key);
  }

  getGame(id: number): Game {
    const key = this.getGameKey(id);
    const json = this.store.get(key);

    return JSON.parse(json);
  }

  saveGame(game: Game): void {
    this.updateActiveGameId(game);
    this.updateLastGameId(game.id);
    const key = this.getGameKey(game.id);
    const json = JSON.stringify(game);

    this.store.set(key, json);
  }

  private getGameKey(id: number): string {
    return `${this.GAME_PREFIX}_${id}`;
  }

  private updateLastGameId(id: number): void {
    const lastGameId = this.getLastGameId();
    if (id > lastGameId) {
      this.store.set(this.LAST_GAME_ID, String(id));
    }
  }

  private updateActiveGameId(game: Game): void {
    if (game.rounds.length >= NUMBER_OF_ROUNDS) {
      this.store.remove(this.ACTIVE_GAME_ID);
    } else {
      this.store.set(this.ACTIVE_GAME_ID, String(game.id));
    }
  }
}
