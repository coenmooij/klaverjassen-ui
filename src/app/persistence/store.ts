import { Injectable } from '@angular/core';

const DEFAULT_VALUE = '';

@Injectable({
  providedIn: 'root'
})
export class Store {
  set(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  get(key: string): string {
    const value = localStorage.getItem(key);
    return value ? value : DEFAULT_VALUE;
  }

  has(key: string): boolean {
    return localStorage.getItem(key) !== null;
  }

  remove(key: string): void {
    localStorage.removeItem(key);
  }

  removeAll(): void {
    localStorage.clear();
  }
}
