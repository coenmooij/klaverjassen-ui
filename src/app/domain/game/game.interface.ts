import { Round } from './round.interface';

export const NUMBER_OF_ROUNDS = 16;
export const NUMBER_OF_POINTS = 162;
export const PIT_HONOR = 100;

export interface Game {
  id: number;
  teamOneScore: number;
  teamTwoScore: number;
  rounds: Round[];
  players: string[];
}
