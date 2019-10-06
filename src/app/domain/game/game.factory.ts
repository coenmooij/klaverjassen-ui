import { Game } from './game.interface';
import { Round } from './round.interface';

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

  static newRound(): Round {
    return {
      teamOneHonors: 0,
      teamOnePoints: 0,
      teamTwoHonors: 0,
      teamTwoPoints: 0,
      nat: false,
      pit: false,
      tegenpit: false
    };
  }
}
