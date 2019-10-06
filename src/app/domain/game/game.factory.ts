import { Game } from './game.interface';

export class GameFactory {
  static newGame(id: number, players: string[]): Game {
    return {
      id,
      players,
      teamOneScore: 0,
      teamTwoScore: 0,
      rounds: []
    };
  }
}
