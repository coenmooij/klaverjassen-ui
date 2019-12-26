import { Injectable } from '@angular/core';
import { Store } from './store';

@Injectable({
  providedIn: 'root'
})
export class HonorStore {
  HONOR_PREFIX = 'honor';

  constructor(private store: Store) {
  }

  getHonor(team: number): number {
    const key = this.getTeamHonorKey(team);
    const honor = this.store.get(key);
    return honor === '' ? 0 : Number(honor);
  }

  setHonor(team: number, honor: number): void {
    const key = this.getTeamHonorKey(team);
    this.store.set(key, String(honor));
  }

  resetHonor(): void {
    this.setHonor(1, 0);
    this.setHonor(2, 0);
  }

  private getTeamHonorKey(team: number): string {
    return `${this.HONOR_PREFIX}_${team}`;
  }
}
